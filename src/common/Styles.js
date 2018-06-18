import { Dimensions, Platform } from 'react-native';
import Device from './Device'
import Color from './Color';
import Config from './Config';

let Styles = {
    app: {
        flexGrow: 1,
        backgroundColor: "#FFF",
        paddingTop: Device.ToolbarHeight,
    },
    FontSize: {
        tiny: 12,
        small: 14,
        medium: 16,
        big: 18,
        large: 20,
    }
};

Styles.Common = {
    logo: {
        width: Platform.OS === 'ios' ? 280 : 300,
        height: Platform.OS === 'ios' ? 40 : 40,
        resizeMode: "contain",
        ...Platform.select({
            ios: {
                marginTop: Device.isIphoneX ? -40 : Config.showStatusBar ? -4 : -15,
            },
            android: {
                marginTop: 2,
                marginLeft: 10
            }
        })
    },

    toolbar: {
        backgroundColor: Color.navigationBarColor,
        zIndex: 1,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        ...Platform.select({
            ios: {
                height: Config.showStatusBar ? (Device.isIphoneX ? 5 : 40) : (Device.isIphoneX ? 5 : 25),
            },
            android: {
                height: 46,
                paddingTop: 0,
                marginTop: 0,
            }
        })
    },

};

export default Styles;
