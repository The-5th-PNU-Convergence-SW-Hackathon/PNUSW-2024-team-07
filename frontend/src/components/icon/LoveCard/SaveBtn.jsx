import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

export default function SaveBtn() {
  return (
    <Svg
      width="38"
      height="39"
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="19" cy="19.75" r="19" fill="white" />
      <Path
        d="M20 9.75C20 9.19772 19.5523 8.75 19 8.75C18.4477 8.75 18 9.19772 18 9.75L20 9.75ZM18.2929 25.0658C18.6834 25.4563 19.3166 25.4563 19.7071 25.0658L26.0711 18.7018C26.4616 18.3113 26.4616 17.6782 26.0711 17.2876C25.6805 16.8971 25.0474 16.8971 24.6569 17.2876L19 22.9445L13.3431 17.2876C12.9526 16.8971 12.3195 16.8971 11.9289 17.2876C11.5384 17.6782 11.5384 18.3113 11.9289 18.7018L18.2929 25.0658ZM18 9.75L18 24.3587L20 24.3587L20 9.75L18 9.75Z"
        fill="#B3B3B3"
      />
      <Path
        d="M10 29.75H28"
        stroke="#B3B3B3"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
}
