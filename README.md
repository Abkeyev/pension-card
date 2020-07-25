## Страницы

[Figma](https://www.figma.com/file/OnOgpP3M4Cs6c38bmWInBJ/Redesign-bcc.kz?node-id=2945%3A0)

##

[Частным клиентам](https://abkeyev.github.io/bcc-redesign/).

##

[Бизнес клиентам](https://abkeyev.github.io/bcc-redesign/business).

##

[Отсрочка по выплатам](https://abkeyev.github.io/bcc-redesign/credits-restructuring).

##

[Кредитование](https://abkeyev.github.io/bcc-redesign/crediting).

##

[Открытие текущего счета](https://abkeyev.github.io/bcc-redesign/open-current-account).

##

[Курсы валют](https://abkeyev.github.io/bcc-redesign/currency).

##

[Контакты](https://abkeyev.github.io/bcc-redesign/contacts).

##

[Офисы и банкоматы](https://abkeyev.github.io/bcc-redesign/branches).

##

[Центр обслуживания вызовов](https://abkeyev.github.io/bcc-redesign/call-center).

##

[Новости](https://abkeyev.github.io/bcc-redesign/news).

##

[Баспана Хит](https://abkeyev.github.io/bcc-redesign/baspana-hit).

##

[Часто задаваемые вопросы](https://abkeyev.github.io/bcc-redesign/faq).

##

[Переводы с карты на карту](https://abkeyev.github.io/bcc-redesign/p2p).

##

[Реквизиты АО “Банк Центркредит”](https://abkeyev.github.io/bcc-redesign/details).

##

[Автокредитование](https://abkeyev.github.io/bcc-redesign/car-credit).

## Available Scripts

при наличии папки `node_modules` снести ее

### `yarn`

установить все зависимости

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `sudo docker build -t bcc:dev .`

собирает докер-образ

### `sudo docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true bcc:dev`

запускает докер-образ в интерактивном режиме на порту 3001
