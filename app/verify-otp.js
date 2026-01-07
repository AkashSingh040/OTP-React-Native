import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { verifyOtp, resendOtp } from '../services/api';
import { useForm } from '../context/FormContext';
import OTPInput from '../components/OTPInput';
import PrimaryButton from '../components/PrimaryButton';

export default function VerifyOtp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const router = useRouter();
  const { form } = useForm();

  useEffect(() => {
    if (otp.join('').length === 4) handleVerify();
  }, [otp]);

  const handleVerify = async () => {
    await verifyOtp(form.mobile, otp.join(''));
    router.push('/details-basic');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>Verify OTP</Text>
      <OTPInput otp={otp} setOtp={setOtp} />
      <PrimaryButton title="Resend OTP" onPress={() => resendOtp(form.mobile)} />
    </View>
  );
}
