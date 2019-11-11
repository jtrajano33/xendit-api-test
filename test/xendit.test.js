const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const db = require("../config/db")

const expect = chai.expect;

describe('Test for /orgs/:organization/comments', () => {

    it('should add a comment for the organization', done => {
        request(app).post(`/orgs/xendit-test/comments`)
            .send({ comment: "Hi there Xendit!" })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.have.property('msg');
                expect(res.body).to.have.property('comment');
                expect(res.body).to.be.an('object');
                expect(res.body.comment).to.have.property('_id');
                expect(res.body.comment.comment).to.equal('Hi there Xendit!');
                done();
            })
    })

    it('should get all comments for the organization', done => {
        request(app).get(`/orgs/xendit-test/comments`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property('comments');
                expect(res.body.comments).to.be.an('array');
                done();
            })
    })


    it('should delete all comments for the organization', done => {
        request(app).put(`/orgs/xendit-test/comments`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property('msg');
                expect(res.body).to.be.an('object');
                expect(res.body.msg).to.equal('Comments deleted');
                done();
            })
    })

    it('should not get any remaining comments for the organization', done => {
        request(app).get(`/orgs/xendit-test/comments`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property('msg');
                expect(res.body).to.be.an('object');
                expect(res.body.msg).to.equal('There are currently no comments for the organization: xendit-test');
                done();
            })
    })

    it('should get all deleted comments for the organization', done => {
        request(app).get(`/orgs/xendit-test/deleted-comments`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property('comments');
                expect(res.body.comments).to.be.an('array');
                done();
            })
    })

});

describe('Test for /orgs/:organization/members', () => {

    it('should not get any member for the organization', done => {
        request(app).get(`/orgs/intimate-org-philippine${Math.random()}/members`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                expect(res.body).to.have.property('msg');
                expect(res.body).to.be.an('object');
                expect(res.body.msg).to.equal('There are currently no member registered for this organization.');
                done();
            })
    })

    let member = {
        name: 'Justin Trajano',
        organization: `intimate-org-philippines${Math.random()}`
    }

    it('should add a new member of the organization', done => {

        request(app).post(`/orgs/${member.organization}/members`)
            .send({ name: `${member.name}` })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body).to.have.property('msg');
                expect(res.body).to.have.property('member');
                expect(res.body).to.be.an('object');
                expect(res.body.member).to.have.property('_id');
                expect(res.body.member).to.have.property('name');
                expect(res.body.member.name).to.equal(member.name);
                expect(res.body.member.organization).to.equal(member.organization);
                done();
            })
    })

    it('should not be able to add an existing member of the organization', done => {

        request(app).post(`/orgs/${member.organization}/members`)
            .send({ name: `${member.name}` })
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                expect(res.body).to.have.property('msg');
                expect(res.body).to.be.an('object');
                expect(res.body.msg).to.equal(`${member.name} is already a member of ${member.organization}`);
                done();
            })
    })

    it('should get all members for the organization', done => {
        request(app).get(`/orgs/${member.organization}/members`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property('members');
                expect(res.body).to.be.an('object');
                expect(res.body.members).to.be.an('array');
                done();
            })
    })


})
