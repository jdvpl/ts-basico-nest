// import { name, age, tString } from "./basic/01-type";

import { user } from "./basic/02-objects";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    hols ${user.name} 
  </div>
`;
