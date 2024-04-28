export function fetchAndDisplayStreamedData_textarea62778(url,data,state) {
    state.textarea62778 = ''

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body.getReader();

        function processStream({ done, value }) {
            if (done) {
                return;
            }

            // const preElement = document.getElementById(element_id);
            // preElement.textContent += new TextDecoder().decode(value);
            console.log(new TextDecoder().decode(value))

            state.textarea62778 += new TextDecoder().decode(value);

            return reader.read().then(processStream);
        }

        return reader.read().then(processStream);
    }).catch(error => {
        console.error('Error:', error);
    });
}
// export const fetchAndDisplayStreamedData_textarea62778 = (url,data,state) =>fetchAndDisplayStreamedData_textarea62778_0(url,data,state)

export function fetchAndDisplayStreamedData_textarea95634(url,data,state) {
    state.textarea95634 = ''

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body.getReader();

        function processStream({ done, value }) {
            if (done) {
                return;
            }

            // const preElement = document.getElementById(element_id);
            // preElement.textContent += new TextDecoder().decode(value);
            console.log(new TextDecoder().decode(value))

            state.textarea95634 += new TextDecoder().decode(value);

            return reader.read().then(processStream);
        }

        return reader.read().then(processStream);
    }).catch(error => {
        console.error('Error:', error);
    });
}
export function fetchAndDisplayStreamedData_textarea956341(url,data,state) {
    state.textarea956341 = ''

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body.getReader();

        function processStream({ done, value }) {
            if (done) {
                return;
            }

            // const preElement = document.getElementById(element_id);
            // preElement.textContent += new TextDecoder().decode(value);
            console.log(new TextDecoder().decode(value))

            state.textarea956341 += new TextDecoder().decode(value);

            return reader.read().then(processStream);
        }

        return reader.read().then(processStream);
    }).catch(error => {
        console.error('Error:', error);
    });
}
export function fetchAndDisplayStreamedData_textarea956342(url,data,state) {
    state.textarea956342 = ''

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body.getReader();

        function processStream({ done, value }) {
            if (done) {
                return;
            }

            // const preElement = document.getElementById(element_id);
            // preElement.textContent += new TextDecoder().decode(value);
            console.log(new TextDecoder().decode(value))

            state.textarea956342 += new TextDecoder().decode(value);

            return reader.read().then(processStream);
        }

        return reader.read().then(processStream);
    }).catch(error => {
        console.error('Error:', error);
    });
}
// export const fetchAndDisplayStreamedData_textarea95634 = (url,data,state) =>fetchAndDisplayStreamedData_textarea95634_0(url,data,state)


export function fetchAndDisplayStreamedData_richeditor80383(url,data,state) {
    state.richeditor80383 = ''

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body.getReader();

        function processStream({ done, value }) {
            if (done) {
                return;
            }

            // const preElement = document.getElementById(element_id);
            // preElement.textContent += new TextDecoder().decode(value);
            console.log(new TextDecoder().decode(value))

            state.richeditor80383 += new TextDecoder().decode(value);

            return reader.read().then(processStream);
        }

        return reader.read().then(processStream);
    }).catch(error => {
        console.error('Error:', error);
    });
}