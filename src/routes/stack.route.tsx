import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../pages/login'
//import Absence from '../pages/absences'
//import Classes from '../pages/classes'
//import Menu from '../pages/menu'

const Stack = createNativeStackNavigator();


export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component= {Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TelaInicial"
                component= {Menu}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Falta"
                component= {Absence}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Horario"
                component= {Classes}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
        )
}