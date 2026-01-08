import { View, TextInput } from "react-native";
import { useRef } from "react";
import { COLORS } from "../constants/colors";

export default function OTPInput({ otp, setOtp }) {
  const refs = useRef([]);

  const handleChange = (v, i) => {
    const next = [...otp];
    next[i] = v;
    setOtp(next);
    if (v && i < 3) refs.current[i + 1]?.focus();
  };

  return (
    <View style={{ flexDirection: "row", gap: 12, marginTop: 24 }}>
      {[0, 1, 2, 3].map((i) => (
        <TextInput
          key={i}
          ref={(el) => (refs.current[i] = el)}
          value={otp[i]}
          maxLength={1}
          keyboardType="number-pad"
          onChangeText={(v) => handleChange(v, i)}
          style={{
            width: 54,
            height: 54,
            borderRadius: 12,
            backgroundColor: COLORS.input,
            textAlign: "center",
            fontSize: 20,
            color: COLORS.text,
          }}
        />
      ))}
    </View>
  );
}
