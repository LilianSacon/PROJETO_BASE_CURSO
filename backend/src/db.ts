import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:fWOtXTIEGNvJGoIYTqdGCrGQaseWIfRI@monorail.proxy.rlwy.net:16293/railway',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});
