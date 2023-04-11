/*
* @audio_converter_controller.js Copyright(c) 2023 Jalasoft
* 2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
* Av.General Inofuentes esquina Calle20, Edificio Union No1376, La Paz, Bolivia
* All rights reserved
* This software is the confidential and proprietary information of
* Jalasoft,ConfidentialInformation"). You shall not
* disclose such Confidential Information and shall use it only in
* accordance with the terms of the license agreement you entered into
* with Jalasoft
*/

import React from 'react';

/* The IframeComponent class is a React component that renders an iframe with a specified source and
ID. */
class IframeComponent extends React.Component {
  render() {
    const { src, id } = this.props;
    return (
        <iframe src={src} id={id} style={{ width: '100%', height: '100vh', border: 'none' }}></iframe>
  );
  }
}

export default IframeComponent;