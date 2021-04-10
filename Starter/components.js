import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export function Zodiac(props) {
    return (
        <View style={styles.container}>
            <Text>
                This {props.sign} sign is feeling {props.attribute}!
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
