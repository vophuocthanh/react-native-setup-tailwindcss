import { Slot } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../styles/global.css';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
}
