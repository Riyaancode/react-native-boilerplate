import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '@/screens/signin';
import { APP_ROUTES, AppStackNavigatorParamList } from '@/types/routes';

const Tab = createBottomTabNavigator<AppStackNavigatorParamList>();

type IconComponentType = typeof Feather | typeof Ionicons;

const renderTabBarIcon = (
  iconName: string,
  IconComponent: IconComponentType,
  color: string,
  size: number,
) => {
  const IconElement = IconComponent as unknown as React.ComponentType<{
    name: string;
    size: number;
    color: string;
  }>;

  return <IconElement name={iconName} size={size} color={color} />;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={APP_ROUTES.HOME}>
      <Tab.Screen
        name={APP_ROUTES.PROFILE}
        component={Login}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon('person', Ionicons, color, size),
        }}
      />
      <Tab.Screen
        name={APP_ROUTES.HOME}
        component={Login}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon('home', Ionicons, color, size),
        }}
      />

      <Tab.Screen
        name={APP_ROUTES.SETTINGS}
        component={Login}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon('settings', Ionicons, color, size),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
