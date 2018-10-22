module.exports = ({ router }) => {
  router.get('/users', ctx => {
    ctx.body = 'Welcome users'
  })

  router.get('/users/:id', ctx => {
    ctx.body = `Welcome ${ctx.params.id}`
  })
} 