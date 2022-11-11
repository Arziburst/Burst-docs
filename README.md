# Welcome to Burst.🔥

<image align="right" width="160px" alt="HTML5" src="https://lh3.googleusercontent.com/pw/AL9nZEXF_kAh3tezMRxnT4GGR3YHoKo5CpSkWtRBD9_HsJ7K_KNqcpjELcsJ1OKdji9fJNIa9GKHXjeuLLshj5t-Y0QJuMn3IVxRCT1iXtm0AeSjD8s2cR1VJOpqRHEXLLZVZRgmJcw59HXUwCb2_dw1L17A=s432-no?authuser=0"/>

Burst is the perfect template for react web applications.

Typescript, Webpack, React, Redux are the basis of most SPA applications, and here they are already fully and conveniently configured. Simple and flexible React architecture with customized routing. Also, Redux is configured with DDD approach, which makes it possible to generate boilerplate code in a couple of steps.

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

Also, you can create `.env.development` and `.env.production` to better control your environment by example from `.env.example`.

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

Burst has original architecture. Before installing, you can see files and folders. One have a lot of resolves, it can make your development easier. You don't have to think where to create an entity, but just develop an application.

![image](https://user-images.githubusercontent.com/33392042/201114163-e8c39554-d367-492d-8704-f8863383a9ca.png)

First important the folder is [`scripts`](https://github.com/Arziburst/Burst/tree/master/scripts), that the folder has folders for Webpack and generate files. If you want, you can change Webpack's config for your project and generate's config.

![image](https://user-images.githubusercontent.com/33392042/201121086-1a355bee-b208-4e8d-a703-171958558d69.png)

Next important folder is [`src`](https://github.com/Arziburst/Burst/tree/master/src). Main file of [`src`](https://github.com/Arziburst/Burst/tree/master/src) is [`index.tsx`](https://github.com/Arziburst/Burst/blob/master/src/index.tsx), this file is the main entry for all components and other optional files.

![image](https://user-images.githubusercontent.com/33392042/201333507-8c704c45-d79d-4a9b-9953-e07c4deaf46f.png)

Then folder [`view`](https://github.com/Arziburst/Burst/tree/master/src/view) of [`src`](https://github.com/Arziburst/Burst/tree/master/src). We have to abstract the code and that the folder for only UI. This gives us a clear structure that we can easily control UI.

![image](https://user-images.githubusercontent.com/33392042/201333741-1ab27311-e845-4517-b43c-81b92fe6a091.png)

The folder has [`index.tsx`](https://github.com/Arziburst/Burst/blob/master/src/view/index.tsx), it is a main entry for UI. Main component of one is [`<Routes />`](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/src/view/index.tsx#L38) from the folder [`routes/index.tsx`](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/src/view/routes/index.tsx#L11).

![image](https://user-images.githubusercontent.com/33392042/201338109-b5eb18a4-a97d-4341-8f2a-b0db15d48831.png)

If you open that folder, you can see that routes are two types [`Public`](https://github.com/Arziburst/Burst/blob/master/src/view/routes/Public.tsx) and [`Private`](https://github.com/Arziburst/Burst/blob/master/src/view/routes/Private.tsx). Different routes need to split pages for public and private. Also, the routes consists of `<Route />` to render components. It looks like [this...](https://github.com/Arziburst/Burst/blob/master/src/view/routes/Public.tsx)

```typescript
// ./src/view/routes/Public.tsx

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Root /> }
                path = { book.ROOT }
            />
            {/* MarkerGen route */}
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.ROOT }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
```

**Note:** sometimes you will see comments with the word [`MarkerGen`](https://github.com/Arziburst/Burst/blob/84d2b7a6f9fa6bd383dd4c25fa666576d43fe184/src/view/routes/Public.tsx#L18). Those comments are needed to generate ([`./scripts/generate/index.ts`](https://github.com/Arziburst/Burst/blob/master/scripts/generate/index.ts)) and if you want to all work right, you have to don't remove those comments.

Then the folder [`pages`](https://github.com/Arziburst/Burst/tree/master/src/view/pages). One has pages, for example [`Root`](https://github.com/Arziburst/Burst/tree/master/src/view/pages/Root). Those pages can use [`components`](https://github.com/Arziburst/Burst/tree/master/src/view/components), [`containers`](https://github.com/Arziburst/Burst/tree/master/src/view/containers) and [`elements`](https://github.com/Arziburst/Burst/tree/master/src/view/elements). The file [`index.tsx`](https://github.com/Arziburst/Burst/blob/master/src/view/pages/Root/index.tsx) need for UI and [`styles.ts`](https://github.com/Arziburst/Burst/blob/master/src/view/pages/Root/styles.ts) need for styles. The Burst use to library [`styled-components`](https://styled-components.com/).

![image](https://user-images.githubusercontent.com/33392042/201361260-db116622-66f8-4b11-a740-d5fa2756f19f.png)

## Deploy

```sh
npm run build                            /* generate lightweight bundle */
docker build -t [dokerId]/[imageName] .  /* create docker image based on build */
docker push [dokerId]/[imageName]        /* push docker image to dockerHub */
```
