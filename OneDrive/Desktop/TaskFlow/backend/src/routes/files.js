const express = require('express');
const router = express.Router();

// Placeholder routes - will be implemented with controllers
router.post('/upload', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

router.delete('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

module.exports = router;

