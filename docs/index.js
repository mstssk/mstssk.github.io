if (navigator.share) {
  const btn = document.getElementById("share");
  btn.hidden = false;
  btn.addEventListener("click", () => {
    navigator.share({
      text: document.querySelector("meta[name=description]")?.content,
      url: location.origin,
    });
  });
}
