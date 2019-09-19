# uuid-v4.web.app

Web and its API that generate different uuid for each access.

## Usage

### Web Access

<img width="1183" alt="web-screenshot" src="https://user-images.githubusercontent.com/6993514/65211181-c25a4e00-dad8-11e9-8919-a9947e0f9f52.png">

Just access https://uuid-v4.web.app.

The website automatically displays a random uuid every time.

### API Access

<img width="1183" alt="api-screenshot" src="https://user-images.githubusercontent.com/6993514/65211183-c25a4e00-dad8-11e9-92e8-7000f9be8b5a.png">

Just access https://uuid-v4.web.app/api.

The API responses a random value in JSON.

#### curl Access

```shell
curl -D - https://uuid-v4.web.app/api
HTTP/2 200
cache-control: private
content-type: application/json; charset=utf-8
etag: W/"2f-0Rg1ywJBEUe/6kOA9No7w/fGk14"
function-execution-id: 3z15255b25ww
server: Google Frontend
x-cloud-trace-context: 0d36cddab2a05bc6b16b2d3064063e8e;o=1
x-powered-by: Express
accept-ranges: bytes
accept-ranges: bytes
date: Thu, 19 Sep 2019 03:29:48 GMT
x-served-by: cache-hnd18725-HND
x-cache: MISS
x-cache-hits: 0
x-timer: S1568863789.500022,VS0,VE254
vary: cookie,need-authorization, x-fh-requested-host, accept-encoding
content-length: 47

{"uuid":"6fa913bc-07c2-423d-8185-7cc82e04e2bd"}⏎
```

#### curl and jq example

```shell
curl https://uuid-v4.web.app/api | jq '.uuid'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    47  100    47    0     0    173      0 --:--:-- --:--:-- --:--:--   172
"e5ab8dd5-323c-4d44-bed8-46f9f27f3e52"
```

## LICENCE

MIT
