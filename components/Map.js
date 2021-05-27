import React, { useState, useEffect, useRef,useCallback} from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, {Polyline, Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import { images, icons, COLORS, SIZES } from '../constants';
import * as Location from 'expo-location';
import { data } from '../constants/data';
import { getDistance, getPreciseDistance, getCenterOfBounds } from 'geolib';

const Map = (props) => {
  // Get currrent location
  const [pos, setPos] = useState({lat: 0, long: 0})
    const  getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getCoords)
        } else {
          alert('GeoLocation not enabled');
        }
      }

    const getCoords = (pos) => {
        setPos({
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        })
      }

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        }
        getLocation()
      })();
    }, [pos.lat, pos.long]);  

  // Get distance from current location
  const dist = getDistance(
    { latitude: props.latitude,longitude: props.longitude},
    { latitude: pos.lat, longitude: pos.long }
  );

  // const midPoint = getCenterOfBounds ([
  //   { latitude: props.latitude, longitude: props.longitude},
  //   { latitude: pos.lat, longitude: pos.long }
  // ]) ;
  
  // Test output
  // console.log(midPoint) ;
  // console.log(dist);
  // console.log(props) ;
  // console.log(pos);

    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        // To show default Google marker for current location
        showsUserLocation = {true}
        zoomEnabled={true}
        focusable
        initialRegion={{
          latitude: props.latitude,
          longitude: props.longitude,
          latitudeDelta: 0.08,
          longitudeDelta: 0.04
        }}
        provider={PROVIDER_GOOGLE}>
        <Marker
        coordinate={{latitude: props.latitude,longitude: props.longitude}}
        title={props.title}
        description={'Distance\n'+ (dist/ 1000) +' KM from current location'}
        //identifier={'mk1'}
        >
        <Image
          source={icons.mapPin}
          resizeMode="cover"
          style={{
            width: 20,
            height: 20,
          }}
          />
      </Marker>
      <Marker
        coordinate={{latitude: pos.lat, longitude: pos.long}}
        title={"You are here"}
        // description={"Description?"}
        // identifier={'mk2'}
        >
        <Image
          source={icons.mapPin}
          resizeMode="cover"
          style={{
            width: 20,
            height: 20,
          }}
          />
      </Marker>
      </MapView>
      </View>
    );
  }

export default Map ;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.3,
  }
});