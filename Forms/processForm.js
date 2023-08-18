console.log('processing...');
processForm();

function processForm() {
  const result = [];
  const submitBtn = document.querySelector('#submit');
  const data = Array.from(
    document.querySelectorAll('input')
  );
  console.log(data)
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
  })
  
  console.log(result)
  return result;
}



