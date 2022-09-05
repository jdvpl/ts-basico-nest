import { name } from "./basic/0.1-type";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    hola mundo desde ts ${name}
  </div>
`;
