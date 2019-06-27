import React, { Component } from 'react';
import { StyleSheet, View, WebView, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { AppLoading, WebBrowser } from 'expo';

import isInternalUrl from './lib/is-internal-url';
const webviewUrl =  'https://alpha.timechimp.app/';

export default class App extends Component {

  onNavigationStateChange = (event) => {
    if (!isInternalUrl(event.url)) {
      this.webview.stopLoading();
      WebBrowser.openBrowserAsync(event.url);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView forceInset={{ bottom: 'always' }}
                      style={{ flex: 1, backgroundColor: '#fff' }}>
          <WebView ref={webview => (this.webview = webview)}
                   source={ { uri: webviewUrl } }
                   onNavigationStateChange={this.onNavigationStateChange}
                   style={ { marginTop: 0, flex: 1 } }
                   bounces={false}
                   renderLoading={() => <AppLoading />}
                   startInLoadingState
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
