import ExtraDimensions from 'react-native-extra-dimensions-android';
import {Dimensions} from 'react-native';

export function getNavbarBottomSize() {
  return ExtraDimensions.getSoftMenuBarHeight() + ExtraDimensions.getStatusBarHeight();
}

export function getScreenHeight() {
  if(Platform.OS === 'ios'){
    return Dimensions.get('window').height
  }else{
    return ExtraDimensions.getRealWindowHeight() 
  }
}

export function getScreenWidth() {
  return Dimensions.get("window").width;
}