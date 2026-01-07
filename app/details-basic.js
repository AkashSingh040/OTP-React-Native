import { View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from '../context/FormContext';
import PrimaryButton from '../components/PrimaryButton';

export default function DetailsBasic() {
  const { setForm } = useForm();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      <TextInput placeholder="Name" placeholderTextColor="#777"
        onChangeText={(v)=>setForm(p=>({...p,name:v}))}/>
      <TextInput placeholder="Address" placeholderTextColor="#777"
        onChangeText={(v)=>setForm(p=>({...p,address:v}))}/>
      <TextInput placeholder="Pincode" placeholderTextColor="#777"
        keyboardType="numeric"
        onChangeText={(v)=>setForm(p=>({...p,pincode:v}))}/>
      <PrimaryButton title="Next" onPress={() => router.push('/details-sports')} />
    </View>
  );
}
