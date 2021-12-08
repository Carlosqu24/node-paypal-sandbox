import { Router } from "express";
const router = Router();

import { createOrder, captureOrder, cancelOrder } from '../controllers/payments.controllers'

router.post('/create-order', createOrder);
router.get('/capture-order', captureOrder);
router.get('/cancel-order', cancelOrder);


export default router;
