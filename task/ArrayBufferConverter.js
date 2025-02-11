class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    if (this.buffer === null) {
      throw new Error("Buffer is empty. Load data first.");
    }

    const uint16Array = new Uint16Array(this.buffer);
    let str = "";
    for (let i = 0; i < uint16Array.length; i++) {
      str += String.fromCharCode(uint16Array[i]);
    }
    return str;
  }
}

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }
  return buffer;
}

module.exports = { ArrayBufferConverter, getBuffer };
