import React from 'react';
import {Circle, Defs, LinearGradient, Path, Stop, Svg} from 'react-native-svg';

export default function AiIcon() {
  return (
    <Svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle
        cx="11"
        cy="11.7471"
        r="10.5"
        fill="url(#paint0_linear_105_1428)"
        stroke="#6396FF"
      />
      <Path
        d="M10.0628 7.41187L13.3508 16.2679H11.9948L11.1068 13.8559H7.47081L6.54681 16.2679H5.19081L8.53881 7.41187H10.0628ZM7.87881 12.7519H10.6868L9.30681 9.01987L7.87881 12.7519ZM14.9576 7.41187H16.2296V16.2679H14.9576V7.41187Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_105_1428"
          x1="4.47161"
          y1="20.08"
          x2="17.4631"
          y2="3.36341"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.135" stopColor="#4D83F4" />
          <Stop offset="1" stopColor="#FFBE00" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
