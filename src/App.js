import Homepage from "./homepage/Homepage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Loginpage } from "./loginpage/Loginpage";
import { Allusers } from "./allusers/Allusers";
import { Singleuser } from "./singleuser/Singleuser";
import { Newuser } from "./newuser/Newuser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="users">
              <Route index element={<Allusers />} />
              <Route path=":userId" element={<Singleuser />} />
              <Route path="new" element={<Newuser />} />
            </Route>
            <Route path="products">
              <Route index element={<Allusers />} />
              <Route path=":productId" element={<Singleuser />} />
              <Route path="new" element={<Newuser />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
