const button2 = document.querySelectorAll(".artdeco-button--secondary");

let i = 0;

const id = setInterval(() => {
  if (i >= button2.length) {
    clear(id);
  } else {
    if (button2[i].children[0].innerText == "Connect") {
      button2[i].click();

      setTimeout(() => {
        document.querySelector(".artdeco-button--primary").click();
      }, 1000);
    }

    i++;
  }
}, 2000);

function clear(id) {
  clearInterval(id);
}
