import { Image } from '@rneui/base';

import React, { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ButtonMyProgress } from '../components/ButtonMyProgress';
export const StatsScreen = (props: any) => {
    const { navigation } = props;
    return <View style={{ flex: 1, alignItems: "center", backgroundColor: "#FFFFFF", flexDirection: "column" }}>

        <Text style={styles.title}>
            May 2023
        </Text>
        <TouchableOpacity style={styles.imageContainer}>
            <Image style={styles.imageCalendar} source={require("../assets/extras/calendar.jpg")} />
        </TouchableOpacity>
        {/* <Text style={styles.title}>
            What do you want to do today?
        </Text> */}

        <View style={styles.imageContainer}>
            <Image style={styles.imageStats} source={require("../assets/extras/stats.jpg")} />
        </View>


        <ButtonMyProgress text={"My Progress"} />

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

    },
    imageCalendar: {
        width: "100%",
        height: 64,
        aspectRatio: 1,
        borderRadius: 8,
    },
    imageStats: {
        width: 400,
        height: 600,
        aspectRatio: 1,
    }

});