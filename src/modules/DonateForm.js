class DonateForm {
  #form;
  constructor() {
    this.#form = document.createElement("form");
    this.#form.className = "donate-form";
    this.#form.innerHTML = `
            <h1 id="total-amount">28$</h1>
            <label class="donate-form__input-label"> 
                Введите сумму в $
                <input class="donate-form__donate-input" name="amount" type="number" max="100" min="0" required="">
            </label>
            <button class="donate-form__submit-button" type="submit"> 
                Задонатить 
            </button> 
        `;
  }
  get createForm() {
    return this.#form;
  }
}

export default DonateForm;
