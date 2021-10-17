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
    const result = await db.query('select * from restaurants where id = $1', [
      req.params.id,
    ]);

    if (!result.rows.length) {
      res.status(500).json({
        message: 'Restaurant does not exist.',
        data: result,
      });
    }

    res.status(200).json({
      status: 'Successfully retrieved restaurant.',
      data: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve restaurant.' });
  }
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
