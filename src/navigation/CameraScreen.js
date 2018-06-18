import React, { PureComponent } from "react";
import { Logo } from './IconNav'

import { Color, Styles } from '@common'
import { Cameras } from "@containers";

export default class CameraScreen extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Logo(),
        headerTintColor: Color.headerTintColor,
        headerStyle: Styles.Common.toolbar,
        headerTitleStyle: Styles.Common.headerStyle,
    })

    render() {
        return (
            <Cameras />
        )
    }
}