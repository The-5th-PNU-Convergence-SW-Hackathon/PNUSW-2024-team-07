import {Circle, Path, Rect, Svg} from 'react-native-svg';

export const LogoIcon = () => {
  return (
    <Svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="16.2722"
        y="11.4502"
        width="21.2208"
        height="7.39374"
        rx="3.69687"
        transform="rotate(90 16.2722 11.4502)"
        fill="#FFBE00"
      />
      <Rect
        x="8.87842"
        y="11.3389"
        width="21.4988"
        height="7.39374"
        rx="3.69687"
        fill="#4D83F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.87842 15.0683L8.87842 15.0573C8.87842 13.0237 10.5203 11.3736 12.5507 11.3604C12.554 11.3604 12.5572 11.3604 12.5604 11.3604H12.5981C14.6294 11.3725 16.2724 13.023 16.2724 15.0573V18.7244H12.5604C10.5355 18.7244 8.89233 17.0899 8.87842 15.0683Z"
        fill="#6090F3"
      />
      <Circle cx="12.5753" cy="6.68611" r="3.68611" fill="#FFBE00" />
      <Circle cx="26.6911" cy="6.68611" r="3.68611" fill="#4D83F4" />
    </Svg>
  );
};
