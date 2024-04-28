// Handle form submission
editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the dog's ID from the edit button's data-id attribute
  const dogId = editForm.elements.id.value;

  // Get the updated dog information from the form fields
  const updatedName = editForm.elements.name.value;
  const updatedBreed = editForm.elements.breed.value;
  const updatedSex = editForm.elements.sex.value;

  // Send a PATCH request to update the dog information
  fetch(`http://localhost:300/dogs/${dogId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: updatedName,
      breed: updatedBreed,
      sex: updatedSex
    }),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data after the PATCH request is successful
      console.log(data);

      // Update the table row with the updated dog information
      const row = table.querySelector(`tr[data-id="${dogId}"]`);
      row.cells[0].innerText = updatedName;
      row.cells[1].innerText = updatedBreed;
      row.cells[2].innerText = updatedSex;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});