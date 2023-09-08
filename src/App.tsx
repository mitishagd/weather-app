import React from 'react';
import styled from 'styled-components'

import WeatherApp from './pages/WeatherApp';

const Styled = {
  AppContainer: styled.div`
    font-weight: bold;

  `
}

const App = () => {
  return (
    <Styled.AppContainer>
      <title>Weather</title>
      <WeatherApp />
    </Styled.AppContainer>
  )
}

export default App;
