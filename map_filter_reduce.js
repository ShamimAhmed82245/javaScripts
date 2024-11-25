const arr = [45, 21, 10];
console.log(arr);
// map -> +,-,*,/
const map_arr = arr.map((val, a) => {
  console.log(val, a);
  return val + 10;
});
console.log("map : ");
console.log(map_arr);
console.log("filter : ");
// filter -> <,>,===,!=
const filter_arr = arr.filter((val, a, b) => {
  console.log(val, a, b);
  return val != 10;
});
console.log(filter_arr);
console.log("Reduce");
// use for summ
const reduce_ = arr.reduce((a, b) => {
  console.log(a + b);
  return a + b;
}, 0);

console.log("final (a+b) : " + reduce_);
const reduce_arr = arr.reduce((a, b) => {
  console.log(a);
  return a + b;
}, 2);
console.log("final : " + reduce_arr);
