import {StyleSheet, Text, Image, View} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';

var imgprofile = 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg';
const Profile = ({navigation, ...props}) => {
  const [profile, setprofile] = useState(props.auth.userSession);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={{color: '#FFF'}}>Profile</Text>
          <Text style={{color: '#FFF'}}>Edit</Text>
        </View>
        <View style={styles.userProfile}>
          <Image style={styles.avatar} source={{uri: imgprofile}} />
          <View style={{marginLeft: 20}}>
            <Text>{profile.name}</Text>
            <Text>{profile.email}</Text>
            <Text>{profile.password}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'grey',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:20,
    paddingTop:8
  },
});
