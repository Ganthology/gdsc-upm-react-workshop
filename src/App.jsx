import React from "react"
import { Routes, Route } from "react-router-dom"
import Landing from "./routes/Landing"
import Showcase from "./routes/Showcase"

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='/showcase' element={<Showcase />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
