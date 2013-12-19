function updateTemp(data) {
  var $container = $('.container')
  $container.find('.city').text(data.location)
  $container.find('.temp-f').text(data.temp_F)
  $container.find('.temp-c').text(data.temp_C)
  $container.find('.when').text((new Date(data.when)).toString())
}

function updateBitcoinPrice(num) {
  var $container = $('.container')
  $container.find('.bitcoin-price').text(num)
}

$(function() {
  var socket = io.connect('http://localhost');
  socket.on('temperature', updateTemp)
  socket.on('bitcoin-price', updateBitcoinPrice)
})
