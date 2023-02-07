import React from "react"
import { Button } from '@rneui/themed';

export const ButtonMercury = (props: any) => {
    const {text, onPress} = props;
    return(
        <Button
            title={text}
            raised
            buttonStyle={{
                backgroundColor: 'white',
                borderWidth: 2,
                borderRadius: 30,
                borderColor: '#DC4A00',
            }}
            containerStyle={{
                width: 220,
                marginHorizontal: 50,
                borderRadius: 30,
                marginVertical: 15,
            }}
            titleStyle={{ 
                fontWeight: 'bold' , 
                color:"gray",
                fontSize:22,
            }}
            onPress = {onPress}
        />
    );
}