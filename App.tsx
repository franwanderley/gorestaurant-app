import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Router from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <Router/>
    </>
  );
}
