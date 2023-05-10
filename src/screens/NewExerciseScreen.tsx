import React, { type PropsWithChildren } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import NewExerciseCard from '../components/NewExerciseCard';
import { ButtonMyProgress } from '../components/ButtonMyProgress';
export const NewExerciseScreen = (props: any) => {
    const { navigation, route } = props;
    const { params = {} } = route;
    const { exercise } = params;
    const { mainImage, name, duration, difficulty, description } = exercise;

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
        <Text style={styles.date}>
            May 2023
        </Text>
        <TouchableOpacity style={styles.imageContainer} onPress={goToStats}>
            <Image style={styles.imageCalendar} source={require("../assets/extras/calendar.jpg")} />
        </TouchableOpacity>
        <Text style={styles.title}>
            {name}
        </Text>

        <View style={styles.mainImageContainer} >
            <Image style={styles.mainImage} source={mainImage} />
        </View>

        <View style={styles.infoContainer} >
            <Image style={styles.infoImage} source={require("../assets/extras/timeBurn.jpg")} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.description}>
                {description}
            </Text>
        </ScrollView>
        <Text style={styles.date}>
            Video
        </Text>

        <View style={styles.videoContainer} >
            <Image style={styles.video} source={require("../assets/extras/video.jpg")} />
        </View>

        <ButtonMyProgress text={"My Progress"} onPress={goToProgress}/>

    </View>
}

const styles = StyleSheet.create({
    date: {
        color: "black",
        fontFamily: 'Manrope-Bold',
        fontWeight: "bold",
        fontSize: 18,
        margin: 10,
        alignSelf: "flex-start"

    },
    title: {
        color: "black",
        fontFamily: 'Manrope-Bold',
        fontWeight: "bold",
        fontSize: 18,
        margin: 10,
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
    mainImageContainer: {
        width: 350,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 50,
        height: 220,
        borderRadius: 20,
    },
    mainImage: {
        width: 350,
        height: 220,
        borderRadius: 20,
    },

    infoContainer:{
        position:"absolute",
        top:353,
        width: 250,
        height: 60,
        borderRadius: 20,
    },
    infoImage: {
        width: 250,
        height: 60,
        borderRadius: 20,
    },
    description: {
        color: "black",
        fontFamily: 'Manrope-Regular',
        fontSize: 15,
        margin: 5,
        lineHeight: 22,
        textAlign: 'justify',
        marginHorizontal: 20,
    },
    videoContainer: {
        width: 350,
        marginHorizontal: 10,
        marginBottom: 10,
        height: 74,
        borderRadius: 20,
    },
    video: {
        width: 350,
        height: 74,
        borderRadius: 20,
    },

});