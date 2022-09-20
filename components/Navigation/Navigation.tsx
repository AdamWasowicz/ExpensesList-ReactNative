import React from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackNavigationParams, BottomTabsNavigationParams } from '../../types/AppNavigationTypes';
import ManageExpensesScreen from "../../screens/ManageExpenses";
import RecentExpensesScreen from "../../screens/RecentExpensesScreen";
import AllExpensesScreen from "../../screens/AllExpensesScreen";
import appColorScheme from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../UI/IconButton";
import { useDispatch } from "react-redux";
import { clearExpenseFormState } from "../../redux/features/expenseForm-slice";


const Stack = createNativeStackNavigator<RootStackNavigationParams>();
const BottomTabs = createBottomTabNavigator<BottomTabsNavigationParams>();


const Navigation: React.FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="ExpensesOverview"
                screenOptions={{
                    headerStyle: { backgroundColor: appColorScheme.primary._500 },
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen
                    name="ExpensesOverview"
                    component={ExpensesOverview}
                    options={{
                        headerShown: false,
                        animation: 'fade_from_bottom',
                    }}
                />
                <Stack.Screen
                    name='ManageExpenses'
                    component={ManageExpensesScreen}
                    options={{
                        presentation: 'modal',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const ExpensesOverview: React.FC = () => {

    const rootNavigation = useNavigation<NativeStackNavigationProp<RootStackNavigationParams>>();
    const dispatch = useDispatch();

    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: appColorScheme.primary._500 },
                headerTintColor: 'white',
                tabBarStyle: { backgroundColor: appColorScheme.primary._500 },
                tabBarActiveTintColor: appColorScheme.accent._500,
                headerRight: ({tintColor}) => 
                    <IconButton
                        name='add'
                        size={40}
                        color={tintColor!}
                        onPress={() => { 
                            dispatch(clearExpenseFormState());
                            rootNavigation.navigate('ManageExpenses', {mode: 'add'})
                        }}
                    />
                
            }}
        >
            <BottomTabs.Screen
                name='RecentExpenses'
                component={RecentExpensesScreen}
                options={{
                    title:'Your recent expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({size, color}) => 
                        <Ionicons 
                            name='time'
                            color={color}
                            size={size}
                        />
                }}
            />
            <BottomTabs.Screen
                name='AllExpenses'
                component={AllExpensesScreen}
                options={{
                    title: 'Your all expenses',
                    tabBarLabel: 'All',
                    tabBarIcon: ({size, color}) => 
                        <Ionicons 
                            name='book-outline'
                            color={color}
                            size={size}
                        />
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default Navigation;