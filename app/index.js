import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { sendOtp } from '../services/api';
import { isValidMobile } from '../utils/validators';
import { useForm } from '../context/FormContext';
import PrimaryButton from '../components/PrimaryButton';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { setForm } = useForm();

  const handleSendOtp = async () => {
    if (!isValidMobile(mobile)) {
      setError('Enter valid 10-digit mobile number');
      return;
    }
    await sendOtp(mobile);
    setForm((p) => ({ ...p, mobile }));
    router.push('/verify-otp');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 24 }}>Login</Text>
      <TextInput
        placeholder="Mobile Number"
        placeholderTextColor="#777"
        keyboardType="numeric"
        onChangeText={setMobile}
        style={{
          borderBottomWidth: 1,
          borderColor: '#555',
          marginTop: 20,
          color: '#fff',
        }}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <PrimaryButton title="Send OTP" onPress={handleSendOtp} />
    </View>
  );
}
