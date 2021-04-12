// I want to:
// ask for sign
// provide function based on sign

// components:
// controller/container
// entry button
// cancel button
// zodiac picker
// zodic fun

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, FlatList, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

import * as data from './data.json';


export default function App() {
  const[sign, setSign] = useState(0);
  const[pick, setPick] = useState(false);

  return (
    <ScrollView>
      {!sign ? (
        <StartButton
        pick={pick}
        sign={sign}
        setPick={setPick}
        setSign={setSign}
      />
      ) : (
        <View style={styles.container}>
          <Text>
            Hello you {sign.name}!!
          </Text>
          <ZodiacFeeling 
            name={sign.name}
            attribute={sign.attribute}
          />
          <ZodiacTranslate
            name={sign.name}
            emoji={sign.emoji}
          />
          <CancelButton
            name={sign.name}
            setSign={setSign}
            setPick={setPick}
          />
        </View>
      )}
    </ScrollView>
  );
}

function StartButton(props) {
  console.log(props)
  return (
    props.sign ? (
      <></>
    ) : (
      props.pick ? (
        <PickZodiacButtons setSign={props.setSign}/>
      ) : (
        <Button
          onPress={() => {
            props.setPick(true)
          }}
          title="Press here to pick your Zodiac!"
        />
      )
    )
  )
}

function PickZodiacButtons(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.signs}
        renderItem={({item}) =>
          <Button
            onPress={() => {
              props.setSign(item)
            }}
            title={item.name}
          />
        }
      />
    </View>
  )
}

function ZodiacFeeling(props) {
    const [isExcited, setIsExcited] = useState(true);
    const excitedString = "Calm this " + props.name + " down!";

    return (
        <View style={styles.container}>
            <Text>
                This {props.name} sign is feeling {props.attribute} and {isExcited ? "Excited!": "Calm."}
            </Text>
            <Button
                onPress={() => {
                    setIsExcited(false);
                }}
                disabled={!isExcited}
                title={isExcited ? excitedString : "Thank you."}
            />
        </View>
    )
}

function ZodiacTranslate(props) {
    const [text, setText] = useState('');
    const inputString = "Try some " + props.name + " translation!";
    return (
        <View style={styles.container}>
            <TextInput
                style={{height: 40}}
                placeholder={inputString}
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontsize: 42}}>
                {text.split(' ').map((word) => word && props.emoji).join(' ')}
            </Text>
        </View>
    )
}

function CancelButton(props) {
  const buttonTitle = "Actually " + props.name + " is not my sign...."

  return (
    <Button
      title={buttonTitle}
      onPress={() => {
        props.setPick(false)
        props.setSign(0)
      }}
    />
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
