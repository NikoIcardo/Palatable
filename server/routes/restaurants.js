const express = require('express');
const router = express.Router();

// GET /api/v1/restaurants
// Retrieve all restaurants

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurants: ['McDonalds', 'Wendies'],
    },
  });
});

// GET /api/v1/restaurants/:id
// Retrieve individual restaurant

router.get('/:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      name: 'Taco Bell',
      location: 'Detroit',
      price_range: '5',
    },
  });
});

// POST /api/v1/restaurants/
// Create new restaurant

router.post('/', (req, res) => {
  res.status(200).json({
    status: 'successfully added restaurant',
    data: req.body,
  });
});

// update /api/v1/restaurants/:id
// update a restaurant

router.put('/:id', (req, res) => {
  res.status(200).json({
    status: 'successfully updated restaurant',
    data: req.body,
  });
});

// DELETE /api/v1/restaurants/:id
// delete a restaurant

router.delete('/:id', (req, res) => {
  res.status(204).json({
    status: 'successfully deleted restaurant',
  });
});

module.exports = router;
