export function makeRequestToTheServer(method: 'POST' | 'GET', url: string, body?: object) {
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
    }).then(response => response.json());
}