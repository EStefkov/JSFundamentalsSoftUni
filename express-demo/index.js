const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

app.get('/', function (req, res){
    res.render('home', { layout:false});
})

app.get('/catalog', (req,res) => {
    res.render('catalog', { layout:false} );
})
app.get('/catalog/:serial_number', (req,res) => {
    let  products = [
        '123',
        '456',
        '789'
    ];
    
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
