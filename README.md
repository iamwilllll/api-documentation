#use guide
Descarga los archivos estaticos de la construccion del proyecto o reconstruyelos desde el proyecto
copia los controllers y las rutas para crear los enpoints
middlewares opcionales **recomemdados** (en los controllers se hace la verificacion de todos los datos, pero es mejor en los middlewares)
Ya todo estaria ready, verifica que en el .env los nombres de las variables sean correctos (revisar con el .evn_template)

ahora solo queda servir los archivos estaticos desde la http://{url}/api
y empezar a documentar los endpoints para una mejor experiencia de desarrollador

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
