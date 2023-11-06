import { collectDefaultMetrics } from 'prom-client';

export default defineNitroPlugin(() => {
  collectDefaultMetrics();
})
  