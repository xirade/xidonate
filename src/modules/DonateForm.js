import {Settings as set} from '@/core/constants/settings.js'

class DonateForm {
  #form;
  #createNewDonate;
  #totalAmount;

  constructor(totalAmount, createNewDonate) {
    this.#createNewDonate = createNewDonate;
    this.#totalAmount = totalAmount;
    this.#form = document.createElement("form");
    this.#form.className = "donate-form";
    this.#form.innerHTML = `
            <div class="total-container">
              <h2 id="total-amount">${this.#totalAmount}</h1>
              <img src="${set.coin}" alt="coin" />
            </div>
            <label for="amount" class="donate-form__input-label"> 
                Введите сумму в ${set.currency}
            </label>
            <input class="donate-form__donate-input" name="amount" type="number" max="100" min="0" required="">
            <button class="donate-form__submit-button" type="submit"> 
                Задонатить 
            </button> 
        `;

    this.#form.addEventListener("submit", (e) => this.#handleSubmit(e));
  }
  get createForm() {
    return this.#form;
  }

  #handleSubmit(event) {
    {
      event.preventDefault();

      const donateInput = this.#form.querySelector(
        ".donate-form__donate-input"
      );
      const donateValue = Number(donateInput.value);
      this.#totalAmount += donateValue;
      const donate = {
        date: new Date(),
        amount: donateValue,
      };
      donateInput.value = "";

      this.#createNewDonate(donate);
      this.updateTotalAmount(this.#totalAmount);
    }
  }

  updateTotalAmount(newAmount) {
    const totalAmountHTML = document.querySelector("#total-amount");
    totalAmountHTML.textContent = `${newAmount}`;
  }
}

export default DonateForm;
