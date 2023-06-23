Created by Ahmet Üzgör with Nest.js framework;

It is a case study solution for url shortener service ;
You can test via below postman collection json

```
{
	"info": {
		"_postman_id": "dc0bec5a-eced-49b4-a321-dfbb3352e58b",
		"name": "url-shortener",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "shorten url",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "get all statistics",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/statistics/allstats",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"statistics",
						"allstats"
					]
				}
			},
			"response": []
		},
		{
			"name": "get one statistics",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/statistics/allstats",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"statistics",
						"allstats"
					]
				}
			},
			"response": []
		},
		{
			"name": "get all links",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/statistics/allstats",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"statistics",
						"allstats"
					]
				}
			},
			"response": []
		}
	]
}
```