let dark = document.getElementById("dark");
let light = document.getElementById("light");

const toggleButton = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  localStorage.setItem("theme", "dark");
  // dark.style.display = "none";
};

const toggleLight = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
  dark.style.display = "none";
  light.style.display = "block";
};

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
}

function checkTheme() {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

document.getElementById("toggle-btn").addEventListener("click", function () {
  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

checkTheme();

function sendEmail() {
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value, // Add message here
  };

  emailjs.send("your_service_id", "your_template_id", templateParams).then(
    function (response) {
      alert("Success! Your message has been sent.");
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    },
    function (error) {
      alert("Failed to send message. Error: " + error);
    }
  );
}
