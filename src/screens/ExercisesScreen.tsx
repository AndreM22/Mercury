import React, { type PropsWithChildren } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { ButtonMercury } from '../components/ButtonMercury';
import { ExerciseCard } from '../components/ExerciseCard';
import NewExerciseCard from '../components/NewExerciseCard';
import { ButtonMyProgress } from '../components/ButtonMyProgress';
export const ExercisesScreen = (props: any) => {
    const { navigation, route } = props;
    const { params = {} } = route;
    const { title = "", exercises } = params;
    const { exercises: exercisesList } = exercises
    const goToStats = () => {
        navigation.navigate("StatsScreen", {})
    }

    const goToProgress = () => {
        navigation.navigate("ProgressScreen", {})
    }
    //console.log(exercisesList);

    // const goToExercise = (exercise:any) => {
    //     navigation.navigate("ExerciseTab", { exercise:exercise})
    // }


    return <View style={{ flex: 1, alignItems: "center", backgroundColor: "#FFFFFF", flexDirection: "column" }}>
        <Text style={styles.title}>
            May 2023
        </Text>
        <TouchableOpacity style={styles.imageContainer} onPress={goToStats}>
            <Image style={styles.imageCalendar} source={require("../assets/extras/calendar.jpg")} />
        </TouchableOpacity>
        <Text style={styles.title}>
            {title} workout
        </Text>

        <FlatList
            data={exercisesList}
            keyExtractor={(exercise) => exercise.name}
            showsVerticalScrollIndicator={false}
            numColumns={2}

            // renderItem={({ item }) => <ExerciseCard exercise={item} navigation={navigation}/>}
            renderItem={({ item }) => <NewExerciseCard exercise={item} navigation={navigation} />}

        />
        <ButtonMyProgress text={"My Progress"} onPress={goToProgress}/>

    </View>
}

const styles = StyleSheet.create({
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
        borderRadius: 8,
    },
});