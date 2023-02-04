const input = document.querySelector(".input");

function startTimer() {
  timer = setInterval(() => {
    randomSayı();
  }, 900);
}

function stopTimer() {
  clearInterval(timer);
}

function deleteTimer() {
  clearInterval(timer);
  input.innerText = "";
}

const randomSayı = () => {
  let pass = [];
  input.innerText = "";
  for (let i = 0; i < 3; i++) {
    const a = Math.floor(Math.random() * 10);
    pass.push(a);
  }
  const lowerCase = "abcdefghiopqrstuvwyz";
  const b = Math.floor(Math.random() * lowerCase.length);
  pass.push(lowerCase[b]);

  const upperCase = lowerCase.toLocaleUpperCase();
  const c = Math.floor(Math.random() * lowerCase.length);
  pass.push(upperCase[c]);

  const sembol = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  for (let i = 0; i < 2; i++) {
    const d = Math.floor(Math.random() * sembol.length);
    pass.push(sembol[d]);
  }

  const sumss = lowerCase + upperCase;
  for (let i = 0; i < 3; i++) {
    const e = Math.floor(Math.random() * sumss.length);
    pass.push(sumss[e]);
  }

  const sortPassword = (str) =>
    [...str].sort(() => Math.random() - 0.4).join("");

  password = sortPassword(pass);
  input.innerText = password;
  return;
};
