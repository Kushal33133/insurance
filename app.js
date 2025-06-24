  const menuToggle = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });


  document.getElementById("getInTouch").addEventListener("click", function (event) {
    event.preventDefault(); 


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;


    userData = {
        name:name,
        email:email,
        phone:phone
    }

    console.log(userData);
    localStorage.setItem("userData",JSON.stringify(userData))
    alert("Thank you for getting in touch, " + userData.name + "! We will get back to you soon at " + userData.email + ".");

  });

