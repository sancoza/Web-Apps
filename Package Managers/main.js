// dependensi neko je napisao kod koji mi hocemo da koristimo mi zavisimo od tog koda zato se zove dependensi

const figlet = require('figlet');

figlet('Sandra', function (err, data) {
  console.log(data);
});

