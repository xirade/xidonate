class DonateList {
  #donates;
  #container;

  constructor(donates) {
    this.#donates = donates;

    this.#container = document.createElement("div");
    this.#container.className = "donates-container";
    this.#container.innerHTML = `
            <h2 class="donates-container__title">Список донатов</h2> 
        `;
  }

  #createDonate(donate) {
    const item = document.createElement("div");
    item.className = "donate-item";
    item.innerHTML = `
        ${donate.date} - <b>${donate.amount}</b>
    `;
    return item;
  }
  render() {
    const div = document.createElement("div");
    div.className = "donates-container__donates";
    const listDonatesHTML = this.#donates.map((donate) =>
      this.#createDonate(donate)
    );
    div.append(...listDonatesHTML);
    this.#container.append(div);
    return this.#container;
  }
}

export default DonateList;
