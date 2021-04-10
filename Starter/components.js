import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Button, Image, FlatList } from 'react-native';

import * as data from './data.json';

export function ZodiacFeeling(props) {
    const [isExcited, setIsExcited] = useState(true);
    const excitedString = "Calm this " + props.sign + " down!";

    return (
        <View style={styles.container}>
            <Text>
                This {props.sign} sign is feeling {props.attribute} and {isExcited ? "Excited!": "Calm."}
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

export function ZodiacTranslate(props) {
    const [text, setText] = useState('');
    const inputString = "Try some " + props.sign + " translation!";
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

export function ListSigns() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data.signs}
          renderItem={({item}) =>
            <Text>{item.name} + {item.emoji}</Text>
          }
        />
      </View>
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
