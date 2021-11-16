import set from "@/core/constants/settings.js";

class DonateForm {
  #form;
  #createNewDonate;
  #totalAmount;

  constructor(totalAmount, createNewDonate) {
    this.#createNewDonate = createNewDonate;
    this.#totalAmount = totalAmount;
  }

  #handleSubmit(event) {
    {
      event.preventDefault();

      let donateInput = event.target.amount.value;
      const donateValue = Number(donateInput);
      const donate = {
        date: new Date(),
        amount: donateValue,
      };
      donateInput = "";

      this.#createNewDonate(donate);
    }
  }

  updateTotalAmount(newAmount) {
    const totalAmountHTML = document.querySelector("#total-amount");
    totalAmountHTML.textContent = `${newAmount}`;
  }

  render() {
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
    return this.#form;
  }
}

export default DonateForm;
