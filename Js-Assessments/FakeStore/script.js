if (!localStorage.getItem("logged_user")) {
    location.replace("./login.html");
}

let main = document.querySelector("#main");
let categoryDropdown = document.querySelector(".category");
(async () =>{
    try{
      let response = await fetch("https://fakestoreapi.com/products")
      let result = await response.json()
      console.log(result);

      displayProducts(result)

      categoryDropdown.addEventListener("change", (e)=>{
        const selectedCategory = e.target.value
        if(selectedCategory === "all"){
          displayProducts(result)
        }else{
          const filteredProducts = result.filter((item) =>{
            return selectedCategory === item.category
          })
          displayProducts(filteredProducts);
        }
      })
    

    } catch(err){
      console.log(err);
      main.innerHTML = "<h1>Failed To Load The Products</h1>"
    }
})()

function displayProducts(products){
  let ui = "";
      products.forEach(item => {
      ui += `
      <div class="card">
          <img src="${item.image}" alt="" onclick="showDiscription(${item.id})">
          <hr>
          <h1>Price: $ ${item.price}</h1>
          <p>Name: ${item.title}</p>
          <button title="click to make it favourite" onclick="addToCart(${item.id})">🤍</button>
      </div>`
    })

  main.innerHTML = ui
}

function showDiscription(id){
  // console.log(id);
  window.location.href = "./description.html"
  window.localStorage.setItem("product_id" , JSON.stringify(id))
}


let wishSpan = document.getElementById("wish")
wishSpan.innerText = JSON.parse(localStorage.getItem("logged_user")).username



let logoutBtn = document.getElementById("logout")
logoutBtn.addEventListener("click", () =>{
    localStorage.removeItem("logged_user")
    location.href = "./login.html"
})

const addToCart = (id) =>{
  
}