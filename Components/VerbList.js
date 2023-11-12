import React from 'react';
import { View, Text } from 'react-native';

const VerbList = () => {
  // Здесь вы можете использовать данные глаголов
  const verbs = ['eat', 'sleep', 'run'];

  return (
    <View>
      {verbs.map((verb, index) => (
        <Text key={index}>{verb}</Text>
      ))}
    </View>
  );
};

export default VerbList;