const set = new Set([
  1,
  2,
  3,
  4,
  5,
  true,
  true,
  "HOla",
  "HOla",
  false,
  {},
  {},
  true,
  [],
  [],
]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
set2.add([]);
set2.add([]);
console.log(set2);
console.log(set2.size);
for (item of set) {
  console.log(item);
}
console.log("///////////////");
set2.forEach((item) => console.log(item));

const arr = Array.from(set2);
console.log(arr);
console.log(arr[5]);

// METHODOS SET
// delete
set2.delete(false);
console.log(set2);
// has
console.log(set2.has(true));
set2.clear();
console.log(set2);
