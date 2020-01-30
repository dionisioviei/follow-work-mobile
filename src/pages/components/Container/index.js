import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import styles from './styles';

export default function Container({ children }) {
  const [screenHeight, setScreenHeight] = useState(0);
  const { height } = Dimensions.get('window');

  const onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight);
  };

  const scrollEnabled = true;

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollview}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={onContentSizeChange}
      >
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
