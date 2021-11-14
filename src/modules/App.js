import DonateList from "./DonateList";
import DonateForm from "./DonateForm";
import * as utils from "@/core/utils/utils";

class App {
  #state;
  #list;
  #form;
  constructor(donates = [], totalAmount = 0) {
    this.#state = {
      donates: donates,
      totalAmount: totalAmount,
    };
    this.#state.totalAmount = utils.calculateSumOfNumbers(donates);
    this.#formattedDonates();
    this.#list = new DonateList(this.#state.donates);
    this.#form = new DonateForm(
      this.#state.totalAmount,
      this.createNewDonate.bind(this)
    );
  }

  // SMOOTH SCROLLING BAR
  #scrollDownDonates() {
    const donateContainer = document.querySelector(".donates-container");
    donateContainer.scroll({
      top: donateContainer.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  // FORMATE DATE OF DONATES STATE
  #formattedDonates() {
    if (this.#state.donates.length) {
      this.#state.donates.forEach(
        (donate) => (donate.date = utils.getFormattedTime(donate.date))
      );
    }
  }

  createNewDonate(newDonate) {
    newDonate.date = utils.getFormattedTime(newDonate.date);
    this.#state.donates.push(newDonate);
    this.#state.totalAmount += newDonate.amount;

    this.#list.updateDonate(newDonate);
    this.#form.updateTotalAmount(this.#state.totalAmount);
    this.#scrollDownDonates();
  }

  run() {
    document.body.append(
      this.#form.render(),
      this.#list.updateDonates(this.#state.donates)
    );
  }
}

export default App;
