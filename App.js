import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
    <Body/>
    <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}
);