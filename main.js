const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames and alternative text for each image file  */
const imageFilenames = [
  { filename: "pic1.jpg", alt: "Nigeria flag" },
  { filename: "pic2.jpg", alt: "Third Mainland bridge" },
  { filename: "pic3.jpg", alt: "Island" },
  { filename: "pic4.jpg", alt: "Bus" },
  { filename: "pic5.jpg", alt: "City sunset" },
];

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", `images/${imageFilenames[i].filename}`);
  newImage.setAttribute("alt", `${imageFilenames[i].alt}`);
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

/* Adding click event to the thumbnail */
thumbBar.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const clickedImg = e.target;

    /* Get the src and alt value when the image is clicked*/
    const srcVale = clickedImg.getAttribute("src");
    const altValue = clickedImg.getAttribute("alt");

    /* Set the src and alt attributes of the display */
    displayedImage.setAttribute("src", srcVale);
    displayedImage.setAttribute("alt", altValue);
  }
});

// Writing a handler that runs the darken/lighten button

function changeColor() {
  const currentClassName = btn.getAttribute("class");

  if (currentClassName === "dark") {
    // light mode
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    // switch back to "dark" mode
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}

btn.addEventListener("click", changeColor);
