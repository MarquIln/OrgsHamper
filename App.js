import React from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import Hamper from "./src/screens/Hamper";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

export default function App() {
    const [loadedFonts] = useFonts([
        Lato_400Regular, Lato_700Bold,
    ]);

    if (!loadedFonts) {
        return <View/>
    }
    return (
        <SafeAreaView>
            <StatusBar/>
            <Hamper/>
        </SafeAreaView>
    );
}
