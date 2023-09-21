import React, {  useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../Context/AuthContext';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <Navlink 
        routeName="Signin"
        text="Already have a account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  
});

export default SignupScreen;


