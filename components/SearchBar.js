import * as React from 'react';
import styles from '../styles/loginScreen.style';
import { SearchBar } from 'react-native-elements'

export default class Search extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = (search) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <SearchBar
          searchIcon = { true }
          containerStyle = { styles.searchbar }
          inputContainerStyle = {{ width: '100%', backgroundColor: '#DDE8EE', borderRadius: 25 }}
          clearButtonMode = 'while-editing'
          round = { true }
          lightTheme = { true }
          placeholder="Search places"
          onChangeText={this.updateSearch}
          value={search}
          showLoading={true}
        />
      );
    }
  }