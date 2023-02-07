import React from "react"
import { Button } from '@rneui/themed';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";

export const PreviusRutinCard = (props: any) => {
    const { rutin = {}, navigation } = props;
    const { series, repeticiones, peso } = rutin;
    //console.log(navigation)

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.numberContainer}>
                    {series}
                </Text>
                <Text style={styles.titleContainer}>
                    Series
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.numberContainer}>
                    {repeticiones}
                </Text>
                <Text style={styles.titleContainer}>
                    Repeticiones
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.numberContainer}>
                    {peso}
                </Text>
                <Text style={styles.titleContainer}>
                    Peso kg
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 150,
        width: 330,
        justifyContent: "space-around",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        marginVertical: 10,
    },
    infoContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    numberContainer: {
        fontSize: 56,
        color: "#DC4A00",
        fontWeight: "bold",

    },
    titleContainer: {
        fontSize: 20,
        color: "gray",
        fontWeight: "400",

    },
})