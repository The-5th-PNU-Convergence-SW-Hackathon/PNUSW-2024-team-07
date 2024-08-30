import React from 'react';
import {View, StyleSheet} from 'react-native';

export const ProgressIndicator = ({currentStep}) => {
  return (
    <View style={styles.progressContainer}>
      {[1, 2, 3].map(step => (
        <View
          key={step}
          style={[
            styles.stepIndicator,
            currentStep === step ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 24,
  },
  stepIndicator: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  activeStep: {
    width: 40,
    borderRadius: 32,
    backgroundColor: '#4D83F4',
  },
  inactiveStep: {
    backgroundColor: '#D3D3D3',
  },
});
