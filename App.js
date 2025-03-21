import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './btngay18-03/UserContext';
import RootRouter from './router';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <RootRouter />
    </UserProvider>
  );
};

export default App;