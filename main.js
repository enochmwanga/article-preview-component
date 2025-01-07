const shareButton = document.getElementById("share-button");
const shareButton1 = document.getElementById("share-button1");
const shareToggle = document.getElementById("share-toggle");
const authorInfo = document.getElementById("author-info");
var width = window.innerWidth;
shareButton.addEventListener("click", () => {
  if (innerWidth < 844) {
    shareToggle.style.display = "grid";
    authorInfo.style.display = "none";
  } else {
    authorInfo.style.display = "grid";
    if (shareToggle.style.display === "none") {
      shareToggle.style.display = "grid";
    } else {
      shareToggle.style.display = "none";
    }
  }
});
screen.orientation.addEventListener("change", () => {
  shareToggle.style.display = "none";
  authorInfo.style.display = "grid";
});
shareButton1.addEventListener("click", () => {
  shareToggle.style.display = "none";
  authorInfo.style.display = "grid";
});
