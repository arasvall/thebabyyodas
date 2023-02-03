
import { Route, Routes } from "react-router-dom"

import Start from "./pages/start";
import Page from "./pages/Page";
import DataId from "./pages/DataId";


export default function App() {
  return ( 
    <div className="App">
      <DataId />
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/people" element={<Page />} />
      {/* <Route path="/people:id" element={<DataId/>} /> */}
      <Route path="/planets" element={<Page />} />
      {/* <Route path="/planets:id" element={<DataId/>} /> */}
      <Route path="/species" element={<Page />} />
      {/* <Route path="/species:id" element={<DataId/>} /> */}
      <Route path="/vehicles" element={<Page />} />
      {/* <Route path="/vehicles:id" element={<DataId/>} /> */}
      <Route path="/starships" element={<Page />} />
    </Routes>
   
    </div>
  );
}
