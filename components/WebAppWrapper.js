'use strict';

import React from 'react-native';
import {
  StyleSheet,
  View,
} from 'react-native';

import MathFactsApp from './MathFactsApp';

const WebAppWrapper = React.createClass({
  render: function() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <MathFactsApp />
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  content: {
    height: 480,
    width: 320,
  },
});

module.exports = WebAppWrapper;