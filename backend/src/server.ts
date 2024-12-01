import fastify from 'fastify';
import cors from '@fastify/cors';

const server = fastify();

// Enable CORS
server.register(cors, {
  origin: true // During development allow all origins
});

// Health check endpoint
server.get('/health', async () => {
  return { status: 'ok' };
});

// Start the server
const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
