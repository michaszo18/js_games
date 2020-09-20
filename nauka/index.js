const fetch = require('node-fetch')

const baseURL = 'https://api.punkapi.com/v2/beers/'

const getBeer = async (id) => {
    try {
        const response = await fetch(`${baseURL}${id}`)
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error);
    }
}

getBeer(100).then((data) => {
    const[beer] = data
    const {name,description} = beer
    const beerDesc = `${name} is ${description}`
    console.log(beerDesc);
})