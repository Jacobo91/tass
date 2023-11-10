import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import C1comp  from "./pages/C1comp"
import St1comp from './pages/St1comp'
import St2comp from './pages/St2comp'
import { useEffect, useState } from 'react'

const queryClient = new QueryClient()

function App() {

  const [groupId, setGroupId] = useState()

  function setID(id) {
    if(id) {
      setGroupId(id)
    }
  }

  useEffect(() => {
    console.log(groupId)
  }, [groupId])

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar setID={setID} />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/c1' element={<C1comp id={groupId} />}/>
            <Route path='/st1' element={<St1comp id={groupId}/>}/>
            <Route path='/st2' element={<St2comp id={groupId}/>}/>
            <Route path='*' element={"Page not found"}/>
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
