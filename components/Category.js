// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from '../styles/category.style';
import all from '../images/all.png';
import beach from '../images/beach.png';
import shopping from '../images/shopping.png';
import hill from '../images/hills.png';
import museum from '../images/museum_filled.png';
import restaurant from '../images/restaurant.png';
import {Card} from 'react-native-elements';

const Category = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <SingleRow />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
export default Category;

const SingleRow = () => {

const slides = [
    {
    key: '11 MB',
    text: 'FREE ',
    title: 'All',
    uri: Image.resolveAssetSource(all).uri,
    backgroundColor: '#4A89FF',
    },
    {
    key: '52 MB',
    title: 'Beach',
    uri: Image.resolveAssetSource(beach).uri,
    backgroundColor: '#febe29',
    },
    {
    key: '14 MB',
    text: 'FREE',
    title: 'Shopping',
    uri: Image.resolveAssetSource(shopping).uri,
    backgroundColor: '#22bcb5',
    },
    {
    key: '45 MB',
    title: 'Hill',
    uri: Image.resolveAssetSource(hill).uri,
    backgroundColor: '#3395ff',
    },
    {
    key: '33 MB',
    title: 'Museum',
    text: 'FREE',
    uri: Image.resolveAssetSource(museum).uri,
    backgroundColor: '#f6437b',
    },
    {
    key: '77 MB',
    title: 'Restaurant',
    uri: Image.resolveAssetSource(restaurant).uri,
    backgroundColor: '#febe29',
    },
];
  
    return (
      <View>
        <Card containerStyle={styles.cardStyle}>
          <View style={styles.cardHeadingStyle}>
            <Text style={ styles.cardHeadingTextStyle }>
              Category
            </Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {slides.map((item) => (
                <View style={{margin: 5}}>
                <View style = {{width: 80, height: 80, backgroundColor: item.backgroundColor, borderRadius: 40, alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    source={{uri: item.uri}}
                    style={{width: 40, height: 40, margin: 10 }}
                  />
                </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#494949',
                        fontWeight: '200',
                      }}
                      onPress={() => {
                        alert('Title ' + item.title + ' Clicked');
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.childViewTextStyle}>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </Card>
      </View>
    );
  };

