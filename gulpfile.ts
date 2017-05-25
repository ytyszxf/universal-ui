import { task } from 'gulp';
const path = require('path');
import * as gulp from 'gulp';
const gulpClean = require('gulp-clean');
const embedTemplates = require('gulp-angular-embed-templates');
const resolveBin = require('resolve-bin');
import * as child_process from 'child_process';

const DIST_ROOT = path([__dirname, 'dist']);
const STAGE_ROOT = path([__dirname, 'staging']);
const SRC_ROOT = path([__dirname, 'src']);
const tsConfigPath = path([__dirname, 'tsconfig.prod.json']);

task(':ts:stage', function () {
    return gulp.src(path([SRC_ROOT, '**/*.ts'])) // also can use *.js files 
        .pipe(embedTemplates({sourceType:'ts'}))
        .pipe(gulp.dest(STAGE_ROOT));
});

task('clean', [':clean:dist', ':clean:stage']);

task('ts:build', ['clean', ':ts:stage', ':ts:build']);

task(':clean:dist', cleanTask(DIST_ROOT));
task(':clean:stage', cleanTask(STAGE_ROOT));
task(':ts:build', function () {
    return execNodeTask('typescript', 'tsc', ['-p', tsConfigPath]);
});


/** Delete files. */
export function cleanTask(glob: string) {
  return () => gulp.src(glob, { read: false }).pipe(gulpClean(null));
}

/** Options that can be passed to execTask or execNodeTask. */
export interface ExecTaskOptions {
  // Whether to output to STDERR and STDOUT.
  silent?: boolean;
  // If an error happens, this will replace the standard error.
  errMessage?: string;
}

function execNodeTask(packageName: string, executable: string | string[], args?: string[],
                             options: ExecTaskOptions = {}) {
  if (!args) {
    args = <string[]>executable;
    executable = undefined;
  }

  return (done: (err: any) => void) => {
    resolveBin(packageName, { executable: executable }, (err: any, binPath: string) => {
      if (err) {
        done(err);
      } else {
        // Execute the node binary within a new child process using spawn.
        // The binary needs to be `node` because on Windows the shell cannot determine the correct
        // interpreter from the shebang.
        execTask('node', [binPath].concat(args), options)(done);
      }
    });
  };
}

function execTask(binPath: string, args: string[], options: ExecTaskOptions = {}) {
  return (done: (err?: string) => void) => {
    const childProcess = child_process.spawn(binPath, args);

    if (!options.silent) {
      childProcess.stdout.on('data', (data: string) => {
        process.stdout.write(data);
      });

      childProcess.stderr.on('data', (data: string) => {
        process.stderr.write(data);
      });
    }

    childProcess.on('close', (code: number) => {
      if (code != 0) {
        if (options.errMessage === undefined) {
          done('Process failed with code ' + code);
        } else {
          done(options.errMessage);
        }
      } else {
        done();
      }
    });
  };
}