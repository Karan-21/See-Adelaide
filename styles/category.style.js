import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      elevation: 0,
      flex: 1,
      backgroundColor: '#e7e7e7',
    },
    detailMain: {
      paddingTop: 30,
      elevation: 0,
      flex: 1,
      backgroundColor: 'white',
    },
    titleStyle: {
      padding: 16,
      fontSize: 20,
      color: 'white',
      backgroundColor: '#307ecc',
    },
    cardStyle: {
        elevation: 0,
        
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
      backgroundColor: '#e7e7e7',
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
    },
    cardHeadingStyle: {
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardHeadingTextStyle: {
      color: '#606070',
      fontWeight: 'bold',
      fontSize: 20
    },
    cardImageStyle: {
      width: 80, 
      height: 80, 
      backgroundColor: 'white', 
      borderRadius: 40, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    childViewTextStyle: {
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    DetailStyle: {
      paddingRight: 20,
      paddingLeft: 20,
    },
  });