const request = require('supertest');
const app = require('../ser')
const knex = require('../src/KnexCon')

describe('router  >> /create_do', () => {
    it("POST /create_do ---> test if status code 200 ?", (done) => {
        request(app)
            .post('/create_do')
            .send({
                "name": "test",
                "start_at": "10:38", "end_at": "12:10",
                "link": "https://meet.google.com/_meet/kkj-djxf-usn"
            }).then((response) => {
                expect(response.status).toBe(200);
                done()
            })
    })
    it("POST /create_do---> test of user creating ", (done) => {
        request(app)
            .post('/create_do')
            .send({
                "name": "test",
                "start_at": "10:38", "end_at": "12:10",
                "link": "https://meet.google.com/_meet/kkj-djxf-usn"
            }).then((response) => {
                expect(response.body.message).toBe('added successfully');
                done()
            })
    });

    it("POST /create_do---> Database check", (done) => {
        request(app)
            .post('/create_do')
            .send({
                "name": "test",
                "start_at": "10:38", "end_at": "12:10",
                "link": "https://meet.google.com/_meet/kkj-djxf-usn"
            }).then((response) => {
                knex('does_table').where('name','test').delete().then((r)=>{expect(r).toBe(3)})
                done()
            })
    });
})    