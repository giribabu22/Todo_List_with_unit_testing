const knex = require('../src/KnexCon')
// const Knex = require('knex')

class ResClass{
    regis_POST(req,res) {
        knex('register').insert(req.body).then((result) => {
            res.json({ message: 'added successfully' })
        }).catch((Errors) => {
            res.json({ err: Errors })
            console.log(Errors)
        });
    }

    create_do_POST(req, res) {
        knex('does_table').insert(req.body).then((result) => {
            res.redirect('/home')
        }).catch((Errors) => {
            res.json({err:Errors})
            console.log(Errors)
        });
    }
}
module.exports = ResClass