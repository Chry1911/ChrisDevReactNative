import * as React from 'react';
import {Modal, Portal, Text} from 'react-native-paper';


interface MyModalProps {
  visible: boolean;
  hideModal: () => void;
}

const MyModal = ({ visible, hideModal }: MyModalProps) => {
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
};
export default MyModal;