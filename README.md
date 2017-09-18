### How to run
---
- Install [nodejs](http://nodejs.org/) - preferably v.6.10.0 or higher

- Start the mongodb service

#### Server

- Navigate the terminal to the `/server` folder

    - `npm install`

    - `npm run build`

    - `npm run dev`

#### Client
- Navigate the terminal to the `/client` folder

    - `npm install`

    - `npm run build`

    - `npm run dev`

---

### Server directory tree:

```
src
├── config
│   ├── database.config.js
│   ├── env.config.js
│   └── middlewares.config.js
├── index.js
├── modules
│   ├── countries
│   │   ├── countries.controller.js
│   │   ├── countries.model.js
│   │   └── countries.routes.js
│   ├── index.js
│   └── users
│       ├── users.controller.js
│       ├── users.model.js
│       └── users.routes.js
├── seeds
│   └── countries.js
└── services
    └── auth.service.js
```

### Client directory tree:
```
src
├── app
│   ├── app.module.config.js
│   ├── app.module.js
│   ├── components
│   │   ├── app-header
│   │   │   ├── app-header.component.js
│   │   │   └── app-header.html
│   │   ├── home
│   │   │   ├── home.component.js
│   │   │   └── home.html
│   │   ├── main
│   │   │   ├── main.component.js
│   │   │   └── main.html
│   │   └── page-not-found
│   │       ├── page-not-found.component.js
│   │       └── page-not-found.html
│   ├── modules
│   │   └── users
│   │       ├── components
│   │       │   ├── change-password
│   │       │   │   ├── change-password.component.js
│   │       │   │   └── change-password.html
│   │       │   ├── login
│   │       │   │   ├── login.component.js
│   │       │   │   └── login.html
│   │       │   ├── register
│   │       │   │   ├── register.component.js
│   │       │   │   └── register.html
│   │       │   └── user-details
│   │       │       ├── user-details.component.js
│   │       │       └── user-details.html
│   │       ├── services
│   │       │   ├── users.auth.service.js
│   │       │   ├── users.data.service.js
│   │       │   └── users.identity.service.js
│   │       ├── users.module.config.js
│   │       └── users.module.js
│   └── services
│       ├── app.countriesData.service.js
│       └── app.notifier.service.js
├── css
│   └── app.css
├── img
│   ├── favicon.ico
│   └── user-avatar.png
└── index.html

```