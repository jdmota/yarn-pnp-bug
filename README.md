# Bug

- `node --version`

```
v12.11.1
```

- `yarn --version`

```
2.0.0-rc.12
```

## Using fast-glob

### With yarn and PnP

- `yarn node index`

```
TypeError: Cannot read property 'code' of undefined
    at Object.isEnoentCodeError (\.yarn\cache\fast-glob-npm-3.1.0-e27d28ad47-1.zip\node_modules\fast-glob\out\utils\errno.js:4:18)
    at ErrorFilter._isNonFatalError (\.yarn\cache\fast-glob-npm-3.1.0-e27d28ad47-1.zip\node_modules\fast-glob\out\providers\filters\error.js:12:28)
    at Object.errorFilter (\.yarn\cache\fast-glob-npm-3.1.0-e27d28ad47-1.zip\node_modules\fast-glob\out\providers\filters\error.js:9:32)
    at \.yarn\cache\fast-glob-npm-3.1.0-e27d28ad47-1.zip\node_modules\fast-glob\out\readers\stream.js:41:25
(node:44088) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'code' of undefined
    at Object.isEnoentCodeError (\.yarn\cache\fast-glob-npm-3.1.0-e27d28ad47-1.zip\node_modules\fast-glob\out\utils\errno.js:4:18)
    at ErrorFilter._isNonFatalError (\.yarn\cache\fast-glob-npm-3.1.0-e27d28ad47-1.zip\node_modules\fast-glob\out\providers\filters\error.js:12:28)
    at Settings.errorFilter (\.yarn\cache\fast-glob-npm-3.1.0-e27d28ad47-1.zip\node_modules\fast-glob\out\providers\filters\error.js:9:32)
    at Object.isFatalError (\.yarn\cache\@nodelib-fs.walk-npm-1.2.4-1ae6c97d00-1.zip\node_modules\@nodelib\fs.walk\out\readers\common.js:7:22)
    at AsyncReader._handleError (\.yarn\cache\@nodelib-fs.walk-npm-1.2.4-1ae6c97d00-1.zip\node_modules\@nodelib\fs.walk\out\readers\async.js:67:21)
    at \.yarn\cache\@nodelib-fs.walk-npm-1.2.4-1ae6c97d00-1.zip\node_modules\@nodelib\fs.walk\out\readers\async.js:51:22
    at worked (\.yarn\cache\fastq-npm-1.6.0-b53b5275fa-1.zip\node_modules\fastq\queue.js:168:14)
    at \.yarn\cache\@nodelib-fs.walk-npm-1.2.4-1ae6c97d00-1.zip\node_modules\@nodelib\fs.walk\out\readers\async.js:58:24
    at callFailureCallback (\.yarn\cache\@nodelib-fs.scandir-npm-2.1.3-92e0b8f0d5-1.zip\node_modules\@nodelib\fs.scandir\out\providers\async.js:86:5)
    at \.yarn\cache\@nodelib-fs.scandir-npm-2.1.3-92e0b8f0d5-1.zip\node_modules\@nodelib\fs.scandir\out\providers\async.js:17:20
```

### With node

- `node index`

```
[
  '.editorconfig',
  'index.js',
  'node_modules/braces/index.js',
  'node_modules/fill-range/index.js',
  'node_modules/glob-parent/index.js',
  'node_modules/is-extglob/index.js',
  'node_modules/is-glob/index.js',
  'node_modules/is-number/index.js',
  'node_modules/merge2/index.js',
  'node_modules/micromatch/index.js',
  'node_modules/picomatch/index.js',
  'node_modules/run-parallel/index.js',
  'node_modules/to-regex-range/index.js',
  'node_modules/fast-glob/out/index.js',
  'node_modules/@nodelib/fs.scandir/out/index.js',
  'node_modules/@nodelib/fs.stat/out/index.js',
  'node_modules/@nodelib/fs.walk/out/index.js',
  'node_modules/fast-glob/out/utils/index.js',
  'node_modules/@nodelib/fs.scandir/out/types/index.js',
  'node_modules/@nodelib/fs.scandir/out/utils/index.js',
  'node_modules/@nodelib/fs.stat/out/types/index.js',
  'node_modules/@nodelib/fs.walk/out/providers/index.js',
  'node_modules/@nodelib/fs.walk/out/types/index.js',
  'node_modules/fast-glob/out/types/index.js'
]
```

### Using @nodelib/fs.stat

### With yarn and PnP

- `yarn node nodelib-fsstat`

```
undefined undefined
```

### With node

- `node nodelib-fsstat`

```
null Stats {
  dev: 4004471169,
  mode: 33206,
  nlink: 5,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 562949955099677,
  size: 203,
  blocks: 0,
  atimeMs: 1573502294980.112,
  mtimeMs: 1573502294980.112,
  ctimeMs: 1573504373924.9873,
  birthtimeMs: 1573500762274.763,
  atime: 2019-11-11T19:58:14.980Z,
  mtime: 2019-11-11T19:58:14.980Z,
  ctime: 2019-11-11T20:32:53.925Z,
  birthtime: 2019-11-11T19:32:42.275Z
}
```

### Using fs

### With yarn and PnP

- `yarn node fsstat`

```
undefined Stats {
  dev: 4004471169,
  mode: 33206,
  nlink: 5,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 562949955099677,
  size: 203,
  blocks: 0,
  atimeMs: 1573502294980.112,
  mtimeMs: 1573502294980.112,
  ctimeMs: 1573504373924.9873,
  birthtimeMs: 1573500762274.763,
  atime: 2019-11-11T19:58:14.980Z,
  mtime: 2019-11-11T19:58:14.980Z,
  ctime: 2019-11-11T20:32:53.925Z,
  birthtime: 2019-11-11T19:32:42.275Z
}
```

### With node

- `node fsstat`

```
null Stats {
  dev: 4004471169,
  mode: 33206,
  nlink: 5,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 562949955099677,
  size: 203,
  blocks: 0,
  atimeMs: 1573502294980.112,
  mtimeMs: 1573502294980.112,
  ctimeMs: 1573504373924.9873,
  birthtimeMs: 1573500762274.763,
  atime: 2019-11-11T19:58:14.980Z,
  mtime: 2019-11-11T19:58:14.980Z,
  ctime: 2019-11-11T20:32:53.925Z,
  birthtime: 2019-11-11T19:32:42.275Z
}
```

### Explanation

Notice the different between `undefined` and `null`. `@nodelib/fs.stat` expects an error or exactly `null`, never `undefined`. When it gets `undefined`, it things it is an error, calling `callFailureCallback`. And by propagating `undefined`, we get `Cannot read property 'code' of undefined` on `fast-glob`.

```js
// https://github.com/nodelib/nodelib/blob/master/packages/fs/fs.stat/src/providers/async.ts
settings.fs.stat(path, (statError, stat) => {
  if (statError !== null) {
    if (settings.throwErrorOnBrokenSymbolicLink) {
      return callFailureCallback(callback, statError);
    }

    return callSuccessCallback(callback, lstat);
  }
// ...
```
