module.exports = {
  // sync methods
  addOneSync: 'sync',
  errorSync: 'sync',
  disallowedMethodSync: 'sync',

  // async methods
  addOne: 'async',
  getArrayBuffer: 'async',
  sendArrayBuffer: 'async',
  error: 'async',
  timeout: 'async',
  disallowedMethod: 'async',

  // promise methods
  addOnePromise: 'promise',
  getArrayBufferPromise: 'promise',
  sendArrayBufferPromise: 'promise',
  errorPromise: 'promise',
  customErrorPromise: 'promise',
  timeoutPromise: 'promise',

  // readable methods
  goodReadable: 'readable',
  goodObjectmodeReadable: 'readable',
  goodReadablePromise: 'readable',
  goodAsyncReadable: 'readable',
  continuousReadable: 'readable',
  failingReadable: 'readable',
  failingReadablePromise: 'readable',
  noReadable: 'readable',
  exceptionReadable: 'readable',

  // writable methods
  goodWritable: 'writable',
  goodObjectmodeWritable: 'writable',
  failingWritable: 'writable',
  noWritable: 'writable',
  exceptionWritable: 'writable'
}