import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons"
import { InfoScreen } from "../screens/InfoScreen";
import { ImagesScreen } from "../screens/ImagesScreen";
import { RutinScreen } from "../screens/RutinScreen";
import { ExerciseContext } from "../context/exerciseContext";

const Tab = createBottomTabNavigator();

export const ExerciseTab = (props: any) => {
    const { navigation, route } = props;
    const { params = {} } = route;
    const { exercise } = params;

    console.log(exercise)

    return (
        <ExerciseContext.Provider value={exercise}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Tab.Screen name="InfoScreen"
                    options={{
                        tabBarLabel: 'Info',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="information-circle-outline" color="gray" size={25} />
                        ),
                    }}
                    component={InfoScreen} />

                <Tab.Screen name="ImagesScreen"
                    options={{
                        tabBarLabel: 'Imagenes',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="images-outline" color="gray" size={25} />
                        ),
                    }}
                    component={ImagesScreen} />

                <Tab.Screen name="RutinScreen"
                    options={{
                        tabBarLabel: 'Rutina',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="list-circle-outline" color="gray" size={25} />
                        ),
                    }}
                    component={RutinScreen} />


            </Tab.Navigator>
        </ExerciseContext.Provider>
    )
}