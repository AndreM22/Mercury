import { Image } from '@rneui/base';

import React, { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ButtonMyProgress } from '../components/ButtonMyProgress';
export const ProgressScreen = (props: any) => {
    const { navigation } = props;
    return <View style={{ flex: 1, alignItems: "center", backgroundColor: "#FFFFFF", flexDirection: "column" }}>

        <Text style={styles.title}>
            My progress
        </Text>
        <View style={styles.imageContainer}>
            <Image style={styles.imageProgress} source={require("../assets/extras/progress.jpg")} />
        </View>


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

    },
    imageContainer: {
        width: 350,
        marginHorizontal: 10,

    },
    imageProgress: {
        width: 350,
        height: 700,
        aspectRatio: 1,
        borderRadius: 8,
    },

});