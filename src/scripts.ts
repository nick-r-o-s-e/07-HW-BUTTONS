const buttons = document.querySelectorAll(".btn");
const squares = document.querySelectorAll(".square") as NodeListOf<HTMLElement>;
////BUTTONS////

/////////////////// BUTTON-1/////////////////////
buttons[0]?.addEventListener("click", () => {
  const square = squares[0];
  const currentBg = window.getComputedStyle(square).backgroundColor;
  const newBg =
    currentBg == "rgb(31, 194, 174)" ? "yellow" : "rgb(31, 194, 174)";

  square && (square.style.backgroundColor = newBg);
});
/////////////////// BUTTON-2/////////////////////
buttons[1]?.addEventListener("click", () => {
  const square = squares[1];
  const currentText = square.innerHTML;
  const newText =
    currentText == "<h1>FAIL</h1>" ? "<h1>SUCCESS</h1>" : "<h1>FAIL</h1>";

  square && (square.innerHTML = newText);
});
//
/////////////BUTTON-3 AND BUTTON-4///////////////
const addOpacityToggling = (btn: Element | null, squareNum: number) => {
  btn?.addEventListener("click", () => {
    const square = squares[squareNum];
    const currentDisplay = window.getComputedStyle(square).opacity;
    const newDisplay =
      squareNum == 3 ? (currentDisplay == "1" ? "0" : "1") : "0";
    square && (square.style.opacity = newDisplay);
  });
};
addOpacityToggling(buttons[2], 2);
addOpacityToggling(buttons[3], 3);
/////////////////// BUTTON-5/////////////////////
buttons[4]?.addEventListener("click", () => {
  const colors = ["#3D1766", "#FF8B13", "#0081B4", "#4E6C50", "#C780FA"];

  const randomIndex = Math.floor(
    Math.random() * (Math.floor(4) - Math.ceil(0) + 1) + Math.ceil(0)
  );

  const square = squares[4];
  square && (square.style.backgroundColor = colors[randomIndex]);
});

/////////////////// BUTTON-6/////////////////////

let timeoutsSq6: number[] = [];

buttons[5]?.addEventListener("click", () => {
  const square = squares[5];
  timeoutsSq6.forEach((id) => clearTimeout(id)); //remove old timeouts
  timeoutsSq6 = []; //empty the timeouts array from old ids
  if (square) {
    square.innerHTML = `<h1>0</h1>`;
    for (let i = 1; i < 11; i++) {
      // const startTimer = Date.now();//FOR CHECK IF THE TIMING IS RIGHT(start)
      timeoutsSq6.push(
        Number(
          setTimeout(() => {
            square.innerHTML = `<h1>${i}</h1>`;
            // console.log((Date.now() - startTimer) / 1000 - (i - 1) * 3);//FOR CHECK IF THE TIMING IS RIGHT(end)
          }, i * 3000)
        )
      );
    }
  }
});
/////////////////// BUTTON-7/////////////////////
buttons[6]?.addEventListener("click", () => {
  const body = document.querySelector("body") as HTMLElement;
  const inputOutputText = document.querySelector(
    "#output__inputText"
  ) as HTMLElement;
  const [bodyBgs, squaresBgs] = [
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)"],
    ["rgb(31, 194, 174)", "rgb(24, 213, 225)"],
  ];

  let currentBodyBg = body.style.backgroundColor;

  const changeColors = (index: number) => {
    body.style.backgroundColor = bodyBgs[index];
    squares.forEach?.((square: HTMLDivElement) => {
      square.style.backgroundColor = squaresBgs[index];
    });
    inputOutputText.style.color = bodyBgs.at(index - 1); //opposite of bodyBg
  };

  currentBodyBg != bodyBgs[1] ? changeColors(1) : changeColors(0);
});

/////////SQUARES/////////

///////////////////SQUARE-5///////////////////
let timeoutsSq5: number[] = [];

squares[4]?.addEventListener("mouseover", (e) => {
  const target = e.target as HTMLDivElement;

  timeoutsSq5.forEach((id) => clearTimeout(id)); //remove old timeouts
  timeoutsSq5 = []; //empty the timeouts array from old ids

  target.innerHTML = `<h1>0</h1>`;
  for (let i = 1; i < 11; i++) {
    timeoutsSq5.push(
      //add id of the timeout
      Number(
        setTimeout(() => {
          target.innerHTML = `<h1>${i}</h1>`;
        }, i * 1000)
      )
    );
  }

  squares[4].addEventListener("mouseleave", () => {
    timeoutsSq5.forEach((id) => clearTimeout(id));
    timeoutsSq5 = [];
    target.innerHTML = `<h1>0</h1>`;
  });
});

//////////////INPUT//////////////
const input = document.getElementById("input") as HTMLInputElement;
input.onkeyup = function () {
  document.getElementById("output__inputText").innerHTML = input.value;
};
