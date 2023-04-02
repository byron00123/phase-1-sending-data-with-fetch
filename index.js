function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name:name, email:email })
  };
  
  return fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      document.body.append(id);
    })
    .catch(error => {
      document.body.append(error.message);
    });
}
