import { z } from 'zod';

import { AddAddressRequestSchema } from '../validation/addAddressSchema';

export type AddAddressRequest = z.infer<typeof AddAddressRequestSchema>;
