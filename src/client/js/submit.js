async function submitForm(input) {

    const response = await fetch('http://localhost:4000/destination', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(input)
    });

    return response.json()
}

export { submitForm }
