import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const MessageIcon = ({height, width, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2 22.5778V4.05778C2 3.49189 2.19583 3.00745 2.5875 2.60447C2.97917 2.20149 3.45 2 4 2H20C20.55 2 21.0208 2.20149 21.4125 2.60447C21.8042 3.00745 22 3.49189 22 4.05778V16.4044C22 16.9703 21.8042 17.4548 21.4125 17.8577C21.0208 18.2607 20.55 18.4622 20 18.4622H6L2 22.5778Z"
        fill={color}
      />
    </Svg>
  );
};
