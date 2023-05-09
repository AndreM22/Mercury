import React from "react"
import { Button } from '@rneui/themed';

export const ButtonMyProgress = (props: any) => {
    const {text, onPress} = props;
    return(
        <Button
            title={text}
            buttonStyle={{
                backgroundColor: '#351A96',
                borderRadius: 32,
            }}
            containerStyle={{
                width: 350,
                borderRadius: 32,
                marginVertical: 10,
            }}
            titleStyle={{ 
                fontWeight: 'bold', 
                color:"white",
                fontFamily: 'Manrope-Bold',
                fontSize:16,
            }}
            onPress = {onPress}
        />
    );
}