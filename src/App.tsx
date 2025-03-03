import React from 'react';
import AppNavigator from './navigation/Navigation';
import { ThemeProvider, createTheme } from "@rneui/themed";

const myTheme = createTheme({
  lightColors: {
    primary: "#2ECC71", // emerald
    secondary: "#778DA9", // silverLakeBlue
    background: "#E0E1DD", // platinum
    text: "#1B263B", // oxfordBlue
    error: "#B00020", // madder (alert color)
  },
  darkColors: {
    primary: "#2ECC71", // emerald
    secondary: "#778DA9", // silverLakeBlue
    background: "#1B263B", // oxfordBlue
    text: "#E0E1DD", // platinum
    error: "#B00020", // madder (alert color)
  },
  mode: "light", // Cambiar a "dark" para modo oscuro
});

export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <AppNavigator />;
    </ThemeProvider>
  )
}