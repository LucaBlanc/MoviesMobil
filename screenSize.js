import ExtraDimensions from 'react-native-extra-dimensions-android';
import {Dimensions} from 'react-native';

export function getNavbarBottomSize() {
  return ExtraDimensions.getSoftMenuBarHeight() + ExtraDimensions.getStatusBarHeight();
}

export function getScreenHeight() {
  return ExtraDimensions.getRealWindowHeight();
}

export function getScreenWidth() {
  return Dimensions.get("window").width;
}