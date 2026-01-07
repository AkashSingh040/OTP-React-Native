import { View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from '../context/FormContext';
import PrimaryButton from '../components/PrimaryButton';

export default function DetailsSports() {
  const { setForm } = useForm();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      <TextInput placeholder="Playing Status" placeholderTextColor="#777"
        onChangeText={(v)=>setForm(p=>({...p,playingStatus:v}))}/>
      <TextInput placeholder="Sport" placeholderTextColor="#777"
        onChangeText={(v)=>setForm(p=>({...p,sport:v}))}/>
      <PrimaryButton title="Next" onPress={() => router.push('/feedback')} />
    </View>
  );
}
