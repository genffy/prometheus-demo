import { register } from 'prom-client';
export default defineEventHandler(async (event) => {
    try {
        return await register.metrics();
    } catch (err) {
        throw createError({
            statusCode: 500,
            statusMessage: 'get metrics failed',
        })
    }
})
