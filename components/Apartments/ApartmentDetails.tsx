import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Apartment } from 'types/Apartment';
const apartmentImage = require('../../assets/sodic.png');

export default function ApartmentDetailsComponent({ route }: any) {
    const { apartment } = route.params;

    // Define the table data
    const tableData = [
        ['Title', apartment.title],
        ['Bathrooms', apartment.bathrooms],
        ['Bedrooms', apartment.bedrooms],
        ['Sale Type', apartment.saleType],
        ['Finishing', apartment.finishing],
        ['Delivery In', apartment.deliveryIn],
        // Add more rows as needed
    ];

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={apartmentImage}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Text style={styles.imageText}>{apartment.maxPrice} EGP</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.title}> {apartment.title}</Text>
                    <Text style={styles.text}>Prices Starts From <Text style={styles.span}>{apartment.minPrice}</Text></Text>
                    <Text style={styles.text}>Unit Area Starts From <Text style={styles.span}>{apartment.minUnitArea}</Text></Text>
                    <Text style={styles.text}>Delivery In <Text style={styles.span}>{apartment.deliveryIn}</Text></Text>
                    <Text style={styles.text}>Finishing <Text style={styles.span}>{apartment.finishing}</Text></Text>
                    <Text style={styles.text}>Compound <Text style={styles.span}>{apartment.compound}</Text></Text>
                </View>
                <View style={styles.ButtonRequest}>
                    <View style={styles.button}>
                        <Button  title='Request a meeting' color='rgb(30, 65, 100)' />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ButtonRequest: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center',
        marginTop : 40
    },
    button: {
        width: '50%',
        borderCurve : 'circular'
    },
    imageText: {
        position: 'absolute',
        color: 'white',
        fontSize: 24,
        fontWeight: '900',
        top: 200,
        left: 20
    },
    textContainer: {
        marginTop: 40
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '35%',
    },
    detailsContainer: {
        flex: 1,
        padding: 20,
    },
    text: {
        margin: 6,
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    span: {
        fontWeight: 'bold'
    }
});
