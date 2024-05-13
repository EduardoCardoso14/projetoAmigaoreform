import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from "./TelaInicial";
import TelaSelect from "./TelaSelect";
import TelaInsert from "./TelaInsert";
import TelaDelete from "./TelaDelete";
import TelaUpdate from "./TelaUpdate";
import TelaRetorno from "./TelaRetorno";
import TelaRetorno2 from "./TelaRetorno2";
import TelaCadastro from "./TelaCadastro";
import TelaLogin from "./TelaLogin";
import TelaBusca from "./TelaBusca";


const Stack = createStackNavigator();

function Navigation() {
    return (
        < NavigationContainer >
            <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="TelaSelect" component={TelaSelect} />
                <Stack.Screen name="TelaInsert" component={TelaInsert} />
                <Stack.Screen name="TelaDelete" component={TelaDelete} />
                <Stack.Screen name="TelaUpdate" component={TelaUpdate} />
                <Stack.Screen name="TelaRetorno" component={TelaRetorno} />
                <Stack.Screen name="TelaRetorno2" component={TelaRetorno2} />
                <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
                <Stack.Screen name="TelaLogin" component={TelaLogin} />
                <Stack.Screen name="TelaBusca" component={TelaBusca} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Navigation;