// JavaScript code for form validation
window.onload = function() {
  var form = document.getElementById('myForm');
  var inputField = document.getElementById('inputField');
  var message = document.createElement('div');
  message.style.marginTop = '10px';
  form.appendChild(message);

  form.onsubmit = function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Retrieve the input field value
    var value = inputField.value;

    // Regular expression pattern for alphanumeric input
    var alphaNumRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphaNumRegex.test(value)) {

      // Valid input: display confirmation and submit the form
      message.style.color = 'green';
      message.innerHTML = 'Success! Your input is valid and the form was submitted.';

    } else {

      // Invalid input: display error message
      message.style.color = 'red';
      message.innerHTML = 'Error: Please enter only alphanumeric characters (letters and numbers).';

    }
  };
};