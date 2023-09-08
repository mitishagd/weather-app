import React from 'react';
import styled from 'styled-components'

import { TEMPERATURE_SCALE } from '../pages/WeatherApp';


const Styled = {
  Root: styled.div`
    text-align: center;
  `,
  City: styled.div``,
  WeatherIcon: styled.div``,
  Temperature: styled.div``,
  Description: styled.div`
    text-transform: capitalize;
  `,
}

type Props = {
    city: string
    weatherIconUrl: string
    temperature: number
    temperatureScale: TEMPERATURE_SCALE
    description: string
}

const WeatherDetails = (props: Props): JSX.Element => {
    const {city, weatherIconUrl, temperature, temperatureScale, description} = props
  return (
    <Styled.Root >
        <Styled.City>{city}</Styled.City>
        <Styled.WeatherIcon><img src={weatherIconUrl} alt="weatherIcon" /></Styled.WeatherIcon>
        <Styled.Temperature>{temperature} &nbsp; °{temperatureScale}</Styled.Temperature>
        <Styled.Description>{description}</Styled.Description>
    </Styled.Root>
  )
}

export default WeatherDetails;