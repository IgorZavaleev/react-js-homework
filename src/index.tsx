import ReactDom from "react-dom";
import { Field } from "./components/Field/Field";

const App = (
  <h1>
    Hello, world
    <Field />
  </h1>
);

ReactDom.render(App, document.getElementById("root"));
