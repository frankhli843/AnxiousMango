import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// @ts-ignore
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import middleware from './middleware'
// @ts-ignore
import reducer from './reducers'

const store = createStore(reducer, middleware)

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <Provider store ={store}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Provider>
    );
  }
}
