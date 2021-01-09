import React from "react";
import { Text } from "react-native";
import { AuthProvider } from "./AuthProvider";
import Navigation from "./navigation";

export default () => (
  <AuthProvider>
    <Navigation />
  </AuthProvider>
);
