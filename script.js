// Examen Mongo DB 
// ###################################
// ###################################
// 1. Crear la base de datos anime_store y la colección products e importar los datos del archivo json. 
// 1.1 Crear base de datos
use anime_store;
// 1.2 Crear coleccion products
db.createCollection("products");
// 1.3 Insertar datos con many
db.products.insertMany([
    {"sku": "A001","name": "Figura Luffy Gear 5","category": "Figuras","price": 135000,"stock": 5,"anime": "One Piece","rating": 4.9,"tags": ["coleccionable", "resina"],"provider": { "name": "ToeiExpress", "country": "Japón" }},
    {"sku": "A002","name": "Camiseta Goku Ultra Instinct","category": "Ropa","price": 38000,"stock": 12,"anime": "Dragon Ball Super","rating": 4.4,"tags": ["algodón", "unisex"],"provider": { "name": "OtakuDistribuciones", "country": "Colombia" }},
    {"sku": "A003","name": "Taza Tanjiro Kamado","category": "Accesorios","price": 22000,"stock": 0,"anime": "Demon Slayer","rating": 4.2,"tags": ["cerámica", "color"],"provider": { "name": "AnimeGear", "country": "México" }},
    {"sku": "A004","name": "Póster Levi Ackerman","category": "Pósters","price": 15000,"stock": 8,"anime": "Attack on Titan","rating": 4.5,"tags": ["vinilo", "A3"],"provider": { "name": "AnimePosters", "country": "EEUU" }},
    {"sku": "A005","name": "Manga Jujutsu Kaisen Vol. 1","category": "Mangas","price": 28000,"stock": 4,"anime": "Jujutsu Kaisen","rating": 4.7,"tags": ["impreso", "español"],"provider": { "name": "ShueishaLatino", "country": "Colombia" }},
    {"sku": "A006","name": "Llaveros My Hero Academia Pack","category": "Accesorios","price": 30000,"stock": 6,"anime": "My Hero Academia","rating": 4.3,"tags": ["metal", "pack"],"provider": { "name": "OtakuDistribuciones", "country": "Colombia" }},
    {"sku": "A007","name": "Figura Gojo Satoru","category": "Figuras","price": 150000,"stock": 3,"anime": "Jujutsu Kaisen","rating": 4.9,"tags": ["edición especial"],"provider": { "name": "ToeiExpress", "country": "Japón" }},
    {"sku": "A008","name": "Camiseta Nezuko Chan","category": "Ropa","price": 36000,"stock": 10,"anime": "Demon Slayer","rating": 4.6,"tags": ["manga", "unisex"],"provider": { "name": "OtakuDistribuciones", "country": "Colombia" }},
    {"sku": "A009","name": "Póster Kakashi Hatake","category": "Pósters","price": 18000,"stock": 7,"anime": "Naruto","rating": 4.4,"tags": ["vinilo", "color"],"provider": { "name": "AnimePosters", "country": "EEUU" }},
    {"sku": "A010","name": "Manga One Piece Vol. 100","category": "Mangas","price": 32000,"stock": 5,"anime": "One Piece","rating": 4.8,"tags": ["colección", "impreso"],"provider": { "name": "ShueishaLatino", "country": "Colombia" }},
    {"sku": "A011","name": "Mousepad Anime Variado","category": "Accesorios","price": 25000,"stock": 9,"anime": "Varios","rating": 4.1,"tags": ["gaming", "antideslizante"],"provider": { "name": "OtakuDistribuciones", "country": "Colombia" }},
    {"sku": "A012","name": "Camiseta Ichigo Kurosaki","category": "Ropa","price": 40000,"stock": 5,"anime": "Bleach","rating": 4.5,"tags": ["algodón", "edición limitada"],"provider": { "name": "AnimeRopa", "country": "Colombia" }},
    {"sku": "A013","name": "Llavero Doraemon","category": "Accesorios","price": 12000,"stock": 2,"anime": "Doraemon","rating": 4.0,"tags": ["plástico", "azul"],"provider": { "name": "JapanImports", "country": "Japón" }},
    {"sku": "A014","name": "Figura Sailor Moon","category": "Figuras","price": 98000,"stock": 4,"anime": "Sailor Moon","rating": 4.3,"tags": ["clásico", "colección"],"provider": { "name": "OtakuDistribuciones", "country": "Colombia" }},
    {"sku": "A015","name": "Manga Death Note Vol. 1","category": "Mangas","price": 27000,"stock": 6,"anime": "Death Note","rating": 4.9,"tags": ["español", "clásico"],"provider": { "name": "ShueishaLatino", "country": "Colombia" }},
    {"sku": "A016","name": "Taza Totoro","category": "Accesorios","price": 25000,"stock": 1,"anime": "My Neighbor Totoro","rating": 4.7,"tags": ["cerámica", "cute"],"provider": { "name": "GhibliImports", "country": "Japón" }},
    {"sku": "A017","name": "Camiseta Tokyo Revengers","category": "Ropa","price": 39000,"stock": 8,"anime": "Tokyo Revengers","rating": 4.4,"tags": ["algodón", "negra"],"provider": { "name": "OtakuDistribuciones", "country": "Colombia" }},
    {"sku": "A018","name": "Manga Chainsaw Man Vol. 1","category": "Mangas","price": 30000,"stock": 7,"anime": "Chainsaw Man","rating": 4.6,"tags": ["sangriento", "nuevo"],"provider": { "name": "ShueishaLatino", "country": "Japón" }},
    {"sku": "A025","name": "Camiseta Pikachu Vintage","category": "Ropa","price": 34000,"stock": 3,"anime": "Pokémon","rating": 4.2,"tags": ["retro", "amarilla"],"provider": { "name": "AnimeRopa", "country": "Colombia" }},
    {"sku": "A034","name": "Figura Mikasa Ackerman","category": "Figuras","price": 112000,"stock": 9,"anime": "Attack on Titan","rating": 4.7,"tags": ["colección", "resina"],"provider": { "name": "ToeiExpress", "country": "Japón" }},
    {"sku": "A043","name": "Póster Akatsuki","category": "Pósters","price": 18000,"stock": 0,"anime": "Naruto","rating": 4.3,"tags": ["negro", "vinilo"],"provider": { "name": "AnimePosters", "country": "EEUU" }}
])
// 2. Agregar el siguiente producto.
db.products.insertOne({
    "sku": "A101",
    "name": "Figura Naruto Uzumaki",
    "category": "Figuras",
    "price": 120000,
    "stock": 10,
    "anime": "Naruto",
    "rating": 4.8,
    "tags": ["coleccionable", "resina", "edición especial"],
    "provider": {
      "name": "OtakuDistribuciones",
      "country": "Japón"
    }
})
// insercion de 20 nuevos productos
db.products.insertMany([
    {"sku": "A059","name": "Figura Robot Increible 01","category": "Figuras","price": 34000,"stock": 25,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A060","name": "Figura Robot Increible 02","category": "Figuras","price": 35000,"stock": 21,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A061","name": "Figura Robot Increible 03","category": "Figuras","price": 36000,"stock": 210,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A062","name": "Figura Robot Increible 04","category": "Figuras","price": 37000,"stock": 28,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A063","name": "Figura Robot Increible 05","category": "Figuras","price": 38000,"stock": 24,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A064","name": "Figura Robot Increible 06","category": "Figuras","price": 39000,"stock": 26,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A065","name": "Figura Robot Increible 07","category": "Figuras","price": 40000,"stock": 23,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A066","name": "Figura Robot Increible 08","category": "Figuras","price": 41000,"stock": 21,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A067","name": "Figura Robot Increible 09","category": "Figuras","price": 42000,"stock": 27,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A068","name": "Figura Robot Increible 10","category": "Figuras","price": 43000,"stock": 25,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A069","name": "Figura Robot Increible 11","category": "Figuras","price": 44000,"stock": 290,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A070","name": "Figura Robot Increible 12","category": "Figuras","price": 45000,"stock": 25,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A071","name": "Figura Robot Increible 13","category": "Figuras","price": 46000,"stock": 22,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A072","name": "Figura Robot Increible 14","category": "Figuras","price": 47000,"stock": 24,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A073","name": "Figura Robot Increible 15","category": "Figuras","price": 48000,"stock": 26,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A074","name": "Figura Robot Increible 16","category": "Figuras","price": 49000,"stock": 21,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A075","name": "Figura Robot Increible 17","category": "Figuras","price": 50000,"stock": 28,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A076","name": "Figura Robot Increible 18","category": "Figuras","price": 51000,"stock": 23,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A077","name": "Figura Robot Increible 19","category": "Figuras","price": 52000,"stock": 29,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }},
    {"sku": "A078","name": "Figura Robot Increible 20","category": "Figuras","price": 53000,"stock": 220,"anime": "Robots Super Increibles","rating": 4.3,"tags": ["coleccionable", "metal"],"provider": { "name": "OtakuDistribuciones", "country": "Japón" }}
])
// 3. Agregar a todos los productos las siguientes propiedades:
// available: true
// origin: "Importado"
db.products.updateMany(
    {}, 
    { $set: { 
    available: true,
    origin: "Importado"} 
    }
)
// 4. Realizar las siguientes actualizaciones:

// 4.1 Producto con sku: A034, actualizar stock a 15.
db.products.updateOne(
    {sku: "A034"}, 
    { $set: { 
    stock: 15} 
    }
)
// 4.2 Producto con sku: A018, cambiar el country del provider a "Colombia".
db.products.updateOne(
    {sku: "A018"}, 
    { $set: { 
    stock: 15} 
    }
)
// 4.3 Producto con sku: A059, agregar un nuevo tag: "oferta".
db.products.updateOne(
    { sku: "A059" },
    { $push: { tags: "oferta" } }
  );
// 4.4 Producto con sku: A012, agregar dos nuevos tags: "nuevo", "popular".
db.products.updateOne(
    { sku: "A012" },
    { $push: { tags: {$each:["nuevo","popular"] } }}
  );
// 4.5 Producto con sku: A025, agregar los tags "descuento", "outlet".

// 4.6 Producto llamado "Camiseta Goku Ultra Instinct", cambiar el price a 45000.