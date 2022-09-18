import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, StyleSheet, ListRenderItemInfo, Pressable } from 'react-native';
import appColorScheme from '../../constants/Colors';
import { Expense } from '../../types/ExpensesOutputTypes';
import { RootStackNavigationParams } from '../../types/AppNavigationTypes';


const ExpensesItem: React.FC<{itemData: ListRenderItemInfo<Expense>}> = ({itemData}) => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationParams>>();


    const onPressHandler = () => {
        navigation.navigate('ManageExpenses', {mode: 'edit', expense: itemData.item});
    };

    
    return (
        <Pressable 
            style={({pressed}) => pressed && style.pressed}
            onPress={onPressHandler}
        >
            <View style={style.rootView}>
                <View>
                    <Text 
                        style={[style.textBase, style.description]}
                    >
                            {itemData.item.description}
                    </Text>
                    <Text 
                        style={[style.textBase]}
                    >
                        {new Date(itemData.item.date).toDateString()}
                    </Text>
                </View>
                <View style={style.amountContainer}>
                    <Text style={style.amountText}>${itemData.item.amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    rootView: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: appColorScheme.primary._500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        eleveation: 3,

        //IOS
        shadowColor: appColorScheme.gray._500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1},
        shadowOpacity: 0.4,
    },

    textBase: {
        color: appColorScheme.primary._50,
    },

    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },

    amountContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 75,
    },

    amountText: {
        color: appColorScheme.primary._500,
        fontWeight: 'bold',
    },

    pressed: {
        opacity: 0.75,
    },
});

export default ExpensesItem;