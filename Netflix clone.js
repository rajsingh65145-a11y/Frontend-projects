const cards = document.querySelectorAll(".movie-card")

cards.forEach((card, index) => {
  card.innerHTML = index + 1

  card.addEventListener("click", () => {
    alert("Movie " + (index + 1) + " clicked")
  })
})

