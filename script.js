let enterNum = document.getElementById("enterNum");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  let text = enterNum.value;
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "1") {
      result += "I";
    } else if (text[i] === "2") {
      result += "II";
    } else if (text[i] === "3") {
      result += "III";
    } else if (text[i] === "4") {
      result += "IV";
    } else if (text[i] === "5") {
      result += "V";
    } else if (text[i] === "6") {
      result += "VI";
    } else if (text[i] === "7") {
      result += "VII";
    } else if (text[i] === "8") {
      result += "VIII";
    } else if (text[i] === "9") {
      result += "IX";
    } else {
      result += text[i];
    }
  }

  let box = document.createElement("div");
  box.innerHTML = `<div class="small">
    <p style="background-color:rgb(0, 0, 86);color:white;padding:12px;text-align:center;">${result}</p>
</div>`;

  enterNum.value = "";
  document.querySelector(".small").appendChild(box);
});
