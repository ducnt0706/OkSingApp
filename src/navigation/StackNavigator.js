import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../containers";

const HomeStack=createStackNavigator();
const UserStack=createStackNavigator();
const SongAddingStack=createStackNavigator();

export const HomeStackScreen=({navigation})=>{
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen component={HomeScreen} name={'Home'}/>
        </HomeStack.Navigator>
    )
}