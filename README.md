# Welcome to Burst.🔥

<image align="right" width="160px" alt="HTML5" src="https://lh3.googleusercontent.com/pw/AL9nZEXF_kAh3tezMRxnT4GGR3YHoKo5CpSkWtRBD9_HsJ7K_KNqcpjELcsJ1OKdji9fJNIa9GKHXjeuLLshj5t-Y0QJuMn3IVxRCT1iXtm0AeSjD8s2cR1VJOpqRHEXLLZVZRgmJcw59HXUwCb2_dw1L17A=s432-no?authuser=0"/>

Burst is the perfect template for react web applications.

Typescript, webpack, react, redux are the basis of most SPA applications, and here they are already fully and conveniently configured. Simple and flexible react architecture with customized routing. Also Redux is configured with DDD approach, which makes it possible to generate boilerplate code in a couple of steps.

Ready to use, just waiting for you!

## How to install

Burst can be installed in all possible ways, and can also be downloaded via npm.

```sh
npx create-react-app <your_project_name> --template burst
```

### Features

- Simple, flexible, extensible architecture
- Custom modular Webpack
- Configured custom ESlint
- Docker ready
- Lightweight bundle
- Code generating

### Initializing

Burst is easy to use and all it needs is installed `node_modules`.

Also you can create `.env.development` and `.env.production` for better control you environment by example from `.env.example`.

![image](https://user-images.githubusercontent.com/33392042/201118928-0b2dbaa6-0d14-42d3-a49d-d96a381ca18d.png)

If you do not create any `.env.**`, Burst use `.env.example` by default.

## Requirements

❗️ NPM `v6.0.0 or later`

❗️ Node `v14.0.0 of later`

### Available scripts

```sh
npm start        /* calls webpack devserver */
npm run build    /* generate lightweight bundle */
npm run gen      /* file generation CLI */
npm run analyze  /* web bundle analysis */
npm run serve    /* web bundle analysis */
npm run clean    /* delete node_modules */
```

## Optional VSCode Extensions

📍 Auto formatting code with ESLint
You may need to add code below to your `settings.json` in VSCode

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
"eslint.format.enable": true,
```

## Architecture

Burst have original architecture. Before installing, you can see files and folders. One have a lot of resolves, it can make your development easier. You don't have to think where to create an entity, but just develop an application.

![image](https://user-images.githubusercontent.com/33392042/201114163-e8c39554-d367-492d-8704-f8863383a9ca.png)

First important the folder is `scripts`, this the folder has folders for Webpack and generate files. If you want, you can change Webpack's config for your project and generate's config.

![image](https://user-images.githubusercontent.com/33392042/201121086-1a355bee-b208-4e8d-a703-171958558d69.png)

## Deploy

```sh
npm run build                            /* generate lightweight bundle */
docker build -t [dokerId]/[imageName] .  /* create docker image based on build */
docker push [dokerId]/[imageName]        /* push docker image to dockerHub */
```
