/* define your functions here */
console.log(cart);
function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartToew(item, total) {
    const {
        product: { title, filename, price}, quantity,
    } = item;
    console.log(tittle, filename, price, quantity);
    const row = `      <tr>
              <td><img src="image/${filename}"></td>
              <td>${title}</td>
              <td>${quantity}</td>
              <td>${price}</td>
              <td>${total}</td>
        </tr>`;
    document.write(row);
}   

for (let item of cart) {
    let total = calculateTotal(item, quantity, item.product.price);
    outputCartRow(item, total);
}