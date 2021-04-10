import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

import { Cat, Zodiac } from './components.js';

export default function App() {
  const zodiac_signs = ["Aries", "Taurus", "Gemini", "Cancer",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Piscies"];

  return (
    <ScrollView>
      {zodiac_signs.map((sign) => {
        return <Zodiac sign={sign}/>
      })}
    </ScrollView>
  );
}


