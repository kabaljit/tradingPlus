import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const isReadyRef = React.createRef<boolean>();

function navigate(routeName: string, params?: Record<string, unknown>) {
  if (navigationRef.current) {
    navigationRef.current?.navigate(
        routeName,
        params,
    );
  }
}

const goBack = () => navigationRef.current?.goBack();

export default { navigationRef, navigate, goBack };
