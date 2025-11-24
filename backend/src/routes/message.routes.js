import express from 'express';

const router = express.Router();
export default router;

router.get('/send', (req, res) => {
    res.send("Send message endpoint")
});