import { submitForm } from "./submit";
import { uiUpdater } from "./uiUpdater";

const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', e => {
    formValidator(e)
})

function formValidator(e) {
    e.preventDefault();
    const cityInput = document.getElementById('city').value;
    const dateInput = document.getElementById('date').value;

    const userInput = { city: cityInput, date: dateInput }

    cityInput === '' || dateInput === '' ? alert('Please enter a valid destination and a date!') : submitForm(userInput)
        .then(data => {
            /* response to  UI */
            uiUpdater(data)
        })

}

export { formValidator }
