# Rust WASM Example

> Example on compiling a Rust library into WebAssembly

## Instructions

Install `wasm-pack`

```bash
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Build wasm

```bash
wasm-pack build
```

Output

```
./target/wasm32-unknown-unknown/release/rust_wasm_example.wasm
```

## License

[MIT](LICENSE)
