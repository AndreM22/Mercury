import { Image } from '@rneui/base';

import React, { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { ButtonMercury } from '../components/ButtonMercury';
import { data } from '../data/data';
export const HomeScreen = (props: any) => {
    const { navigation } = props;

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

    return <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                MERCURY
            </Text>

        </View>

        <Image
            source={require("../assets/abdomen.png")}
            style={styles.logo}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <ButtonMercury text="Pecho" onPress={goToPecho} />
            <ButtonMercury text="Brazo" onPress={goToBrazo} />
            <ButtonMercury text="Pierna" onPress={goToPierna} />
            <ButtonMercury text="Espalda" onPress={goToEspalda} />
            <ButtonMercury text="Hombro" onPress={goToHombro} />
            <ButtonMercury text="Abdomen" onPress={goToAbdomen} />
        </ScrollView>

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
        color: "white",
        fontWeight: "bold",
        fontSize: 40,

    },
    logo: {
        height: 200,
        width: 200,
        marginVertical: 30
    },


});