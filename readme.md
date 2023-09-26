# Testins async functions

## Carstorage API

## cars.json

```json
[
  { "model": "Border T-model", "licence": "ABC-1" },
  { "model": "Nova", "licence": "XYZ-123" },
  { "model": "Border T-model", "licence": "GTF-10" },
  { "model": "XCT", "licence": "B-1" }
]
```

## **search(key, value)**

function returns an array of cars that matches the given criterion. If no mathc, returns an empty array.

if parameters are missing, throw error 'parameter missing'

parameters:

- key: model or licence
- value: value to be searched
