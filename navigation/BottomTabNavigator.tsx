import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FaireDon from '../screens/FaireDon';
import MonCompteScreen from '../screens/MonCompte';
import CarteFideliteScreen from '../screens/CarteFidelite';
import CartePartenaire from '../screens/CartePartenaire';
import { BottomTabParamList, FaireDonParamList, CartePartenaireParamList,MonCompteParamList,CarteFideliteParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MonCompte"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="MonCompte"
        component={MonCompteNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    <BottomTab.Screen
        name="CarteFidelite"
        component={CarteFideliteNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
    />
    <BottomTab.Screen
        name="FaireDon"
        component={FaireDonNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
    />
      <BottomTab.Screen
        name="CartePartenaire"
        component={CartePartenaireNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MonCompteStack = createStackNavigator<MonCompteParamList>();

function MonCompteNavigator() {
    return (
        <MonCompteStack.Navigator>
            <MonCompteStack.Screen
                name="MonCompteScreen"
                component={MonCompteScreen}
                options={{ headerTitle: 'Mon Compte' }}
            />
        </MonCompteStack.Navigator>
    );
}

const CarteFideliteStack = createStackNavigator<CarteFideliteParamList>();

function CarteFideliteNavigator() {
    return (
        <CarteFideliteStack.Navigator>
            <CarteFideliteStack.Screen
                name="CarteFideliteScreen"
                component={CarteFideliteScreen}
                options={{ headerTitle: 'Carte Fidelite' }}
            />
        </CarteFideliteStack.Navigator>
    );
}

const FaireDonStack = createStackNavigator<FaireDonParamList>();

function FaireDonNavigator() {
  return (
    <FaireDonStack.Navigator>
      <FaireDonStack.Screen
        name="FaireDonScreen"
        component={FaireDon}
        options={{ headerTitle: 'Faire Don' }}
      />
    </FaireDonStack.Navigator>
  );
}

const CartePartenaireStack = createStackNavigator<CartePartenaireParamList>();

function CartePartenaireNavigator() {
  return (
    <CartePartenaireStack.Navigator>
      <CartePartenaireStack.Screen
        name="CartePartenaireScreen"
        component={CartePartenaire}
        options={{ headerTitle: 'Carte Partenaire' }}
      />
    </CartePartenaireStack.Navigator>
  );
}
