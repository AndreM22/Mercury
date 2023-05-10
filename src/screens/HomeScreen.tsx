import { Image } from '@rneui/base';

import React, { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ButtonMercury } from '../components/ButtonMercury';
import { data } from '../data/data';
import { WorkoutCard } from '../components/WorkoutCard';
import { ButtonMyProgress } from '../components/ButtonMyProgress';
export const HomeScreen = (props: any) => {
    const { navigation } = props;

    const dataInicio = {
        arms: {
            name: "Arms",
            mainImage: require("../assets/inicio/arms.jpg"),
            description: "This week you did'nt do a workout for arms"
        },
        legs: {
            name: "Legs",
            mainImage: require("../assets/inicio/legs.jpg"),
            description: "You didn't finish leg workout yesterday"
        },
        abs: {
            name: "Abs",
            mainImage: require("../assets/inicio/abs.jpg"),
            description: "Its time to do some workout for abs"
        },
        back: {
            name: "Back",
            mainImage: require("../assets/inicio/back.jpg"),
            description: "This week you did'nt do a workout for back"
        },
        chest: {
            name: "Chest",
            mainImage: require("../assets/inicio/chest.jpg"),
            description: "Its time to do some workout for chest"
        },
        shoulders: {
            name: "Shoulders",
            mainImage: require("../assets/inicio/shoulders.jpg"),
            description: "This week you did'nt do a workout for shoulders"
        },
    };

    const goToStats = () => {
        navigation.navigate("StatsScreen", {})
    }

    const goToProgress = () => {
        navigation.navigate("ProgressScreen", {})
    }

    const goToPecho = () => {
        navigation.navigate("ExercisesScreen", { title: data.pecho.id, exercises: data.pecho.exercises })
    }

    const goToBrazo = () => {
        navigation.navigate("ExercisesScreen", { title: data.brazo.id, exercises: data.brazo.exercises })
    }

    const goToPierna = () => {
        navigation.navigate("ExercisesScreen", { title: data.pierna.id, exercises: data.pierna.exercises })
    }

    const goToEspalda = () => {
        navigation.navigate("ExercisesScreen", { title: data.espalda.id, exercises: data.espalda.exercises })
    }

    const goToHombro = () => {
        navigation.navigate("ExercisesScreen", { title: data.hombro.id, exercises: data.hombro.exercises })
    }

    const goToAbdomen = () => {
        navigation.navigate("ExercisesScreen", { title: data.abdomen.id, exercises: data.abdomen.exercises })
    }

    return <View style={{ flex: 1, alignItems: "center", backgroundColor: "#FFFFFF", flexDirection: "column" }}>
        {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>
                MERCURY
            </Text>

        </View>

        <Image
            source={require("../assets/abdomen.png")}
            style={styles.logo}
        /> */}

        <Text style={styles.title}>
            May 2023
        </Text>
        <TouchableOpacity style={styles.imageContainer} onPress={goToStats}>
            <Image style={styles.imageCalendar} source={require("../assets/extras/calendar.jpg")} />
        </TouchableOpacity>
        <Text style={styles.title}>
            What do you want to do today?
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
            <WorkoutCard workout={dataInicio.chest} onPress={goToPecho} />
            <WorkoutCard workout={dataInicio.arms} onPress={goToBrazo} />
            <WorkoutCard workout={dataInicio.legs} onPress={goToPierna} />
            <WorkoutCard workout={dataInicio.back} onPress={goToEspalda} />
            <WorkoutCard workout={dataInicio.shoulders} onPress={goToHombro} />
            <WorkoutCard workout={dataInicio.abs} onPress={goToAbdomen} />
            {/* <ButtonMercury text="Pecho" onPress={goToPecho} />
            <ButtonMercury text="Brazo" onPress={goToBrazo} />
            <ButtonMercury text="Pierna" onPress={goToPierna} />
            <ButtonMercury text="Espalda" onPress={goToEspalda} />
            <ButtonMercury text="Hombro" onPress={goToHombro} />
            <ButtonMercury text="Abdomen" onPress={goToAbdomen} /> */}
        </ScrollView>

        <ButtonMyProgress text={"My Progress"} onPress={goToProgress}/>

    </View>
}

const styles = StyleSheet.create({
    titleContainer: {
        width: 250,
        height: 70,
        backgroundColor: "#DC4A00",
        marginTop: 60,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "black",
        fontFamily: 'Manrope-Bold',
        fontWeight: "bold",
        fontSize: 18,
        margin: 10,
        alignSelf: "flex-start"

    },
    imageContainer: {
        width: '100%',
        marginHorizontal: 10,
        height: 64,
    },
    imageCalendar: {
        width: "100%",
        height: 64,
        aspectRatio: 1,
        borderRadius: 8,
    },
    // title: {
    //     color: "white",
    //     fontWeight: "bold",
    //     fontSize: 40,

    // },
    // logo: {
    //     height: 200,
    //     width: 200,
    //     marginVertical: 30
    // },


});