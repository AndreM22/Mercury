import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewExerciseCard = (props: any) => {
    const { exercise = {}, onPress, navigation } = props;
    const { mainImage, name, duration, difficulty } = exercise;

    const goToExercise = () => {
        navigation.navigate("NewExerciseScreen", { exercise:exercise })
    }
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={goToExercise}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={mainImage} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.detail}>{duration}</Text>
                <Text style={styles.detail}>{difficulty}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#F6F3FF",
        width: 174,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingEnd: 5,
        paddingStart:10,
        paddingVertical: 10,
        marginHorizontal:7,
        marginVertical: 5,
        borderRadius: 6,
    },
    imageContainer: {
        width: '40%',
        marginRight: 10,
    },
    image: {
        width: 70,
        height:70,
        aspectRatio: 1,
        borderRadius: 4,

    },
    contentContainer: {
        flex: 1,
        paddingStart:5
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Manrope-Bold',
        marginBottom: 8,
        color:"black"
    },
    detail: {
        fontFamily: 'Manrope-Regular',
        fontSize: 12,
        color: '#192126B2',
        marginBottom: 4,
    },
});

export default NewExerciseCard;