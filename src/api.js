// Declaramos la URL principal, posteriormente se agregan los parametros
const url = "https://api.coincap.io/v2";

function getAssets() {
  return (
    fetch(`${url}/assets?limit=20`)
      // Recibimos res y lo pasasmos a JSOn
      .then(res => res.json())
      // Extraemos la data que se encuentra en data
      .then(res => res.data)
  );
}

function getAsset(coin) {
  return (
    fetch(`${url}/assets/${coin}`)
      // Recibimos res y lo pasasmos a JSOn
      .then(res => res.json())
      // Extraemos la data que se encuentra en data
      .then(res => res.data)
  );
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data);
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
