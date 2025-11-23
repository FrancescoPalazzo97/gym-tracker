import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllRoutinesPage } from "@/pages";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllRoutinesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
