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
import first from '../images/glenelg_1.jpg';
import second from '../images/glenelg_2.jpg';
import third from '../images/glenelg_3.jpg';
import fourth from '../images/glenelg_4.jpeg';
import StarRating from '../components/StarRating';
import { Divider } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import Map from '../components/Map'

export const Detail = ({navigation}) => {
  const rec_list = [
    {
      Title: 'Glenelg',
      Summary: 'Situated 20 minutes west of the city and accessible by tram. Glenelg offers a range of exciting activities, such as beach volleyball, swimming, walking trails, bike hire, reserves and many other fun activities',
      MainAttraction: 'Jetty Road - a large shopping precinct',
      Cost: ' Entry to Glenelg is free at all times',
      Travel: 'The Map module goes here',
      uri: Image.resolveAssetSource(first).uri,
    },
  ];
  const images = [
    require('../images/glenelg_1.jpg'),
    require('../images/glenelg_2.jpg'),
    require('../images/glenelg_3.jpg'),
    require('../images/glenelg_4.jpeg'),
  ];
  return (
    <SafeAreaView style={styles.detailMain}>
      <View style = {{backgroundColor: 'white'}}>
          <SliderBox images={images}/>
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
                <View style={{ backgroundColor: 'white' }}>
                  <View style = {styles.DetailStyle}>
                    <Text style = {{marginTop:5, marginBottom:5, fontWeight: 'bold',fontSize: 30}}>
                      {rec_list[0].Title}
                    </Text>
                    <StarRating />
                  </View>
                  <Divider style={{ marginTop:5, marginBottom:10, backgroundColor: 'gray' }} />
                </View>
            </ScrollView>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
                <View style={{ margin: 5, backgroundColor: 'white', borderRadius: 20 }}>
                <View style={styles.cardHeadingStyle}>
                  <Text style={styles.cardHeadingTextStyle}>
                                  Summary
                  </Text>
                </View>
                  <View style={styles.childViewTextStyle}>
                    <Text>
                      {rec_list[0].Summary}
                    </Text>
                  </View>
                  <View style={styles.cardHeadingStyle}>
                  <Text style={styles.cardHeadingTextStyle}>
                                  Main Attractions
                  </Text>
                </View>
                  <View style={styles.childViewTextStyle}>
                    <Text>
                      {rec_list[0].MainAttraction}
                    </Text>
                  </View>
                  <View style={styles.cardHeadingStyle}>
                  <Text style={styles.cardHeadingTextStyle}>
                                  Cost
                  </Text>
                </View>
                  <View style={styles.childViewTextStyle}>
                    <Text>
                      {rec_list[0].Cost}
                    </Text>
                  </View>
                  <View style={styles.cardHeadingStyle}>
                  <Text style={styles.cardHeadingTextStyle}>
                                  Travel
                  </Text>
                </View>
                  <View style={styles.childViewTextStyle}>
                    <Text>
                      {rec_list[0].Travel}
                    </Text>
                    <Map />
                  </View>
                </View>
            </ScrollView>
          </View>
      </View>
    </SafeAreaView>
  );
}