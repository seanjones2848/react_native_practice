import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, FlatList, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

import { Cat, ZodiacFeeling, ZodiacTranslate, ListSigns } from './components.js';

export default function App() {
  const[sign, setSign] = useState(0);

  return (
    <ScrollView>
      <ListSigns />
    </ScrollView>
  );
}


// I want to:
// ask for sign
// provide function based on sign
// ability to cancel selection, pick again

// components:
// controller/container
// entry button
// cancel button
// zodiac picker
// zodic fun
