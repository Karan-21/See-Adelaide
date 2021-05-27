import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      backgroundColor: '#e7e7e7',
      elevation: 0, // This is for Android
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#393f5f",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"gray",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color: "white"
    },
    forgot:{
      color:"black",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#393f5f",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    },
    searchbar: {
      elevation: 0, // This is for Android
      backgroundColor: '#e7e7e7',
      marginTop: 30,
      padding: 10,
      alignSelf: 'center',
      borderWidth: 0, // Remove Border
      shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow IOS
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0,
      shadowRadius: 0
    }
  });