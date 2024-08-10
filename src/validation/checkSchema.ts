import { z, ZodSchema } from 'zod';
import { ParameterizedContext } from 'koa';

export default function checkSchema(
  schema: ZodSchema,
  ctx: ParameterizedContext,
) {
  try {
    const decodedString = decodeURIComponent(ctx.query.data as string);
    const data = JSON.parse(decodedString);

    const res = schema.parse(data);

    return res;
  } catch (err) {
    ctx.throw(500, JSON.stringify({ error: 'Internal Server Error' }));
  }
}
