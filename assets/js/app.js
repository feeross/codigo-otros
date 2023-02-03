const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name'); //falta insertar la informacion en el html
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(baseEndpoint) {
  //$n.textContent = 'cargando...';
  fetch('https://api.github.com') //utilice fetch y jason para leer los datos en consola
  .then(response => response.json()) 
  .then(data => console.log(data));
  //const response = fetch(`${usersEndpoint}/${username}`); //Quite el await 
  $n.textContent = `${data.name}`;//cambio por apostrofos graves
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);