import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IconCheck from 'react-native-vector-icons/Entypo';
IconCheck.loadFont();

const OrderItem = ({order}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: '#3FC060',
        borderWidth: 2,
        borderRadius: 12,
        margin: 10,
        justifyContent: 'space-between',
      }}>
      <Image
        source={{uri: order.Restaurant.image}}
        style={{
          width: '25%',
          height: '100%',
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View style={{marginLeft: 10, flex: 1, paddingVertical: 5}}>
        <Text style={{fontSize: 18, fontWeight: '500'}}>
          {order.Restaurant.name}
        </Text>
        <Text style={{color: 'grey'}}>{order.Restaurant.address}</Text>

        <Text style={{marginTop: 10}}>Delivery Detail</Text>
        <Text style={{color: 'grey'}}>{order.User.name}</Text>
        <Text style={{color: 'grey'}}>{order.User.address}</Text>
      </View>
      <View
        style={{
          padding: 5,
          backgroundColor: '#3FC060',
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconCheck
          name="check"
          size={30}
          color="white"
          style={{marginLeft: 'auto'}}
        />
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
