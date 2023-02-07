import React, { type PropsWithChildren } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { ButtonMercury } from '../components/ButtonMercury';
import { ImageResource } from '../components/ImageResource';
import { ExerciseContext } from '../context/exerciseContext';
import { data } from '../data/data';

export const ImagesScreen = (props: any) => {
    const { navigation } = props;
    const { name, mainImage, images, description } = React.useContext(ExerciseContext);
    console.log(images);


    return (
        <View style={{alignItems:'center'}}>
            <FlatList
                data={images}
                keyExtractor={(item, index) => "" + index}
                showsVerticalScrollIndicator={false}

                renderItem={({ item }) => <ImageResource image={item} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
})