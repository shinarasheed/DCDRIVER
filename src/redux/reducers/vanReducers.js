import {
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAIL,
} from '../constants/vanConstants';

export const vanReducer = (state = {inventory: []}, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_INVENTORY_REQUEST:
      return {
        loading: true,
        inventory: [],
      };

    case FETCH_INVENTORY_SUCCESS:
      return {
        loading: false,
        inventory: payload,
      };

    case FETCH_INVENTORY_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
