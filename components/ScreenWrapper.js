import { View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";

export default function ScreenWrapper({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
  },
});
