import {StyleSheet, Modal, ActivityIndicator, View} from 'react-native';
import React from 'react';

const Spinners = ({visible}) => {
  return (
    <Modal transparent statusBarTranslucent visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#FFF'} />
      </View>
    </Modal>
  );
};

export default Spinners;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
