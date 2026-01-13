const button = document.getElementById("colorBtn");

const colors = [
     "#6ea1c6ff", // light blue – default
  "#b3e5fc", // soft sky blue
  "#c8e6c9", // gentle mint green
  "#ffe0b2", // soft peach/orange
  "#fff9c4", // pastel yellow
  "#d1c4e9", // lavender/light purple
  "#b2dfdb", // soft teal
  "#f8bbd0", // light pink – contrasts well with dark text
  "#f0f4c3"
];

button.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
