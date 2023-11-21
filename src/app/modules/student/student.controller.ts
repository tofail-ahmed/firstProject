import { Request, Response } from 'express';
import { StudentServices } from './students.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //will call service func to send this data

    const result = await StudentServices.createStudentIntoDB(studentData);
    //will sen response to user

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'students are retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// const getSingleStudent = async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.params;
//     const result = await StudentServices.getSingleStudentFromDB(studentId);
//     return result;
//     res.status(200).json({
//       success: true,
//       message: 'students is retrieved successfully',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
