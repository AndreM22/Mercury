import React, { type PropsWithChildren } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { ButtonMercury } from '../components/ButtonMercury';
import { ExerciseContext } from '../context/exerciseContext';
import { data } from '../data/data';

export const InfoScreen = (props: any) => {
    const { navigation } = props;

    const { name, mainImage, images, description } = React.useContext(ExerciseContext);
    return (
        <View style={{ alignItems: "center", flex: 1 }}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {name}
                </Text>
            </View>
            <Image
                source={mainImage}
                style={styles.image}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.desciption}>
                        {description}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: 300,
        backgroundColor: "#DC4A00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 15,
        marginVertical: 25
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "white"
    },
    image: {
        height: 200,
        width: 315,
        marginVertical: 15,
        borderColor: "black",
        borderWidth: 2,

    },
    descriptionContainer: {
        marginVertical: 15,
        marginHorizontal: 25,
    },
    desciption: {
        fontSize:20,
        color:"gray",
        lineHeight:27
    }
})