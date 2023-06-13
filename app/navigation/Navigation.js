import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import ToDoCreate from "@screens/ToDoCreate";


export default function Navigation() {
    const Rootstack = createStackNavigator();

    return (
        <NavigationContainer>
            <Rootstack.Navigator mode="">
                <Rootstack.Screen
                    name="Home"
                    component={Home}
                    options={{ headershown: false }}
                />

                <Rootstack.Screen 
                name="ToDoCreate" 
                component={ToDoCreate} 
                options={{ headershown: false }}
                />

            </Rootstack.Navigator>
        </NavigationContainer>
    )
};