import React from 'react';
import { Modal, View, Text } from 'react-native';

const DropdownModal = ({ visible, statusBarTranslucent, children }) => {
  const defaults = {
    statusBarTranslucent: statusBarTranslucent || false,
  };
  return (
    <Modal
      supportedOrientations={['portrait', 'landscape']}
      animationType="none"
      transparent={true}
      statusBarTranslucent={defaults.statusBarTranslucent}
      visible={visible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {children}
      </View>
    </Modal>
  );
};

export default DropdownModal;
