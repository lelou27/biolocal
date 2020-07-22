import {AntDesign, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../types';

import {
    CarteFideliteNavigator,
    CartePartenaireNavigator,
    FaireDonNavigator, InformationsNavigator,
    MonCompteNavigator
} from "../components/Navigator/Navigator";

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
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} />,
            tabBarLabel: "Mon compte",
        }}
      />
    <BottomTab.Screen
        name="CarteFidelite"
        component={CarteFideliteNavigator}
        options={{
            tabBarIcon: ({ color }) => <AntDesign name="creditcard" size={24} color={color} />,
            tabBarLabel: "Carte fidélité"
        }}
    />
    <BottomTab.Screen
        name="FaireDon"
        component={FaireDonNavigator}
        options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="donate" size={24} color={color} />,
            tabBarLabel: "Faire don"
        }}
    />
      <BottomTab.Screen
        name="CartePartenaire"
        component={CartePartenaireNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="globe-africa" size={24} color={color} />,
            tabBarLabel: "Carte partenaire"
        }}
      />
        <BottomTab.Screen
            name="Informations"
            component={InformationsNavigator}
            options={{
                tabBarIcon: ({ color }) => <Feather name="info" size={24} color={color} />,
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
