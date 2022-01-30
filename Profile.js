import { StyleSheet, Text, View, StatusBar, Image, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { Profiles, Icons, Themes } from './assets/Themes';

export default function Profile() {

  return (

		<View style={styles.profile}>
			<View style={styles.image_container}>
				<ImageBackground source={Profiles.mtl.image} style={styles.image}>
					<Text style={styles.image_name}>{Profiles.mtl.name}</Text>
					<Text style={styles.image_caption}>{Profiles.mtl.caption}</Text>
				</ImageBackground>
			</View>

			<View style={styles.details}>
				<Text style={styles.take}>My hottest take</Text>
				<View style={styles.audio}>
					<Image source={Icons.player.light} style={styles.play_icon} />
					<Image source={Icons.audioWave.light} style={styles.wave_icon} />
				</View>
			</View>
		</View>

  );
}

const styles = StyleSheet.create({

  profile: {
  	flex: 8,
  	backgroundColor: Themes.light.bg,
  	padding: '7%',
  	alignItems: 'center',
  },

  image_container: {
  	width: '100%',
  	borderRadius: 15,
  	shadowColor: Themes.light.shadows.shadowColor,
  	shadowOpacity: Themes.light.shadows.shadowOpacity,
  	shadowRadius: Themes.light.shadows.shadowRadius,
  	shadowOffset: Themes.light.shadows.shadowOffset,
  	maxWidth: 550,
  },

  image: {
  	aspectRatio: 10/11,
  	borderRadius: 15,
  	overflow: 'hidden',
  	padding: '3%',
  	justifyContent: 'space-between',
  },

  image_name: {
  	fontFamily: 'Sydney', 
  	fontSize: 32,
  	color: Themes.light.textSecondary,
  },

  image_caption: {
  	fontFamily: 'Sydney', 
  	fontSize: 18,
  	color: Themes.light.textSecondary,
  },

  details: {
  	
  	backgroundColor: Themes.light.bgSecondary,
  	marginTop: '7%',
  	height: '25%',
  	borderRadius: 25,
  	shadowColor: Themes.light.shadows.shadowColor,
  	shadowOpacity: Themes.light.shadows.shadowOpacity,
  	shadowRadius: Themes.light.shadows.shadowRadius,
  	shadowOffset: Themes.light.shadows.shadowOffset,
  	padding: '6%',
  	maxWidth: 550,
  },

  take: {
  	fontFamily: 'Sydney', 
  	fontSize: 26,
  	color: Themes.light.text,
  },

  audio: {
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	paddingTop: '4%',
  	paddingBottom: '6%',
  },

  play_icon: {
  	height: '100%',
  	width: '18%',
  	resizeMode: 'contain',
  },

  wave_icon: {
  	height: '100%',
  	width: '80%',
  	resizeMode: 'contain',
  },


});
