import DonateList from "./DonateList";
import DonateForm from "./DonateForm";

class App {
  #state;
  constructor(donates = [], totalAmount = 0) {
    this.#state = {
      donates: donates,
      totalAmount: totalAmount,
    };
    this.list = new DonateList(this.#state.donates);
    this.form = new DonateForm(
      this.#state.totalAmount,
      this.createNewDonate.bind(this)
    );
  }

  scrollDownDonates() {
    const donateContainer = document.querySelector(".donates-container");
    donateContainer.scroll({
      top: donateContainer.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  createNewDonate(newDonate) {
    this.#state.donates.push(newDonate);
    const input = document.querySelector('[name="amount"]');
    this.#state.totalAmount = input.value;

    this.list.updateDonate(newDonate);
    this.form.updateTotalAmount(input.value);
    this.scrollDownDonates()
  }

  run() {
    const list = [
      this.form.createForm,
      this.list.updateDonates(this.#state.donates),
    ];
    document.body.append(...list);
  }
}

export default App;
