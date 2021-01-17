const PORT = process.env.PORT || 3000;

require('http')
  .createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.end(req.url);
  })
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });