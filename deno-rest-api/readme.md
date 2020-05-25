# Deno REST API

## Run with PowerShell
```powershell
$github="https://raw.githubusercontent.com/Jalalhejazi/deno/master/deno-rest-api"
deno run --allow-net $github/server.ts
```

## Routes
```
http GET      :5000/api/v1/products
http GET      :5000/api/v1/products/:id
http POST     :5000/api/v1/products
http PUT      :5000/api/v1/products/:id
http DELETE   :5000/api/v1/products/:id
```
