function validateForm() {
    let valid = true;
  
    // Get form fields
    const name = document.getElementById('name');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const question = document.getElementById('question');
    const comment = document.getElementById('comment');
  
    // Clear previous errors
    clearErrors();
  
    // Validate Name
    if (name.value.trim() === "") {
      showError('nameError', 'Name is required');
      valid = false;
    }
  
    // Validate Address
    if (address.value.trim() === "") {
      showError('addressError', 'Address is required');
      valid = false;
    }
  
    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
      showError('emailError', 'Please enter a valid email address');
      valid = false;
    }
  
    // Validate Question
    if (question.value.trim() === "") {
      showError('questionError', 'Question is required');
      valid = false;
    }
  
    // Validate Comment
    if (comment.value.trim() === "") {
      showError('commentError', 'Comment is required');
      valid = false;
    }
  
    return valid;
  }
  
  // Show error message
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  // Clear all errors
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
      element.style.display = 'none';
    });
  }
  