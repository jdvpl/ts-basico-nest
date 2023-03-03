// import { name, age, tString } from "./basic/01-type";

import { user } from "./02-classes/03clases";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    hola ${user.name} #${user.id} 
    <img src="${user.imageUrl}"/>
  </div>
`;
