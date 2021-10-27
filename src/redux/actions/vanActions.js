import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FETCH_INVENTORY_FAIL,
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_SUCCESS,
} from '../constants/vanConstants';
import {vanurl} from '../../utils/baseUrl';

export const fetchVanProducts = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_INVENTORY_REQUEST,
    });

    const {
      data: {data},
    } = await axios.get(`${vanurl}/van/6`);

    dispatch({
      type: FETCH_INVENTORY_SUCCESS,
      payload: data,
    });

    // await AsyncStorage.setItem('productsInVan', JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_INVENTORY_FAIL,
      payload: 'There was an error',
    });
  }
};
