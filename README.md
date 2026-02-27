POST /api/sections

body: {
"sectionName": "Auth",
"sectionDescription": "Authentication endpoints"
}

Response : {
"id": "65fd123abc456",
"sectionName": "Auth",
"sectionDescription": "Authentication endpoints",
"createdAt": "2026-02-27T03:00:00.000Z"
}

GET /api/sections

Response : [
{
"id": "65fd123abc456",
"sectionName": "Auth",
"sectionDescription": "Authentication endpoints"
},
{
"id": "65fd999xyz222",
"sectionName": "Products",
"sectionDescription": "Product management endpoints"
}
]

GET /api/sections/:id
Response : {
"id": "65fd123abc456",
"sectionName": "Auth",
"sectionDescription": "Authentication endpoints",
"endPoints": [
{
"id": "ep1",
"method": "POST",
"URL": "api/auth/register",
"description": "Register user"
},
{
"id": "ep2",
"method": "POST",
"URL": "api/auth/login",
"description": "Login user"
}
]
}
