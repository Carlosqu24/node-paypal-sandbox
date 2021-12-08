import express from "express";
const app = express();

import morgan from "morgan";
import path from "path";

import { PORT } from "./config";


// ROUTES
import paymentRoutes from './routes/payments.routes';


// SETTINGS
app.set('port', PORT);


// MIDDLEWARES
app.use(morgan('dev'))


// ROUTES
app.use('/', paymentRoutes);

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
      console.log("Server on port", app.get('port'));
});
