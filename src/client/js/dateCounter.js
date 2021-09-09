import { today } from "./today";

function dateCounter(dateInput) {

    let date1 = new Date(dateInput.replace(/\-/g, '/'));
    let date2 = new Date(today().replace(/\-/g, '/'));
    // calculates from milliseconds to days
    const difference = (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24).toFixed(0);

    if (difference > 1) {
        return `Is ${difference} Days Away!`
    } else if (difference === 1) {
        return `Is ${difference} Day Away!`
    } else if (difference === 0) {
        return `Be Aware Is Today!`
    } else {
        return `The Date Has Expired`
    }
}

export { dateCounter }
