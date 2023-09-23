import { Model, Types } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};


export type IStudent = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  profileImage?: string;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
};
