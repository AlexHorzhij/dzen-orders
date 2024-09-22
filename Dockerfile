# Вихідний образ для бекенду (Node.js)
FROM node:18 AS backend

# Встановлюємо робочу директорію для бекенду
WORKDIR /app/backend

# Копіюємо бекенд до контейнера
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend .

# Вихідний образ для фронтенду (Vue.js)
FROM node:18 AS frontend

# Встановлюємо робочу директорію для фронтенду
WORKDIR /app/frontend

# Копіюємо файли package.json і встановлюємо залежності
COPY ./frontend/package*.json ./
RUN npm install

# Копіюємо всі файли фронтенду
COPY ./frontend .

# Будуємо фронтенд додаток
RUN npm run build

# Основний образ для запуску обох сервісів
FROM node:18

# Копіюємо бекенд з попереднього етапу
COPY --from=backend /app/backend /app/backend

# Копіюємо фронтенд з попереднього етапу
COPY --from=frontend /app/frontend /app/frontend

# Встановлюємо робочу директорію
WORKDIR /app

# Запускаємо сервер і клієнт одночасно
CMD ["sh", "-c", "cd /app/backend && npm start & cd /app/frontend && npm run serve"]
