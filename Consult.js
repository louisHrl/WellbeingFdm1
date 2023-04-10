import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';

const therapists = [
  { id: 1, name: 'Dr. John Doe' },
  { id: 2, name: 'Dr. Jane Smith' },
  { id: 3, name: 'Dr. Alice Brown' },
];

const slots = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
];

export default function Consult() {
  const [bookedSlots, setBookedSlots] = useState({});

  const bookSlot = (therapistId, slot) => {
    setBookedSlots((prevBookedSlots) => ({
      ...prevBookedSlots,
      [therapistId]: { ...prevBookedSlots[therapistId], [slot]: true },
    }));
  };

  const isSlotAvailable = (therapistId, slot) => {
    return !bookedSlots[therapistId] || !bookedSlots[therapistId][slot];
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {therapists.map((therapist) => (
        <View key={therapist.id} style={styles.therapist}>
          <Text style={styles.therapistName}>{therapist.name}</Text>
          <View style={styles.slots}>
            {slots.map((slot) => (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.slotButton,
                  isSlotAvailable(therapist.id, slot) ? styles.available : styles.unavailable,
                ]}
                onPress={() => bookSlot(therapist.id, slot)}
                disabled={!isSlotAvailable(therapist.id, slot)}
              >
                <Text style={styles.slotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'orange',
    padding: 20,
  },
  therapist: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  therapistName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slotButton: {
    borderRadius: 5,
    padding: 8,
    margin: 4,
  },
  available: {
    backgroundColor: 'blue',
  },
  unavailable: {
    backgroundColor: 'gray',
  },
  slotText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


