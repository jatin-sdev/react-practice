function mainContainer(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  mainContainer.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: { href: "www.google.com", target: "_blank" },
  children: "Click to open google",
};

customRender(reactElement, mainContainer);
