import { z } from 'zod';

export const DeleteAddressSchema = z.string().min(1);
