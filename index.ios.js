
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var whatever = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  welcome: {
    fontSize: 20,
    color: '#b13223',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  
});

AppRegistry.registerComponent('whatever', () => whatever);
