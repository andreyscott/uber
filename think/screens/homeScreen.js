import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, DatePickerAndroid } from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
const dispatch = useDispatch

    return (
        <SafeAreaView>
    
            <View style={tw`p-5`}>
                <Image
                 style={{
                    width: 100,
                     height: 100, 
                     resizeMode: "contain",
                }}
                    source ={{
                        uri: "https://links.papareact.com/gzs",
                    }} />

                    <GooglePlacesAutocomplete
            placeholder='Search now here'
                    styles={{
                        container: {
                            flex: 0,

                        },
                        textInput : {
                            fontSize: 18,
                            color: 'grey',
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,    
                            description: data.description,
                        }))
                    dispatch(setDestination(null));
                    }}
                    query={{
                        key: GOOGLE_APIKEY,
                        language: 'en',
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    minLength={2}
                        nearbyPlacesAPI = 'GooglePlacesSearch'
                        debounce={400}

                    />



<NavOptions />
                    
            </View>
           
        </SafeAreaView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'blue',
    },
});