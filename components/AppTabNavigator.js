import React from "react"
import {createBottomTabNavigator} from "react-navigation-tabs"
import ExchangeScreen from "../screens/ExchangeScreen"
import WelcomeScreen from "../screens/WelcomeScreen"

export const AppTabNavigator = createBottomTabNavigator({
    ExchangeScreen:{
        screen: ExchangeScreen,
        navigationOptions:{
            tabBarLabel:"Exchange Screen"
        }

    },
    WelcomeScreen:{
        screen: WelcomeScreen,
       navigationOptions:{
           tabBarLabel:"WlcomeScreen"
       }
    }
})