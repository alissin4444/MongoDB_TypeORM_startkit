import { createConnection, Connection } from 'typeorm';

export default async (): Promise<Connection> => {
  return createConnection({
    name: 'default',
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'music',
    logging: false,
    useUnifiedTopology: true,
    entities: ['src/schemas/**/*.ts'],
  });
};
