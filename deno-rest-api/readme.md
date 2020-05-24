# Deno REST API

## Run with PowerShell
```powershell
$github="https://raw.githubusercontent.com/Jalalhejazi/deno/master/deno-rest-api"
deno run --allow-net $github/server.ts
```

## Routes
```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
```
