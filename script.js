const submitBtn = document.getElementById("submit-btn");
const emailInput = document.getElementById("email");
const personalInfo = document.getElementById("personal-info");
const emailForm = document.getElementById("email-form");
const errorMessage = document.getElementById("error-message");

submitBtn.addEventListener("click", function () {
  const email = emailInput.value;

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  if (regex.test(email)) {
    personalInfo.classList.remove("hide");
    emailForm.classList.add("hide");
  } else {
    errorMessage.textContent = "Email không hợp lệ, vui lòng nhập lại";
  }
});

const buttons = document.querySelectorAll(".view-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const content = button.nextElementSibling;

    content.classList.toggle("hide");

    button.textContent = content.classList.contains("hide")
      ? "View More"
      : "View Less";
  });
});
