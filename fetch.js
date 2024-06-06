const URL = "https://jsonplaceholder.typicode.com/posts";

//get method
// fetch(URL)
//   .then((response) => {
//     console.log(response);
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong !!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong !!!");
    }
  })
  .then((data) => {
    console.log(data);
  });
