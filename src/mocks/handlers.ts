import { rest } from "msw";

const baseUrl = "https://localhost:3000/api/v1";

export const handlers = [
  rest.post(`${baseUrl}/3/movie/list`, (_req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.json<any>({
        success: true,
        message: "El formulario se cargo con éxito.",
      })
    );
  }),
];
