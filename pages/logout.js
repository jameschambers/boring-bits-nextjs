import { useLayoutEffect } from 'react'
import { removeToken } from '../services/TokenService'
import { toast } from 'react-toastify';
import { redirect } from '../services/NavService'

const Logout = () => {
  useLayoutEffect(() => {
    removeToken().then(() => {
      redirect('/login');
    });
  })
  return null;
}

export default Logout
