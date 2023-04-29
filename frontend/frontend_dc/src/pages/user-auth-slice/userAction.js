import { requestPending, responseSuccess, requestFail } from './userSlice';
import { createUser } from '../../api/userAPI';

export const userRegister = (newUser) => async (dispatch) => {
  dispatch(requestPending());

  //call api
  const result = await createUser(newUser);
  result?.status === 'success'
    ? dispatch(responseSuccess(result))
    : dispatch(requestFail(result));
  //dispatch response
};
