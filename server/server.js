const {randomUUID} = require('crypto');
const {datas} = require('../database/datas');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const products = [];


app.get('/database', (req, res) => {
    datas(products);
    return res.status(200).json({
        message:"Products Create Successfully"
    });
});

app.post('/products',(req,res)=>{
    const {name , price } = req.body;

    if (!name || !price) {
        return res.status(400).send({message:'Name and price are required'});
    }

    const product =   
    {
        "name":name,
        "price":price,
        "id":randomUUID()
    }

    products.push(product);

    return res.status(201).json({
        message:"Product Create Successfully",
        //product:product
    });
});

app.get('/products',(req,res)=>{
    if (products.length === 0) {
        return res.status(404).send({message:'Products not found'});
    }
    return res.status(200).json(products)
});

app.get('/products/:id',(req,res)=>{
    const {id} = req.params;
    const productFind = products.find((product)=>product.id === id);

    if (!productFind) {
        return res.status(404).send({message:'Product not found'});
    }

    return res.status(200).json(productFind);
});

app.put('/products/:id',(req,res)=>{
    const {id} = req.params;
    const {name , price} = req.body;

    const productIndex = products.findIndex((product)=>product.id === id);

    if (productIndex === -1) {
        return res.status(404).send({message:'Product not found'});
    }

    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return res.status(200).json({
        message:"Product Updated Successfully"
    });
});

app.delete('/products/:id',(req,res)=>{
    const {id} = req.params;

    const productIndex = products.findIndex((product)=>product.id === id);

    if (productIndex === -1) {
        return res.status(404).send({message:"Product not Found"});
    }

    products.splice(productIndex,1);

    return res.status(200).json({
        message:"Product Deleted Successfully"
    });
});

app.delete('/products',(req,res)=>{
    products.length = 0;
    return res.status(200).json({
        message:"Products Deleted Successfully"
    });
});


app.listen(port, () => {
    console.log(`Server ON: http://localhost:3000`)
});