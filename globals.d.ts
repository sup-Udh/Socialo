// global.d.ts
import { MongoClient } from "mongodb"
import { PrismaClient } from '@prisma/client';

declare global {
    var mongoClientPromise: Promise<MongoClient>;
    var prisma: PrismaClient;
}