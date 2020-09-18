# Express Js with MongoDB

## To build
`docker-compose build`

## To run
`docker-compose up -d`

## To verify
curl -i -X POST -H "Content-Type: application/json" -d '{ "prod_name":"XBox One","prod_desc":"New Microsoft XBox One, the latest games console","prod_price": 520 }' http://localhost:3002/api/v1/products

## Use any client tool such as MongoDB Compass to verify the data
`https://www.mongodb.com/products/compass`



