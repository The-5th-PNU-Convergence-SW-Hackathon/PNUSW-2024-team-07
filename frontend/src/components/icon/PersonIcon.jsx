import React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

export const PersonIcon = ({height, width, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Ellipse cx="12.5" cy="5.90943" rx="4.67402" ry="4.90943" fill={color} />
      <Path
        d="M23 22.8455H2C4.20208 14.5592 9.17525 12.8627 12.2667 12.8204C19.2229 12.7254 21.8917 18.7415 23 22.8455Z"
        fill={color}
      />
    </Svg>
  );
};
