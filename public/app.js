const tableBody = document.querySelector("#table--body");

const cryptoKeys = [
  "btc",
  "eth",
  "doge",
  "usdt",
  "xrp",
  "dot",
  "ada",
  "uni",
  "ltc",
  "bch",
  "sol",
  "link",
  "matic",
  "theta",
];

const getCrypto = async (key) => {
  let apiKey = `https://api.cryptonator.com/api/ticker/${key}-usd`;
  const response = await fetch(apiKey);
  return await response.json();
};

const storeCrypto = async () => {
  promises = [];
  cryptos = [];
  for (let e of cryptoKeys) {
    promises.push(getCrypto(e));
  }
  Promise.all(promises).then((v) => {
    v.forEach((e) => {
      cryptos.push(e.ticker);
    });
    cryptos.sort((a, b) => {
      return b.price - a.price;
    });
  });
  return cryptos;
};

const renderCrypto = async () => {
  storeCrypto().then((data) => {
    console.log(data);
    let logoSrc = `http:\\node_modules/cryptocurrency-icons/32/color/${base.toLowerCase()}.png`;
    let html = `
                <td class="table--td table--name" scope="row"><img class="crypto--img" src=${logoSrc} ></img>${base}</td>
                <td class="table--td table--price">$${price.slice(0, 12)}</td>
                <td class="table--td table--change">${change}%</td>
            `;
    tr = document.createElement("tr");
    tr.classList.add("table--row");
    tr.innerHTML = html;
    tableBody.appendChild(tr);
  });
};

renderCrypto();
