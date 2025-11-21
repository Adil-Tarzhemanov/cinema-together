FROM node:20-alpine AS base

WORKDIR /app

RUN npm install -g npm@latest

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Эти переменные используются на этапе билда
ENV NODE_ENV=production
ENV NEXT_PUBLIC_SERVER_URL=http://localhost:4200
ENV INTERNAL_API_URL=http://backend:4200
ENV APP_URL=http://localhost:3000

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]


