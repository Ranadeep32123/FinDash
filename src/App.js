import Homepage from "./homepage/Homepage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Loginpage } from "./loginpage/Loginpage";
import Allusers from "./allusers/Allusers";
import { Singleuser } from "./singleuser/Singleuser";
import { Newuser } from "./newuser/Newuser";
import { userInputs, productInputs } from "./allusers/formdata";
import "./AppDark.scss";
import { ThemeContext } from "./Context/themeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("App");

  return (
    <ThemeContext.Provider value={{ setTheme }}>
      <div className={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="login" element={<Loginpage />} />
              <Route path="users">
                <Route index element={<Allusers />} />
                <Route path=":userId" element={<Singleuser />} />
                <Route
                  path="new"
                  element={<Newuser inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<Allusers />} />
                <Route path=":productId" element={<Singleuser />} />
                <Route
                  path="new"
                  element={
                    <Newuser inputs={productInputs} title="Add New Product" />
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
