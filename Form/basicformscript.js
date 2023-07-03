function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    var color = document.getElementById("color").value;
    
    // Perform basic validation
    if (name === "") {
      showError("name", "Name is required");
      return;
    }
    
    if (email === "") {
      showError("email", "Email is required");
      return;
    }
    
    if (phone === "") {
      showError("phone", "Phone Number is required");
      return;
    }
    
    if (password === "") {
      showError("password", "Password is required");
      return;
    }
    
    if (age === "") {
      showError("age", "Age is required");
      return;
    }
    
    if (gender === "") {
      showError("gender", "Gender is required");
      return;
    }
    
    if (date === "") {
      showError("date", "Date is required");
      return;
    }
    
    if (color === "") {
      showError("color", "Color is required");
      return;
    }
    
    // If all validations pass, submit the form
    document.getElementById("myForm").submit();
  }
  
  function showError(fieldId, errorMessage) {
    var field = document.getElementById(fieldId);
    var errorSpan = document.createElement("span");
    errorSpan.className = "error";
    errorSpan.innerHTML = errorMessage;
    
    if (field.nextElementSibling) {
      field.nextElementSibling.remove(); // Remove existing error message
    }
    
    field.parentNode.insertBefore(errorSpan, field.nextSibling);
  }