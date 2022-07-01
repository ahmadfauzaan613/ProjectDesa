import axios from 'axios'

// Loading
export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  }
}
//

export const setAllUser = (allUser) => {
  return {
    type: 'SET_ALL_USER',
    payload: allUser,
  }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  }
}

export const RegisterUser = (email, password, nama_lengkap) => {
  console.log(email, password, nama_lengkap, 'ADA')
  return async (dispatch) => {
    try {
      const response = await axios.post(`https://62ba64c9573ca8f832839adf.mockapi.io/v1/user`, {
        email,
        password,
        nama_lengkap,
      })
      const user = response.data
      dispatch(setUser(user))
      dispatch(setLoading(false))
    } catch (error) {
      alert('salah')
      throw new Error(error.response)
    }
  }
}

export const LoginUser = (email, password) => {
  console.log(email, password, 'ADA')
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3000/login`, {
        email,
        password,
      })
      const user = response.data
      dispatch(setUser(user))
      dispatch(setLoading(false))
    } catch (error) {
      alert('salah')
      throw new Error(error.response)
    }
  }
}
