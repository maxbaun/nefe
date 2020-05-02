import {config, dom} from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import React from 'react';
import {createGlobalStyle} from 'styled-components';

config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link
          rel="stylesheet"
          href="http://fonts.googleapis.com/css?family=Oswald:400,400italic,500,500italic,700,700italic&subset=latin,latin-ext"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <GlobalStyles />
        <div key={'body'} id="___gatsby" dangerouslySetInnerHTML={{__html: props.body}} />
        {props.postBodyComponents}
        <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.7/holder.js" type="text/javascript"></script>
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
