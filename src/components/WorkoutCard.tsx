import React from "react"
import { Button } from '@rneui/themed';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";

export const WorkoutCard = (props: any) => {
    const { workout = {}, onPress, navigation } = props;
    const { name, mainImage, description } = workout;
    //console.log(navigation)



    return (
        <View style={{ backgroundColor: "white" }}>
            <TouchableOpacity style={styles.cardContainer}
                onPress={onPress}>


                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={mainImage} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>

            </TouchableOpacity >
        </View >
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#F6F3FF",
        height: 120,
        width: 350,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical:10,
        marginHorizontal:10,
        borderRadius: 23,


    },

    imageContainer: {
        width: '33.3%',
        marginRight: 10,
        
    },
    image: {
        width: 112,
        height: 100,
        aspectRatio: 1,
        borderRadius: 8,
    },

    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: "bold",
        fontFamily: 'Manrope-Bold',
    },
    description: {
        fontSize: 13,
        color: ' #19212680',
        fontFamily: 'Manrope-Regular',
    },
})