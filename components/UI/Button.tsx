import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import appColorScheme from '../../constants/Colors';


interface ButtonProps {
    children: JSX.Element | string, 
    onPress?: () => void, 
    mode?: 'flat'
    customStyle?: {} | any
}


const Button: React.FC<ButtonProps> = (props) => {

    return (
        <View style={props.customStyle}>
            <Pressable 
                style={({pressed}) => pressed && style.pressed}
                onPress={props.onPress}
            >
                <View style={[style.button, props.mode === 'flat' && style.flat]}>
                    <Text style={[style.buttonText, props.mode === 'flat' && style.flatText]}>
                        {props.children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
};

const style = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: appColorScheme.primary._500,
    },

    flat: {
        backgroundColor: 'transparent',
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    flatText: {
        color: appColorScheme.primary._200,
    },

    pressed: {
        opacity: 0.75,
        backgroundColor: appColorScheme.primary._100,
        borderRadius: 4,
    }
});

export default Button;