import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from '../context/FormContext';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

const PLAYING_STATUS = [
  'Looking for Playground',
  'Looking for Player',
];

const SPORTS = [
  'Archery',
  'Badminton',
  'Basketball',
  'Boxing',
  'Cricket',
];

export default function DetailsSports() {
  const { form, setForm } = useForm();
  const router = useRouter();

  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showSportsDropdown, setShowSportsDropdown] = useState(false);

  const isValid =
    form.playingStatus &&
    form.sports &&
    form.sports.length > 0;

  /* ---------- ADD SPORT ---------- */
  const addSport = (sport) => {
    setForm((prev) => {
      if (prev.sports.includes(sport)) return prev;
      return {
        ...prev,
        sports: [...prev.sports, sport],
      };
    });
  };

  /* ---------- REMOVE SPORT ---------- */
  const removeSport = (sport) => {
    setForm((prev) => ({
      ...prev,
      sports: prev.sports.filter((s) => s !== sport),
    }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#111', padding: 24 }}>
      {/* Back */}
      <Text
        onPress={() => router.back()}
        style={{ color: '#fff', marginBottom: 16, fontSize: 18 }}
      >
        ⟪
      </Text>

      <Text style={{ color: '#fff', fontSize: 18, marginBottom: 24 }}>
        Enter your details
      </Text>

      {/* PLAYING STATUS */}
      <Text style={{ color: '#aaa', marginBottom: 8 }}>
        Playing Status
      </Text>

      <Pressable
        onPress={() => setShowStatusDropdown(!showStatusDropdown)}
        style={{
          borderWidth: 1,
          borderColor: '#444',
          borderRadius: 8,
          padding: 12,
        }}
      >
        <Text style={{ color: form.playingStatus ? '#fff' : '#777' }}>
          {form.playingStatus || 'Select status'}
        </Text>
      </Pressable>

      {showStatusDropdown &&
        PLAYING_STATUS.map((status) => (
          <Pressable
            key={status}
            onPress={() => {
              setForm((p) => ({ ...p, playingStatus: status }));
              setShowStatusDropdown(false);
            }}
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderBottomWidth: 1,
              borderColor: '#eee',
            }}
          >
            <Text>{status}</Text>
          </Pressable>
        ))}

      {/* SPORTS */}
      <Text style={{ color: '#aaa', marginTop: 24, marginBottom: 8 }}>
        Sport you like *
      </Text>

      {/* Selected Chips */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 }}>
        {form.sports.map((sport) => (
          <Pressable
            key={sport}
            onPress={() => removeSport(sport)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#2a2a2a',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 16,
              marginRight: 8,
              marginBottom: 8,
            }}
          >
            <Text style={{ color: '#fff', marginRight: 6 }}>
              {sport}
            </Text>
            <Text style={{ color: '#aaa' }}>✕</Text>
          </Pressable>
        ))}
      </View>

      {/* Dropdown */}
      <Pressable
        onPress={() => setShowSportsDropdown(!showSportsDropdown)}
        style={{
          borderWidth: 1,
          borderColor: '#444',
          borderRadius: 8,
          padding: 12,
        }}
      >
        <Text style={{ color: '#777' }}>
          Select sports
        </Text>
      </Pressable>

      {showSportsDropdown &&
        SPORTS.map((sport) => {
          const selected = form.sports.includes(sport);
          return (
            <Pressable
              key={sport}
              onPress={() => addSport(sport)}
              disabled={selected}
              style={{
                backgroundColor: '#fff',
                padding: 12,
                opacity: selected ? 0.4 : 1,
                borderBottomWidth: 1,
                borderColor: '#eee',
              }}
            >
              <Text>{sport}</Text>
            </Pressable>
          );
        })}

      {/* NEXT */}
      <View style={{ marginTop: 40 }}>
        <PrimaryButton
          title="Next"
          disabled={!isValid}
          onPress={() => router.push('/feedback')}
        />
      </View>
    </View>
  );
}
