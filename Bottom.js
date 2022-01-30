import { StyleSheet, Text, View, StatusBar, Image, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { Profiles, Icons, Themes } from './assets/Themes';

export default function Bottom() {

  return (

		<View style={styles.bottom}>
			<View style={styles.bottom_actions}>
				<Image source={Icons.discover.light} style={styles.bottom_icons} />
				<Text style={styles.bottom_text}>Discover</Text>
			</View>
			<View style={styles.bottom_actions}>
				<Image source={Icons.heart.light} style={styles.bottom_icons} />
				<Text style={styles.bottom_text}>Matches</Text>
			</View>
			<View style={styles.bottom_actions}>
				<Image source={Icons.messages.light} style={styles.bottom_icons} />
				<Text style={styles.bottom_text}>DMs</Text>
			</View>
		</View>
    
  );
}

const styles = StyleSheet.create({

  bottom: {
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'center',
  	backgroundColor: Themes.light.navigation,
  },

  bottom_actions: {
  	height: '100%',
  	width: '25%',
  	justifyContent: 'center',
  	alignItems: 'center',
  	padding: '4%',
  },

  bottom_icons: {
  	height: '70%',
  	resizeMode: 'contain',
  },

  bottom_text: {
  	fontFamily: 'Sydney', 
  	fontSize: 18,
  	color: Themes.light.textSecondary,
  	paddingTop: '12%',
  }

});
