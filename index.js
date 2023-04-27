if (navigator.share) {
  const btn = document.getElementById("share");
  btn.style = null;
  btn.addEventListener("click", () => {
    navigator.share({
      title: document.querySelector("meta[name=description]")?.content,
      url: location.origin,
    });
  });
}
