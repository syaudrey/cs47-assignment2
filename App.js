import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Profiles, Icons, Themes } from './assets/Themes';

import Navigation from './Navigation';
import Profile from './Profile';
import Bottom from './Bottom';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/


  return (

  	<View style={styles.container}>

  		<Navigation />
  		<Profile />
  		<Bottom />

  	</View>
    
  );
}

const styles = StyleSheet.create({

  container: {
  	flex: 1,
  	backgroundColor: Themes.light.bg,
  	paddingTop: 40,	// Extra padding for status bar; did not use SafeAreaView since it also creates padding from bottom edge
  },

});
