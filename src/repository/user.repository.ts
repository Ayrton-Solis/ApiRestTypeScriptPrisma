import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export class RepositoryUser {

  static async create(email: string, name: string, password: string) {
      return await prisma.user.create({
        data: {
          email: email,
          name: name,
          password: password
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
  static async findUnique(email: string) {
      return await prisma.user.findUnique({
        where: {
          email: email,
        }
      });
    };
};