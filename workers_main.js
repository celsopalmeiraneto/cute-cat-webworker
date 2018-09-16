const btnSend = document.getElementsByTagName('button')[0];
const cats = document.getElementsByClassName('cats')[0];

const worker = new Worker('./workers_worker.js', {
  name: 'abcs1234',
});


btnSend.onclick = () => {
  const catBoxId = createBoxForCat();
  worker.postMessage(catBoxId);
}

function createBoxForCat() {
  const div = document.createElement('div');
  div.className = 'a-cat';
  div.id = `cat-${Math.ceil(Math.random()*100000)}`;
  div.innerText = 'Getting a cute cat for you.'
  cats.appendChild(div);
  return div.id;
}

worker.onmessage = (message) => {
  const data = message.data;

  const img = document.createElement('img');
  img.src = data.url;

  const div = document.getElementById(data.catBoxId);
  div.innerText = '';
  div.appendChild(img);
  cats.appendChild(div);
}
