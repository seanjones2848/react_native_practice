import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Button } from 'react-native';

export function Zodiac(props) {
    const [isExcited, setIsExcited] = useState(true);
    const [text, setText] = useState('');
    const excitedString = "Calm this " + props.sign + " down!";
    const inputString = "Try some " + props.sign + " translation!";
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
            <TextInput
                style={{height: 40}}
                placeholder={inputString}
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontsize:42}}>
                {text.split(' ').map((word) => word && props.emoji).join(' ')}
            </Text>
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
