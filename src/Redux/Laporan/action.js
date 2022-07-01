import axios from 'axios'

// Loading
export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  }
}
//

export const setAllLaporan = (alllaporan) => {
  return {
    type: 'SET_ALL_LAPORAN',
    payload: alllaporan,
  }
}

export const setLaporan = (laporan) => {
  return {
    type: 'SET_LAPORAN',
    payload: laporan,
  }
}

export const FetchLaporan = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://62ba64c9573ca8f832839adf.mockapi.io/v1/laporan/${id}`)
      const laporan = response.data
      dispatch(setLaporan(laporan))
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error)
      throw new Error(error.response)
    }
  }
}

export const fetchAllLaporan = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://62ba64c9573ca8f832839adf.mockapi.io/v1/laporan`)
      let alllaporan = response.data
      dispatch(setAllLaporan(alllaporan))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}

export const postDokumen = (id, nama_lengkap, tanggal_lahir, email, no_hp, file, status, catatan) => {
  console.log(id, nama_lengkap, tanggal_lahir, email, no_hp, file, status, catatan, 'ada')
  return async (dispatch) => {
    try {
      const response = await axios.post(`https://62ba64c9573ca8f832839adf.mockapi.io/v1/laporan`, {
        id,
        nama_lengkap,
        tanggal_lahir,
        email,
        no_hp,
        file,
        catatan: '-',
        status: 'Waiting',
      })
      const postLaporan = response.data
      dispatch(setLaporan(postLaporan))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}
export const putDokumen = (id, newfile, newnama, newtanggal, newemail, newnohp, newcatatan) => {
  console.log(id, newfile, 'ada')
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://62ba64c9573ca8f832839adf.mockapi.io/v1/laporan/${id}`, {
        nama_lengkap: newnama,
        tanggal_lahir: newtanggal,
        email: newemail,
        no_hp: newnohp,
        file: newfile,
        catatan: newcatatan,
        status: 'Waiting',
      })
      const putLaporan = response.data
      dispatch(setLaporan(putLaporan))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}
export const putAdminDokumen = (id, newnama, newtanggal, newemail, newnohp, newfile, newcatatan, newstatus) => {
  console.log(id, newnama, newtanggal, newemail, newnohp, newfile, newcatatan, newstatus, 'ada')
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://62ba64c9573ca8f832839adf.mockapi.io/v1/laporan/${id}`, {
        nama_lengkap: newnama,
        tanggal_lahir: newtanggal,
        email: newemail,
        no_hp: newnohp,
        file: newfile,
        catatan: newcatatan,
        status: newstatus,
      })
      const putLaporan = response.data
      dispatch(setLaporan(putLaporan))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}
