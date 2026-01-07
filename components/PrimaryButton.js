import { Pressable, Text } from 'react-native';

export default function PrimaryButton({ title, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#444' : '#3B82F6',
        padding: 14,
        borderRadius: 8,
        marginTop: 20,
      }}
    >
      <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
        {title}
      </Text>
    </Pressable>
  );
}
