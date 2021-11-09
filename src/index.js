import "./styles.css";
import DonateForm from "./modules/DonateForm";
import DonateList from "./modules/DonateList";
import App from "./modules/App";

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
 ];

const donateForm = new DonateForm()
const donateList = new DonateList(mockDonates)
const app = new App([donateForm.createForm, donateList.render()]);
app.run();
