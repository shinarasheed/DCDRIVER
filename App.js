import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import BottomTabNavigator from './src/navigation/BottomTab';
import appTheme from './src/constants/theme';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: 'transparent',
    },
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appTheme.COLORS.white}
      />
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
