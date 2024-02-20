// document.getElementsByTagName('li') // HTMLCollection
// document.getElementsByClassName /HTMLCollection

// const $input = document.getElementsByName("nombre"); // Node list

const $menu = document.getElementById("menu");
const $card = document.querySelector(".card");

const $links = document.querySelectorAll("#menu a"); // Node list

console.log($menu);
console.log($card);

console.log($links);
console.log($links.length);
$links.forEach((el) => console.log(el));