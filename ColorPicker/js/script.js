const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

const colorBG = () => {
  document.body.style.backgroundColor = color.value;

  if (color.value === "#ffffff") {
    text.textContent = `カラーコード：${color.value} (White)`;
  } else if (color.value === "#000000") {
    text.textContent = `カラーコード：${color.value} (Black)`;
  } else {
    text.textContent = `カラーコード：${color.value}`;
  }
};

color.addEventListener("input", colorBG);
