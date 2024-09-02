import { Elysia, t } from 'elysia';
import createGamerName from './libs/createGamerName';

const app = new Elysia()
.get('/', () => createGamerName)
.post('/', ({body}) => createGamerName(body), { body: t.Object({
  range: t.Optional(t.Object({
    min: t.Optional(t.Number()),
    max: t.Optional(t.Number()),
  })),
  numbers: t.Optional(t.Object({
    numDigits: t.Optional(t.Number()),
  })),
  adj: t.Optional(t.String()),
  noun: t.Optional(t.String()),
})}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
