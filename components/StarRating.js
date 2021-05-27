import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class StarRating extends Component {
    // ratingObj = {
    //     ratings: 3,
    //     views: 34000
    // }
    // // Receive the ratings object from the props
    // let ratingObj = ratingObj;

    // // This array will contain our star tags. We will include this
    // // array between the view tag.
    // let stars = [];
    // // Loop 5 times
    // for (var i = 1; i <= 5; i++) {
    //     // Set the path to filled stars
    //     let path = 'star-circle';
    //     // If ratings is lower, set the path to unfilled stars
    //     if (i > ratingObj.ratings) {
    //         path = 'star-circle-outline';
    //     }
    //     // Push the Image tag in the stars array
    //     stars.push((<MaterialCommunityIcons name={path} color={'green'} size={30} />));
    // }
	render() {
		return (
            <View style={styles.container}>
                <MaterialCommunityIcons name={'star-circle'} color={'black'} size={26} />
                <MaterialCommunityIcons name={'star-circle'} color={'black'} size={26} />
                <MaterialCommunityIcons name={'star-circle'} color={'black'} size={26} />
                <MaterialCommunityIcons name={'star-circle'} color={'black'} size={26} />
                <MaterialCommunityIcons name={'star-circle-outline'} color={'grey'} size={26} />
                <Text>  (12,099)</Text>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
    },
    image: {
        width: 25,
        height: 25
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    }
});