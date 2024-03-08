import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Confetti from './Confetti';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    cinzel: require("./assets/fonts/Cinzel-SemiBold.ttf"),
    kaushanScript: require("./assets/fonts/KaushanScript-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <Confetti />
  );
}


