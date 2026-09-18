let sendBtn = document.getElementById("sendBtn");
let messageInput = document.getElementById("message");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let darkBtn = document.getElementById("darkBtn");
let projectBtns =
document.querySelectorAll(".project-btn");


sendBtn.onclick = function() {
  
  let userName = nameInput.value;
  let userEmail = emailInput.value;
  let userMessage = messageInput.value;
  
  if (userName === "") {
    alert("Please enter your name ⚠️");
  }
  else if (userEmail === "") {
    alert("Please enter email⚠️");
    
  }
  else if (!userEmail.includes("@")) {
    alert("Please enter a value email! 📧⚠️");
  }
  else if (userMessage === "") {
    alert("Please write a message! ⚠️");
  }
  else {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    alert("Thank you " + userName + "! Message sent successfully! 🤝");
    
  }
  
};
darkBtn.onclick = function() {
  
  let body = document.body;
  
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    darkBtn.textContent = "🌙 Dark Mode";
    darkBtn.style.backgroundColor = "black";
    darkBtn.style.color = "white";
  }
  else {
    body.classList.add("dark");
    darkBtn.textContent = "☀️ Light Mode";
    darkBtn.style.backgroundColor = "white";
    darkBtn.style.color = "black";
  }
  
};
projectBtns.forEach(function (button){
 
button.onclick = function(){
 let card = button.parentElement;
 let title = card.querySelector("h3");
  alert(title.textContent
  );
  let link = card.dataset.link;
  window.location.href = link;
};
});