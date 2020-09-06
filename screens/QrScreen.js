import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QrScreen = () => {
    return (
      <View style={styles.container}>
        <Text>QrScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default QrScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
