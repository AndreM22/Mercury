import React, { type PropsWithChildren } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { ButtonMercury } from '../components/ButtonMercury';
import { ExerciseCard } from '../components/ExerciseCard';
export const ExercisesScreen = (props: any) => {
    const { navigation, route } = props;
    const { params = {} } = route;
    const { title = "", exercises } = params;
    const { exercises: exercisesList } = exercises
    //console.log(exercisesList);

    // const goToExercise = (exercise:any) => {
    //     navigation.navigate("ExerciseTab", { exercise:exercise})
    // }


    return <View style={{ flex: 1, alignItems: "center", backgroundColor:"white" }}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {title}
            </Text>

        </View>

        <FlatList
            data={exercisesList}
            keyExtractor={(exercise) => exercise.name}
            showsVerticalScrollIndicator={false}
            
            renderItem={({ item }) => <ExerciseCard exercise={item} navigation={navigation}/>}
        />

    </View>
}

const styles = StyleSheet.create({
    titleContainer: {
        width: 250,
        height: 50,
        backgroundColor: "#DC4A00",
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,

    }


});