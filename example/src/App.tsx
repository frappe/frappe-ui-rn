import * as React from 'react';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge } from 'frappe-ui-rn';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Badge size="sm" variant="solid">
        Gamma
      </Badge>
      <Badge size="md" variant="subtle" theme="red">
        Gamma
      </Badge>
      <Badge size="lg" variant="outline" theme="green">
        Gamma
      </Badge>
      <Badge size="lg" variant="ghost" theme="orange">
        Gamma
      </Badge>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
