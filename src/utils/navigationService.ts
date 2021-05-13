import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const isReadyRef = React.createRef<boolean>();

const navigate = (routeName: string, params?: Record<string, unknown>) => {
  if (navigationRef.current) {
    navigationRef.current?.navigate(routeName, params);
  }
};

const replace = (name: string, params?: object | undefined) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

const goBack = () => navigationRef.current?.goBack();

export default { navigationRef, navigate, goBack, replace };
