import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import styles from './styles';
const bgImg = {
  uri: 'https://st3.depositphotos.com/7247698/18888/i/450/depositphotos_188885346-stock-photo-sport-shoes-art-design-banner.jpg',
};
const avtImg = {
  uri: 'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png',
};

function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('Minh Tung');
  const [phone, setPhone] = useState('0123456789');
  const [email, setEmail] = useState('tung@gmail.com');

  const onChangeText = (text, type) => {
    switch(type) {
      case 'name':
        setName(text);
        break;
      case 'email':
        setEmail(text);
        break;
      default:
        setPhone(text);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={styles.bgImg}></ImageBackground>
      <View style={styles.dFlexBetween}>
        <View style={styles.avtView}>
          <Image style={styles.avtImg} source={avtImg} />
        </View>
        <View style={styles.viewInfo}>
          {/* <Text style={styles.info}>Please login to see more!</Text> */}
          <Text style={styles.info}>Name: Minh Tung</Text>
          <Text style={styles.info}>Email: tung@gmail.com</Text>
          <Text style={styles.info}>Phone: 0123456789</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.iconEdit}
        onPress={() => setModalVisible(true)}>
        <Icon name="account-edit-outline" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomView}>
        <Text style={styles.textStyle}>Log out</Text>
        {/* <Text style={styles.textStyle}>Sign in</Text> */}
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <TouchableWithoutFeedback style={styles.emptyView} onPress={() => setModalVisible(false)}>
          <View style={styles.emptyView}/>
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.dFlexBetween}>
              <Text style={styles.modalText}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeText(e, 'name')}
                value={name}
              />
            </View>
            <View style={styles.dFlexBetween}>
              <Text style={styles.modalText}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeText(e, 'email')}
                value={email}
              />
            </View>
            <View style={styles.dFlexBetween}>
              <Text style={styles.modalText}>Phone</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeText(e, 'phone')}
                value={phone}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ProfileScreen;
