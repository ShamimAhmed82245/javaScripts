console.log("Script Start");

const URL = "https://jsonplaceholder.typicode.com/posts";

const getPost = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
};

getPost()
  .then((myData) => {
    console.log(myData);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Script End");
