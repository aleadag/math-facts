'use strict';

import React from 'react-native';
import {
  StyleSheet,
  View,
} from 'react-native';

import MathFactsStore from '../stores/MathFactsStore';
import StateFromStoreMixin from '../lib/state-from-store-mixin.js';

import Navigation from './Navigation';

const MathFactsApp = React.createClass({
  mixins: [
    StateFromStoreMixin({
      data: {
        store: MathFactsStore,
        fetch: (store) => {
          return store.getStoreData();
        }
      },
    })
  ],
  render: function() {
    return (
      <View style={styles.appWrapper}>
        <Navigation {...this.state.data} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
});

module.exports = MathFactsApp;