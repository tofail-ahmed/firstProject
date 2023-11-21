import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//this router will call controller function function
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
