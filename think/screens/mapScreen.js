import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from "../components/Map"

const mapScreen = () => {
    return (
        <View style={styles.container}>
        <View style={tw `h-1/2`}>
           <Map />
        </View>
        <View style={tw `h-1/2`}>
            <Text>Map Screen</Text>
        </View>
        </View>
            
        
    )
}

export default mapScreen

const styles = StyleSheet.create({})
