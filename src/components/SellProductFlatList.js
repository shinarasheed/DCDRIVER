import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View} from 'react-native';
import appTheme from '../constants/theme';
import SellProductFlatListCard from './SellProductFlatListCard';

const SellProductFlatList = ({
  newProducts,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
  loading,
}) => {
  return (
    <>
      <FlatList
        data={newProducts}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({item}) => (
          <SellProductFlatListCard
            product={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            deleteProduct={deleteProduct}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: appTheme.COLORS.borderGRey,
            }}></View>
        )}
        ListEmptyComponent={() => (
          <ActivityIndicator
            color={
              Platform.OS === 'android' ? appTheme.COLORS.mainRed : undefined
            }
            animating={loading}
            size="large"
          />
        )}
      />
    </>
  );
};

export default SellProductFlatList;

const styles = StyleSheet.create({});
