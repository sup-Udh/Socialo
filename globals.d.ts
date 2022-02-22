// global.d.ts
import { MongoClient } from "mongodb"
import { PrismaClient } from '@prisma/client';
// bunch of globals and yeah. 
declare global {
    var mongoClientPromise: Promise<MongoClient>;
    var prisma: PrismaClient;
}