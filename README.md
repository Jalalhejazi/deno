# Motivation to move and use deno in 2020

- https://thenewstack.io/node-js-creator-blasts-node-js-offers-a-secure-typescript-based-alternative/

- https://www.youtube.com/watch?v=HjdJzNoT_qg

- https://flaviocopes.com/deno/

- https://github.com/denolib/awesome-deno

- [K8S demo](https://github.com/knative/docs/tree/master/community/samples/serving/helloworld-deno)

# Getting Started using PowerShell

```powershell
scoop install deno

$github="https://raw.githubusercontent.com/Jalalhejazi/deno/master"
deno run --allow-net $github/weather.ts
deno run --allow-all $github/server.ts
deno run -A $github/city_weather.ts
deno run -A $github/crud.ts
deno run $github/test.ts

```

## deno Run inside a docker image

```powershell
$github="https://raw.githubusercontent.com/Jalalhejazi/deno/master"
docker run -it --init -p 1993:1993 -v ${PWD}:/app hayd/alpine-deno:1.0.2 run --allow-net $github/weather.ts
```


## REST API Server

- [/deno-rest-api](/deno-rest-api/readme.md)


## Deploy deno on Azure using github actions (DevOps)
- https://github.com/Jalalhejazi/azure-webapps-deno-sample






