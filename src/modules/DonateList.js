import { Settings as set } from "@/core/constants/settings.js";

class DonateList {
  #container;
  #divDonate;
  #donates;

  static #defaultText() {
    const span = document.createElement("span");
    span.className = "default-text";
    span.textContent = "Будь первым! Хорошие дела красят человека!";
    span.hidden = false;
    return span;
  }

  constructor(donates) {
    this.isHidden = false;
    this.#donates = donates;
    this.#container = document.createElement("div");
    this.#container.className = "donates-container";
    this.#container.innerHTML = `
            <h2 class="donates-container__title">Список донатов</h2> 
        `;
    this.#divDonate = document.createElement("div");
    this.#divDonate.className = "donates-container__donates";
    this.#divDonate.append(DonateList.#defaultText());
  }

  #createDonate(donate) {
    const item = document.createElement("div");
    item.className = "donate-item";
    item.innerHTML = `
     ${donate.date} - <b>${donate.amount}${set.currency}</b>
 `;
    return item;
  }

  updateDonate(updatedDonate) {
    this.#donates.push(updatedDonate);
    this.#divDonate.append(this.#createDonate(updatedDonate));
    this.#render(this.#divDonate);
  }

  updateDonates(updatedDonates) {
    const listDonatesHTML = updatedDonates.map((donate) =>
      this.#createDonate(donate)
    );
    this.#divDonate.append(...listDonatesHTML);
    return this.#render(this.#divDonate);
  }

  #render(div) {
    if (this.isHidden) {
      this.#divDonate.querySelector(".default-text").hidden = true;
    }
    this.isHidden = true;
    this.#container.append(div);
    return this.#container;
  }
}

export default DonateList;
