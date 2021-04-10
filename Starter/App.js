import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

import { Cat, Zodiac } from './components.js';

export default function App() {
  const zodiac_signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Piscies"];
  const zodiac_attribute = ["Spicy", "Sleepy", "Duplicitous", "Emotional", "Loud", "Shy",
    "Judgy", "Fierce", "Adventurous", "Focused", "Etherial", "Fishy"];

  return (
    <ScrollView>
      {zodiac_signs.map((sign, index) => {
        return <Zodiac sign={sign} attribute={zodiac_attribute[index]}/>
      })}
    </ScrollView>
  );
}


