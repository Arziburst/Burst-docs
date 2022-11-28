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

Burst has original architecture. Before installing, you can see files and folders. It has a lot of solutions, it can make your development easier. You don't have to think where to create an entity, but just develop an application.

![image](https://user-images.githubusercontent.com/33392042/201114163-e8c39554-d367-492d-8704-f8863383a9ca.png)

The first important folder is [`scripts`](https://github.com/Arziburst/Burst/tree/master/scripts), this folder has folders for Webpack and generation files. If you want, you can change Webpack's config for your project and generation config.

![image](https://user-images.githubusercontent.com/33392042/201121086-1a355bee-b208-4e8d-a703-171958558d69.png)

Next important folder is [`src`](https://github.com/Arziburst/Burst/tree/master/src). The main file of [`src`](https://github.com/Arziburst/Burst/tree/master/src) is [`index.tsx`](https://github.com/Arziburst/Burst/blob/master/src/index.tsx), this file is the main entry for all components and other optional files.

![image](https://user-images.githubusercontent.com/33392042/201333507-8c704c45-d79d-4a9b-9953-e07c4deaf46f.png)

Then there is a folder [`view`](https://github.com/Arziburst/Burst/tree/master/src/view) of [`src`](https://github.com/Arziburst/Burst/tree/master/src). We have to abstract codes and that folder is only for UI. This gives us a clear structure so that we can control UI easily.

![image](https://user-images.githubusercontent.com/33392042/201333741-1ab27311-e845-4517-b43c-81b92fe6a091.png)

The folder has [`index.tsx`](https://github.com/Arziburst/Burst/blob/master/src/view/index.tsx), it is the main entry for UI. The main component of Burst is [`<Routes />`](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/src/view/index.tsx#L38) from the folder [`routes/index.tsx`](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/src/view/routes/index.tsx#L11).

![image](https://user-images.githubusercontent.com/33392042/201338109-b5eb18a4-a97d-4341-8f2a-b0db15d48831.png)

If you open that folder, you can see that the routes have two types, [`Public`](https://github.com/Arziburst/Burst/blob/master/src/view/routes/Public.tsx) and [`Private`](https://github.com/Arziburst/Burst/blob/master/src/view/routes/Private.tsx). Different routes need to split pages into public and private. Also, the routes consist of `<Route />` to render components. It looks like [this...](https://github.com/Arziburst/Burst/blob/master/src/view/routes/Public.tsx)

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

**Note:** sometimes you will see comments with the word [`MarkerGen`](https://github.com/Arziburst/Burst/blob/84d2b7a6f9fa6bd383dd4c25fa666576d43fe184/src/view/routes/Public.tsx#L18). Those comments are needed for generation ([./scripts/generate/index.ts](https://github.com/Arziburst/Burst/blob/master/scripts/generate/index.ts)) and if you want everything to work right, you mustn't remove those comments.

Then Burst includes a folder [`pages`](https://github.com/Arziburst/Burst/tree/master/src/view/pages), for example [`Root`](https://github.com/Arziburst/Burst/tree/master/src/view/pages/Root) one of these pages. Those pages can use [`components`](https://github.com/Arziburst/Burst/tree/master/src/view/components),  [`containers`](https://github.com/Arziburst/Burst/tree/master/src/view/containers) and [`elements`](https://github.com/Arziburst/Burst/tree/master/src/view/elements). The file [`index.tsx`](https://github.com/Arziburst/Burst/blob/master/src/view/pages/Root/index.tsx) is needed for UI and [`styles.ts`](https://github.com/Arziburst/Burst/blob/master/src/view/pages/Root/styles.ts) is needed for styles. Burst uses library [`styled-components`](https://styled-components.com/).

![image](https://user-images.githubusercontent.com/33392042/201361260-db116622-66f8-4b11-a740-d5fa2756f19f.png)

Next folders are [`components`](https://github.com/Arziburst/Burst/tree/master/src/view/components), [`containers`](https://github.com/Arziburst/Burst/tree/master/src/view/containers), [`elements`](https://github.com/Arziburst/Burst/tree/master/src/view/elements) and these folders are divided into logical entities. The folder `components` contains independent and reusable blocks of JSX. The folder `containers` incudes independent and reusable containers, the container can wrap components or elements. The folder `elements` is like components, but an element is only a part of the component, it can be button or input.

![image](https://user-images.githubusercontent.com/33392042/201369806-3248e7fd-2994-424e-8815-7a92bb6ff0d9.png)

The folder [`assets`](https://github.com/Arziburst/Burst/tree/master/src/assets) is created for images, fonts and [`themes`](https://github.com/Arziburst/Burst/tree/master/src/assets/themes) (global variables, example colors or styles)

![image](https://user-images.githubusercontent.com/33392042/201625132-1962164c-29b4-4183-9c9e-e985fd53891f.png)

**Note:** if you want to use images, you have to import theme in ts or tsx file, [example](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/src/view/elements/HelloBurst.tsx#L48).

```typescript
import yourImage from "assets/images/YOUR_IMAGE.png";

const Component = () => {
    return (
        <div>
            <img src = { yourImage } />
        </div>
    );
};
```

Or if you need to use one image in several files, you have to import image once in ts file, then to the file where you want to use image. You have to use the path `assets/YOUR_IMAGE.png`.

```typescript
<img src = "assets/YOUR_IMAGE.png" />
```

The next folder is [`tools`](https://github.com/Arziburst/Burst/tree/master/src/tools), this folder consists of custom hooks and utils. For example, These can be utils for validation inputs.

![image](https://user-images.githubusercontent.com/33392042/201644142-c2e70d68-7f84-4bf9-9301-9db1f2531805.png)

The next important folder is [`init`](https://github.com/Arziburst/Burst/blob/master/src/init), this folder has folder [`@types`](https://github.com/Arziburst/Burst/tree/master/src/init/@types) for types. File [`constants.ts`
](https://github.com/Arziburst/Burst/blob/master/src/init/index.ts) consists of global constants, for example [`name application`](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/src/init/constants.ts#L5) or [`URL for server`](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/src/init/constants.ts#L2). If you have global constants, you have to keep your constants [`here`](https://github.com/Arziburst/Burst/blob/master/src/init/constants.ts).

![image](https://user-images.githubusercontent.com/33392042/201649148-5bdbc1c5-10a9-4938-a02f-0cc54acc72ae.png)

The folder [`redux`](https://github.com/Arziburst/Burst/tree/master/src/init/redux) consists of Redux store that holds the complete state tree of application from the folder [`bus`](https://github.com/Arziburst/Burst/tree/master/src/bus), root Saga aggregates multiple Sagas to a single entry point for the sagaMiddleware to run and Thunk's middleware.

![image](https://user-images.githubusercontent.com/33392042/201657040-5e4dc0f6-cc8f-4ca8-8862-2807b61b821f.png)

The last folder [`bus`](https://github.com/Arziburst/Burst/tree/master/src/bus) is entity part of store. This folder has two kinds of entities, the [`client`](https://github.com/Arziburst/Burst/tree/master/src/bus/client) entity for local actions, for example switch sidebar for phone or switch action online user. And entities for remote actions (you have to use `npm run gen` for creating new entity).

## Generate files

If you want to create new files, you have to use [`npm run gen`](https://github.com/Arziburst/Burst/blob/e233ca7683eba08adc08676997e716124efdad86/package.json#L21). Example component...

![gif](https://user-images.githubusercontent.com/33392042/202209191-2aa0d862-6829-47fc-ae43-cd729ad00e5d.gif)

You don't have to worry about exporting the entity, Burst itself does the re-export and additional steps if needed. If you want to use Redux with Thunk or Saga, you can use `npm run gen`. Burst will connect Thunk or Saga to your project.

### All entities:

```sh
Entity:     ./src/bus/__entityName__
Saga:       ./src/bus/__entityName__/saga
Thunk:      ./src/bus/__entityName__/thunk
Component:  ./src/view/components/__componentName__
Element:    ./src/view/elements/__elementName__
Container:  ./src/view/containers/__containerName__
Page:       ./src/view/pages/__pageName__
```

## Deploy

```sh
npm run build                            /* generate lightweight bundle */
docker build -t [dokerId]/[imageName] .  /* create docker image based on build */
docker push [dokerId]/[imageName]        /* push docker image to dockerHub */
```
