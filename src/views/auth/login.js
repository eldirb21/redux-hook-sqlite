import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {doLogin} from '../../redux/action/authActions';
import {connect} from 'react-redux';
import Spinners from '../../components/Spinners';

const Login = ({navigation, ...props}) => {
  const [state, setState] = useState({
    email: 'dadasd@gmail.com',
    password: '12412414',
  });
  const loginSubmit = () => {
    props.doLogin(state, navigation);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={state.email}
          onChangeText={val => setState({...state, email: val})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={state.password}
          onChangeText={val => setState({...state, password: val})}
        />
        <TouchableOpacity style={styles.button} onPress={() => loginSubmit()}>
          <Text style={styles.textbtn}>Login</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 20, textAlign: 'center'}}>OR</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Regist')}>
          <Text style={styles.textbtn}>Registrasi</Text>
        </TouchableOpacity>
      </View>
      <Spinners visible={props.auth.isLoading} />
    </View>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  doLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    width: '80%',
  },
  input: {
    padding: 8,
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 20,
  },
  button: {
    padding: 8,
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  textbtn: {
    fontSize: 16,
    color: '#FFF',
    textTransform: 'uppercase',
  },
});
