function load() {
    return fetch('https://63042b39761a3bce77e3b4d7.mockapi.io/profile')
    .then((response) => response.json())
    .then((results) => results)
    .catch((err) => {
        console.log(err)
    })
}

export default load;