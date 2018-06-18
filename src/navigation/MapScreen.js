import React, { PureComponent } from "react";
import { Logo } from './IconNav'

import { Color, Styles } from '@common'
import { Map } from "@containers";

export default class MapScreen extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Logo(),
        headerTintColor: Color.headerTintColor,
        headerStyle: Styles.Common.toolbar,
        headerTitleStyle: Styles.Common.headerStyle,
    })

    render() {
        return (
            <Map />
        )
    }
}