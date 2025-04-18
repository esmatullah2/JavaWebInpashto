document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // د فورم د ډیفالټ عمل مخه نیسي

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (username === "") {
      alert("لطفاً خپل یوزر نوم کړئ.");
      return;
    } else if (password === "") {
      alert("لطفاً خپل پاسورډ ولیکئ.");
      return;
    } else if (username !== "admin") {
      alert("ستاسي یوزر نوم ناسم دی.");
      return;
    } else if (password !== "admin") {
      alert("پاسورډ ناسم دی.");
      return;
    } else if (rememberMe == false) {
      alert("لطفاً ما په یاد ساتل چیک کړئ.");
      return;
    } else if (username == "admin" && password == "admin") {
      window.location.href = "/index.html"; // د لاګین بریالیتوب وروسته د بل پاڼې ته لاړ شئ
      console.log("Username:", username);
      console.log("Password:", password);
    }
  });

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // دلته د فورم د اعتبار چک کول
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("پاسورډونه مطابقت نلري!");
      return;
    }

    // دلته به د ډیټا د سپارلو کوډ وي
    alert("ستاسو رجسټریشن بریالی شو!");
    // window.location.href = "login.html";
  });
