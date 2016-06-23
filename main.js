const body = document.querySelector('body');

function makeStrips(className) {
  const container = document.createElement("div");
  container.classList.add("stripes");
  container.classList.add(className);

  let i = 500;
  while (i--) {
    const child = document.createElement("div");
    child.classList.add("stripe");
    container.appendChild(child);
  }
  body.appendChild(container);
}

makeStrips("one");
makeStrips("two");
makeStrips("three");
makeStrips("four");
