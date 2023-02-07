import React, { useEffect, useState, type PropsWithChildren } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { ButtonMercury } from '../components/ButtonMercury';
import { PreviusRutinCard } from '../components/PreviusRutinCard';
import { RutinCard } from '../components/RutinCard';
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { ExerciseContext } from '../context/exerciseContext';
import { data } from '../data/data';
import { RutinInterface } from '../interfaces/RutinInterface';

export const RutinScreen = (props: any) => {
    const { navigation } = props;

    const [rutinList, setRutinList] = useState<RutinInterface[]>([]);

    const { name } = React.useContext(ExerciseContext);

    useEffect(() => {
        leerDatos();
    }, []);

    const leerDatos = async () => {
        const querySnapshot = await getDocs(collection(db, "rutins"));
        console.log(querySnapshot)
        console.log(querySnapshot.docs[0].data())

        const rutinList2: RutinInterface[] = []
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
        // });
        querySnapshot.forEach((doc) => {
            console.log(doc.data().nombre);
            console.log(name);
            if (doc.data().nombre === name) {
                const obj: RutinInterface = {
                    nombre: "",
                    series: 0,
                    repeticiones: 0,
                    peso: 0

                }
                obj.nombre = doc.data().nombre
                obj.series = doc.data().series
                obj.repeticiones = doc.data().repeticiones
                obj.peso = doc.data().peso

                rutinList2.unshift(obj);
            }
        })
        console.log("Lista");
        setRutinList(rutinList2);
        console.log(rutinList);
    }


    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <RutinCard name={name}/>


            <FlatList
                data={rutinList}
                keyExtractor={(rutin, index) => rutin.nombre + index}
                showsVerticalScrollIndicator={false}

                renderItem={({ item }) => <PreviusRutinCard rutin={item} navigation={navigation} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
})