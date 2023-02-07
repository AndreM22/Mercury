import React from "react"
import { Button } from '@rneui/themed';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const ImageResource = (props: any) => {
    const { image } = props;

    const scaleHeight = (desiredWidth: number) => {
        const { width, height } = Image.resolveAssetSource(image);

        return desiredWidth / width * height;
    }

    const imageWidth = 315
    const imageHeigh = scaleHeight(
        imageWidth
    )


    return (
        <Image
            source={image}
            style={{...styles.imageContainer,height:imageHeigh}}
        />
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        width: 315,
        marginVertical: 15,
        borderColor: "black",
        borderWidth: 2,
    }
})