# Rust WASM Example

> Example on compiling a [Rust](https://www.rust-lang.org) library into [WebAssembly](https://webassembly.org/)

## Instructions

Install `wasm-pack`

```bash
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Clone this repo

```bash
git clone https://github.com/miguelmota/rust-wasm-example

cd rust-wasm-example/
```

Build WASM

```bash
wasm-pack build
```

Output

```
./target/wasm32-unknown-unknown/release/rust_wasm_example.wasm
```

## License

[MIT](LICENSE)
