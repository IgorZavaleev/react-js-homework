import ReactDom from "react-dom";
import { Field } from "./components/Field/Field";
import { Login } from "@/components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "@/components/Login/PrivateRoute";
import { ProvideAuth } from "@/components/Login/ProvideAuth";
import { UserMenu } from "@/components/Login/UserMenu";
import React from "react";

const App = (
  <ProvideAuth>
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <h1>Игра «Жизнь»</h1>
              <p>Введите, пожалуйста, имя пользователя</p>
              <Login />
            </>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserMenu />
              <hr />
              <Field />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </Router>
  </ProvideAuth>
);

ReactDom.render(App, document.getElementById("root"));
