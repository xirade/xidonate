import "@/styles.css";
import App from "@/modules/App";

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
  ];

const app = new App(mockDonates);
app.run();
