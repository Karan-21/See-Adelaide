import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, icons, COLORS, SIZES } from '../constants';
import { data } from '../constants/data';
import storage from '../components/firebaseStorage' ;
import { homeTheme_2 } from '../styles/home_2.style';
import * as firebase from 'firebase';
import * as fbFetch from '../components/firebaseStorage';
import {
    SharedElement,
    SharedElementTransition,
  } from 'react-native-shared-element';


const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = homeTheme_2;

function Home_2 ({ navigation, route }) {
    // const { item } = route.params ;

    function signOut() {
        firebase.auth().signOut().then(()=>{
            console.log("Sign out successfully") ;
        }).catch((error)=>{
            console.log(error) ;
        })
    }

    // function to render the header
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 15,
                        justifyContent: 'center'
                    }}
                    onPress={() => { navigation.navigate('MapScreen'); } }
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35
                        }} />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.gray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Glenelg</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => signOut()}
                >
                    <Image
                        source={icons.menu}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35
                        }} />
                </TouchableOpacity>
            </View>
        );
    };

        const scrollX = React.useRef(new Animated.Value(0)).current;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {renderHeader()}
                <View style={styles.greetings}>
                    <Text style={styles.greetingsText}>Hi,</Text>
                    <Text style={styles.greetingsText}>Phuc Nguyen</Text>
                </View>
                <Text style={{ marginLeft: SPACING, fontSize: 18, color: '#4e504e' }}>Buzzing near you</Text>
                <Animated.FlatList
                    data={data}
                    keyExtractor={item => item.key}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={FULL_SIZE}
                    decelerationRate='fast'
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    renderItem={({ item, index }) => {
                        const inputRange = [
                            (index - 1) * FULL_SIZE,
                            index * FULL_SIZE,
                            (index + 1) * FULL_SIZE,
                        ];
                        const translateX = scrollX.interpolate({
                            inputRange,
                            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
                        });
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [1, 1.15, 1],
                        });
                        return (
                            <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate('Detail_2', { item }); } } style={styles.itemContainer}>
                                <View style={[StyleSheet.absoluteFillObject, { overflow: 'hidden' }]}>
                                    <SharedElement id={`item.${item.key}.image`}>
                                        <Animated.Image source={item.image} style={[StyleSheet.absoluteFillObject, {
                                            resizeMode: 'cover',
                                            transform: [{ scale }]
                                        }]} />
                                    </SharedElement>
                                </View>
                                <SharedElement id={`item.${item.key}.title`}>
                                    <Animated.Text numberOfLines={1} style={[styles.location, { transform: [{ translateX }] }]}>{item.title}</Animated.Text>
                                </SharedElement>
                                <View style={styles.daysContainer}>
                                    <Text style={styles.TourDaysValue}>{item.TourDays}</Text>
                                    <Text style={styles.TourDaysLabel}>days</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } } />
            </SafeAreaView>
        );
    }

Home_2.SharedElement = (route, otherRoute, showing) => {
    const { item } = route.params ;

    return [
        {
            id: `item.${item.key}.image`,
        },
        {
            id: `item.${item.key}.title`
        }
    ];
};

export default Home_2 ;

const styles = StyleSheet.create({
    greetings: {
        width: '100%',
        height: 150,
        margin: SPACING,
        marginBottom: 0
    },
    greetingsText: {
        fontSize: 46,
        fontWeight: 'bold',
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        margin: SPACING,
    },
    location: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        width: ITEM_WIDTH * 0.8,
        textTransform: 'uppercase',
        position: 'absolute',
        top: SPACING,
        left: SPACING
    },
    daysContainer: {
        position: 'absolute',
        bottom: SPACING,
        left: SPACING,
        width: 52,
        height: 52,
        borderRadius: 30,
        backgroundColor: '#2a2d25',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TourDaysValue: {
        fontWeight: '800',
        color: '#fff',
        fontSize: 18,
    },
    TourDaysLabel: {
        color: '#fff',
        fontSize: 10,
    },
});