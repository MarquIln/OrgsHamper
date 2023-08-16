import React from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import Hamper from './src/screens/Hamper';
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import mock from "./src/mocks/hamper";
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
    const [loadedFonts] = useFonts([
        Lato_400Regular, Lato_700Bold,
    ]);

    if (!loadedFonts) {
        return <SplashScreen/>
    }
    return (
        <SafeAreaView>
            <StatusBar/>
            <Hamper {...mock} />
        </SafeAreaView>
    );
}
