const express = require('express');
const router = express.Router();
const Contactos = require('./contactos');

router.get('/', async (req, res) => {
  const contactos = await Contactos.find();
  res.render('index', {
    contactos
  });
});

router.post('/add', async (req, res, next) => {
  const contactos = new Contactos(req.body);
  await contactos.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const contactos = await Contactos.findById(req.params.id);
  console.log(contactos)
  res.render('edit', {  contactos });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Contactos.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Contactos.remove({_id: id});
  res.redirect('/');
});

module.exports = router;