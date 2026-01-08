import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from '../context/FormContext';
import PrimaryButton from '../components/PrimaryButton';

export default function DetailsBasic() {
  const { form, setForm } = useForm();
  const router = useRouter();

  const isValid =
    form.name?.trim() &&
    form.address?.trim() &&
    form.pincode?.length === 6;

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      {/* Back */}
      <Text onPress={() => router.back()} style={{ color: '#fff', marginBottom: 16 }}>
        ⟪
      </Text>

      <Text style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
        Enter your details
      </Text>

      <Text style={{ color: '#aaa' }}>Name*</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#444', color: '#fff', padding: 12, borderRadius: 8, marginBottom: 16 }}
        placeholder="Your name"
        placeholderTextColor="#777"
        onChangeText={(v) => setForm(p => ({ ...p, name: v }))}
      />

      <Text style={{ color: '#aaa' }}>Address*</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#444', color: '#fff', padding: 12, borderRadius: 8, marginBottom: 12 }}
        placeholder="Address Line 1"
        placeholderTextColor="#777"
        onChangeText={(v) => setForm(p => ({ ...p, address: v }))}
      />

      <TextInput
        style={{ borderWidth: 1, borderColor: '#444', color: '#fff', padding: 12, borderRadius: 8, marginBottom: 16 }}
        placeholder="Address Line 2 (Optional)"
        placeholderTextColor="#777"
      />

      <Text style={{ color: '#aaa' }}>Pin Code*</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#444', color: '#fff', padding: 12, borderRadius: 8 }}
        placeholder="110017"
        placeholderTextColor="#777"
        keyboardType="numeric"
        maxLength={6}
        onChangeText={(v) => setForm(p => ({ ...p, pincode: v }))}
      />

      <View style={{ marginTop: 32 }}>
        <PrimaryButton
          title="Next"
          disabled={!isValid}
          onPress={() => router.push('/details-sports')}
        />
      </View>
    </View>
  );
}
