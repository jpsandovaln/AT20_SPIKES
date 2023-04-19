/*
* @app.js Copyright(c) 2023 Jalasoft
* 2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
* Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
* All rights reserved
* This software is the confidential and proprietary information of
* Jalasoft,ConfidentialInformation"). You shall not
* disclose such Confidential Information and shall use it only in
* accordance with the terms of the license agreement you entered into
* with Jalasoft
*/

import React, { useState } from 'react';
import IframeComponent from './swagger/iframeComponent';

/**
 * This is a React functional component that uses state to switch between different iframes based on a
 * button click event.
 */
const App = () => {
  const [currentIframe, setCurrentIframe] = useState('iframe1');

  const handleButtonClick = (event) => {
    const targetIframe = event.target.getAttribute('data-iframe');
    setCurrentIframe(targetIframe);
  };

  /* The `return` statement is returning a JSX element that contains a `div` with a `h1` tag and two
  buttons. When a button is clicked, it sets the `currentIframe` state to the corresponding iframe
  ID. Depending on the value of `currentIframe`, it renders one of two `IframeComponent` elements
  with different `src` and `id` props. */
  return (
    <div>
      <h1>Swagger</h1>
      <div>
        <button onClick={handleButtonClick} data-iframe="iframe1">Compiler Service</button>
        <button onClick={handleButtonClick} data-iframe="iframe2">Converter Service</button>
      </div>
      {currentIframe === 'iframe1' ?
        <IframeComponent src="http://localhost:9191/api-docs/" id="iframe1" /> :
        <IframeComponent src="http://localhost:9595/api-docs/" id="iframe2" />
      }
    </div>
  );
};

export default App;
