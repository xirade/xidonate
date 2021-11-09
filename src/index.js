import "./styles.css";
import DonateForm from "./modules/DonateForm";
import App from "./modules/App";

const donateForm = new DonateForm()
const app = new App(donateForm.createForm);
app.run();
