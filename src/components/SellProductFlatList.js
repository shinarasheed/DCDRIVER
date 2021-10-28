import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, View} from 'react-native';
import appTheme from '../constants/theme';
import SellProductFlatListCard from './SellProductFlatListCard';

const SellProductFlatList = ({
  inventory,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
}) => {
  return (
    <>
      <FlatList
        data={inventory}
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
      />
    </>
  );
};

export default SellProductFlatList;

const styles = StyleSheet.create({});
