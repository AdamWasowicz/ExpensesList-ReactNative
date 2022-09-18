import React from "react";
import { View, StyleSheet } from "react-native";
import useManageExpenses from "./utils";
import style from './style';
import IconButton from "../../components/UI/IconButton";
import appColorScheme from "../../constants/Colors";
import Button from "../../components/UI/Button";


const ManageExpensesScreen: React.FC = () => {

    const { mode, expense, handleDelete, handleCancel, handleConfirm } = useManageExpenses();


    return (
        <View style={style.root}>
            <View style={style.buttonsContainer}>
                <Button customStyle={style.button} mode='flat' onPress={handleCancel}>
                    Cancel
                </Button>

                <Button customStyle={style.button} onPress={handleConfirm}>
                    { mode === 'edit' ? 'Update' : 'Add' }
                </Button>
            </View>


            
            {
                mode === 'edit' && 
                    <View style={style.deleteContainer}>
                        <IconButton 
                            name='trash' 
                            color={appColorScheme.error._500} 
                            size={32} 
                            onPress={handleDelete}
                        />
                    </View>
            }
        </View>
    )
};

export default ManageExpensesScreen;