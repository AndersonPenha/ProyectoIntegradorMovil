import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import ReactDOM from "react-dom";

    const onSuccess = () => {
     const data  = e.data;
     console.log (data);
	}

const QrScreen = () => {
   
    return (
      <View style={styles.container}>
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker={true}
        reactivate={true}
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


