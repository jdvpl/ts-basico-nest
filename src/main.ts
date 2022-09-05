import { name } from "./basic/0.1-type";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    hola mundo desde ts ${name}
  </div>
`;
