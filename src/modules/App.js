class App {
  #block;
  constructor(block) {
    this.#block = block;
  }
  run() {
    document.body.append(this.#block);
  }
}

export default App;
