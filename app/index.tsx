import { Text, View, StyleSheet } from 'react-native';

export default function Index(): JSX.Element {
	return (
		<View style={styles.container}>
			<Text>Share Recipes App</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
