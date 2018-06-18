import React, { PureComponent } from "react";
import { Logo } from './IconNav'

import { Color, Styles } from '@common'
import { Charts } from "@containers";

export default class ChartScreen extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: Logo(),
        headerTintColor: Color.headerTintColor,
        headerStyle: Styles.Common.toolbar,
        headerTitleStyle: Styles.Common.headerStyle,
    })

    render() {
        return (
            <Charts />
        )
    }
}