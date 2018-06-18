import React from 'react';
import { View, StatusBar } from 'react-native';
import { Config, Device, Styles, } from "@common";
import { MyToast, MyNetInfo } from "@containers";
import Navigation from "@navigation"
import { connect } from 'react-redux'

class Router extends React.PureComponent {
    render() {
        return (
            <View style={Styles.app}>
                <StatusBar
                    hidden={Device.isIphoneX ? false :
                        !Config.showStatusBar}
                />
                <Navigation ref={'navigator'} />
                <MyToast />
                <MyNetInfo />
            </View>
        )
    }
}
export default connect(null)(Router)
