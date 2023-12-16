import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button, Image } from 'react-native';
import { styles } from './styles/styles';


const userDataWithImages = [
  {
    firstName: 'Benji',
    lastName: 'Dogoy',
    nickname: 'benj',
    course: 'BSCRIM',
    year: 'Third Year',
    
  },
  {
    firstName: 'Aldren',
    lastName: 'Banga',
    nickname: 'Aden',
    course: 'BSCRIM',
    year: 'Third Year',
    
  },
  {
    firstName: 'Christian',
    lastName: 'Camanzo',
    nickname: 'Ikyan',
    course: 'BSELECT',
    year: 'Third Year',
    
  },
  {
    firstName: 'Robert',
    lastName: 'Stampa',
    nickname: 'vert',
    course: 'BSCRIM',
    year: 'Third Year',
    
  },
  {
    firstName: 'James',
    lastName: 'Camanzo',
    nickname: 'OPI',
    course: 'BSCRIM',
    year: 'Third Year',
    
  },
  {
    firstName: 'Darwin',
    lastName: 'Patac',
    nickname: 'Dar',
    course: 'BSIT',
    year: 'Third Year',

  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.pt}>DRINGKING MASTER</Text>
      <FlatList
        data={userDataWithImages}
        keyExtractor={(item) => item.nickname}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.firstName} {selectedUser.lastName}
              </Text>
              <Text>Nickname: {selectedUser.nickname}</Text>
              <Text>Course: {selectedUser.course}</Text>
              <Text>Year: {selectedUser.year}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 200, height: 200 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default UserList;