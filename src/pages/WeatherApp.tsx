import React from 'react';
import styled from 'styled-components'

import CityTemperatureInput from '../components/CityInput';
import HotImage from '../assets/cold.jpg';

import WeatherDetails from '../components/WeatherDetails';
import * as weatherService from '../services/weather';

export enum TEMPERATURE_SCALE { CELSIUS = "C", FAHRENHEIT="F", KELVIN="K"}

const Styled = {
  Root: styled.div<{_backgroundImage: string}>`
    width: 100%;
    height: 100vh;
    background: url(${(props) => props._backgroundImage});
  `
}

const WeatherApp = (): JSX.Element => {

  const [weatherData, setWeatherData] = React.useState<any>(null)
  const [cityName, setCityName] = React.useState("Seattle")

  React.useEffect(() => {
    const fetchWeatherData = async () => {
      weatherService.getWeatherData(cityName).then(setWeatherData)
    }

    fetchWeatherData()
  }, [cityName])

  const city = weatherData?.name
  const temperature = weatherData?.temp
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData?.icon}.png`
  const description = weatherData?.description
  const temperatureScale = TEMPERATURE_SCALE.CELSIUS

  console.log("yoyoy", weatherData)

  const handleOnChangeCity = React.useCallback((cityName: any)=> {
    setCityName(cityName)
  }, [cityName, setCityName])

  return (
    <Styled.Root _backgroundImage={HotImage}>
        <CityTemperatureInput onChangeCity={handleOnChangeCity}/>
        { weatherData && <WeatherDetails city={city} weatherIconUrl={weatherIconUrl} temperature={temperature} temperatureScale={temperatureScale} description={description}/>}
    </Styled.Root>
  )
}

export default WeatherApp;