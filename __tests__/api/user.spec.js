const assert = require('assert')

describe('User API', () => {
  describe('/GET users', () => {
    it('should return 200', () =>
      request.get('/users').expect(200)
    )

    it('should return the string content', () =>
      request.get('/users')
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(200)
        .then(resp => {
          assert.strictEqual(resp.text, 'Welcome users')
        })
    )
  })

  describe('/GET users/:id', () => {
    it('should return 200', () =>
      request.get('/users/sample').expect(200)
    )

    it('should return the string content', () =>
      request.get('/users/sample')
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(200)
        .then(resp => {
          assert.strictEqual(resp.text, 'Welcome sample')
        })
    )
  })
})
