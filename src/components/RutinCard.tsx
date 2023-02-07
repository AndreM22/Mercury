import React from "react"
import { Button, Input } from '@rneui/themed';
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { collection, addDoc, setDoc, doc } from 'firebase/firestore/lite';
import { db } from "../services/firebase"
import { v4 as uuidv4 } from 'uuid';
import { Text } from "@rneui/base";
import { useFormik } from "formik";
import * as YUP from "yup"

export const RutinCard = (props: any) => {
    const { navigation, name } = props;

    const initialValues = {
        series: null,
        repeticiones: null,
        peso: 0,
    }

    const registrarRutina = async (series: number, repeticiones: number, peso: number) => {
        try{
            console.log("Agregando a firebase: ",db);
            const id = uuidv4();
            console.log(id);
            await setDoc(doc(db,'/rutins',id), {
                nombre:name,
                series:series,
                repeticiones:repeticiones,
                peso:peso,
                id,
            });
        } catch (e) {
            console.log("Error adding document: ",e)
        }
    }


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:
            YUP.object({
                series: YUP.number()
                    .required("El número de series es requerido"),
                repeticiones: YUP.number()
                    .required("El número de repeticiones es requerido"),
                peso: YUP.number()
                    .notRequired()
            })
        ,
        validateOnChange: false,
        onSubmit: (formValue) => {
            //TODO: Login
            console.log("todo bien en el registro de rutina", formValue);
            registrarRutina(formValue.series,formValue.repeticiones,formValue.peso);
        }
    }
    )

    return (
        <View style={styles.container}>
            <View style={styles.campos}>
                <Input
                    placeholder='Series'
                    onChangeText={(text) => formik.setFieldValue("series", text)}
                    errorMessage={formik.errors.series}
                />
            </View>
            <View style={styles.campos}>
                <Input
                    placeholder='Repeticiones'
                    onChangeText={(text) => formik.setFieldValue("repeticiones", text)}
                    errorMessage={formik.errors.repeticiones}
                />
            </View>
            <View style={styles.campos}>
                <Input
                    placeholder='Peso en kg'
                    onChangeText={(text) => formik.setFieldValue("peso", text)}
                    errorMessage={formik.errors.peso}
                />
            </View>

            <Button
                title="Agregar Rutina"
                buttonStyle={{
                    backgroundColor: '#DC4A00',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                    backgroundColor:"white",
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold', color: "white" }}

                onPress={formik.handleSubmit}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 330,
        paddingVertical:10,
        backgroundColor: "white",
        marginVertical: 30,
        elevation:5

    },
    campos: {
        height: 50,
        width: 300,
        marginVertical: 20,
    }
})