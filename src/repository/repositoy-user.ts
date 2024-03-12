import prisma from "../prisma-client";

export class DataBaseUser {
  static async create(email: string, name: string) {
    try {

      await prisma.user.create({
        data: {
          email: email,
          name: name
        }

      });
    } catch (error) {
      console.log(error);
    };
  };
  static async find() {
    try {

      return await prisma.user.findMany();

    } catch (error) {
      console.log(error);
    };
  };
  static async update(id: number, email: string, name: string) {
    try {

      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          email: email,
        },
      });

    } catch (error) {
      console.log(error);
    };
  };
  static async delete(id: number) {
    try {
      await prisma.user.delete({
        where: {
          id: id,
        }
      });
    } catch (error) {
      console.log(error);
    };
  };
  static async findById(id: number) {
    try {
      return await prisma.user.findUnique({
        where: {
          id: id,
        }
      });
    } catch (error) {
      console.log(error);
    };
  };
};