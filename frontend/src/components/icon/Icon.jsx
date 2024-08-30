import icoMoonConfig from '../../../selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

//아이콘 컴포넌트
//<Icon name="아이콘폰트이름" size={} color="" />
const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  '../../../assets/fonts/icomoon.ttf',
);

export default Icon;
