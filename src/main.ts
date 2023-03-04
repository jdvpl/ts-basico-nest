// import { name, age, tString } from "./basic/01-type";

import { user } from "./03-dependencies-Injection/04-injecction-clasess";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    hola ${user.name} #${user.id} 
    <img src="${user.imageUrl}"/>
  </div>
`;
