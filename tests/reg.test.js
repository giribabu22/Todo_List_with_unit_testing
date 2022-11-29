const req = require('supertest');
const app = require('../ser')
const knex = require('../src/KnexCon')
describe('/registion roter >> ',()=>{

    it('this is my test',(done)=>{
        req(app)
        .post('/regis')
        .send({
            name:'test',
            email:'test@gmail.com',
            password:"test@123"
        }).then((res)=>{
            expect(res.status).toBe(200)
            done()
        })
    })
    
    it("POST /create_do---> Database check", (done) => {
        req(app)
            .post('/regis')
            .send({
                name: 'test',
                email: 'test@gmail.com',
                password: "test@123"
            }).then((response) => {
                knex('register').where('name', 'test').delete().then((r) => { expect(r).toBe(2) })
                done()
            })
    });
})