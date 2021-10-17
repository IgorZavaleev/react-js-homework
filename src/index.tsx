import ReactDom from "react-dom";
import { Field } from "./components/Field/Field";
import { Newspaper } from "./homework4_newspaper/Newspaper";

const App = <Newspaper newsOnPage={3} />;

ReactDom.render(App, document.getElementById("root"));
