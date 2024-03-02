// function appear() {}
let msg = document.querySelectorAll(".btn");
console.log(msg);

let value;
// register the buttons
msg.forEach((element) => {
  element.addEventListener("click", () => {
    value = element.innerHTML;
    console.log(value);
    element.style.backgroundColor = "red";
    setTimeout(function () {
      element.style.backgroundColor = "lightskyblue";
    }, 2000);
  });
});

function submit() {
  let msg = document.getElementById("result");

  if (value == undefined) {
    msg.innerHTML = `You have not selected any Number`;
  } else {
    msg.innerHTML = `You selected ${value} out of 5 <br> Thank you! <br> 
        <p> We appreciate you taking the time to give a rating. If you ever need more
        support, don’t hesitate to get in touch! <p/>`;
  }
  setTimeout(function () {
    location.reload(true);
  }, 5000);
}
