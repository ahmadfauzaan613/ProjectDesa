import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wrapper from './Components/Wrapper'
import Home from './Pages/Home'
// import Login from './Pages/Login'
import { Provider } from 'react-redux'
import { store } from './Redux/'
import LoginAdmin from './Pages/Admin/Login'
// import Register from './Pages/Register'
import Dashboard from './Pages/Admin/Dashboard'
import WrapperAdmin from './Components/Admin/WrapperAdmin'
import UploadLaporan from './Pages/UploadLaporan'
import DetailLaporan from './Pages/DetailLaporan'
import Revisi from './Pages/Revisi'
import Laporan from './Pages/Admin/Laporan'
import AdminRevisi from './Pages/Admin/AdminRevisi'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route
              path="/login"
              element={
                <Wrapper isProtect={false}>
                  <Login />
                </Wrapper>
              }
            ></Route> */}

            {/* <Route
              path="/register"
              element={
                <Wrapper isProtect={false}>
                  <Register />
                </Wrapper>
              }
            ></Route> */}
            <Route
              path="/admin"
              element={
                <WrapperAdmin isProtect={false}>
                  <LoginAdmin />
                </WrapperAdmin>
              }
            ></Route>
            <Route
              path="/admin/dashboard"
              element={
                <WrapperAdmin isProtect={true}>
                  <Dashboard />
                </WrapperAdmin>
              }
            ></Route>
            <Route
              path="/admin/laporan"
              element={
                <WrapperAdmin isProtect={true}>
                  <Laporan />
                </WrapperAdmin>
              }
            ></Route>
            <Route
              path="/admin/revisi/:id"
              element={
                <WrapperAdmin isProtect={true}>
                  <AdminRevisi />
                </WrapperAdmin>
              }
            ></Route>
            <Route
              path="/"
              element={
                <Wrapper isProtect={true}>
                  <Home />
                </Wrapper>
              }
            ></Route>
            <Route
              path="/upload"
              element={
                <Wrapper isProtect={true}>
                  <UploadLaporan />
                </Wrapper>
              }
            ></Route>
            <Route
              path="/detail/:id"
              element={
                <Wrapper isProtect={true}>
                  <DetailLaporan />
                </Wrapper>
              }
            ></Route>
            <Route
              path="/revisi/:id"
              element={
                <Wrapper isProtect={true}>
                  <Revisi />
                </Wrapper>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
