## Deploy

```sh
npm run build                            /* generate lightweight bundle */
docker build -t [dokerId]/[imageName] .  /* create docker image based on build */
docker push [dokerId]/[imageName]        /* push docker image to dockerHub */
```