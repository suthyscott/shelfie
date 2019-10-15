
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        
        db.get_inventory()
        .then(dbRes => res.status(200).send(dbRes))
        .catch(err => {
            res.status(500).send({errorMessage: 'Negatory! Failure!'})
        })
    }, 

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        // console.log(name, price, img)

        db.create_product([name, price, img])
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errorMessage: 'Negatory! Failure!'})
        })
    }, 

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Negatory! Failure!'})
            console.log(err)
        })
    }, 

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, img} = req.body

        db.update_product([id, name, price, img])
        .then(data => res.status(200).send(data))
    }, 

    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        console.log(id)
        db.get_product(+id)
        .then(dbRes => res.status(200).send(dbRes))
        .catch(err => {
            res.status(500).send({errorMessage: 'Negatory! Failure!'})
            console.log(err)
        })
    }
}