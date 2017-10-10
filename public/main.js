// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }
//
// document.addEventListener('DOMContentLoaded', main)

var XMLHttpRequest

var btn = document.querySelector('#btn')
var img = document.querySelector('#photo')

btn.addEventListener('click', function () {
  var XHR = new XMLHttpRequest()

  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      var url = JSON.parse(XHR.responseText).message
      img.src = url
    }
  }

  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random')
  XHR.send()
})

var btn1 = document.querySelector('#btn1')
var priceDisplay = document.querySelector('#price')

btn1.addEventListener('click', function () {
  var XHR = new XMLHttpRequest()

  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      var data = JSON.parse(XHR.responseText)
      var price = data.bpi.USD.rate
      priceDisplay.innerText = price + ' USD'
    }
  }

  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json')
  XHR.send()
})

// https://api.coindesk.com/v1/bpi/currentprice.json
var fetch
var url = 'https://randomuser.me/api/'
var fullNameDisplay = document.querySelector('#fullname')
var avatar = document.querySelector('#avatar')

var btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', function () {
  fetch(url)
    .then(function (res) {
      return res.json()
    })

    .then(function (data) {
      var fullname = data.results[0].name.first + ' ' + data.results[0].name.last
      fullNameDisplay.innerText = fullname
      avatar.src = data.results[0].picture.medium
    })

    .catch(function (err) {
      console.log(err)
    })
})
