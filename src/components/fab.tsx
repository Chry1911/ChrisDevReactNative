import * as React from 'react';
import {FAB, Portal, Provider } from 'react-native-paper';
import {Text} from 'react-native';

import MyModal from '../components/modal'


const MyFAB = () => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }: { open: any }) => setState({ open });
  const { open } = state;

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'minus' : 'plus'}
          actions={[
            {
              icon: 'plus',
              onPress: () => showModal(), // Add this action to open the modal
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
            }
          }}
        />
        <MyModal visible={visible} hideModal={hideModal} />
      </Portal>
    </Provider>
  );
};

export default MyFAB;