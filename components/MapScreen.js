// Required dependency: expo install react-native-maps
import React, { Component } from "react";
import {StyleSheet,Text,View,ScrollView,Animated,Image,Dimensions,TouchableOpacity} from "react-native";
import MapView, {PROVIDER_GOOGLE,Marker} from "react-native-maps";

import first from '../images/glenelg_1.jpg';
import second from '../images/sa_museum.jpg';
import third from '../images/burnside_village.jpg';
import fourth from '../images/mount_lofty.jpg';

const Images = [first,second,third,fourth];

const { width, height } = Dimensions.get("window");
// const locations = require('./location.json')

const CARD_HEIGHT = height / 2.7;
const CARD_WIDTH = CARD_HEIGHT - 40;

export default class MapScreen extends Component {
  constructor(props){
  super(props);
  this.index = 0,
  this.animation = new Animated.Value(0),
  //this.locations: locations,
  this.state = {
    // Must be able to fetch coordinates from firebase...
    // Info would be transferred to json/csv files
    // Might need to import starRating.js as ratings
    markers: [
      {
        coordinate: {
          latitude: -34.9820,
          longitude: 138.5160,
        },
        title: "Glenelg",
        address: "12km",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: -34.9205,
          longitude: 138.6032,
        },
        title: "SA Musuem",
        address: "2km",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: -34.9411,
          longitude: 138.6414,
        },
        title: "Burnside Village",
        address: "5km",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: -34.9736,
          longitude: 138.7086,
        },
        title: "Mount Lofty",
        address: "40km",
        image: Images[3],
      },
    ],
    region: {
      latitude: -34.9205,
      longitude: 138.6032,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.040142817690068,
    },
  };
}

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }


  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <Marker key={index} coordinate={marker.coordinate} >
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={2} style={styles.cardDescription}>
                  {marker.address}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    borderRadius: 20
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 20
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 20,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
    position: "absolute",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});
