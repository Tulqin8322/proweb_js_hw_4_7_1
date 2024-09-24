var stop = true;
const baza = [];

while (stop) {
  const text = prompt(
    "Komanda va matn kiriting. (add, Ali) yoki (delete, Ali) yoki (update, Ali, Abbos) yoki (stop) ko'rinishida"
  ).split(",");

  switch (text[0]) {
    case "add":
      baza.push(text[1]);
      console.log(text[1] + " qo'shildi");
      break;
    case "delete":
      baza.splice(
        baza.findIndex((arr) => arr == text[1]),
        1
      );
      console.log(text[1] + " o'chirildi");
      break;
    case "update":
      let index = baza.findIndex((arr) => arr === text[1]);
      baza.splice(index, 1, text[2]);
      console.log(text[1] + " " + text[2] + "ga o'zgartirildi");
      break;
    case "stop":
      stop = false;
      console.log("dastur to'xtatildi");
      break;
    default:
      break;
  }
}

baza.forEach((elem)=>console.log(elem))

