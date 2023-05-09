import { NavigationContainer } from "@react-navigation/native"
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "../screens/HomeScreen";
import { ExercisesScreen } from "../screens/ExercisesScreen";
import { ExerciseTab } from "./ExerciseTabs";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
export const StackNavigation = () => {

    const Stack = createStackNavigator();
    return (
        < Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}>
            <Stack.Screen name="LoginScreen" options={{ title: "Login" }} component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" options={{ title: "Register" }} component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" options={{ title: "Home" }} component={HomeScreen} />
            <Stack.Screen name="ExercisesScreen" options={{ title: "Ejercicios" }} component={ExercisesScreen} />
            <Stack.Screen name="ExerciseTab" options={{ title: "Ejercicio" }} component={ExerciseTab} />
        </Stack.Navigator >
    );
}