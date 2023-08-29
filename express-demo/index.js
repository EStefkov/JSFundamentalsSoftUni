const express = require('express');
const handlebar = require('express-handlebars');
const fs = require('fs');

const app = express();
const port = 3000;

app.engine('hbs', handlebar());
app.set('view engine', 'hbs');

app.get('/', function (req, res){
    res.render('home', { layout:false});
})

app.get('/catalog', (req,res) => {
    res.render('catalog', { layout:false, products} );
})
app.get('/catalog/:serial_number', (req,res) => {
    let  products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
    
    let sn = req.params.serial_number;

    if(products.find(x => x == sn)){
        res.render('details', { layout:false,sn });
        
    } else {
        res.status(404);
        res.render('404', { layout:false});
        
    
    }
});

app.listen(port,()=> {
    console.log(`Server listening on port ${port}`);
});
