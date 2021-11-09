class App {
  #blocks;
  constructor(blocks) {
    this.#blocks = blocks;
  }
  run() {
    console.log(this.#blocks)
    this.#blocks.forEach((block) => {
      document.body.append(block);
    });
  }
}

export default App;
