import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FETCH_INVENTORY_FAIL,
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_SUCCESS,
  UPDATE_INVENTORY_REQUEST,
  UPDATE_INVENTORY_SUCCESS,
  UPDATE_INVENTORY_FAIL,
} from '../constants/vanConstants';
import {vanurl} from '../../utils/baseUrl';

export const fetchVanProducts = () => async dispatch => {
  try {
    dispatch({
      type: FETCH_INVENTORY_REQUEST,
    });

    const {
      data: {data},
    } = await axios.get(`${vanurl}/van/1`);

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

export const updateInventory = payload => async dispatch => {
  try {
    dispatch({
      type: UPDATE_INVENTORY_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await axios.put(
      `${vanurl}/inventory/update-quantity`,
      payload,
      config,
    );

    dispatch({
      type: UPDATE_INVENTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_INVENTORY_FAIL,
      payload: 'There was an error',
    });
  }
};
