// ApartmentsComponent.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ApartmentCard from './ApartmentCard';
import { getAllApartments } from '../../services/ApartmentServices';
import { Apartment } from '../../types/Apartment';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ApartmentDetailsComponent from './ApartmentDetails';

const ApartmentsComponent = () => {
  const navigation = useNavigation();

  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const data = await getAllApartments(currentPage);
        setApartments(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
      }
    };

    fetchApartments();
  }, [currentPage]);

  const handlePress = (apartment : Apartment) => {
    navigation.navigate('ApartmentDetails' as never, {apartment});
  };

  return (
    <ScrollView>
    <View style={styles.card}>
      <Text style={styles.text}>Apartments List</Text>
      {apartments.map((apartment : Apartment) => (
        <ApartmentCard key={apartment._id} apartment={apartment} onPress={()=> handlePress(apartment)} />
      ))}
    </View>
    </ScrollView>
  );
    
  }

  const styles = StyleSheet.create({
    card: {
      paddingTop : 60
    },
    text : {
      fontSize : 24,
      fontWeight : '700',
      marginBottom : 20,
      marginTop : 20
    }
  })
  

export default ApartmentsComponent;
