import React from "react";
import { Image } from 'react-native';
import { Styles, Images } from '@common'
// Icons for HeaderBar
const Logo = () => <Image source={Images.LogoImage} style={Styles.Common.logo} />
export { Logo }