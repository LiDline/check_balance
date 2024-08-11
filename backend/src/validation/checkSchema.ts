import { z, ZodSchema } from 'zod';
import { ParameterizedContext } from 'koa';

export default function checkSchema(
  schema: ZodSchema,
  data: any,
  ctx: ParameterizedContext,
) {
  try {
    const res = schema.parse(data);

    return res;
  } catch (err) {
    console.log(err);

    ctx.throw(500, JSON.stringify({ error: 'Validation Error' }));
  }
}
