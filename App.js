import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  BackHandler,
  Alert
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import { WebView } from 'react-native-webview';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()

    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();

  }, [])

  useEffect(() => {
    
  }, []);

  return (
    <>
    <SafeAreaView>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
    </SafeAreaView>
      <WebView
        source={{ uri: 'https://logodesire.com/login?mobileView=true' }}
      />
    
    </>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
