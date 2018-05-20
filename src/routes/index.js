module.exports = (express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('<h1>Hello from Heroku!</h1>');
  });

  router.post('/echo', (req, res) => {
    console.log('Hello from inside Heroku!')
  });

  return router;
};