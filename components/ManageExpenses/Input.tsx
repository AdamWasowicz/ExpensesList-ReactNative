import React from 'react';
import { TextInput, View, Text, StyleSheet, KeyboardTypeOptions, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import appColorScheme from '../../constants/Colors';


interface InputProps {
    label: string, 
    keyboardType?: KeyboardTypeOptions,
    inputMaxLength: number,
    onChange: (value: string) => void,
    value: string,
    placeholder?: string,
    multiline?: boolean,
    autoCorrect?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters",
    style?: {}
    isValid?: boolean
}

const Input: React.FC<InputProps> = (props) => {

    const OnChangeHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = event.nativeEvent.text;
        props.onChange(value);
    }
    

    return (
        <View style={[style.root, props.style]}>
            <Text style={style.text}>{props.label}</Text>
            <TextInput 
                style={[
                    style.textInput, 
                    props.multiline && style.inputMultiline, 
                    (props.isValid != null && props.isValid == false) && style.invalid
                ]}
                keyboardType={props.keyboardType != null ? props.keyboardType : 'default'} 
                maxLength={props.inputMaxLength}
                onChange={OnChangeHandler}
                placeholder={props.placeholder != null ? props.placeholder : ''}
                autoCorrect={props.autoCorrect != null ? props.autoCorrect : true}
                autoCapitalize={props.autoCapitalize != null ? props.autoCapitalize : 'none'}
                value={props.value}
            />
        </View>
    )
};

const style = StyleSheet.create({
    root: {
        marginHorizontal: 4,
        marginVertical: 16,
    },

    text: {
        fontSize: 16,
        color: appColorScheme.primary._100,
        marginBottom: 4,
    },

    textInput: {
        backgroundColor: appColorScheme.primary._100,
        padding: 8,
        borderRadius: 8,
        fontSize: 24,
        color: appColorScheme.primary._700,
    },

    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },

    invalid: {
        color: appColorScheme.error._500,
        backgroundColor: appColorScheme.error._50,
    }
});

export default Input;