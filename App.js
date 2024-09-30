import React, { useState, useEffect } from 'react';
import { Modal, Text, Pressable, View, StyleSheet, BackHandler } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const backAction = () => {
      if (visible) {
        setVisible(false);
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove(); 
  }, [visible]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => setVisible(true)}>
        <Text style={styles.textStyle}>Show modal message</Text>
      </Pressable>
      <Modal visible={visible} onRequestClose={() => {setVisible(false);}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setVisible(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pressable: {
    padding: 10,
    backgroundColor: '#75b4c7',
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
