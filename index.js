// Sample ramen data (replace with your actual data)
const ramens = [
{
  id: 1,
  name: "bone soup",
  restaurant: "Cjs",
  image: "Pasted image.png",
  rating: 8,
  comment: "its halal!",



},


  {
    id: 2,
    name: "stake n Egg ",
    restaurant: "artcaffee",
    image: "Pasted image (3).png",
    rating: 8,
    comment: "Tamu sana!",
  },
  {
    id: 3,
    name: "vegetable pasta",
    restaurant: "new china hotel",
    image: "Pasted image (4).png",
    rating: 9,
    comment: "chinese test!",
  },
  {
    id: 4,
    name: "beijing dinner",
    restaurant: "china pork centre",
    image: "Pasted image (5).png",
    rating: 10,
    comment: "satisfying!",
  },
];
function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id; 
    img.addEventListener("click", handleClick);
    ramenMenu.appendChild(img);
  });
}

function handleClick(event) {
  const ramenId = event.target.dataset.id;
  const ramen = ramens.find((r) => r.id == ramenId);

  if (ramen) {
    const detailImage = document.querySelector("#ramen-detail .detail-image");
    const name = document.querySelector("#ramen-detail .name");
    const restaurant = document.querySelector("#ramen-detail .restaurant");
    const ratingDisplay = document.querySelector("#rating-display");
    const commentDisplay = document.querySelector("#comment-display");

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    name.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
  }
}


function addSubmitListener() {
  const form = document.getElementById("ramen");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
      id: ramens.length + 1, 
      name: document.getElementById("new-name").value,
      restaurant: document.getElementById("new-restaurant").value,
      image: document.getElementById("new-image").value,
      rating: parseInt(document.getElementById("new-rating").value),
      comment: document.getElementById("new-comment").value,
    };

  
    ramens.push(newRamen);

    
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.dataset.id = newRamen.id;
    img.addEventListener("click", handleClick);
    ramenMenu.appendChild(img);

    form.reset();
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}


document.addEventListener("DOMContentLoaded", main);