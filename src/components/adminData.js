function loadAdmin() {
    return fetch('https://63042b39761a3bce77e3b4d7.mockapi.io/admin')
    .then((response) => response.json())
    .then((results) => results)
    .catch((err) => {
        console.log(err)
    })
}

export default loadAdmin;