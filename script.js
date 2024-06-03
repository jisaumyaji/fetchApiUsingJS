// const buton = document.getElementById("btn");
// buton.addEventListener("click",()=>
//     fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => {
//   return data.json();
// console.log(data.json);
// })
// .then((data1) => {
//   console.log(data1); 
//    const tearn=document.getElementById("arn");
//    tearn.addEventListener("mouse",(data1)=>
// arn.innerHtml(data1);)
// document.getElementById("arn").addEventListener("mouseenter",(data1)=>document.getElementById("arn").innerText(data1))

// })
// .catch((err) => {
//   console.log(err);
// })
// );

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data1) => {
//     console.log(data1);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
document.getElementById("btn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            const textarea = document.getElementById("arn");
            textarea.addEventListener("mouseenter", () => {
                textarea.value = JSON.stringify(data,null,2);
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
