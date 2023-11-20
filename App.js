import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.container} source={{ uri: 'https://aie.ac' }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
    margin: 0,
  },
});
