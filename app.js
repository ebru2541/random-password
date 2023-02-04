const input = document.querySelector(".input");
const btn1 = document.querySelector(".btn-box");
let randompass;
function startTimer() {
  timer = setInterval(() => {
    randomSayı();
  }, 2000);
}

function stopTimer() {
  clearInterval(timer);
}

function deleteTimer() {
  clearInterval(timer);
  input.innerText = "";
}

const randomSayı = () => {
  //!sayı 3
  let pass = [];
  input.innerText = "";
  for (let i = 0; i < 3; i++) {
    const a = Math.floor(Math.random() * 10);
    pass.push(a);
  }

  //! küçük harf
  const lowerCase = "abcçdefghıioöprsştuüvyz";
  const b = Math.floor(Math.random() * lowerCase.length);
  pass.push(lowerCase[b]);

  //!büyük harf 1
  const upperCase = lowerCase.toLocaleUpperCase();
  const c = Math.floor(Math.random() * lowerCase.length);
  pass.push(upperCase[c]);

  //! sembool 2
  const sembol = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  for (let i = 0; i < 2; i++) {
    const d = Math.floor(Math.random() * sembol.length);
    pass.push(sembol[d]);
  }

  //! 4 karakter
  const sumss = lowerCase + upperCase;
  for (let i = 0; i < 3; i++) {
    const e = Math.floor(Math.random() * sumss.length);
    pass.push(sumss[e]);
  }

  //!kariştir
  const sortPassword = (str) =>
    [...str].sort(() => Math.random() - 0.4).join("");

  password = sortPassword(pass);
  input.innerText = password;
  return;
};
