import { View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from '../context/FormContext';
import PrimaryButton from '../components/PrimaryButton';

export default function Feedback() {
  const { setForm } = useForm();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      <TextInput
        placeholder="Your feedback"
        placeholderTextColor="#777"
        multiline
        onChangeText={(v)=>setForm(p=>({...p,feedback:v}))}
      />
      <PrimaryButton title="Submit" onPress={() => router.push('/summary')} />
    </View>
  );
}
