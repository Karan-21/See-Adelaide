// import React in our code
import React from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Search from '../components/SearchBar';
import { styles } from '../styles/category.style';
import all from '../images/all.png';
import beach from '../images/beach.png';
import shopping from '../images/shopping.png';
import hill from '../images/hills.png';
import museum from '../images/museum_filled.png';
import restaurant from '../images/restaurant.png';
import first from '../images/glenelg_1.jpg';
import second from '../images/sa_museum.jpg';
import third from '../images/burnside_village.jpg';
import fourth from '../images/mount_lofty.jpg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';

export function Home({ navigation }) {
  const categories = [
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

  const rec_list = [
    {
      key: '11 MB',
      text: 'FREE ',
      title: 'Glenelg',
      uri: Image.resolveAssetSource(first).uri,
    },
    {
      key: '52 MB',
      title: 'SA Museum',
      text: 'FREE ',
      uri: Image.resolveAssetSource(second).uri,
    },
    {
      key: '14 MB',
      text: 'FREE',
      title: 'Burnside Village',
      uri: Image.resolveAssetSource(third).uri,
    },
    {
      key: '45 MB',
      title: 'Mount Lofty',
      text: 'FREE ',
      uri: Image.resolveAssetSource(fourth).uri,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
        <Search />
      <ScrollView>
        <Card containerStyle={styles.cardStyle}>
          <View style={styles.cardHeadingStyle}>
            <Text style={styles.cardHeadingTextStyle}>
              Category
            </Text>
          </View>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {categories.map((item) => (
                <View style={{ margin: 5 }}>
                  <View style={styles.cardImageStyle}>
                    <Image
                      source={{ uri: item.uri }}
                      style={{ width: 40, height: 40, margin: 10 }} />
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
                      } }>
                      {item.title}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </Card>
        <Card containerStyle={styles.cardStyle}>
          <View style={styles.cardHeadingStyle}>
            <Text style={styles.cardHeadingTextStyle}>
                            Recommended for you
            </Text>
          </View>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
              {rec_list.map((item, key) => (
                <View style={{ margin: 5, backgroundColor: 'white', borderRadius: 20 }}>
                  <TouchableOpacity  onPress={() => navigation.navigate('DestinationDetail')}>
                  <Image
                    key={key}
                    source={{ uri: item.uri }}
                    style={{ width: '100%', height: 140, borderRadius: 20 }} />
                  </TouchableOpacity>
                  <View style={styles.childViewTextStyle}>
                    <Text
                      style={{
                        color: '#494949',
                        fontWeight: '200',
                      }}
                      onPress={() => {
                        alert('Title ' + item.title + ' Clicked');
                      } }>
                      {item.title}
                    </Text>
                    <MaterialCommunityIcons name="star-circle" color={'black'} size={26} />
                    <Text
                      style={{
                        color: '#606070',
                        fontWeight: '200',
                      }}>
                      {item.key}
                    </Text>
                    <Text style={{ color: '#228B22' }}>
                      {item.text}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}