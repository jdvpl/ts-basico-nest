import { name, age, tString } from "./basic/01-type";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    hols ${name} tienes ${age} data, ${tString}
  </div>
`;
