import { StyleSheet, Text, View, StatusBar, Image, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { Profiles, Icons, Themes } from './assets/Themes';


export default function Navigation() {

  return (

	  <View style={styles.navigation}>
	  	<Image source={Icons.menu.light} style={styles.top_icons} />
  		<Text style={styles.logo}>ensom</Text>
  		<Image style={styles.top_icons} source={Icons.sun} />
		</View>
    
  );
}

const styles = StyleSheet.create({

  navigation: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	height: '6%',
  	backgroundColor: Themes.light.bg,
  	paddingLeft: '7%',
  	paddingRight: '7%',
  },

  logo: {
  	fontFamily: 'Sydney-Bold', 
  	fontSize: 32,
  	color: Themes.light.text,
  },

  top_icons: {
  	height: '100%',
  	width: '15%',
  	resizeMode: 'contain',
  },

});
