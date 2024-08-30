import React from 'react';
import {G, Mask, Path, Rect, Svg} from 'react-native-svg';

export default function SendIcon() {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Mask
        id="mask0_105_1433"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="25">
        <Rect y="0.0302734" width="24" height="24" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_105_1433)">
        <Path
          d="M3 20.0303V14.0303L11 12.0303L3 10.0303V4.03027L22 12.0303L3 20.0303Z"
          fill="#383838"
        />
      </G>
    </Svg>
  );
}
