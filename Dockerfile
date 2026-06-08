FROM node:22-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:22-alpine

WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
