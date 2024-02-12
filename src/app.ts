import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Axel Cabral',
    email: 'axel.cabral0102@gmail.com',
  },
})
