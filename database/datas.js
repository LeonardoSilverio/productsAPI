const {randomUUID} = require('crypto');

module.exports = {
    datas(base) {
        base.push({
            "name":"X-Burguer",
            "price":"20.99",
            "id":randomUUID()
        });

        base.push({
            "name":"X-Salad",
            "price":"15.99",
            "id":randomUUID()
        });

        base.push({
            "name":"X-Egg",
            "price":"17.78",
            "id":randomUUID()
        });

        base.push({
            "name":"X-Bacon",
            "price":"19.81",
            "id":randomUUID()
        });

        base.push({
            "name":"Soda Can",
            "price":"4.50",
            "id":randomUUID()
        });
    }
}