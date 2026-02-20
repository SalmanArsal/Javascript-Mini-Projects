(async () => {
  let productsDiv = document.querySelector(".products");
  let content = "";

  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);

    data.forEach((product, i) => {
      content += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div class="card shadow-sm border-0 rounded-4 h-100 w-100 product-card">
                <div class="bg-light p-3 d-flex align-items-center justify-content-center" style="height: 220px;">
                    <img src="${product.image}" 
                        class="img-fluid" 
                        style="max-height: 180px; object-fit: contain;" 
                        alt="${product.title}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-semibold text-truncate" title="${product.title}">
                        ${product.title}
                    </h6>
                    <p class="text-success fw-bold mb-2">$${product.price}</p>
                    <div class="mt-auto">
                        <a id="cart-btn" class="btn btn-primary w-100 rounded-pill">
                            </i> Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    productsDiv.innerHTML = content;

    // categorise the products
    let dropdown = document.getElementById("categories-dropdown");
    dropdown.onchange = (e) => {
      let selected_category = e.target.value;
      let filteredProducts = "";

      if (selected_category === "all") {
        window.location.reload();
      }

      data.forEach((product) => {
        if (product.category === selected_category.toLowerCase()) {
          filteredProducts += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div class="card shadow-sm border-0 rounded-4 h-100 w-100 product-card">
                <div class="bg-light p-3 d-flex align-items-center justify-content-center" style="height: 220px;">
                    <img src="${product.image}" 
                        class="img-fluid" 
                        style="max-height: 180px; object-fit: contain;" 
                        alt="${product.title}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-semibold text-truncate" title="${product.title}">
                        ${product.title}
                    </h6>
                    <p class="text-success fw-bold mb-2">$${product.price}</p>
                    <div class="mt-auto">
                        <a href="#" class="btn btn-primary w-100 rounded-pill">
                            <i class="bi bi-cart"></i> Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
        }
      });
      productsDiv.innerHTML = filteredProducts;
    };

    //   search product
      let searchForm = document.getElementById("search-form")
      
      searchForm.addEventListener("submit",(e) =>{
        e.preventDefault() // prevent's the page reload
        const search_input = e.target.search.value // search is the value of name attribute in the input tag
        let searchedProducts = data.filter((product) =>
            product.title.toLowerCase().includes(search_input.toLowerCase())
        );

        let searched = ""
        searchedProducts.forEach(product =>{
            searched += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div class="card shadow-sm border-0 rounded-4 h-100 w-100 product-card">
                <div class="bg-light p-3 d-flex align-items-center justify-content-center" style="height: 220px;">
                    <img src="${product.image}" 
                        class="img-fluid" 
                        style="max-height: 180px; object-fit: contain;" 
                        alt="${product.title}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-semibold text-truncate" title="${product.title}">
                        ${product.title}
                    </h6>
                    <p class="text-success fw-bold mb-2">$${product.price}</p>
                    <div class="mt-auto">
                        <a href="#" class="btn btn-primary w-100 rounded-pill">
                            <i class="bi bi-cart"></i> Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
        })

        productsDiv.innerHTML = searched
        searchForm.reset()

        if(searchedProducts.length <= 0){
            productsDiv.innerHTML = "<h1>No Products Found</h1>"
        }
      })


  } catch (error) {
    console.log(error);
    productsDiv.innerHTML = `
        <h1>No Products Found</h1>
        <p>${error.message}</p>
    `
  }
})();

// cart logic
let cartBtn = document.getElementById('cart-btn')
console.log(cartBtn)
if(document.body.classList.contains('cart-page')){
    let cartItems = JSON.parse(localStorage.getItem('cart')) || []
    let cartLoginBtn = document.getElementById("cart-login-btn")
    let cartDiv = document.querySelector('.cart-login')
    
    console.log(cartBtn)

    let currentUser = JSON.parse(localStorage.getItem("loggeduser"))
    if(currentUser){
        // cart logic
        cartDiv.classList.add('d-none')

        function addToCart(e, id){
            e.preventDefault()
            console.log(id)
        }

    }
    else{
        cartLoginBtn.addEventListener('click' , () =>{
            window.location.href = "./index.html"
        })
    }


}

// registration form
const regForm = document.getElementById("registration-form")
let usersarray = JSON.parse(localStorage.getItem("users")) || []
regForm.addEventListener("submit", (e) =>{
    e.preventDefault() // prevents the page reload on the submit
    let user = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
        conf_pwd: e.target.confirmpassword.value,
        phone: e.target.phone.value,
        gender: e.target.gender.value
    }

    if(user.password === user.conf_pwd){
        usersarray.push(user)
        // console.log(usersarray)
        localStorage.setItem("users", JSON.stringify(usersarray))

        window.location.href = ""
    }
    else{
        alert("Password and Confirm Password are not matching")
        return false // to stop form submision
    }

    regForm.reset()
})


const loginForm = document.getElementById("loginform")
let loggedUser = JSON.parse(localStorage.getItem("loggeduser")) || {email:"", password:""}

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let login_user = {
        email: e.target.email.value,
        password: e.target.password.value
    }

    let userFound = false
    
    for(let user of usersarray){
        if(user.email === login_user.email && user.password === login_user.password){
            userFound = true
            localStorage.setItem("loggeduser", JSON.stringify(user))
            window.location.href = "./products.html"
            break;
        }
    }  

    userFound || alert("invalid login credentials")
    // paraElem.innerHTML = `<b>${user.fullname}</b>`

    loginForm.reset()
})

let paraElem = document.getElementById('user')
let loginBtn = document.getElementById('btn-login')
let registerBtn = document.getElementById('btn-reg')
let logoutBtn = document.getElementById('btn-logout')

let currentUser = JSON.parse(localStorage.getItem("loggeduser"))
if(currentUser){
    paraElem.innerHTML = `<i class="fa-solid fa-user"></i> <b>${currentUser.fullname}</b>`
    paraElem.classList.remove("d-none")
    logoutBtn.classList.remove("d-none")

    loginBtn && (loginBtn.style.display = "none")
    registerBtn && (registerBtn.style.display = "none")
}
else{
    paraElem.classList.add("d-none")
    logoutBtn.classList.add("d-none") 
}

function logout(){
    localStorage.removeItem("loggeduser")
    window.location.href = "./index.html"
}

