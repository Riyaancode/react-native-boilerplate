import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { APP_ROUTES, AppStackNavigatorParamList } from '@/types/routes';

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<AppStackNavigatorParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={APP_ROUTES.HOME} component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
