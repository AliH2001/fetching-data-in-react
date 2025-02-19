const API_KEY = '54b9a4f3ea3243379b7101732251902'
const BASE_URL=`http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (formData) => {
    try {
        const queryString = `&q=${formData}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

export {
    show,
}