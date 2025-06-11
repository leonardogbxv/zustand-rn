import { View, Text, StyleSheet } from 'react-native'

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#151515',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    letterSpacing: 1
  }
});
