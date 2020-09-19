const sinon = require('sinon')

const { moviesMock, filteredMoviesMocks } = require('./movies')

const getAllStubs = sinon.stub()

getAllStubs.withArgs('movies').resolves(moviesMock)

const tagQuery = { tags: { $in: ['Drama'] } }
getAllStubs.withArgs('movies', tagQuery).resolves(moviesMock[0].id)

const createStub = sinon.stub().resolves(moviesMock[0].id)

class MongoLibMock {
    getAll(collection, query){
        return getAllStubs(collection, query)
    }

    creat(collection, data){
        return createStub(collection, data)
    }
}

module.exports = {
    getAllStubs,
    createStub, 
    MongoLibMock
}