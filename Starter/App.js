import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, FlatList, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

import { Cat, ZodiacFeeling, ZodiacTranslate } from './components.js';

import * as data from './data.json';

export default function App() {
  const[sign, setSign] = useState(0);

  return (
    <ScrollView>
      <ListSigns />
    </ScrollView>
  );
}

function ListSigns() {
  return (
    <>
      <FlatList
        data={data.signs}
        renderItem={({item}) =>
          <Text>{item.name} + {item.emoji}</Text>
        }
      />
    </>
  )
}
