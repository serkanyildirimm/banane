import React, { useState } from "react";
import { Alert, SafeAreaView, Text } from "react-native";
import styles from "./Sign.style";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth'
import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import { showMessage, hideMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/Fontisto';



const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false);


    const initialValues = {
        usermail: '',
        password: '',
        confirmPassword: '',
    }
    const handleLogin = () => {
        navigation.goBack();
    }
    const handleFormSubmit = async (formValues) => {
        if (formValues.usermail == '' || formValues.password == '' || formValues.confirmPassword == '') {
            showMessage({
                message: 'bos gecemezsiniz',
                type: 'danger'
            })
        }
        else {
            try {
                if (formValues.password === formValues.confirmPassword) {

                    setLoading(true);
                    await auth().createUserWithEmailAndPassword(
                        formValues.usermail,
                        formValues.password,
                        formValues.confirmPassword,
                    );
                    setLoading(false);
                    showMessage({
                        message: 'kullanici kaydi olustu...',
                        type: "success",
                    })
                    navigation.navigate('LoginPage')
                }
                else {
                    showMessage({
                        message: 'sifreler uyusmamaktadir...',
                        type: "danger",
                    })
                }
            } catch (error) {
                setLoading(true);
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
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <Input
                            onChangeText={handleChange('usermail')}
                            value={values.usermail}
                            placeholder='e postanizi giriniz...'
                            iconName='user-tie'
                        />
                        <Input
                            onChangeText={handleChange('password')}
                            value={values.password}
                            placeholder='sifrenizi giriniz...'
                            secureTextEntry={true}
                            iconName='key'
                        />
                        <Input
                            onChangeText={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            placeholder='sifrenizi tekrar giriniz...'
                            secureTextEntry={true}
                            iconName='key'
                        />
                        <Button onPress={handleSubmit} theme='primary' text='Kayit ol' />
                    </>
                )}
            </Formik>
            <Button theme='secondary' text='Giris yap sayfasina geri don' onPress={handleLogin} />
        </SafeAreaView>
    )
}
export default Sign;