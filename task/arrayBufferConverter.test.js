import { ArrayBufferConverter, getBuffer } from "./ArrayBufferConverter";

describe("ArrayBufferConverter Tests", () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test("Should convert ArrayBuffer to string", () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toBe(
      '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    );
  });

  test("Should throw error when no buffer is loaded", () => {
    expect(() => converter.toString()).toThrow(
      "Buffer is empty. Load data first."
    );
  });
});
