import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from '../Navigation';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <StatusBar style="light"/>
      <Navigation/>
    </Provider>
  );
}

export default App;

