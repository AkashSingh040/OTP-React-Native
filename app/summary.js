import { View, Text } from 'react-native';
import { useForm } from '../context/FormContext';

export default function Summary() {
  const { form } = useForm();

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      {Object.entries(form).map(([k, v]) => (
        <Text key={k} style={{ color: '#fff', marginBottom: 8 }}>
          {k}: {v}
        </Text>
      ))}
    </View>
  );
}
