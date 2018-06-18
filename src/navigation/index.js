'use strict'

import { Color, Images } from '@common'
import { TabBar, TabBarIcon } from '@components'
import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';

import CameraScreen from './CameraScreen'
import ChartScreen from './ChartScreen'
import BlogScreen from './BlogScreen'
import MapScreen from './MapScreen'

const CameraStack = StackNavigator({
    Camera: { screen: CameraScreen },
})

const ChartStack = StackNavigator({
    Chart: { screen: ChartScreen },
})

const BlogStack = StackNavigator({
    Blog: { screen: BlogScreen },
})

const MapStack = StackNavigator({
    Map: { screen: MapScreen },
})


const AppNavigator = TabNavigator({
    Default: {
        screen: CameraStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <TabBarIcon icon={Images.IconCamera} tintColor={tintColor} />

        }
    },
    ChartScreen: {
        screen: ChartStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <TabBarIcon icon={Images.IconChart} tintColor={tintColor} />
        }
    },
    BlogScreen: {
        screen: BlogStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <TabBarIcon icon={Images.IconBlog} tintColor={tintColor} />
        }
    },
    MapScreen: {
        screen: MapStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <TabBarIcon icon={Images.IconMap} tintColor={tintColor} />
        }
    }
},
    {
        tabBarComponent: TabBar,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: Color.tabbarTint,
            inactiveTintColor: Color.tabbarColor,
        },
        lazy: true
    }
)

export default AppNavigator;