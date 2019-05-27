module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {'title': 'Home - Skullcandy'}); //Dette indlæser ejs filen
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {'title': 'Product - Skullcandy'});
   });
   
   app.get('/contact', (req, res, next) => {
      res.render('contact', {'title': 'Contact - Skullcandy'});
   });
};