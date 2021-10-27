import React, {useState} from 'react';
import {FlatList, StyleSheet, Image, Pressable, Text, View} from 'react-native';
import icons from '../constants/icons';

import appTheme from '../constants/theme';
import ProductBottomSheetCard from './ProductBottomSheetCard';
import CustomVirtualist from './VirtualizedList';
import ProductFooter from './ProductFooter';

const ProductBottomSheet = ({
  productsToSell,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  getTotalPrice,
  toggle,
  item,
}) => {
  const [empties, setEmpties] = useState(0);

  const getEmptiesPrice = () => {
    return empties * 1000;
  };

  return (
    <CustomVirtualist>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          borderBottomWidth: 1,
          borderBottomColor: appTheme.COLORS.borderGRey,
          paddingBottom: 30,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 20}}>Sell To Customer</Text>
          <Pressable onPress={() => toggle()}>
            <Image source={icons.cancelIcon} />
          </Pressable>
        </View>

        <View>
          <Text
            style={{
              fontSize: 17,
              color: appTheme.COLORS.mainTextGray,
              marginBottom: 20,
            }}>
            Empties returned by customer
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={[
                styles.productIncreaseDecreaseContainer,
                {marginRight: 5},
              ]}>
              <Pressable
                disabled={empties === 0 ? true : false}
                onPress={() => setEmpties(empties - 1)}>
                <Text style={styles.IncreaseText}>-</Text>
              </Pressable>
            </View>
            <View
              style={{
                borderWidth: 1,
                width: 70,
                borderColor: appTheme.COLORS.borderGRey,
                marginRight: 5,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: appTheme.COLORS.mainTextGray,
                  ...appTheme.FONTS.mainFontLight,
                }}>
                {empties}
              </Text>
            </View>
            <View style={styles.productIncreaseDecreaseContainer}>
              <Pressable onPress={() => setEmpties(empties + 1)}>
                <Text style={styles.IncreaseText}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={productsToSell}
        keyExtractor={(item, id) => id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductBottomSheetCard
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            deleteProduct={deleteProduct}
            productsToSell={productsToSell}
            item={item}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: appTheme.COLORS.Grey,
            }}></View>
        )}
        ListFooterComponent={() => (
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: appTheme.COLORS.borderGRey,
              paddingTop: 20,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '700',
                marginBottom: 10,
                color: appTheme.COLORS.black,
              }}>
              EMPTIES
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: appTheme.COLORS.borderGRey1,
                  }}>
                  Qty:
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: appTheme.COLORS.black,
                  }}>
                  {' '}
                  {empties}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  ...appTheme.FONTS.mainFontBold,
                  color: appTheme.COLORS.mainRed,
                  marginRight: 15,
                }}>
                {'\u20A6'}
                {getEmptiesPrice()}
              </Text>
            </View>
          </View>
        )}
      />

      <ProductFooter
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        deleteProduct={deleteProduct}
        getTotalPrice={getTotalPrice}
        getEmptiesPrice={getEmptiesPrice}
        order={item}
        productsToSell={productsToSell}
      />
    </CustomVirtualist>
  );
};

export default ProductBottomSheet;

const styles = StyleSheet.create({
  productIncreaseDecreaseContainer: {
    backgroundColor: appTheme.COLORS.boxGray,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  IncreaseText: {
    color: appTheme.COLORS.mainRed,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
