import {myfunction} from "./mymodule";

const container = document.createElement("div");
container.setAttribute("id", "hello");
container.innerText = "[EXPORT NAMED, IMPORT FROM] Type is " + typeof myfunction;
document.body.appendChild(container);
