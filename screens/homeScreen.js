import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';
import NavOption from '../Components/NavOption';
import NavFavouirte from '../Components/NavFavouirte';




const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                  style={{
                      width:100,
                      height:100,
                      resizeMode:'contain',
                  }}
                  source={{uri: 'https://links.papareact.com/gzs'}}
                />

                <GooglePlacesAutocomplete
                  placeholder="Where From ?" 
                  styles={{
                      container: {
                          flex: 0,
                      },
                      textInput: {
                          fontSize: 21,
                          backgroundColor: '#D3D3D3',
                      },
                  }}
                />

                <NavOption />
                <NavFavouirte />
                
                
            </View>
        </SafeAreaView>
        
    )
}

export default HomeScreen

const styles = StyleSheet.create({})