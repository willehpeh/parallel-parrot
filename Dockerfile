FROM node:20.15.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx nx build parallel-parrot-api
RUN npx nx reset
RUN npx nx build parallel-parrot
FROM node:20.15.0-alpine as runner
COPY --from=builder /app/dist/apps/backend/parallel-parrot-api ./
COPY --from=builder /app/dist/apps/frontend/parallel-parrot/browser ./public/
RUN npm install --omit=dev
EXPOSE 3000
