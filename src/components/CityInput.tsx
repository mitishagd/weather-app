import React from 'react';
import styled from 'styled-components'

import { TEMPERATURE_SCALE } from '../pages/WeatherApp';

const CommonStyle = `
    height: 32px;
    font-size: 16px;
    background: none;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    margin: 16px;   
`

const Styled = {
  Root: styled.div`
    text-align: center;
    padding: 30px;
  `,
  Input: styled.input`
    background: none;
    color: black;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    margin: 16px;
    height: 32px;
    font-size: 16px;
  `,
  TemperatureScale: styled.button`
    ${CommonStyle}
    background: white;
  `,
}

type Props = {
    onChangeCity: (cityName: string) => void;
}

const CityTemperatureInput = (props: Props): JSX.Element => {
  const [temperatureScale, setTemperatureScale] = React.useState(TEMPERATURE_SCALE.CELSIUS)
  const onChangeTemperatureScale = React.useCallback(() => {
    if(temperatureScale === TEMPERATURE_SCALE.CELSIUS) {
        setTemperatureScale(TEMPERATURE_SCALE.FAHRENHEIT)
    } else {
        setTemperatureScale(TEMPERATURE_SCALE.FAHRENHEIT)
    }
  }, [setTemperatureScale, temperatureScale])

  const [city, setCity] = React.useState("")
  const onChangeCity = (e:any) => {
    if(e.keyCode === 13) {
        setCity(e.currentTarget.value)
        props.onChangeCity(city)
    }
  }

  return (
    <Styled.Root>
        <Styled.Input placeholder='Enter City' onKeyDown={onChangeCity}/>
        <Styled.TemperatureScale onClick = {onChangeTemperatureScale}>°{temperatureScale}</Styled.TemperatureScale>
    </Styled.Root>
  )
}

export default CityTemperatureInput;