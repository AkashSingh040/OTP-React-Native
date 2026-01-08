import { View, Text, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from '../context/FormContext';

export default function Summary() {
  const { form } = useForm();
  const router = useRouter();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#111' }}
      contentContainerStyle={{ padding: 24 }}
    >
      {/* Back */}
      <Text
        onPress={() => router.back()}
        style={{ color: '#fff', fontSize: 18, marginBottom: 16 }}
      >
        ⟪
      </Text>

      {/* Card */}
      <View
        style={{
          backgroundColor: '#1c1c1c',
          borderRadius: 16,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          Your Details
        </Text>

        {/* BASIC DETAILS */}
        <LabelValue label="Name" value={form.name} />
        <LabelValue label="Address" value={form.address} />
        <LabelValue label="Pincode" value={form.pincode} />

        {/* PLAYING STATUS */}
        <LabelValue
          label="Playing Status"
          value={form.playingStatus}
        />

        {/* SPORTS */}
        <Text style={{ color: '#aaa', marginTop: 16, marginBottom: 8 }}>
          Sports you like
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {form.sports.map((sport) => (
            <View
              key={sport}
              style={{
                backgroundColor: '#2a2a2a',
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 16,
                marginRight: 8,
                marginBottom: 8,
              }}
            >
              <Text style={{ color: '#fff' }}>{sport}</Text>
            </View>
          ))}
        </View>

        {/* FEEDBACK */}
        <Text style={{ color: '#aaa', marginTop: 16, marginBottom: 8 }}>
          Feedback
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#333',
            borderRadius: 8,
            padding: 12,
            minHeight: 80,
          }}
        >
          <Text style={{ color: '#fff', lineHeight: 20 }}>
            {form.feedback || 'No feedback provided'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

/* -------- Reusable Label Component -------- */
function LabelValue({ label, value }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ color: '#aaa', marginBottom: 4 }}>
        {label}
      </Text>
      <Text style={{ color: '#fff', fontSize: 15 }}>
        {value || '-'}
      </Text>
    </View>
  );
}
