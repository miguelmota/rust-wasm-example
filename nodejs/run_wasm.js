const fs = require('fs')
const path = require('path')

const buf = fs.readFileSync(path.resolve(__dirname, '../target/wasm32-unknown-unknown/release/rust_wasm_example.wasm'))

async function main() {
  const lib = (await WebAssembly.instantiate(new Uint8Array(buf))).instance.exports

  console.log(lib.fib(10)) // 55
}

main()
