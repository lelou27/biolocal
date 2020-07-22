import CarteFideliteScreen from "../Pages/CarteFidelite";
import {createStackNavigator} from "@react-navigation/stack";
import {CarteFideliteParamList, CartePartenaireParamList, FaireDonParamList, MonCompteParamList} from "../../types";
import FaireDon from "../Pages/FaireDon";
import CartePartenaire from "../Pages/CartePartenaire";
import * as React from "react";
import MonCompteScreen from "../Pages/MonCompte";
import InformationsScreen from "../Pages/InformationsScreen";

export const CarteFideliteNavigator = () => {
    return (
        <CarteFideliteStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <CarteFideliteStack.Screen
                name="CarteFideliteScreen"
                component={CarteFideliteScreen}
            />
        </CarteFideliteStack.Navigator>
    );
};

export const FaireDonNavigator = () =>  {
    return (
        <FaireDonStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <FaireDonStack.Screen
                name="FaireDonScreen"
                component={FaireDon}
            />
        </FaireDonStack.Navigator>
    );
};


export const CartePartenaireNavigator = () => {
    return (
        <CartePartenaireStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <CartePartenaireStack.Screen
                name="CartePartenaireScreen"
                component={CartePartenaire}
            />
        </CartePartenaireStack.Navigator>
    );
};

export const MonCompteNavigator = () => {
    return (
        <MonCompteStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <MonCompteStack.Screen
                name="MonCompteScreen"
                component={MonCompteScreen}
            />
        </MonCompteStack.Navigator>
    );
};


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
export const CartePartenaireStack = createStackNavigator<CartePartenaireParamList>();
export const FaireDonStack = createStackNavigator<FaireDonParamList>();
export const MonCompteStack = createStackNavigator<MonCompteParamList>();
export const CarteFideliteStack = createStackNavigator<CarteFideliteParamList>();
