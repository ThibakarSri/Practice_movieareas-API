import express from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller';

const router = express.Router();

// CRUD functionality of movies

// R - For Reading
router.get('/', MovieIndex);

// C - For creating movies
router.post('/', MovieCreate);

// U - For pdating movie
router.put('/:id', MovieUpdate);

// D - For deleting movie
router.delete('/:id', MovieDelete);


export default router;
