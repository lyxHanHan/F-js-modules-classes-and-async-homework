// export const getPoetry = () => {
//   return fetch("https://v1.jinrishici.com/all.json", { method: "get" })
//     .then((res) => res.json())
//     .then((data) => {
//       return [data.origin, data.author, data.content];
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const getPoetry = async () => {
  const res = await fetch("https://v1.jinrishici.com/all.json", {
    method: "get",
  });

  const data = await res.json();

  if (data != null) {
    return [data.origin, data.author, data.content];
  }

  return new Error("err");
};
