# Запуск з Docker:

## Образ додатка знаходиться на Docker Hub за посиланням:

 **[https://hub.docker.com/r/oleksandrhorzhiy/dzen-t](https://hub.docker.com/r/oleksandrhorzhiy/dzen-t)**

## Для запуску додатка запускаємо команду:

 docker pull oleksandrhorzhiy/dzen-t:latest

## Після того, як образ буде завантажено, запустіть його за допомогою команди:

 docker run -p 5000:5000 -p 8080:8080 oleksandrhorzhiy/dzen-t:latest

## Frontend запуститься на порту 8080 і буде доступний за посиланням:

 **[http://localhost:8080](http://localhost:8080)**

## Backend запуститься на порту 5000


# Запуск локально

- Завнтажуєм з Git backend та frontend частини проекту

## Backend:
 запускаеться на порту 5000, командою:
  ```bash
npm start
    або
yarn start
```

## Fromtend:
 запускаеться на порту 8080, командою:
```bash
npm run serve
    або
yarn serve
```


# В проекті реалізовано: 

 ## Фротенд частина з візуальним відображенням сторінок 
- приходу товару
- самого товару
- приходу товару з вкладеним товаром 

 ### Можливість сортування товару по типу та специфікації

 ### Можливість видалення приходу з автоматичним видаленням всіх вкладених товарів

 ### Відображення кількості користувачів що знаходятся на сайті

 ### Відображення поточної дати та часу 

 ### Відображення довгих назв в таблиці

 ### Відображення кількості товарів на сторінці товарів та приходів на сторінці приходів
