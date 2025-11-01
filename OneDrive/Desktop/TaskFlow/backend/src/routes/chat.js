const express = require('express');
const router = express.Router();

// Placeholder routes - will be implemented with controllers
router.get('/:projectId', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

router.post('/:projectId', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

module.exports = router;

