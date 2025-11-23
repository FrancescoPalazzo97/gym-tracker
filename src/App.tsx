import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllRoutinesPage } from "@/pages";
import DefaultLayout from "./layouts/DefaultLayout";
import SingleRoutinePage from "./pages/SingleRoutinePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<AllRoutinesPage />} />
            <Route path="/routine/:routineId" element={<SingleRoutinePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
