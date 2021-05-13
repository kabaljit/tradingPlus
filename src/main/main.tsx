import React from 'react';

import { AuthProvider } from './AuthProvider';
import Navigation from './navigation';

export default () => (
  <AuthProvider>
    <Navigation />
  </AuthProvider>
);
