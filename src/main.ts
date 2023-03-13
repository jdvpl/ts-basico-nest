import { user } from "./04-decorators/06.decorator.deprecated";


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    hola ${user.name} #${user.id} 
  </div>
`;
