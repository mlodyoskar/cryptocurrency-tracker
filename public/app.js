const tableBody = document.querySelector("#table--body");

const cryptoKeys = ["btc", "eth", "doge", "usdt", "xrp", "dot"];

const getCryptoInfo = async (key) => {
  const response = await fetch(
    `https://api.cryptonator.com/api/ticker/${key}-usd`
  );
  const crypto = await response.json();
  return crypto;
};

const updateCryptoInfo = () => {};
for (let i = 0; i < cryptoKeys.length; i++) {
  getCryptoInfo(cryptoKeys[i]).then((data) => {
    console.log(cryptoKeys[i]);
    let { base, price, change } = data.ticker;
    let html = `
                <td scope="row"><img class="crypto--img" src="images/logo/${base.toLowerCase()}.png"></img>${base}</td>
                <td>$${price}</td>
                <td>${change}%</td>
            `;
    tr = document.createElement("tr");
    tr.innerHTML = html;
    tableBody.appendChild(tr);
  });
}
