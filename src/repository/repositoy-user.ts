import prisma from "../prisma-client";

export class DataBaseUser {
  static async create(email: string, name: string) {
      await prisma.user.create({
        data: {
          email: email,
          name: name
        }
      });
    };
  static async find() {
      return await prisma.user.findMany();
    };
  static async update(id: number, email: string, name: string) {
      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          email: email,
        },
      });
    };
  static async delete(id: number) {
      await prisma.user.delete({
        where: {
          id: id,
        }
      });
    };
  static async findById(id: number) {
      return await prisma.user.findUnique({
        where: {
          id: id,
        }
      });
    };
};