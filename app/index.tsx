import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from 'react-native'
import Header from '@/components/Header'
import { useVehicleStore } from '@/store/vehicleStore';
import { useState } from 'react';
import { Link } from 'expo-router';

const VEHICLE_FORM_DATA = {
  name: '',
  year: '',
}

export default function Home() {
  const [formData, setFormData] = useState(VEHICLE_FORM_DATA);

  const {
    vehicles,
    addVehicle,
  } = useVehicleStore();

  const handleAddVehicle = () => {
    if (!formData.name || !formData.year) {
      return;
    }

    addVehicle({
      id: Math.random(),
      name: formData.name,
      year: Number(formData.year),
    });

    setFormData(VEHICLE_FORM_DATA);
  }

  return (
    <View style={styles.container}>
      <Header>Formulário de veículos</Header>

      <View style={styles.status}>
        <Text>Veículos cadastrados: {vehicles.length}</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          value={formData.name}
          placeholder="Nome do veículo"
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        <TextInput
          style={styles.textInput}
          value={formData.year}
          placeholder="Ano do veículo"
          onChangeText={(text) => setFormData({ ...formData, year: text })}
          keyboardType="number-pad"
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#15151599' : '#151515' }
          ]}
          onPress={handleAddVehicle}
        >
          <Text style={styles.buttonText}>Adicionar veículo</Text>
        </Pressable>
      </View>

      <View style={styles.navigationButton}>
        <Link href="/vehicles">Ver veículos cadastrados</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 20,
  },
  status: {
    paddingHorizontal: 20,
  },
  form: {
    paddingHorizontal: 20,
    gap: 20,
  },
  textInput: {
    height: 40,
    margin: 0,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#bababa',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    fontWeight: 'bold',
    backgroundColor: '#151515',
  },
  buttonText: {
    color: 'white',
  },
  vehicle: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navigationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});
