import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import SignIn from "../src/pages/SignIn"
import SignUp from '../src/pages/SignUp'

const Auth = createStackNavigator();

const AuthRoutes = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FF3D4E'}
        }}
    >
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
    </Auth.Navigator>
);

export default AuthRoutes;