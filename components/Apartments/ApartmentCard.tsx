import React from 'react';
import { View, Text, ScrollView,Image, StyleSheet, TouchableOpacity } from 'react-native';
const apartmentImage = require('../../assets/apartment.png') 

const ApartmentCard = ({ apartment, onPress }: any) => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
      <Image
          source={apartmentImage}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}> {apartment.title}</Text>
        <Text style={styles.text}>Prices Starts From <Text style={styles.span}>{apartment.minPrice}</Text></Text>
        <Text style={styles.text}>Unit Area Starts From <Text style={styles.span}>{apartment.minUnitArea}</Text></Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200, // Adjust as needed
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  span : {
    fontWeight : 'bold'
  }
});

export default ApartmentCard;
