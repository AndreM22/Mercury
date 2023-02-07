import React from "react"
import { Button } from '@rneui/themed';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";

export const ExerciseCard = (props: any) => {
    const { exercise = {}, onPress, navigation } = props;
    const { name, mainImage } = exercise;
    //console.log(navigation)

    const goToExercise = () => {
        navigation.navigate("ExerciseTab", { exercise:exercise })
    }

    return (
        <View style={{ backgroundColor: "white" }}>
            <TouchableOpacity style={styles.cardContainer}
                onPress={goToExercise}>
                <Image
                    source={mainImage}
                    style={styles.imageContainer}
                />
                <Text style={styles.exerciseName}>
                    {name}
                </Text>



            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#DC4A00",
        height: 100,
        width: 300,
        flexDirection: "row",
        //justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        borderRadius: 30,
        elevation: 25,

    },
    imageContainer: {
        height: 80,
        width: 80,
        borderRadius: 100,
        marginHorizontal: 15
    },
    exerciseName: {
        color: "white",
        fontWeight: "400",
        fontSize: 25,
        flexShrink: 1

    }
})