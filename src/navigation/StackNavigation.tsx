import { NavigationContainer } from "@react-navigation/native"
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "../screens/HomeScreen";
import { ExercisesScreen } from "../screens/ExercisesScreen";
import { ExerciseTab } from "./ExerciseTabs";
import { StatsScreen } from "../screens/StatsScreen";
import { NewExerciseScreen } from "../screens/NewExerciseScreen";
export const StackNavigation = () => {

    const Stack = createStackNavigator();
    return (
        < Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}>
            <Stack.Screen name="HomeScreen" options={{ title: "Home" }} component={HomeScreen} />
            <Stack.Screen name="ExercisesScreen" options={{ title: "Ejercicios" }} component={ExercisesScreen} />
            <Stack.Screen name="StatsScreen" options={{ title: "Stats" }} component={StatsScreen} />
            <Stack.Screen name="NewExerciseScreen" options={{ title: "Exercises" }} component={NewExerciseScreen} />
            <Stack.Screen name="ExerciseTab" options={{ title: "Ejercicio" }} component={ExerciseTab} />
        </Stack.Navigator >
    );
}