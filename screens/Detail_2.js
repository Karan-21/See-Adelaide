// import React in our code
import React from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar
} from 'react-native';
import {
  SharedElement,
  SharedElementTransition,
} from 'react-native-shared-element';
import { styles } from '../styles/category.style';
import { SIZES } from '../constants/theme';
import { SliderBox } from "react-native-image-slider-box";
// import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { icons } from '../constants';
import Map from '../components/Map'
import { LinearGradient } from 'expo-linear-gradient';

const StarReview = ({ rate }) => {
  var starComponents = [];
  var fullStar = Math.floor(rate)
  var noStar = Math.floor(3 - rate)
  var halfStar = 3 - fullStar - noStar

  // Full Star
  for (var i = 0; i < fullStar; i++) {
      starComponents.push(
          <Image
              key={`full-${i}`}
              source={icons.starFull}
              resizeMode="cover"
              style={{
                  width: 20,
                  height: 20,
              }}
          />
      )
  }

  // Half Star
  for (var i = 0; i < halfStar; i++) {
      starComponents.push(
          <Image
              key={`half-${i}`}
              source={icons.starHalf}
              resizeMode="cover"
              style={{
                  width: 20,
                  height: 20,
              }}
          />
      )
  }

  // No Star
  for (var i = 0; i < noStar; i++) {
      starComponents.push(
          <Image
              key={`empty-${i}`}
              source={icons.starEmpty}
              resizeMode="cover"
              style={{
                  width: 20,
                  height: 20,
              }}
          />
      )
  }

  return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {starComponents}
      </View>
  )
}

const Avatars = () => {
  const avatars = [ icons.jason, icons.jyoti, icons.antony, icons.suzanne, icons.eric, icons.chris ];
  return (
    <View>
      <Text>Community Approved</Text>
      <View style={{ flexDirection: 'row' }}>
        {avatars.map((item, index) => (
            <Image
              key={index}
              source={item}
              style={{
                zIndex: 5 - index,
                marginLeft: index === 0 ? 0 : -20,
                borderRadius: 30,
                width: 50,
                height: 50,
                overflow: "hidden",
                borderWidth: 3,
                borderColor: 'white'
              }} />
          ))}
        <Text>+</Text>
        <Text style = {{fontWeight: 'bold'}}>12099</Text>
        <Text> others</Text>
      </View>
    </View>
  )
}

function Detail_2({ route, navigation }) {
  // const data = route.params.item;
  const { item } = route.params ;
  return (
    <SafeAreaView style={[styles.detailMain, { flex: 1, backgroundColor: 'white' }]}>
      <MaterialCommunityIcons
          name="arrow-left-circle"
          color={'white'}
          size={30}
          style={{
            padding: 12,
            position: 'absolute',
            top: 40,
            left: 10,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()} />
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: 'rgba(0,0,0,0.3)' },
        ]}
      >
          <SharedElement id={`item.${item.key}.image`}>
            <SliderBox
              images={item.images}
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
              }} />
          </SharedElement>
        <LinearGradient
          colors={['transparent', 'white', 'white']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: SIZES.height / 2.5
          }} />
      </View>
      <View
        style={{
          flex: 1,
          postion: 'absolute',
          // bottom: 20,
          justifyContent: 'flex-end',
        }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
            <Text numberOfLines={1} adjustsFontSizeToFit={true} selectable={true} style={{ fontWeight: 'bold', fontSize: 35 }}>{item.title}</Text>
            <StarReview rate={2.8} />
          </View>
          <Avatars />
          <Text onPress={() => { navigation.navigate('DestinationDetail', {item}) }}>MORE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

Detail_2.SharedElement = (route, otherRoute, showing) => {
  const { item } = route.params ;

  return [
    {
      id: `item.${item.key}.image`,
    },
    {
      id: `item.${item.key}.title`,
    },
  ];
};

export default Detail_2 ;