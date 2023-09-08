const API_KEY = 'ee52e1deb80a30cf74112f1c3c8fcc42'

export const getWeatherData = async (city: string) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    try {
        const data = await fetch(URL).then((res) => res.json()).then((data) => data)

        const {weather, main: {temp, feels_like, temp_min, temp_max}, name} = data
        const {main, description, icon} = weather[0]

        console.log({
            name, temp, description, main, icon, feels_like, temp_max, temp_min
        })

        return {
            name, temp, description, main, icon, feels_like, temp_max, temp_min
        }
    } catch (error) {
        if (error) {
            console.log("erro ", error)
        } else {
            console.log("something went wrong")
        }
        return null
    }
    
}