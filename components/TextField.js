import { TextInput } from "react-native";
import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";

export default function TextField(props) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={COLORS.muted}
      style={{
        backgroundColor: COLORS.input,
        borderRadius: 14,
        padding: SPACING.md,
        color: COLORS.text,
        marginTop: SPACING.md,
      }}
    />
  );
}
