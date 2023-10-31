const marqueeText = document.querySelector(".marquee");

function startMarquee() {
  marqueeText.style.animation = `marquee ${
    marqueeText.clientWidth / 50
  }s linear infinite`;
}

function stopMarquee() {
  marqueeText.style.animation = "none";
}

window.addEventListener("resize", () => {
  if (marqueeText.scrollWidth > marqueeText.clientWidth) {
    startMarquee();
  } else {
    stopMarquee();
  }
});

// Inicie a animação no carregamento da página
window.addEventListener("load", startMarquee);
