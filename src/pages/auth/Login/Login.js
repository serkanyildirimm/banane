import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import styles from "./Login.style";
import Input from '../../../components/Input/Input';
import Button from "../../../components/Button/Button";
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth'

import { showMessage, hideMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import Icon from 'react-native-vector-icons/Fontisto';


const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false);

    const initialValues = {
        usermail: '',
        password: ''
    }

    const handleSignUp = () => {
        navigation.navigate('SignPage')
    }
    const handleFormSubmit = async (formValues) => {
        if (formValues.usermail == '' || formValues.password == '') {
            showMessage({
                message:'bos giremezsiniz',
                type:'danger'
            })
        }

        else {
            try {
                setLoading(true);
                await auth().signInWithEmailAndPassword(
                    formValues.usermail,
                    formValues.password
                );
                setLoading(false);
                showMessage({
                    message: 'giris yapildi hayirli isler....',
                    type: "success",
                })
                navigation.navigate('MessagesPage')
            } catch (error) {
                setLoading(true);
                console.log(error);
                showMessage({
                    message: authErrorMessageParser(error.code),
                    type: "danger",
                });
                setLoading(false);
            }
        }


    }

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.header} >BANA NE?</Text>
            <Icon style={{ textAlign: 'center', margin: 50 }} name='dislike' color='#00897b' size={150} />
            <Formik initialValues={initialValues} onSubmit={handleFormSubmit} >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <Input
                            onChangeText={handleChange('usermail')}
                            value={values.usermail}
                            placeholder='e postanizi giriniz...'
                            iconName="user-tie"
                        />
                        <Input
                            onChangeText={handleChange('password')}
                            value={values.password}
                            placeholder='sifrenizi giriniz...'
                            secureTextEntry={true}
                            style={styles.input}
                            iconName='key'
                        />
                        <Button theme='primary' text='Giris yap' onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button theme='secondary' text='Kayit ol' onPress={handleSignUp} />
        </SafeAreaView>
    )
}
export default Login;