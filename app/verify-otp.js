import { Text } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
import Card from "../components/Card";
import OTPInput from "../components/OTPInput";
import PrimaryButton from "../components/PrimaryButton";
import { verifyOtp, resendOtp } from "../services/api";
import { useForm } from "../context/FormContext";
import { COLORS } from "../constants/colors";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const router = useRouter();
  const { form } = useForm();

  useEffect(() => {
    if (otp.join("").length === 4) handleVerify();
  }, [otp]);

  const handleVerify = async () => {
    await verifyOtp(form.mobile, otp.join(""));
    router.push("/details-basic");
  };

  return (
    <ScreenWrapper>
      <Card>
        <Text style={{ color: COLORS.text, fontSize: 20 }}>
          Verify OTP
        </Text>

        <Text style={{ color: COLORS.muted, marginTop: 6 }}>
          Enter the code sent to your phone
        </Text>

        <OTPInput otp={otp} setOtp={setOtp} />

        <PrimaryButton
          title="Resend OTP"
          onPress={() => resendOtp(form.mobile)}
        />
      </Card>
    </ScreenWrapper>
  );
}
