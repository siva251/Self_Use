
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Hooks from './Components/Hooks'
import Sidebar from './Components/Sidebar'
import Routing from './Components/Routing'
import NoPage from './Components/NoPage'
import UseState from './Components/CommonHooks/UseState'
import UseEffect from './Components/CommonHooks/UseEffect'
import UseContext from './Components/CommonHooks/UseContext'
import UseMemo from './Components/CommonHooks/UseMemo'
import UseCallback from './Components/CommonHooks/UseCallback'
import ReactMemo from './Components/CommonHooks/ReactMemo'
import UseTransition from './Components/CommonHooks/UseTransition'
import Redux from './Components/Redux'

export default function App() {

  const location = useLocation();
  const showSidebar = location.pathname.startsWith("/Hooks");

  return (
    <>
      <Navbar />
      <div className={`gridContainer ${showSidebar ? "withSidebar" : "withOutSidebar"}`}>
        {showSidebar && <div className='sidebar'><Sidebar /></div>}
        <div className=''>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Hooks' element={<Hooks />}>
              <Route path='useState' element={<UseState />}></Route>
              <Route path='useEffect' element={<UseEffect />}></Route>
              <Route path='useContext' element={<UseContext />}></Route>
              <Route path='useMemo' element={<UseMemo />}></Route>
              <Route path='useCallback' element={<UseCallback />}></Route>
              <Route path='reactMemo' element={<ReactMemo />}></Route>
              <Route path='useTransition' element={<UseTransition />}></Route>
            </Route>
            <Route path='/route' element={<Routing />}></Route>
            <Route path="*" element={<NoPage />} />
            <Route path='/redux' element={<Redux />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
