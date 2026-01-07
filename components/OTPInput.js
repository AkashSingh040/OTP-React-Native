import { View, TextInput } from 'react-native';
import { useRef } from 'react';

export default function OTPInput({ otp, setOtp }) {
  const refs = useRef([]);

  const handleChange = (value, index) => {
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 3) refs.current[index + 1]?.focus();
  };

  return (
    <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
      {[0, 1, 2, 3].map((i) => (
        <TextInput
          key={i}
          ref={(el) => (refs.current[i] = el)}
          maxLength={1}
          keyboardType="number-pad"
          value={otp[i]}
          onChangeText={(v) => handleChange(v, i)}
          style={{
            borderWidth: 1,
            borderColor: '#888',
            width: 50,
            height: 50,
            textAlign: 'center',
            fontSize: 18,
            color: '#fff',
          }}
        />
      ))}
    </View>
  );
}
