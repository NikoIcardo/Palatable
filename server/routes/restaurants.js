const express = require('express');
const db = require('../db');
const router = express.Router();

// GET /api/v1/restaurants
// Retrieve all restaurants

router.get('/', async (req, res) => {
  try {
    const results = await db.query('select * from restaurants');

    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Server Error. Failed to retrieve Resource.' });
  }
});

// GET /api/v1/restaurants/:id
// Retrieve individual restaurant

router.get('/:id', async (req, res) => {
  try {
    const restaurant = await db.query(
      'select * from restaurants where id = $1',
      [req.params.id]
    );

    if (!restaurant.rows.length) {
      res.status(500).json({
        message: 'Restaurant does not exist.',
        data: restaurant,
      });
    }

    const reviews = await db.query(
      'select * from reviews where restaurant_id = $1',
      [req.params.id]
    );

    res.status(200).json({
      status: 'Successfully retrieved restaurant.',
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve restaurant.' });
  }
});

// POST /api/v1/restaurants/
// Create new restaurant

router.post('/', async (req, res) => {
  const { name, location, price_range } = req.body;

  try {
    const results = await db.query(
      'insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *',
      [name, location, price_range]
    );

    res.status(201).json({
      message: 'Successfully added new restaurant entry',
      data: results.rows[0],
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add restaurant.', data: err });
  }
});

//Post /api/v1/restaurants/reviews
//Create New Review

router.post('/reviews', async (req, res) => {
  console.log(req.body);
  const { restaurant_id, name, review, rating } = req.body;
  try {
    const result = await db.query(
      'insert into reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *',
      [restaurant_id, name, review, rating]
    );

    res
      .status(201)
      .json({ message: 'Successfully Added Review.', data: result.rows[0] });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// update /api/v1/restaurants/:id
// update a restaurant

router.put('/:id', async (req, res) => {
  const { name, location, price_range } = req.body;

  try {
    const results = await db.query(
      'update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *',
      [name, location, price_range, req.params.id]
    );

    res.status(200).json({
      message: 'Successfully updated restaurant!',
      data: results.rows[0],
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to Update Restaurant!' });
  }
});

// DELETE /api/v1/restaurants/:id
// delete a restaurant

router.delete('/:id', async (req, res) => {
  try {
    await db.query('delete from restaurants where id = $1', [req.params.id]);
    res.status(200).json({
      message: 'Successfully Deleted Restaurant!',
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to Delete Restaurant!' });
  }
});

module.exports = router;
