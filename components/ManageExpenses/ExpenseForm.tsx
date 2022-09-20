import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import useExpenseForm from './utils';


const ExpenseForm: React.FC = () => {

    const { 
        handleAmountChange, handleDateChange, handleDescriptionChange,
        amount, date, description,
        amonutValid, dateValid, descriptionValid
    } = useExpenseForm();


    return (
        <View style={style.formContainer}>
            <Text style={style.title}>New Expense</Text>
            <View style={style.itemsInRow}>
                <Input
                    label='Amount'
                    inputMaxLength={5}
                    keyboardType='decimal-pad'
                    style={{flex: 1}}
                    onChange={handleAmountChange}
                    value={amount.toString()}
                    isValid={amonutValid}        
                />
                <Input
                    label='Date'
                    inputMaxLength={10}
                    placeholder='YYYY-MM-DD'
                    style={{flex: 1}}
                    onChange={handleDateChange}
                    value={date}
                    isValid={dateValid}
                />
            </View>

            <Input
                label='Description'
                inputMaxLength={64}
                multiline={true}
                onChange={handleDescriptionChange}
                value={description}
                isValid={descriptionValid}
            />
        </View>
    )
};

const style = StyleSheet.create({
    itemsInRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    formContainer: {
        marginTop: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },

});

export default ExpenseForm;