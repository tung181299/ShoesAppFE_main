import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default function Loading() {
  return (
    <DotIndicator color='#31456A' size={10} />
  );
}
