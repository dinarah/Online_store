var express = require('express');
var app = express();

app.use(express.static('public'));

var jeweleries = [
  {   sku: "VAL",
      name: 'Valerie',
      price: 14.99,
      description: 'This is our new brand.I am a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
      canPurchase: true,
      images: [
          {
              full: 'images/download.jpg',
          }]
  },
  {   sku: "LAL",
      name: 'Lala',
      price: 15.99,
      description: 'This is what we can offer to you.I am a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.',
      canPurchase: true,
       images: [
          {
              full: 'images/download.jpg',
          }]
  },
     {
      sku: "NOR",   
      name: 'Nora',
      price: 16.99,
      description: '',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
  },
     {
      sku: "SUS",   
      name: 'Susanne',
      price: 17.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
  },
{     sku: "JUL",
      name: 'Julia',
      price: 18.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
},
    {
      sku: "TIN",  
      name: 'Tina',
      price: 19.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
    {
      sku: "NIN",  
      name: 'Nina',
      price: 20.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
    {
      sku: "LAR",  
      name: 'Lara',
      price: 21.99,
      description: 'This is what we can offer to you',
      canPurchase: true,
          images: [
          {
              full: 'images/download.jpg',
          }]
    },
   

];

app.get('/items', function (req, res) {
  res.json(jeweleries).end();
});

app.get('/items/:sku', function (req, res) {
    var sku = req.params.sku;
    for (var i = 0; i < jeweleries.length; i++) {
        if (jeweleries[i].sku == sku) {
            res.json(jeweleries[i]).end();
            break;
        }
    }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
