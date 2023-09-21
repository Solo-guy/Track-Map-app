import React, { useContext} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context } from '../Context/AuthContext';

const SigninScreen = () => {
    const { state, signin } = useContext(Context);

    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign In to your account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <Navlink 
                text="Don't have a account? Sign up instead" 
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SigninScreen;