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

const renderCrypto = () => {
  for (let i = 0; i < 10; i++) {
    getCrypto(cryptoKeys[i]).then((data) => {
      let { base, price, change } = data.ticker;
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
  }
};

renderCrypto();
