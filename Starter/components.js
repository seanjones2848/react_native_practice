import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export function Zodiac(props) {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
