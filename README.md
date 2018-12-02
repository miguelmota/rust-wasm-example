# Rust WASM Example

> Example on compiling a [Rust](https://www.rust-lang.org) library into [WebAssembly](https://webassembly.org/)

## Instructions

Install `wasm-pack`:

```bash
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Clone this repo:

```bash
git clone https://github.com/miguelmota/rust-wasm-example

cd rust-wasm-example/
```

The example library exposes a `fib` function which calculates the [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number) of the given number:

```rust
#[no_mangle]
pub extern "C" fn fib(n: i32) -> i32 {
    if n == 1 || n == 2 {
        1
    } else {
        fib(n - 1) + fib(n - 2)
    }
}
```

Build WASM:

```bash
wasm-pack build
```

Output location:

```bash
./target/wasm32-unknown-unknown/release/rust_wasm_example.wasm
```

You can now use the compiled wasm in your program. In this example, well load it as a [Node.js](https://nodejs.org/en/) module:

```js
const fs = require('fs')
const path = require('path')

const buf = fs.readFileSync(path.resolve(__dirname, '../target/wasm32-unknown-unknown/release/rust_wasm_example.wasm'))

const lib = (await WebAssembly.instantiate(new Uint8Array(buf))).instance.exports

console.log(lib.fib(10)) // 55
```

## License

[MIT](LICENSE)
