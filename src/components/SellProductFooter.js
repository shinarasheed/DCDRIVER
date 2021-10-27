import React, {useState} from 'react';
import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation//native';
import {icons} from '../constants';
import {BottomSheet} from 'react-native-btr';
import {Button} from 'react-native-elements';

import appTheme from '../constants/theme';
import ProductBottomSheet from './ProductBottomSheet';

const SellProductFooter = ({
  getTotalPrice,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  productsToSell,
  order,
}) => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [salesCompleted, setSalesCompleted] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  function toggle() {
    setVisible(visible => !visible);
  }

  function toggleConfirm() {
    setConfirmVisible(visible => !visible);
  }

  return (
    <View style={styles.footerContainer}>
      <Pressable onPress={toggle}>
        {productsToSell.length > 0 && (
          <View
            style={{
              position: 'absolute',
              left: 23,
              bottom: 12,
              width: 20,
              height: 20,
              borderRadius: 50,
              backgroundColor: appTheme.COLORS.mainRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: appTheme.COLORS.white,
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              {productsToSell.length}
            </Text>
          </View>
        )}

        <View style={[styles.orderSummay]}>
          <Image
            style={{
              marginRight: 10,
            }}
            source={icons.liquidProducts}
          />
          <Text
            style={{
              marginRight: 10,
              marginLeft: 10,
              color: appTheme.COLORS.mainTextGray,
            }}>
            View order summary
          </Text>
          <Image source={icons.arrowDownIcon} />
        </View>
      </Pressable>

      <Button
        onPress={() => navigation.navigate('GenerateInvoice', {productsToSell})}
        disabled={productsToSell.length === 0}
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

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}>
        <View style={styles.bottomSheetCard}>
          <ProductBottomSheet
            getTotalPrice={getTotalPrice}
            toggle={toggle}
            productsToSell={productsToSell}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            deleteProduct={deleteProduct}
            item={order}
          />
        </View>
      </BottomSheet>

      <BottomSheet
        visible={confirmVisible}
        onBackButtonPress={toggleConfirm}
        onBackdropPress={toggleConfirm}>
        <View style={styles.card}>
          <Pressable
            onPress={() => toggleConfirm()}
            style={{position: 'absolute', top: 20, right: 20}}>
            <Image source={icons.cancelIcon} />
          </Pressable>

          {!salesCompleted && (
            <View style={{alignItems: 'center'}}>
              <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 17}}>
                  Are you sure you want to sell your
                </Text>
                <Text style={{fontSize: 17, textAlign: 'center'}}>
                  section(s)?
                </Text>
              </View>

              <Pressable
                style={{
                  backgroundColor: appTheme.COLORS.mainRed,
                  width: 120,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...appTheme.FONTS.mainFontBold,
                  borderRadius: 4,
                }}
                onPress={() => setSalesCompleted(true)}>
                <Text style={{color: appTheme.COLORS.white}}>Yes, sell</Text>
              </Pressable>
            </View>
          )}

          {salesCompleted && (
            <View style={{alignItems: 'center'}}>
              <Image source={icons.checkIcon} />

              <Text style={{fontSize: 17, marginTop: 20, marginBottom: 20}}>
                sales completed
              </Text>

              <Pressable
                style={{
                  backgroundColor: appTheme.COLORS.mainRed,
                  width: 120,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...appTheme.FONTS.mainFontBold,
                  borderRadius: 4,
                }}
                onPress={() =>
                  navigation.navigate('GenerateInvoice', {
                    order,
                    productsToSell,
                  })
                }>
                <Text style={{color: appTheme.COLORS.white, fontSize: 18}}>
                  ok
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </BottomSheet>
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
    paddingBottom: 40,
    paddingTop: 50,
  },

  footerButtonText: {
    color: appTheme.COLORS.white,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
  },
  orderSummay: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomSheetCard: {
    // height: Dimensions.get('window').height - StatusBar.currentHeight,
    backgroundColor: appTheme.COLORS.white,
  },
  card: {
    height: 200,
    backgroundColor: appTheme.COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
