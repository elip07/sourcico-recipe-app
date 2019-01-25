const express = require('express');

function apiRouter(database) {
  const router = express.Router();

  router.get('/recipes', (req, res) => {
    const recipesCollection = database.collection('recipes');

    recipesCollection.find({}).toArray((err, docs) => {
      return res.json(docs)
    });

  });

  router.get('/recipes/:id', (req, res) => {
    var uid = req.params.id;
    const recipesCollection = database.collection('recipes');

    recipesCollection.find({"id":uid}).toArray((err, docs) => {
      return res.json(docs)
    });
  });

  router.get('/ingredients', (req, res) => {
    const ingredientsCollection = database.collection('ingredients');

    ingredientsCollection.find({}).toArray((err, docs) => {
      return res.json(docs)
    });
  });

  router.post('/recipes', (req, res) => {
    const recipe = req.body;
    const recipesCollection = database.collection('recipes');

    recipesCollection.insertOne(recipe, (err, r) => {
      if (err) {
        return res.status(500).json({ error: 'Error inserting new record.' })
    }

      const newRecord = r.ops[0];
      return res.status(201).json(newRecord);
    });
  });

  router.delete('/recipes/:id', (req, res) => { 
    var uid = req.params.id;
    const recipesCollection = database.collection('recipes');

    recipesCollection.remove({"id":uid}, (err, r) => { 
    if (err) {
            return res.status(500).json({ error: 'Error deleting record.' })
          }
    });
  });

  return router;
}

module.exports = apiRouter;
