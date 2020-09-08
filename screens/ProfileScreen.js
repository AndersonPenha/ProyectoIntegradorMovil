import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Llenar Formulario</Text>
         <TextInput
            placeholder="ID"
        />
         <TextInput
            placeholder="Dia Recoleccion"
        />
         <TextInput
            placeholder="Hora Recoleccion"
        />
         <TextInput
            placeholder="Descripcion"
        />
        <TextInput
            style={styles.input}
            placeholder="Estado"
         />

        <TextInput
            placeholder="User"
        />
        <TextInput
            placeholder="Bote de Basura"
        />
        <Button
          title="Enviar Datos"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
