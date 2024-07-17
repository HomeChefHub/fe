import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {color, font, spacing} from "../constants/constants";

export const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{ title }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    alignItems: 'left',
    justifyContent: 'center',
    marginTop: spacing.spacing16,
  },
  headerText: {
    fontSize: font.size28,
    fontWeight: 'bold',
    color: color.brand.primary,
  },
});