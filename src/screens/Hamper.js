import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import top from "../../assets/top.png"
import logo from "../../assets/logo.png"
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

const width = Dimensions.get("screen").width;


export default function Hamper() {
    return <>
        <Image source={ top } style={ style.top } />
        <Text style={ style.title } >Hamper Details</Text>

        <View style={ style.hamper }>
            <Text style={ style.name } >Hamper </Text>
            <View style={ style.farm }>
                <Image source={ logo } style={style.farmImage} />
                <Text style={ style.farm } >Marcos` FARM </Text>
            </View>
            <Text style={ style.description } >First Class Products by Marquinho </Text>
            <Text style={ style.price } >PRICE: R$ 40 </Text>
        </View>
    </>
}

const style = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 8,
        fontWeight: "bold",
        marginTop: 60,
        padding: 16,
    },
    hamper: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "Lato_700Bold"
    },
    farm: {
        paddingVertical: 12,
        flexDirection: "row",
    },
    farmImage: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: Lato_400Regular,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#A29F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});