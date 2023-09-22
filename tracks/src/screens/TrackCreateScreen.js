import React from 'react';
import { StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native'
import Map from '../components/Map';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text h2>Create a Track</Text>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;