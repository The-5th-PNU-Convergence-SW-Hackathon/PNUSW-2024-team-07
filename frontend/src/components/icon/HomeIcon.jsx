import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HomeIcon = ({height, width, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 22.6828V8.2276L12.5 1L22 8.2276V22.6828H14.875V14.2506H10.125V22.6828H3Z"
        fill={color}
      />
    </Svg>
  );
};
