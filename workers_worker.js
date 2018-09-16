onmessage = async (message) => {
  if (message.data.startsWith('cat')) {
    const url  = await getCatUrl();
    return postMessage({
      catBoxId: message.data,
      url
    });
  }
}

async function getCatUrl() {
  const response = await fetch('https://aws.random.cat/meow');
  const data = await response.json();
  return data.file;
}
