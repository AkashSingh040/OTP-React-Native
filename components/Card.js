import { View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { SPACING } from "../constants/spacing";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: SPACING.lg,
    marginTop: SPACING.xl,
  },
});
