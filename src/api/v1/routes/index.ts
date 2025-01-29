import { Router } from 'express';

const router = Router();

// Define a simple route
router.get('/health', (req, res) => {
    res.status(200).send('API is up and running');
});

// Export the router
export default router;
