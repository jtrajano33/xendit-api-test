const postComments = require('./post');
const getComments = require('./get');
const softDeleteComments = require('./soft-delete');
const getDeletedComments = require('./get-softDeleted');

module.exports={
    postComments,
    getComments,
    softDeleteComments,
    getDeletedComments
}