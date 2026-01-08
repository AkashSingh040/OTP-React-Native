import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from '../context/FormContext';
import PrimaryButton from '../components/PrimaryButton';

export default function Feedback() {
  const { form, setForm } = useForm();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      <Text onPress={() => router.back()} style={{ color: '#fff', marginBottom: 16 }}>
        ⟪
      </Text>

      <Text style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}>
        Share Your Feedback
      </Text>

      <Text style={{ color: '#aaa', marginBottom: 8 }}>Feedback</Text>

      <TextInput
        multiline
        maxLength={1000}
        placeholder="Write your suggestion"
        placeholderTextColor="#777"
        style={{
          height: 160,
          borderWidth: 1,
          borderColor: '#444',
          borderRadius: 8,
          padding: 12,
          color: '#fff',
          textAlignVertical: 'top',
        }}
        onChangeText={(v) => setForm(p => ({ ...p, feedback: v }))}
      />

      <Text style={{ color: '#888', alignSelf: 'flex-end', marginTop: 4 }}>
        {form.feedback?.length || 0}/1000
      </Text>

      <View style={{ marginTop: 32 }}>
        <PrimaryButton
          title="Submit"
          disabled={!form.feedback}
          onPress={() => router.push('/summary')}
        />
      </View>
    </View>
  );
}
