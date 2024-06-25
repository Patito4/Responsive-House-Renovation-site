import { currentYear } from "./app.js";

const displayCurrentYear = () => {
    setInterval(()=> {
        const actualCurrentYear = new Date().getFullYear();

        currentYear.textContent = actualCurrentYear;
    }, 1000);
};

export default displayCurrentYear;