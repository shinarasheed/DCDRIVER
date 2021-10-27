// import React, {useEffect, useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {FlatList, StyleSheet, Image, Pressable, Text, View} from 'react-native';
// import icons from '../constants/icons';

// import appTheme from '../constants/theme';
// import OrderBottomSheetCard from './OrderBottomSheetCard';
// import CustomVirtualist from './VirtualizedList';
// import ProductFooter from './ProductFooter';
// import OrderFooter from './OrderFooter';
// import {fetchProducts} from '../redux/actions/productActions';

// const OrderBottomSheet = ({item, toggle, setVisible, visible}) => {
//   const allProducts = useSelector(state => state.products);
//   const [newOrders, setNewOrders] = useState([]);
//   const dispatch = useDispatch();

//   const [empties, setEmpties] = useState(0);

//   const getEmptiesPrice = () => {
//     return empties * 1000;
//   };

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   const {products, loading} = allProducts;

//   const createNewProducts = () => {
//     item.orderItems.map((theOrder, index) => {
//       const orderDetails = products.filter(
//         item => parseInt(item.productId) === parseInt(theOrder.productId),
//       )[0];

//       // setNewOrders([
//       //   {
//       //     productId: theOrder.productId,
//       //     quantity: parseInt(theOrder.quantity),
//       //     brand: orderDetails?.brand,
//       //     price: parseInt(theOrder?.price),
//       //     productType: orderDetails?.productType,
//       //     unitPrice: parseInt(theOrder.price / theOrder.quantity),
//       //     orderId: theOrder.orderId,
//       //     imageUrl: orderDetails?.imageUrl,
//       //     sku: orderDetails?.sku,
//       //     productPrice: orderDetails?.price,
//       //   },
//       // ]);
//       newOrders.push({
//         productId: theOrder.productId,
//         quantity: parseInt(theOrder.quantity),
//         brand: orderDetails?.brand,
//         price: parseInt(theOrder?.price),
//         productType: orderDetails?.productType,
//         unitPrice: parseInt(theOrder.price / theOrder.quantity),
//         orderId: theOrder.orderId,
//         imageUrl: orderDetails?.imageUrl,
//         sku: orderDetails?.sku,
//         productPrice: orderDetails?.price,
//       });
//     });
//   };

//   useEffect(() => {
//     createNewProducts();
//   }, []);

//   const getTotalPrice = () => {
//     return newOrders.reduce(
//       (accumulator, item) => accumulator + item.productPrice * item.quantity,
//       0,
//     );
//   };

//   const incrementQuantity = productId => {
//     let product = newOrders.find(product => product.productId === productId);
//     product.quantity++;
//     setNewOrders([...newOrders]);
//   };

//   const decrementQuantity = productId => {
//     const product = newOrders.find(product => product.productId === productId);
//     if (product.quantity === 1) {
//       const index = newOrders.findIndex(
//         product => product.productId === productId,
//       );
//       newOrders.splice(index, 1);
//       setNewOrders([...newOrders]);
//     } else {
//       product.quantity--;
//       setNewOrders([...newOrders]);
//     }
//   };

//   const deleteProduct = productId => {
//     const index = newOrders.findIndex(
//       product => product.productId === productId,
//     );
//     newOrders.splice(index, 1);
//     setNewOrders([...newOrders]);
//   };

//   return (
//     <CustomVirtualist>
//       <View
//         style={{
//           paddingHorizontal: 20,
//           paddingTop: 20,
//           borderBottomWidth: 1,
//           borderBottomColor: appTheme.COLORS.borderGRey,
//           paddingBottom: 30,
//           backgroundColor: appTheme.COLORS.white,
//         }}>
//         <View
//           style={{
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             marginBottom: 20,
//           }}>
//           <Text style={{fontSize: 20}}>Order Delivery</Text>
//           <Pressable onPress={() => toggle()}>
//             <Image source={icons.cancelIcon} />
//           </Pressable>
//         </View>

//         <View>
//           <Text
//             style={{
//               fontSize: 17,
//               color: appTheme.COLORS.mainTextGray,
//               marginBottom: 20,
//             }}>
//             Empties returned by customer
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//             }}>
//             <View
//               style={[
//                 styles.productIncreaseDecreaseContainer,
//                 {marginRight: 5},
//               ]}>
//               <Pressable
//                 disabled={empties === 0 ? true : false}
//                 onPress={() => setEmpties(empties - 1)}>
//                 <Text style={styles.IncreaseText}>-</Text>
//               </Pressable>
//             </View>
//             <View
//               style={{
//                 borderWidth: 1,
//                 width: 70,
//                 borderColor: appTheme.COLORS.borderGRey,
//                 marginRight: 5,
//                 borderRadius: 5,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   color: appTheme.COLORS.mainTextGray,
//                   ...appTheme.FONTS.mainFontLight,
//                 }}>
//                 {empties}
//               </Text>
//             </View>
//             <View style={styles.productIncreaseDecreaseContainer}>
//               <Pressable onPress={() => setEmpties(empties + 1)}>
//                 <Text style={styles.IncreaseText}>+</Text>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </View>

//       <FlatList
//         style={{
//           backgroundColor: appTheme.COLORS.white,
//           marginTop: 25,
//           marginBottom: 25,
//         }}
//         data={newOrders}
//         keyExtractor={(item, id) => id.toString()}
//         renderItem={({item}) => (
//           <OrderBottomSheetCard
//             order={item}
//             incrementQuantity={incrementQuantity}
//             decrementQuantity={decrementQuantity}
//             deleteProduct={deleteProduct}
//           />
//         )}
//       />

//       <View
//         style={{
//           marginLeft: 20,
//           marginTop: 20,
//           backgroundColor: appTheme.COLORS.white,
//         }}>
//         <Text
//           style={{
//             fontSize: 14,
//             fontWeight: 'bold',
//             color: appTheme.COLORS.black,
//           }}>
//           EMPTIES
//         </Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginTop: 10,
//             marginRight: 30,
//           }}>
//           <View style={{flexDirection: 'row'}}>
//             <View
//               style={{
//                 flexDirection: 'row',
//               }}>
//               <Text style={{fontSize: 16}}>Qty:</Text>
//               <Text style={{fontSize: 16, color: appTheme.COLORS.black}}>
//                 {' '}
//                 {empties}
//               </Text>
//             </View>

//             <Text
//               style={{
//                 color: appTheme.COLORS.mainRed,
//                 fontWeight: 'bold',
//                 marginLeft: 10,
//               }}>
//               {' '}
//               {'\u20A6'}
//               {1000 * empties}
//             </Text>
//           </View>
//           <View
//             style={{
//               width: 80,
//               height: 30,
//               borderWidth: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderColor: appTheme.COLORS.borderGRey,
//               borderRadius: 5,
//             }}>
//             <Text style={{color: appTheme.COLORS.black, fontWeight: '400'}}>
//               {'\u20A6'}1000
//             </Text>
//           </View>
//         </View>
//       </View>
//       <OrderFooter
//         order={item}
//         productsToSell={newOrders}
//         getTotalPrice={getTotalPrice}
//         getEmptiesPrice={getEmptiesPrice}
//         setVisible={setVisible}
//         visible={visible}
//       />
//     </CustomVirtualist>
//   );
// };

// export default OrderBottomSheet;

// const styles = StyleSheet.create({
//   productIncreaseDecreaseContainer: {
//     backgroundColor: appTheme.COLORS.boxGray,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 30,
//     height: 30,
//     borderRadius: 5,
//   },
//   IncreaseText: {
//     color: appTheme.COLORS.mainRed,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
// });

import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList, StyleSheet, Image, Pressable, Text, View} from 'react-native';
import icons from '../constants/icons';

import appTheme from '../constants/theme';
import OrderBottomSheetCard from './OrderBottomSheetCard';
import CustomVirtualist from './VirtualizedList';
// import ProductFooter from './ProductFooter';
import OrderFooter from './OrderFooter';
import {fetchProducts} from '../redux/actions/productActions';
import Empties from './Empties';

const OrderBottomSheet = ({item, toggle, setVisible, visible}) => {
  const allProducts = useSelector(state => state.products);
  const [newOrders, setNewOrders] = useState([]);
  const dispatch = useDispatch();

  const [empties, setEmpties] = useState(0);

  const getEmptiesPrice = () => {
    return empties * 1000;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const {products, loading} = allProducts;

  const createNewProducts = () => {
    item.orderItems.map((theOrder, index) => {
      const orderDetails = products.filter(
        item => parseInt(item.productId) === parseInt(theOrder.productId),
      )[0];

      // setNewOrders([
      //   {
      //     productId: theOrder.productId,
      //     quantity: parseInt(theOrder.quantity),
      //     brand: orderDetails?.brand,
      //     price: parseInt(theOrder?.price),
      //     productType: orderDetails?.productType,
      //     unitPrice: parseInt(theOrder.price / theOrder.quantity),
      //     orderId: theOrder.orderId,
      //     imageUrl: orderDetails?.imageUrl,
      //     sku: orderDetails?.sku,
      //     productPrice: orderDetails?.price,
      //   },
      // ]);
      newOrders.push({
        productId: theOrder.productId,
        quantity: parseInt(theOrder.quantity),
        brand: orderDetails?.brand,
        price: parseInt(theOrder?.price),
        productType: orderDetails?.productType,
        unitPrice: parseInt(theOrder.price / theOrder.quantity),
        orderId: theOrder.orderId,
        imageUrl: orderDetails?.imageUrl,
        sku: orderDetails?.sku,
        productPrice: orderDetails?.price,
      });
    });
  };

  useEffect(() => {
    createNewProducts();
  }, []);

  const getTotalPrice = () => {
    return newOrders.reduce(
      (accumulator, item) => accumulator + item.productPrice * item.quantity,
      0,
    );
  };

  const incrementQuantity = productId => {
    let product = newOrders.find(product => product.productId === productId);
    product.quantity++;
    setNewOrders([...newOrders]);
  };

  const decrementQuantity = productId => {
    const product = newOrders.find(product => product.productId === productId);
    if (product.quantity === 1) {
      const index = newOrders.findIndex(
        product => product.productId === productId,
      );
      newOrders.splice(index, 1);
      setNewOrders([...newOrders]);
    } else {
      product.quantity--;
      setNewOrders([...newOrders]);
    }
  };

  const deleteProduct = productId => {
    const index = newOrders.findIndex(
      product => product.productId === productId,
    );
    newOrders.splice(index, 1);
    setNewOrders([...newOrders]);
  };

  // console.log('hello');

  const showEmpties = () => {
    // console.log(
    //   newOrders.find(prod => prod.productType === 'full'),
    //   '================================',
    // );
    return newOrders.filter(prod => prod.productType === 'full').length;
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
        {/* <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 20}}>Order Delivery</Text>
          <Pressable onPress={() => toggle()}>
            <Image source={icons.cancelIcon} />
          </Pressable>
        </View> */}

        <Empties toggle={toggle} />
      </View>

      <FlatList
        style={{
          backgroundColor: appTheme.COLORS.white,
          marginTop: 25,
          marginBottom: 25,
        }}
        data={newOrders}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({item}) => (
          <OrderBottomSheetCard
            order={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            deleteProduct={deleteProduct}
          />
        )}
      />

      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: appTheme.COLORS.black,
          }}>
          EMPTIES
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginRight: 30,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 16}}>Qty:</Text>
              <Text style={{fontSize: 16, color: appTheme.COLORS.black}}>
                {empties}
              </Text>
            </View>

            <Text
              style={{
                color: appTheme.COLORS.mainRed,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {'\u20A6'}
              {1000 * empties}
            </Text>
          </View>
          <View
            style={{
              width: 80,
              height: 30,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: appTheme.COLORS.borderGRey,
              borderRadius: 5,
            }}>
            <Text style={{color: appTheme.COLORS.black, fontWeight: '400'}}>
              {'\u20A6'}1000
            </Text>
          </View>
        </View>
      </View>
      <OrderFooter
        order={item}
        productsToSell={newOrders}
        getTotalPrice={getTotalPrice}
        getEmptiesPrice={getEmptiesPrice}
        setVisible={setVisible}
        visible={visible}
      />
    </CustomVirtualist>
  );
};

export default OrderBottomSheet;

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
