// 1. Event Handling
document.getElementById("myButton").addEventListener("click", () => {
    alert("You clicked the button!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "lightblue";
  });
  document.getElementById("hoverBox").addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightgray";
  });
  
  document.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
  });
  
  document.getElementById("secretBox").addEventListener("dblclick", () => {
    alert("🎉 Secret double-click unlocked!");
  });
  
  // 2. Interactive Elements
  document.getElementById("colorBtn").addEventListener("click", function () {
    this.textContent = "Changed!";
    this.style.backgroundColor = "#ff6666";
  });
  
  document.getElementById("animatedBtn").addEventListener("click", function () {
    this.classList.add("bounce");
    setTimeout(() => this.classList.remove("bounce"), 500);
  });
  
  const images = [
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg"
  ];
  let current = 0;
  document.getElementById("nextImg").addEventListener("click", () => {
    current = (current + 1) % images.length;
    document.getElementById("galleryImg").src = images[current];
  });
  
  document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
  
  // 3. Form Validation
  document.getElementById("myForm").addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      event.preventDefault();
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      event.preventDefault();
    }
  });
  
  // Real-time password feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password too short.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Looks good!";
      feedback.style.color = "green";
    }
  });
  