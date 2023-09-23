import { z } from 'zod';
import { bloodGroup, gender } from '../student/student.constant';

const updateStudentZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      middleName: z.string().optional(),
    }),
    email: z.string().email().optional(),
    profileImage: z.string().optional(),
  }),
});

export const StudentValidaion = {
  updateStudentZodSchema,
};
