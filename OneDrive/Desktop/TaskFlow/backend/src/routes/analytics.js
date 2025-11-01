const express = require('express');
const router = express.Router();

// Placeholder routes - will be implemented with controllers
router.get('/dashboard', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

router.get('/project/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

module.exports = router;

