module.exports = (express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('Hello from Heroku!');
  });

  router.post('/echo', (req, res) => {
    console.log('Hello from inside Heroku!')
  });

  return router;
};