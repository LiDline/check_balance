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
    if (err instanceof z.ZodError) {
      ctx.status = 400;
      ctx.body = err.errors;
    } else {
      ctx.status = 500;
      ctx.body = 'Internal Server Error';
    }
  }
}
