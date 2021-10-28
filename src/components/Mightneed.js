// dispatch(
//     updateOrderStatus({
//       assignedToId: theOrder?.vehicleId,
//       orderId: theOrder?.orderId,
//       status: 'Accepted',
//     }),
//   );
//   settheOrder(updatedOrder);

// dispatch(
//     updateOrderStatus({
//       assignedToId: theOrder?.vehicleId,
//       orderId: theOrder?.orderId,
//       status: 'Rejected',
//     }),
//   );
//   toggle();
// settheOrder(updatedOrder);

// const showEmpties = () => {
//     return newOrders?.filter(product => product.productType === 'full').length;
//   };

// invoice

// {
//   !updatedLoading ? (
//     <>
//       <View
//         style={{
//           backgroundColor: appTheme.COLORS.white,
//           flexDirection: 'row',
//           alignItems: 'center',
//           height: 50,
//           paddingLeft: 20,
//         }}>
//         <Pressable onPress={() => navigation.goBack()}>
//           <Image source={icons.backButton} />
//         </Pressable>
//         <Text
//           style={{
//             fontSize: 17,
//             color: appTheme.COLORS.black,
//             fontWeight: '800',
//             marginLeft: 20,
//           }}>
//           Order {updatedOrder !== undefined && updatedOrder.referenceId}
//         </Text>
//       </View>

//       {/* done */}

//       <CustomVirtualizedView>
//         <View style={{paddingLeft: 20, paddingVertical: 20}}>
//           <View style={{flexDirection: 'row', marginBottom: 10}}>
//             <Text
//               style={{
//                 fontSize: 15,
//                 marginRight: 5,
//                 textTransform: 'lowercase',
//               }}>
//               {moment(
//                 updatedOrder.orderStatus !== undefined &&
//                   updatedOrder?.orderStatus[0]?.dateAssigned,
//               ).format('MMM Do, YYYY')}{' '}
//               at{' '}
//               {new Date(
//                 updatedOrder?.orderStatus[0]?.timeAssigned,
//               ).toLocaleTimeString()}{' '}
//               from
//             </Text>
//             <Text
//               style={{
//                 fontSize: 17,
//                 fontWeight: 'bold',
//                 color: appTheme.COLORS.black,
//               }}>
//               {updatedOrder.buyerDetails !== undefined &&
//                 updatedOrder?.buyerDetails[0]?.buyerName}
//             </Text>
//           </View>
//           {updatedOrder.orderItems !== undefined && (
//             <View
//               style={{
//                 width: 100,
//                 alignItems: 'center',
//                 paddingHorizontal: 10,
//                 paddingVertical: 7,
//                 fontWeight: '600',
//                 borderRadius: 20,
//                 backgroundColor: appTheme.COLORS.mainGreen,
//               }}>
//               <Text style={{color: appTheme.COLORS.white}}>
//                 {updatedOrder.orderStatus !== undefined &&
//                   updatedOrder.orderStatus[0]?.status}
//               </Text>
//             </View>
//           )}
//         </View>

//         {/* done */}

//         <View
//           style={{
//             backgroundColor: appTheme.COLORS.white,
//             paddingLeft: 20,
//             paddingVertical: 20,
//           }}>
//           <View>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 color: appTheme.COLORS.MainGray,
//                 fontSize: 20,
//                 marginBottom: 20,
//               }}>
//               Customer
//             </Text>
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: appTheme.COLORS.black,
//                 ...appTheme.FONTS.mainFontBold,
//               }}>
//               {updatedOrder.buyerDetails !== undefined &&
//                 updatedOrder?.buyerDetails[0]?.buyerName}{' '}
//             </Text>
//           </View>

//           <View style={{marginTop: 10, flexDirection: 'row'}}>
//             <Image source={icons.addressIcon} />
//             <View style={{marginLeft: 10, paddingRight: 50}}>
//               <Text style={{marginBottom: 5, fontSize: 17, lineHeight: 25}}>
//                 {updatedOrder.buyerDetails !== undefined &&
//                   updatedOrder?.buyerDetails[0]?.buyerAddress}
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 17,
//                   marginBottom: 10,
//                   color: appTheme.COLORS.black,
//                 }}>
//                 Customer local government area
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 16,
//                   textTransform: 'uppercase',
//                   color: appTheme.COLORS.black,
//                 }}>
//                 {updatedOrder.buyerDetails !== undefined &&
//                   updatedOrder?.buyerDetails[0]?.buyerAddress}
//               </Text>

//               <View style={{marginTop: 20, flexDirection: 'row'}}>
//                 <Text style={{fontSize: 15, color: appTheme.COLORS.black}}>
//                   {updatedOrder.buyerDetails !== undefined &&
//                     updatedOrder?.buyerDetails[0]?.buyerPhoneNumber}
//                 </Text>

//                 <Pressable>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       alignItems: 'center',
//                       marginLeft: 60,
//                     }}>
//                     <Image source={icons.phoneIcon} />
//                     <Text
//                       style={{
//                         fontSize: 15,
//                         fontWeight: '500',
//                         marginLeft: 5,
//                         color: appTheme.COLORS.black,
//                       }}>
//                       Call
//                     </Text>
//                   </View>
//                 </Pressable>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* done */}

//         <FlatList
//           style={{
//             backgroundColor: appTheme.COLORS.white,
//             marginTop: 25,
//             marginBottom: 25,
//           }}
//           data={productsToSell}
//           keyExtractor={(item, id) => id.toString()}
//           renderItem={({item}) => <InvoiceCard product={item} />}
//           ListHeaderComponent={() => (
//             <View
//               style={{
//                 borderBottomWidth: 1,
//                 borderBottomColor: appTheme.COLORS.Grey,
//                 paddingVertical: 20,
//                 paddingLeft: 10,
//                 marginBottom: 20,
//               }}>
//               <Text style={{fontWeight: 'bold', fontSize: 17}}>
//                 Order Summary
//               </Text>
//             </View>
//           )}
//           ListFooterComponent={() => (
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingRight: 30,
//                 paddingLeft: 100,
//                 paddingBottom: 20,
//               }}>
//               <Text style={{fontSize: 17}}>Total amount</Text>
//               <Text
//                 style={{
//                   fontWeight: 'bold',
//                   fontSize: 18,
//                   marginLeft: 65,
//                 }}>
//                 {'\u20A6'}
//                 {getTotalPrice()}
//               </Text>
//             </View>
//           )}
//         />

//         {/* done */}

//         {/* timeline */}

//         <View
//           style={{
//             backgroundColor: appTheme.COLORS.white,
//             marginBottom: 20,
//             paddingLeft: 20,
//             paddingVertical: 10,
//           }}>
//           <Text
//             style={{
//               fontSize: 16,
//               marginBottom: 10,
//               fontWeight: 'bold',
//               color: appTheme.COLORS.black,
//             }}>
//             Timeline
//           </Text>

//           <View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginBottom: 10,
//               }}>
//               <Image
//                 style={{width: 16, height: 16, marginRight: 6}}
//                 source={icons.smallCheckIcon}
//               />
//               <Text> Completed </Text>
//               <Text style={{fontSize: 14, textTransform: 'lowercase'}}>
//                 on{' '}
//                 {updatedOrder.orderStatus !== undefined &&
//                   moment(updatedOrder?.orderStatus[0]?.dateCompleted).format(
//                     'MMM Do, YYYY',
//                   )}
//                 at{' '}
//                 {new Date(
//                   updatedOrder?.orderStatus[0]?.timeCompleted,
//                 ).toLocaleTimeString()}
//               </Text>
//             </View>

//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginBottom: 10,
//               }}>
//               <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <Image
//                   style={{width: 16, height: 16, marginRight: 10}}
//                   source={icons.smallCheckIcon}
//                 />

//                 <Text>Accepted </Text>
//                 <Text style={{fontSize: 14, textTransform: 'lowercase'}}>
//                   on{' '}
//                   {updatedOrder.orderStatus !== undefined &&
//                     moment(updatedOrder?.orderStatus[0]?.dateAccepted).format(
//                       'MMM Do, YYYY',
//                     )}
//                   at{' '}
//                   {new Date(
//                     updatedOrder?.orderStatus[0]?.timeAccepted,
//                   ).toLocaleTimeString()}
//                 </Text>
//               </View>
//             </View>

//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Image
//                 style={{width: 16, height: 16, marginRight: 10}}
//                 source={icons.smallCheckIcon}
//               />

//               <Text>Assigned </Text>
//               <Text style={{fontSize: 14, textTransform: 'lowercase'}}>
//                 to you on{' '}
//                 {updatedOrder.orderStatus !== undefined &&
//                   moment(updatedOrder?.orderStatus[0]?.dateAssigned).format(
//                     'MMM Do, YYYY',
//                   )}
//                 at{' '}
//                 {new Date(
//                   updatedOrder?.orderStatus[0]?.timeAssigned,
//                 ).toLocaleTimeString()}
//               </Text>
//             </View>
//           </View>
//         </View>

//         {/* timeline */}
//       </CustomVirtualizedView>

//       {/* Footer */}
//       <View
//         style={{
//           backgroundColor: appTheme.COLORS.white,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingHorizontal: 20,
//           paddingVertical: 20,
//         }}>
//         <Pressable
//           style={{
//             backgroundColor: appTheme.COLORS.mainRed,
//             borderRadius: 4,
//             width: '100%',
//             height: 45,
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               fontSize: 17,
//               color: appTheme.COLORS.white,
//               textAlign: 'center',
//             }}>
//             Generate Invoice
//           </Text>
//         </Pressable>
//       </View>
//     </>
//   ) : (
//     <>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <ActivityIndicator
//           color={
//             Platform.OS === 'android' ? appTheme.COLORS.mainRed : undefined
//           }
//           animating={updatedLoading}
//           size="large"
//         />
//       </View>
//     </>
//   );
// }

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
