import bcryptjs from 'bcryptjs';
import { prisma } from './db';
import crypto from 'crypto';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  return bcryptjs.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcryptjs.compare(password, hash);
}

export async function generateToken(): Promise<string> {
  return crypto.randomBytes(32).toString('hex');
}

export async function createAuthSession(userId: string, ipAddress?: string) {
  const token = await generateToken();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

  return prisma.authSession.create({
    data: {
      userId,
      token,
      expiresAt,
      ipAddress,
    },
  });
}

export async function validateAuthToken(token: string) {
  const session = await prisma.authSession.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session) return null;
  if (session.expiresAt < new Date()) {
    await prisma.authSession.delete({ where: { id: session.id } });
    return null;
  }

  return session.user;
}

export function extractBearerToken(authHeader?: string): string | null {
  if (!authHeader) return null;
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
  return parts[1];
}
