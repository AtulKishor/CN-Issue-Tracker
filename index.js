import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';
import { connectToDb } from "./src/config/mongoose.js";
import indexRouter from './src/routes/index.router.js';
import projectsRouter from './src/routes/project.router.js';
import issuesRouter from './src/routes/issues.router.js';

// Initialize Express
const app = express();

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set view engine to EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', join(resolve(),'src','views'));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Set static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));

// Define routes
app.use('/', indexRouter);
app.use('/project', projectsRouter);
app.use('/issues', issuesRouter);

// Port configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
    connectToDb();
});