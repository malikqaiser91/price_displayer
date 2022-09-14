const price = document.getElementById('price')
const btn = document.getElementById('btn')
const text = document.getElementById('text')

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

btn.addEventListener('click', function () {
  if (!price.value) {
    alert('Please enter the price value')
  }
  const value = Number(price.value)
  const formattedPrice = formatter.format(value)
  alert(formattedPrice)
  text.innerHTML = formattedPrice
})
