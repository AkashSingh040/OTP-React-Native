import { Text } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
import Card from "../components/Card";
import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";
import { sendOtp } from "../services/api";
import { isValidMobile } from "../utils/validators";
import { useForm } from "../context/FormContext";
import { COLORS } from "../constants/colors";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setForm } = useForm();

  const handleSendOtp = async () => {
    if (!isValidMobile(mobile)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }
    await sendOtp(mobile);
    setForm((p) => ({ ...p, mobile }));
    router.push("/verify-otp");
  };

  return (
    <ScreenWrapper>
      <Card>
        <Text style={{ color: COLORS.text, fontSize: 22, fontWeight: "600" }}>
          Login to continue
        </Text>

        <Text style={{ color: COLORS.muted, marginTop: 6 }}>
          Join players near you and get in the game
        </Text>

        <TextField
          placeholder="Mobile Number"
          keyboardType="numeric"
          onChangeText={setMobile}
        />

        {error && <Text style={{ color: "red" }}>{error}</Text>}

        <PrimaryButton title="Send OTP" onPress={handleSendOtp} />
      </Card>
    </ScreenWrapper>
  );
}
