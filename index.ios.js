/*
react-native facebook official book demo
*/
'use strict';

var React = require('react-native');


var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json'; 
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
} = React;



var whatever = React.createClass({

    getInitialState:function(){
      return{
        dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2) => row1 != row2,
        }),
        loaded:false,
      };
    },

    componentDidMount:function(){
      this.fetchData();
    },

    render: function() {

      if(!this.state.loaded){
        return this.renderLoadingView();
      }
      return(
        <ListView dataSource = {this.state.dataSource} renderRow = {this.renderMovie} style={styles.listView} /> 
            );
    },

    renderLoadingView:function(){
      return(
        <View style={styles.container}>
          <Text>
            Loading...
          </Text>
        </View>
        );
    },

    renderMovie:function(movie){
      return (
        <View style={styles.container}>
          <Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
    },
    
  

  fetchData:function(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded:true,
        });
      })
      .done();
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    paddingTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height:81,
  },
  listView:{
    paddingTop:10,
    backgroundColor:'#f5fcff',
  }
  
});

AppRegistry.registerComponent('whatever', () => whatever);
