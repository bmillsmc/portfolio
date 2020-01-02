export default class PDFBackend {
  init = (source, element) => {
    const textNode = document.createElement("p");
    textNode.innerHTML = `yeet src is ${source}`;
    element.appendChild(textNode);
  };
}
