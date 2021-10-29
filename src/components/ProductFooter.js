import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';

import appTheme from '../constants/theme';
import {updateOrderStatus} from '../redux/actions/orderActions';

const SellProductFooter = ({getTotalPrice, order, productsToSell}) => {
  // TODO: you need to pass the item as route parameter later
  const navigator = useNavigation();

  const dispatch = useDispatch();

  return (
    <View style={styles.footerContainer}>
      <Button
        onPress={() => {
          dispatch(
            updateOrderStatus({
              assignedToId: order.vehicleId,
              orderId: order.orderId,
              status: 'Completed',
            }),
          );

          navigator.navigate('GenerateInvoice', {
            productsToSell,
            order,
          });
        }}
        buttonStyle={{
          backgroundColor: appTheme.COLORS.mainRed,
          width: '100%',
          height: 50,
          justifyContent: 'center',
          borderRadius: 5,
          marginTop: 10,
        }}
        title={` Confirm \u20A6${getTotalPrice()}`}
      />
    </View>
  );
};

export default SellProductFooter;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: appTheme.COLORS.white,
    height: 100,
    paddingHorizontal: 20,
    justifyContent: 'center',
    elevation: 1,
  },
});
