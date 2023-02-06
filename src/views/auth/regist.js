import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {doRegist, clearStoreRegist} from '../../redux/action/authActions';
import {connect} from 'react-redux';
import Spinners from '../../components/Spinners';

const Regist = ({navigation, ...props}) => {
  const [state, setState] = useState({
    name: 'momogi',
    email: 'dadasd@gmail.com',
    password: '12412414',
  });

  useEffect(() => {
    //cek kalo reduk regist nya ada isi
    if (props.auth.data) {
      backToLogin();
    }
  }, [props.auth.data]);

  const backToLogin = () => {
    //jik reduk regist nya ada isi balik ke login dan hapus isi redux
    navigation.replace('Login');
    props.clearStoreRegist();
  };

  //fungsi untuk regist
  const registSubmit = () => {
    props.doRegist(state);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Registration</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={state.name}
          onChangeText={val => setState({...state, name: val})}
        />
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
        <TouchableOpacity style={styles.button} onPress={() => registSubmit()}>
          <Text style={styles.textbtn}>Regist</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 20, textAlign: 'center'}}>OR</Text>
        <TouchableOpacity style={styles.button} onPress={backToLogin}>
          <Text style={styles.textbtn}>BACK</Text>
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
  doRegist,
  clearStoreRegist,
};
export default connect(mapStateToProps, mapDispatchToProps)(Regist);

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
