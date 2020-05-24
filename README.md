# Motivation to move and use deno in 2020

- https://thenewstack.io/node-js-creator-blasts-node-js-offers-a-secure-typescript-based-alternative/

- https://www.youtube.com/watch?v=HjdJzNoT_qg

- https://flaviocopes.com/deno/

- https://github.com/denolib/awesome-deno

- [K8S demo](https://github.com/knative/docs/tree/master/community/samples/serving/helloworld-deno)

# Getting Started

```bash
scoop install deno

github="https://raw.githubusercontent.com/Jalalhejazi/deno/master"
deno run --allow-net $github/weather.ts
deno run --allow-all $github/server.ts
deno run -A $github/city_weather.ts
deno run -A $github/crud.ts
deno run $github/test.ts

```

## Azure Functions

- https://deno.land/x/azure_functions


## Semantic Versioning

- https://deno.land/x/bump
- https://deno.land/x/semver

## Cross-env

- https://deno.land/x/cross_env

## weather
- https://deno.land/x/deno_weather

## moment
- https://deno.land/x/moment

## Up

Check if a website is up right now in Deno.

```bash
deno run --allow-net https://deno.land/x/up/mod.ts https://google.com
```





