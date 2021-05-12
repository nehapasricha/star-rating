const stars = Array.from(document.querySelectorAll(".star i"));
const emojis = Array.from(document.querySelectorAll(".emoji"));

stars.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    setStarColor(index);
    setEmoji(index);
  });
});

function setStarColor(limit) {
  stars.forEach((star, index) => {
    if (index <= limit) {
      star.style.color = "gold";
    } else {
      star.style.color = "grey";
    }
  });
}

function setEmoji(index) {
  emojis.forEach((emoji, i) => {
    if (index == i) {
      emoji.style.display = "block";
    } else {
      emoji.style.display = "none";
    }
  });
}
