import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useVehicleStore } from '@/store/vehicleStore';
import Header from '@/components/Header';

export default function Screen2() {
  const { vehicles } = useVehicleStore();

  return (
    <View style={styles.container}>
      <Header>Veículos</Header>

      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.vehicle}>
            <Text>{item.name}</Text>
            <Text>{item.year}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={{ padding: 20 }}>
            <Text>Nenhum veículo cadastrado</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  vehicle: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
