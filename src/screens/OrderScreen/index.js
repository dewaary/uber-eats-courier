import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

import orders from '../../../assets/data/orders.json';

import BottomSheet from '@gorhom/bottom-sheet';

const OrderScreen = () => {
  const bottomSheetRef = useRef(null);

  return (
    <View style={{backgroundColor: 'lightblue', flex: 1}}>
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={['12%', '95%']}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}>
            You're Online
          </Text>
          <Text style={{letterSpacing: 0.5, color: 'grey'}}>
            Available Orders: {orders.length}
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
    justifyContent: 'center',
  },
});
