import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllRoutinesPage } from "@/pages";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<AllRoutinesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
