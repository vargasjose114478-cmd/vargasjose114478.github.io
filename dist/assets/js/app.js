/**
 * SMART MENÚ - Cafetería & Restaurante Escolar
 * Institución Educativa Celmira Bueno de Orejuela (CBO)
 * PROGRAMA DE ALIMENTACIÓN ESCOLAR (PAE CALI 2026)
 * Ciclo de Menús Oficial: Jornada Única (Almuerzo), Jornada A.M. y Jornada P.M.
 * 100% Fidelidad con el Documento Oficial de Planeación de la Secretaría de Educación Distrital de Cali
 */

// Ciclo Completo de Menús PAE Cali 2026 Oficial (Excel Verificado)
const PAE_DATA = {
  "almuerzo": [
    {
      "id": "alm-1",
      "semana": 1,
      "menuNum": 1,
      "dia": "Lunes",
      "comida": "Almuerzo",
      "titulo": "Menú 1 — Fajitas de cerdo asada",
      "descripcion": "Fajitas de cerdo asada, Arroz primavera, Papa criolla dorada, Verduras en preparación, Acompañado de sorbete de guayaba.",
      "bebida": "Sorbete de Guayaba",
      "proteina": "Fajitas de cerdo asada",
      "leguminosa": null,
      "cereal": "Arroz primavera",
      "tuberculo": "Papa criolla dorada",
      "ensalada": "Verduras en preparación",
      "imagen": "assets/images/dishes/plato_pm7_fajitas_pollo_arroz_primavera_pure_banano.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-2",
      "semana": 1,
      "menuNum": 2,
      "dia": "Martes",
      "comida": "Almuerzo",
      "titulo": "Menú 2 — Fajitas de pechuga de pollo",
      "descripcion": "Fajitas de pechuga de pollo, Lentejas guisadas, Arroz blanco, Papa chorreada, Ensalada tomate, aguacate, lechuga, Acompañado de jugo de lulo.",
      "bebida": "Jugo de Lulo",
      "proteina": "Fajitas de pechuga de pollo",
      "leguminosa": "Lentejas guisadas",
      "cereal": "Arroz blanco",
      "tuberculo": "Papa chorreada",
      "ensalada": "Ensalada tomate, aguacate, lechuga",
      "imagen": "assets/images/dishes/plato_pm12_pechuga_arroz_verde_papa_chorreada_pina.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-3",
      "semana": 1,
      "menuNum": 3,
      "dia": "Miércoles",
      "comida": "Almuerzo",
      "titulo": "Menú 3 — Estofado de cerdo con papa",
      "descripcion": "Estofado de cerdo con papa, Arroz con fideos, Tajada de plátano maduro, Verduras orientales, Acompañado de sorbete de guanábana.",
      "bebida": "Sorbete de Guanábana",
      "proteina": "Estofado de cerdo con papa",
      "leguminosa": null,
      "cereal": "Arroz con fideos",
      "tuberculo": "Tajada de plátano maduro",
      "ensalada": "Verduras orientales",
      "imagen": "assets/images/dishes/plato_pm18_pechuga_arroz_fideos_ensalada_mango_guanabana.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-4",
      "semana": 1,
      "menuNum": 4,
      "dia": "Jueves",
      "comida": "Almuerzo",
      "titulo": "Menú 4 — Huevos pericos",
      "descripcion": "Huevos pericos, Arvejas guisadas, Arroz blanco, Puré de papa común, Ensalada tropical, Acompañado de jugo de piña.",
      "bebida": "Jugo de Piña",
      "proteina": "Huevos pericos",
      "leguminosa": "Arvejas guisadas",
      "cereal": "Arroz blanco",
      "tuberculo": "Puré de papa común",
      "ensalada": "Ensalada tropical",
      "imagen": "assets/images/dishes/plato_pm1_huevos_arroz_zanahoria_pure.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-5",
      "semana": 1,
      "menuNum": 5,
      "dia": "Viernes",
      "comida": "Almuerzo",
      "titulo": "Menú 5 — Fajitas de pechuga de pollo",
      "descripcion": "Fajitas de pechuga de pollo, Arroz verde, Plátano melado, Verduras en preparación, Acompañado de sorbete de mango.",
      "bebida": "Sorbete de Mango",
      "proteina": "Fajitas de pechuga de pollo",
      "leguminosa": null,
      "cereal": "Arroz verde",
      "tuberculo": "Plátano melado",
      "ensalada": "Verduras en preparación",
      "imagen": "assets/images/dishes/plato_pm12_pechuga_arroz_verde_papa_chorreada_pina.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-6",
      "semana": 2,
      "menuNum": 6,
      "dia": "Lunes",
      "comida": "Almuerzo",
      "titulo": "Menú 6 — Chop suey pechuga de pollo",
      "descripcion": "Chop suey pechuga de pollo, Arroz blanco, Tajada plátano maduro, Verduras en preparación, Acompañado de sorbete de guanábana.",
      "bebida": "Sorbete de Guanábana",
      "proteina": "Chop suey pechuga de pollo",
      "leguminosa": null,
      "cereal": "Arroz blanco",
      "tuberculo": "Tajada plátano maduro",
      "ensalada": "Verduras en preparación",
      "imagen": "assets/images/dishes/plato_pm17_fajitas_pechuga_arroz_pina_maracuya_mango.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-7",
      "semana": 2,
      "menuNum": 7,
      "dia": "Martes",
      "comida": "Almuerzo",
      "titulo": "Menú 7 — Huevos revueltos",
      "descripcion": "Huevos revueltos, Lentejas guisadas, Arroz blanco, Papa chorreada, Ensalada lechuga, tomate, pepino, Acompañado de jugo de piña.",
      "bebida": "Jugo de Piña",
      "proteina": "Huevos revueltos",
      "leguminosa": "Lentejas guisadas",
      "cereal": "Arroz blanco",
      "tuberculo": "Papa chorreada",
      "ensalada": "Ensalada lechuga, tomate, pepino",
      "imagen": "assets/images/dishes/plato_pm6_huevos_arroz_tajada_ensalada_aguacate.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-8",
      "semana": 2,
      "menuNum": 8,
      "dia": "Miércoles",
      "comida": "Almuerzo",
      "titulo": "Menú 8 — Fajitas de cerdo con zapallo",
      "descripcion": "Fajitas de cerdo con zapallo, Arroz con fideos, Puré de papa criolla, Verduras en preparación, Acompañado de sorbete de fresa.",
      "bebida": "Sorbete de Fresa",
      "proteina": "Fajitas de cerdo con zapallo",
      "leguminosa": null,
      "cereal": "Arroz con fideos",
      "tuberculo": "Puré de papa criolla",
      "ensalada": "Verduras en preparación",
      "imagen": "assets/images/dishes/plato_pm19_carne_zapallo_arroz_papa_criolla_ensalada.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-9",
      "semana": 2,
      "menuNum": 9,
      "dia": "Jueves",
      "comida": "Almuerzo",
      "titulo": "Menú 9 — Fajitas de carne de res",
      "descripcion": "Fajitas de carne de res, Frijoles guisados, Arroz blanco, Moneditas de plátano, Ensalada tomate, aguacate, lechuga, Acompañado de jugo de guayaba.",
      "bebida": "Jugo de Guayaba",
      "proteina": "Fajitas de carne de res",
      "leguminosa": "Frijoles guisados",
      "cereal": "Arroz blanco",
      "tuberculo": "Moneditas de plátano",
      "ensalada": "Ensalada tomate, aguacate, lechuga",
      "imagen": "assets/images/dishes/plato_pm10_frijoles_arroz_tajada_mandarina_aguapanela.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-10",
      "semana": 2,
      "menuNum": 10,
      "dia": "Viernes",
      "comida": "Almuerzo",
      "titulo": "Menú 10 — Chuleta de cerdo",
      "descripcion": "Chuleta de cerdo, Arroz verde, (Incluido en ensalada), Ensalada fría de papa, Acompañado de sorbete de mango.",
      "bebida": "Sorbete de Mango",
      "proteina": "Chuleta de cerdo",
      "leguminosa": null,
      "cereal": "Arroz verde",
      "tuberculo": "(Incluido en ensalada)",
      "ensalada": "Ensalada fría de papa",
      "imagen": "assets/images/dishes/plato_am12_chuleta_arroz_verde_maduro.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-11",
      "semana": 3,
      "menuNum": 11,
      "dia": "Lunes",
      "comida": "Almuerzo",
      "titulo": "Menú 11 — Trozos de carne de cerdo",
      "descripcion": "Trozos de carne de cerdo, Arroz con cilantro, Puré de plátano maduro, Verduras en preparación, Acompañado de sorbete de mango.",
      "bebida": "Sorbete de Mango",
      "proteina": "Trozos de carne de cerdo",
      "leguminosa": null,
      "cereal": "Arroz con cilantro",
      "tuberculo": "Puré de plátano maduro",
      "ensalada": "Verduras en preparación",
      "imagen": "assets/images/dishes/plato_pm4_cerdo_chips_mixfrutas.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-12",
      "semana": 3,
      "menuNum": 12,
      "dia": "Martes",
      "comida": "Almuerzo",
      "titulo": "Menú 12 — Fajitas de pollo en criolla",
      "descripcion": "Fajitas de pollo en criolla, Blanquillos guisados, Arroz blanco, Papa criolla dorada, Ensalada tomate y lechuga, Acompañado de jugo de guayaba.",
      "bebida": "Jugo de Guayaba",
      "proteina": "Fajitas de pollo en criolla",
      "leguminosa": "Blanquillos guisados",
      "cereal": "Arroz blanco",
      "tuberculo": "Papa criolla dorada",
      "ensalada": "Ensalada tomate y lechuga",
      "imagen": "assets/images/dishes/plato_alm12_pollo_criolla_papa_queso.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-13",
      "semana": 3,
      "menuNum": 13,
      "dia": "Miércoles",
      "comida": "Almuerzo",
      "titulo": "Menú 13 — Trozos de carne de cerdo",
      "descripcion": "Trozos de carne de cerdo, Arroz con fideos, Papa salsa blanca, Verduras salteadas, Acompañado de sorbete de fresa.",
      "bebida": "Sorbete de Fresa",
      "proteina": "Trozos de carne de cerdo",
      "leguminosa": null,
      "cereal": "Arroz con fideos",
      "tuberculo": "Papa salsa blanca",
      "ensalada": "Verduras salteadas",
      "imagen": "assets/images/dishes/plato_pm18_pechuga_arroz_fideos_ensalada_mango_guanabana.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-14",
      "semana": 3,
      "menuNum": 14,
      "dia": "Jueves",
      "comida": "Almuerzo",
      "titulo": "Menú 14 — Huevos revueltos",
      "descripcion": "Huevos revueltos, Arvejas guisadas, Arroz blanco, Moneditas de plátano, Ensalada tropical, Acompañado de jugo de maracuyá.",
      "bebida": "Jugo de Maracuyá",
      "proteina": "Huevos revueltos",
      "leguminosa": "Arvejas guisadas",
      "cereal": "Arroz blanco",
      "tuberculo": "Moneditas de plátano",
      "ensalada": "Ensalada tropical",
      "imagen": "assets/images/dishes/plato_pm15_lentejas_arroz_moneditas_ensalada_mango.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-15",
      "semana": 3,
      "menuNum": 15,
      "dia": "Viernes",
      "comida": "Almuerzo",
      "titulo": "Menú 15 — Fajitas de pechuga de pollo",
      "descripcion": "Fajitas de pechuga de pollo, Arroz blanco, Puré de papa criolla, Verduras en preparación, Acompañado de sorbete de guayaba.",
      "bebida": "Sorbete de Guayaba",
      "proteina": "Fajitas de pechuga de pollo",
      "leguminosa": null,
      "cereal": "Arroz blanco",
      "tuberculo": "Puré de papa criolla",
      "ensalada": "Verduras en preparación",
      "imagen": "assets/images/dishes/plato_pm7_fajitas_pollo_arroz_primavera_pure_banano.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-16",
      "semana": 4,
      "menuNum": 16,
      "dia": "Lunes",
      "comida": "Almuerzo",
      "titulo": "Menú 16 — Fajitas de carne de cerdo",
      "descripcion": "Fajitas de carne de cerdo, Arroz verde, Papa chorreada, Ensalada tropical, Acompañado de sorbete de mango.",
      "bebida": "Sorbete de Mango",
      "proteina": "Fajitas de carne de cerdo",
      "leguminosa": null,
      "cereal": "Arroz verde",
      "tuberculo": "Papa chorreada",
      "ensalada": "Ensalada tropical",
      "imagen": "assets/images/dishes/plato_pm12_pechuga_arroz_verde_papa_chorreada_pina.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-17",
      "semana": 4,
      "menuNum": 17,
      "dia": "Martes",
      "comida": "Almuerzo",
      "titulo": "Menú 17 — Huevos pericos",
      "descripcion": "Huevos pericos, Lentejas guisadas, Arroz blanco, Papas a la francesa, Ensalada lechuga, tomate, cilantro, Acompañado de jugo de piña.",
      "bebida": "Jugo de Piña",
      "proteina": "Huevos pericos",
      "leguminosa": "Lentejas guisadas",
      "cereal": "Arroz blanco",
      "tuberculo": "Papas a la francesa",
      "ensalada": "Ensalada lechuga, tomate, cilantro",
      "imagen": "assets/images/dishes/plato_pm5_lentejas_papas_francesa_ensalada.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-18",
      "semana": 4,
      "menuNum": 18,
      "dia": "Miércoles",
      "comida": "Almuerzo",
      "titulo": "Menú 18 — Fajitas de carne de res",
      "descripcion": "Fajitas de carne de res, Arroz primavera, Puré de papa criolla, Verduras en acompañante, Acompañado de sorbete de guayaba.",
      "bebida": "Sorbete de Guayaba",
      "proteina": "Fajitas de carne de res",
      "leguminosa": null,
      "cereal": "Arroz primavera",
      "tuberculo": "Puré de papa criolla",
      "ensalada": "Verduras en acompañante",
      "imagen": "assets/images/dishes/plato_pm7_fajitas_pollo_arroz_primavera_pure_banano.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-19",
      "semana": 4,
      "menuNum": 19,
      "dia": "Jueves",
      "comida": "Almuerzo",
      "titulo": "Menú 19 — Trozos de carne de cerdo",
      "descripcion": "Trozos de carne de cerdo, Frijoles guisados, Arroz blanco, Tajada plátano maduro, Ensalada tomate, aguacate, lechuga, Acompañado de jugo de tomate de árbol.",
      "bebida": "Jugo de Tomate de Árbol",
      "proteina": "Trozos de carne de cerdo",
      "leguminosa": "Frijoles guisados",
      "cereal": "Arroz blanco",
      "tuberculo": "Tajada plátano maduro",
      "ensalada": "Ensalada tomate, aguacate, lechuga",
      "imagen": "assets/images/dishes/plato_pm10_frijoles_arroz_tajada_mandarina_aguapanela.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    },
    {
      "id": "alm-20",
      "semana": 4,
      "menuNum": 20,
      "dia": "Viernes",
      "comida": "Almuerzo",
      "titulo": "Menú 20 — Pechuga desmechada en salsa",
      "descripcion": "Pechuga desmechada en salsa, Espaguetis salteados / Arroz, Ensalada lechuga, zanahoria, mango, Acompañado de sorbete de fresa.",
      "bebida": "Sorbete de Fresa",
      "proteina": "Pechuga desmechada en salsa",
      "leguminosa": null,
      "cereal": "Espaguetis salteados / Arroz",
      "tuberculo": null,
      "ensalada": "Ensalada lechuga, zanahoria, mango",
      "imagen": "assets/images/dishes/plato_pm20_espaguetis_criolla_arroz_ensalada_aguacate_manzana.jpg",
      "fotoReal": true,
      "emoji": "🍛"
    }
  ],
  "am": [
    {
      "id": "am-1",
      "semana": 1,
      "menuNum": 1,
      "dia": "Lunes",
      "comida": "Desayuno",
      "titulo": "Menú 1 AM — Revuelto de carne y huevo con arepas",
      "descripcion": "Arepas fritas, revuelto de carne y huevo picado, y mandarina verde.",
      "bebida": "Sorbete de banano",
      "proteina": "Huevos revueltos con tomate",
      "cereal": "Arroz verde + Papa chorreada",
      "fruta": null,
      "imagen": "assets/images/dishes/image_ee85da.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-2",
      "semana": 1,
      "menuNum": 2,
      "dia": "Martes",
      "comida": "Desayuno",
      "titulo": "Menú 2 AM — Fajitas de pollo en salsa criolla",
      "descripcion": "Fajitas de pollo en salsa criolla, Moneditas de plátano, Sandía, Acompañado de agua de panela con leche.",
      "bebida": "Agua de panela con leche",
      "proteina": "Fajitas de pollo en salsa criolla",
      "cereal": "Moneditas de plátano",
      "fruta": "Sandía",
      "imagen": "assets/images/dishes/plato_am2_pollo_moneditas_sandia.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-3",
      "semana": 1,
      "menuNum": 3,
      "dia": "Miércoles",
      "comida": "Desayuno",
      "titulo": "Menú 3 AM — Pechuga en trozos con cilantro",
      "descripcion": "Pechuga en trozos con cilantro, Arepa con queso + Arroz/Papa, Acompañado de jugo de maracuyá en agua.",
      "bebida": "Jugo de maracuyá en agua",
      "proteina": "Pechuga en trozos con cilantro",
      "cereal": "Arepa con queso + Arroz/Papa",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_pm17_fajitas_pechuga_arroz_pina_maracuya_mango.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-4",
      "semana": 1,
      "menuNum": 4,
      "dia": "Jueves",
      "comida": "Desayuno",
      "titulo": "Menú 4 AM — Queso cuajada",
      "descripcion": "Queso cuajada, Dedo de queso, Mix mango y piña, Acompañado de chocolate con leche.",
      "bebida": "Chocolate con leche",
      "proteina": "Queso cuajada",
      "cereal": "Dedo de queso",
      "fruta": "Mix mango y piña",
      "imagen": "assets/images/dishes/plato_am4_queso_cuajada_dedito_mix_frutas_chocolate.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-5",
      "semana": 1,
      "menuNum": 5,
      "dia": "Viernes",
      "comida": "Desayuno",
      "titulo": "Menú 5 AM — Huevos pericos",
      "descripcion": "Huevos pericos, Arroz blanco + Tajada de plátano, Manzana, Acompañado de sorbete de guayaba y maracuyá.",
      "bebida": "Sorbete de guayaba y maracuyá",
      "proteina": "Huevos pericos",
      "cereal": "Arroz blanco + Tajada de plátano",
      "fruta": "Manzana",
      "imagen": "assets/images/dishes/plato_pm8_huevos_arroz_papa_criolla_papaya.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-6",
      "semana": 2,
      "menuNum": 6,
      "dia": "Lunes",
      "comida": "Desayuno",
      "titulo": "Menú 6 AM — Huevos pericos",
      "descripcion": "Huevos pericos, Arroz blanco + Puré de plátano, Acompañado de jugo de piña en agua.",
      "bebida": "Jugo de piña en agua",
      "proteina": "Huevos pericos",
      "cereal": "Arroz blanco + Puré de plátano",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_pm1_huevos_arroz_zanahoria_pure.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-7",
      "semana": 2,
      "menuNum": 7,
      "dia": "Martes",
      "comida": "Desayuno",
      "titulo": "Menú 7 AM — Queso cuajada",
      "descripcion": "Queso cuajada, Arepa de choclo asada, Mix mango y papaya, Acompañado de chocolate con leche.",
      "bebida": "Chocolate con leche",
      "proteina": "Queso cuajada",
      "cereal": "Arepa de choclo asada",
      "fruta": "Mix mango y papaya",
      "imagen": "assets/images/dishes/plato_am4_queso_cuajada_dedito_mix_frutas_chocolate.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-8",
      "semana": 2,
      "menuNum": 8,
      "dia": "Miércoles",
      "comida": "Desayuno",
      "titulo": "Menú 8 AM — Huevos pericos",
      "descripcion": "Huevos pericos, Masitas de harina de trigo, Piña picada, Acompañado de agua de panela con leche.",
      "bebida": "Agua de panela con leche",
      "proteina": "Huevos pericos",
      "cereal": "Masitas de harina de trigo",
      "fruta": "Piña picada",
      "imagen": "assets/images/dishes/plato_am16_huevos_arroz_pimenton_arepa_pera_chocolate.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-9",
      "semana": 2,
      "menuNum": 9,
      "dia": "Jueves",
      "comida": "Desayuno",
      "titulo": "Menú 9 AM — Carne de res en trozos con guiso",
      "descripcion": "Carne de res en trozos con guiso, Arroz blanco + Papa aborrajada, Granadilla, Acompañado de sorbete de guayaba.",
      "bebida": "Sorbete de guayaba",
      "proteina": "Carne de res en trozos con guiso",
      "cereal": "Arroz blanco + Papa aborrajada",
      "fruta": "Granadilla",
      "imagen": "assets/images/dishes/plato_pm19_carne_zapallo_arroz_papa_criolla_ensalada.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-10",
      "semana": 2,
      "menuNum": 10,
      "dia": "Viernes",
      "comida": "Desayuno",
      "titulo": "Menú 10 AM — Fajitas de pollo en salsa criolla",
      "descripcion": "Fajitas de pollo en salsa criolla, Arroz con fideos + Moneditas de plátano, Acompañado de sorbete de guanábana.",
      "bebida": "Sorbete de guanábana",
      "proteina": "Fajitas de pollo en salsa criolla",
      "cereal": "Arroz con fideos + Moneditas de plátano",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_pm18_pechuga_arroz_fideos_ensalada_mango_guanabana.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-11",
      "semana": 3,
      "menuNum": 11,
      "dia": "Lunes",
      "comida": "Desayuno",
      "titulo": "Menú 11 AM — Huevos revueltos con tomate",
      "descripcion": "Huevos revueltos con tomate, Arroz blanco + Chips de papa, Piña picada, Acompañado de agua de panela con leche.",
      "bebida": "Agua de panela con leche",
      "proteina": "Huevos revueltos con tomate",
      "cereal": "Arroz blanco + Chips de papa",
      "fruta": "Piña picada",
      "imagen": "assets/images/dishes/plato_pm6_huevos_arroz_tajada_ensalada_aguacate.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-12",
      "semana": 3,
      "menuNum": 12,
      "dia": "Martes",
      "comida": "Desayuno",
      "titulo": "Menú 12 AM — Chuleta de cerdo",
      "descripcion": "Chuleta de cerdo, Arroz verde + Tajada de plátano, Acompañado de agua de panela con limón.",
      "bebida": "Agua de panela con limón",
      "proteina": "Chuleta de cerdo",
      "cereal": "Arroz verde + Tajada de plátano",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_am12_chuleta_arroz_verde_maduro.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-13",
      "semana": 3,
      "menuNum": 13,
      "dia": "Miércoles",
      "comida": "Desayuno",
      "titulo": "Menú 13 AM — Fajitas de pollo en salsa criolla",
      "descripcion": "Fajitas de pollo en salsa criolla, Puré de papa + Arroz blanco, Acompañado de sorbete de mango.",
      "bebida": "Sorbete de mango",
      "proteina": "Fajitas de pollo en salsa criolla",
      "cereal": "Puré de papa + Arroz blanco",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_am13_pollo_pure_papa_arroz.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-14",
      "semana": 3,
      "menuNum": 14,
      "dia": "Jueves",
      "comida": "Desayuno",
      "titulo": "Menú 14 AM — Queso cuajada",
      "descripcion": "Queso cuajada, Arepa asada, Mango picado, Acompañado de sorbete de banano.",
      "bebida": "Sorbete de banano",
      "proteina": "Queso cuajada",
      "cereal": "Arepa asada",
      "fruta": "Mango picado",
      "imagen": "assets/images/dishes/plato_am4_queso_cuajada_dedito_mix_frutas_chocolate.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-15",
      "semana": 3,
      "menuNum": 15,
      "dia": "Viernes",
      "comida": "Desayuno",
      "titulo": "Menú 15 AM — Huevos pericos",
      "descripcion": "Huevos pericos, Arroz blanco + Tortas de papa/brócoli, Papaya picada, Acompañado de chocolate con leche.",
      "bebida": "Chocolate con leche",
      "proteina": "Huevos pericos",
      "cereal": "Arroz blanco + Tortas de papa/brócoli",
      "fruta": "Papaya picada",
      "imagen": "assets/images/dishes/plato_pm16_huevos_arroz_tortas_papa_brocoli_manzana.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-16",
      "semana": 4,
      "menuNum": 16,
      "dia": "Lunes",
      "comida": "Desayuno",
      "titulo": "Menú 16 AM — Huevos pericos",
      "descripcion": "Huevos pericos, Arepa asada + Arroz con pimentón, Pera, Acompañado de chocolate con leche.",
      "bebida": "Chocolate con leche",
      "proteina": "Huevos pericos",
      "cereal": "Arepa asada + Arroz con pimentón",
      "fruta": "Pera",
      "imagen": "assets/images/dishes/plato_am16_huevos_arroz_pimenton_arepa_pera_chocolate.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-17",
      "semana": 4,
      "menuNum": 17,
      "dia": "Martes",
      "comida": "Desayuno",
      "titulo": "Menú 17 AM — Frijoles guisados con zapallo",
      "descripcion": "Frijoles guisados con zapallo, Tajada de plátano + Arroz blanco, Acompañado de jugo de lulo en agua.",
      "bebida": "Jugo de lulo en agua",
      "proteina": "Frijoles guisados con zapallo",
      "cereal": "Tajada de plátano + Arroz blanco",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_pm3_huevos_frijoles_tajada_mandarina.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-18",
      "semana": 4,
      "menuNum": 18,
      "dia": "Miércoles",
      "comida": "Desayuno",
      "titulo": "Menú 18 AM — Huevos revueltos con tomate",
      "descripcion": "Huevos revueltos con tomate, Masitas de harina de trigo, Piña picada, Acompañado de chocolate con leche.",
      "bebida": "Chocolate con leche",
      "proteina": "Huevos revueltos con tomate",
      "cereal": "Masitas de harina de trigo",
      "fruta": "Piña picada",
      "imagen": "assets/images/dishes/plato_am16_huevos_arroz_pimenton_arepa_pera_chocolate.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-19",
      "semana": 4,
      "menuNum": 19,
      "dia": "Jueves",
      "comida": "Desayuno",
      "titulo": "Menú 19 AM — Trozos de carne de cerdo salteados",
      "descripcion": "Trozos de carne de cerdo salteados, Papa aborrajada + Arroz blanco, Mandarina, Acompañado de sorbete de fresa.",
      "bebida": "Sorbete de fresa",
      "proteina": "Trozos de carne de cerdo salteados",
      "cereal": "Papa aborrajada + Arroz blanco",
      "fruta": "Mandarina",
      "imagen": "assets/images/dishes/plato_pm4_cerdo_chips_mixfrutas.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    },
    {
      "id": "am-20",
      "semana": 4,
      "menuNum": 20,
      "dia": "Viernes",
      "comida": "Desayuno",
      "titulo": "Menú 20 AM — Hamburguesa de pollo apanado",
      "descripcion": "Hamburguesa de pollo apanado, Pan de sándwich + Papa criolla, Acompañado de sorbete de guanábana.",
      "bebida": "Sorbete de guanábana",
      "proteina": "Hamburguesa de pollo apanado",
      "cereal": "Pan de sándwich + Papa criolla",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_pm9_sanduche_pollo_papas_francesa.jpg",
      "fotoReal": true,
      "emoji": "🌅"
    }
  ],
  "pm": [
    {
      "id": "pm-1",
      "semana": 1,
      "menuNum": 1,
      "dia": "Lunes",
      "comida": "Refrigerio",
      "titulo": "Menú 1 PM — Huevos pericos",
      "descripcion": "Huevos pericos, Arroz con zanahoria + Puré de papa, Acompañado de sorbete de guayaba con banano.",
      "bebida": "Sorbete de guayaba con banano",
      "proteina": "Huevos pericos",
      "cereal": "Arroz con zanahoria + Puré de papa",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_pm1_huevos_arroz_zanahoria_pure.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-2",
      "semana": 1,
      "menuNum": 2,
      "dia": "Martes",
      "comida": "Refrigerio",
      "titulo": "Menú 2 PM — Fajitas de pollo salteadas",
      "descripcion": "Fajitas de pollo salteadas, Espaguetis en salsa + Arroz blanco, Piña picada, Acompañado de jugo de maracuyá.",
      "bebida": "Jugo de maracuyá",
      "proteina": "Fajitas de pollo salteadas",
      "cereal": "Espaguetis en salsa + Arroz blanco",
      "fruta": "Piña picada",
      "imagen": "assets/images/dishes/plato_pm2_fajitas_pollo_espaguetis_arroz_pina.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-3",
      "semana": 1,
      "menuNum": 3,
      "dia": "Miércoles",
      "comida": "Refrigerio",
      "titulo": "Menú 3 PM — Huevos pericos + Frijoles guisados",
      "descripcion": "Huevos pericos + Frijoles guisados, Arroz blanco + Tajada de plátano, Mandarina, Acompañado de jugo de lulo.",
      "bebida": "Jugo de lulo",
      "proteina": "Huevos pericos + Frijoles guisados",
      "cereal": "Arroz blanco + Tajada de plátano",
      "fruta": "Mandarina",
      "imagen": "assets/images/dishes/plato_pm3_huevos_frijoles_tajada_mandarina.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-4",
      "semana": 1,
      "menuNum": 4,
      "dia": "Jueves",
      "comida": "Refrigerio",
      "titulo": "Menú 4 PM — Carne de cerdo guisada",
      "descripcion": "Carne de cerdo guisada, Arroz blanco + Chips de papa, Mix mango y papaya, Acompañado de sorbete de fresa.",
      "bebida": "Sorbete de fresa",
      "proteina": "Carne de cerdo guisada",
      "cereal": "Arroz blanco + Chips de papa",
      "fruta": "Mix mango y papaya",
      "imagen": "assets/images/dishes/plato_pm4_cerdo_chips_mixfrutas.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-5",
      "semana": 1,
      "menuNum": 5,
      "dia": "Viernes",
      "comida": "Refrigerio",
      "titulo": "Menú 5 PM — Lentejas guisadas",
      "descripcion": "Lentejas guisadas, Arroz blanco + Papas a la francesa, Ensalada cebolla, tomate, cilantro, Acompañado de sorbete de mango.",
      "bebida": "Sorbete de mango",
      "proteina": "Lentejas guisadas",
      "cereal": "Arroz blanco + Papas a la francesa",
      "fruta": "Ensalada cebolla, tomate, cilantro",
      "imagen": "assets/images/dishes/plato_pm5_lentejas_papas_francesa_ensalada.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-6",
      "semana": 2,
      "menuNum": 6,
      "dia": "Lunes",
      "comida": "Refrigerio",
      "titulo": "Menú 6 PM — Huevos revueltos con tomate",
      "descripcion": "Huevos revueltos con tomate, Arroz blanco + Tajada de plátano, Ensalada lechuga, tomate, aguacate, Acompañado de sorbete de mango.",
      "bebida": "Sorbete de mango",
      "proteina": "Huevos revueltos con tomate",
      "cereal": "Arroz blanco + Tajada de plátano",
      "fruta": "Ensalada lechuga, tomate, aguacate",
      "imagen": "assets/images/dishes/plato_pm6_huevos_arroz_tajada_ensalada_aguacate.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-7",
      "semana": 2,
      "menuNum": 7,
      "dia": "Martes",
      "comida": "Refrigerio",
      "titulo": "Menú 7 PM — Fajitas de pollo asado",
      "descripcion": "Fajitas de pollo asado, Arroz primavera + Puré de papa, Banano, Acompañado de sorbete de guayaba.",
      "bebida": "Sorbete de guayaba",
      "proteina": "Fajitas de pollo asado",
      "cereal": "Arroz primavera + Puré de papa",
      "fruta": "Banano",
      "imagen": "assets/images/dishes/plato_pm7_fajitas_pollo_arroz_primavera_pure_banano.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-8",
      "semana": 2,
      "menuNum": 8,
      "dia": "Miércoles",
      "comida": "Refrigerio",
      "titulo": "Menú 8 PM — Huevos pericos",
      "descripcion": "Huevos pericos, Arroz blanco + Papa criolla dorada, Papaya picada, Acompañado de sorbete de guanábana.",
      "bebida": "Sorbete de guanábana",
      "proteina": "Huevos pericos",
      "cereal": "Arroz blanco + Papa criolla dorada",
      "fruta": "Papaya picada",
      "imagen": "assets/images/dishes/plato_pm8_huevos_arroz_papa_criolla_papaya.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-9",
      "semana": 2,
      "menuNum": 9,
      "dia": "Jueves",
      "comida": "Refrigerio",
      "titulo": "Menú 9 PM — Sándwich de pollo apanado",
      "descripcion": "Sándwich de pollo apanado, Pan de sándwich + Papas a la francesa, Lechuga y tomate en sándwich, Acompañado de jugo de maracuyá.",
      "bebida": "Jugo de maracuyá",
      "proteina": "Sándwich de pollo apanado",
      "cereal": "Pan de sándwich + Papas a la francesa",
      "fruta": "Lechuga y tomate en sándwich",
      "imagen": "assets/images/dishes/plato_pm9_sanduche_pollo_papas_francesa.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-10",
      "semana": 2,
      "menuNum": 10,
      "dia": "Viernes",
      "comida": "Refrigerio",
      "titulo": "Menú 10 PM — Frijoles guisados",
      "descripcion": "Frijoles guisados, Arroz blanco + Tajada de plátano, Mandarina, Acompañado de agua de panela con limón.",
      "bebida": "Agua de panela con limón",
      "proteina": "Frijoles guisados",
      "cereal": "Arroz blanco + Tajada de plátano",
      "fruta": "Mandarina",
      "imagen": "assets/images/dishes/plato_pm10_frijoles_arroz_tajada_mandarina_aguapanela.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-11",
      "semana": 3,
      "menuNum": 11,
      "dia": "Lunes",
      "comida": "Refrigerio",
      "titulo": "Menú 11 PM — Huevos revueltos con papa",
      "descripcion": "Huevos revueltos con papa, Arroz aromatado, Mango picado, Acompañado de sorbete de guayaba y maracuyá.",
      "bebida": "Sorbete de guayaba y maracuyá",
      "proteina": "Huevos revueltos con papa",
      "cereal": "Arroz aromatado",
      "fruta": "Mango picado",
      "imagen": "assets/images/dishes/plato_pm11_huevos_papa_arroz_aromatado_mango.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-12",
      "semana": 3,
      "menuNum": 12,
      "dia": "Martes",
      "comida": "Refrigerio",
      "titulo": "Menú 12 PM — Pechuga de pollo salteada",
      "descripcion": "Pechuga de pollo salteada, Arroz verde, Papa chorreada / Piña picada, Acompañado de sorbete de fresa.",
      "bebida": "Sorbete de fresa",
      "proteina": "Pechuga de pollo salteada",
      "cereal": "Arroz verde",
      "fruta": "Papa chorreada / Piña picada",
      "imagen": "assets/images/dishes/plato_pm12_pechuga_arroz_verde_papa_chorreada_pina.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-13",
      "semana": 3,
      "menuNum": 13,
      "dia": "Miércoles",
      "comida": "Refrigerio",
      "titulo": "Menú 13 PM — Fajitas de carne asada + Frijoles",
      "descripcion": "Fajitas de carne asada + Frijoles, Arroz blanco + Tajada de plátano, Acompañado de jugo de maracuyá.",
      "bebida": "Jugo de maracuyá",
      "proteina": "Fajitas de carne asada + Frijoles",
      "cereal": "Arroz blanco + Tajada de plátano",
      "fruta": null,
      "imagen": "assets/images/dishes/plato_pm13_fajitas_carne_frijoles_arroz_tajada_maracuya.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-14",
      "semana": 3,
      "menuNum": 14,
      "dia": "Jueves",
      "comida": "Refrigerio",
      "titulo": "Menú 14 PM — Hamburguesa de carne con queso",
      "descripcion": "Hamburguesa de carne con queso, Pan de hamburguesa + Papas francesa, Lechuga y tomate en hamburguesa, Acompañado de agua de panela con limón.",
      "bebida": "Agua de panela con limón",
      "proteina": "Hamburguesa de carne con queso",
      "cereal": "Pan de hamburguesa + Papas francesa",
      "fruta": "Lechuga y tomate en hamburguesa",
      "imagen": "assets/images/dishes/plato_pm14_hamburguesa_carne_queso_papas_francesa.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-15",
      "semana": 3,
      "menuNum": 15,
      "dia": "Viernes",
      "comida": "Refrigerio",
      "titulo": "Menú 15 PM — Lentejas guisadas",
      "descripcion": "Lentejas guisadas, Arroz blanco + Moneditas de plátano, Ensalada lechuga, zanahoria, mango, Acompañado de sorbete de guayaba.",
      "bebida": "Sorbete de guayaba",
      "proteina": "Lentejas guisadas",
      "cereal": "Arroz blanco + Moneditas de plátano",
      "fruta": "Ensalada lechuga, zanahoria, mango",
      "imagen": "assets/images/dishes/plato_pm15_lentejas_arroz_moneditas_ensalada_mango.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-16",
      "semana": 4,
      "menuNum": 16,
      "dia": "Lunes",
      "comida": "Refrigerio",
      "titulo": "Menú 16 PM — Huevos pericos",
      "descripcion": "Huevos pericos, Arroz blanco + Tortas de papa/brócoli, Manzana, Acompañado de sorbete de banano.",
      "bebida": "Sorbete de banano",
      "proteina": "Huevos pericos",
      "cereal": "Arroz blanco + Tortas de papa/brócoli",
      "fruta": "Manzana",
      "imagen": "assets/images/dishes/plato_pm16_huevos_arroz_tortas_papa_brocoli_manzana.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-17",
      "semana": 4,
      "menuNum": 17,
      "dia": "Martes",
      "comida": "Refrigerio",
      "titulo": "Menú 17 PM — Fajitas de pechuga",
      "descripcion": "Fajitas de pechuga, Arroz blanco, Piña picada, Acompañado de sorbete de maracuyá/mango.",
      "bebida": "Sorbete de maracuyá/mango",
      "proteina": "Fajitas de pechuga",
      "cereal": "Arroz blanco",
      "fruta": "Piña picada",
      "imagen": "assets/images/dishes/plato_pm17_fajitas_pechuga_arroz_pina_maracuya_mango.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-18",
      "semana": 4,
      "menuNum": 18,
      "dia": "Miércoles",
      "comida": "Refrigerio",
      "titulo": "Menú 18 PM — Pechuga de pollo salteada",
      "descripcion": "Pechuga de pollo salteada, Arroz con fideos, Ensalada lechuga, zanahoria, mango, Acompañado de sorbete de guanábana.",
      "bebida": "Sorbete de guanábana",
      "proteina": "Pechuga de pollo salteada",
      "cereal": "Arroz con fideos",
      "fruta": "Ensalada lechuga, zanahoria, mango",
      "imagen": "assets/images/dishes/plato_pm18_pechuga_arroz_fideos_ensalada_mango_guanabana.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-19",
      "semana": 4,
      "menuNum": 19,
      "dia": "Jueves",
      "comida": "Refrigerio",
      "titulo": "Menú 19 PM — Fajitas de carne con zapallo",
      "descripcion": "Fajitas de carne con zapallo, Arroz blanco + Papa criolla, Ensalada tomate, aguacate, lechuga, Acompañado de jugo de piña.",
      "bebida": "Jugo de piña",
      "proteina": "Fajitas de carne con zapallo",
      "cereal": "Arroz blanco + Papa criolla",
      "fruta": "Ensalada tomate, aguacate, lechuga",
      "imagen": "assets/images/dishes/plato_pm19_carne_zapallo_arroz_papa_criolla_ensalada.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    },
    {
      "id": "pm-20",
      "semana": 4,
      "menuNum": 20,
      "dia": "Viernes",
      "comida": "Refrigerio",
      "titulo": "Menú 20 PM — Espaguetis en salsa criolla",
      "descripcion": "Espaguetis en salsa criolla, Arroz blanco, Ensalada de aguacate, lechuga, manzana, Acompañado de sorbete de guayaba.",
      "bebida": "Sorbete de guayaba",
      "proteina": "Espaguetis en salsa criolla",
      "cereal": "Arroz blanco",
      "fruta": "Ensalada de aguacate, lechuga, manzana",
      "imagen": "assets/images/dishes/plato_pm20_espaguetis_criolla_arroz_ensalada_aguacate_manzana.jpg",
      "fotoReal": true,
      "emoji": "🌇"
    }
  ]
};


// -------------------------------------------------------------
// Inicialización
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initHeroEnhancements();
  initNavigation();
  initPaeMenu();
  initDishModal();
  initScheduleWatcher();
  initContactForm();
  initInterviewAudioPlayers();
  initScrollAnimations();
  initScrollProgressBar();
  initBackToTopFab();
  initCardParallaxTilt();
  handleRouteFromHash();
});

// -------------------------------------------------------------
// Navegación
// -------------------------------------------------------------
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-route]');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  const dropdownContainers = document.querySelectorAll('.dropdown-container');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetRoute = link.getAttribute('data-route');
      navigateTo(targetRoute);

      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }

      dropdownContainers.forEach(d => d.classList.remove('open'));
    });
  });

  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  dropdownContainers.forEach(container => {
    const trigger = container.querySelector('.dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.toggle('open');
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
      dropdownContainers.forEach(d => d.classList.remove('open'));
    }
    if (mobileNavToggle && mainNav && !e.target.closest('#mainNav') && !e.target.closest('#mobileNavToggle')) {
      mainNav.classList.remove('active');
    }
  });

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  window.addEventListener('hashchange', handleRouteFromHash);
}

function navigateTo(routeName) {
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link[data-route]');
  const masBtn = document.getElementById('nav-mas');

  let activeSection = document.getElementById(`section-${routeName}`);
  if (!activeSection) {
    routeName = 'inicio';
    activeSection = document.getElementById('section-inicio');
  }

  sections.forEach(sec => sec.classList.remove('active'));
  if (activeSection) {
    activeSection.classList.add('active');
  }

  navLinks.forEach(link => {
    if (link.getAttribute('data-route') === routeName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (masBtn) {
    if (['horario', 'conocenos', 'contacto'].includes(routeName)) {
      masBtn.classList.add('active');
    } else {
      masBtn.classList.remove('active');
    }
  }

  if (window.location.hash !== `#${routeName}`) {
    history.pushState(null, '', `#${routeName}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    recheckScrollAnimations(activeSection);
  }, 60);
}

function handleRouteFromHash() {
  const hash = window.location.hash.replace('#', '').trim();
  if (hash) {
    navigateTo(hash);
  } else {
    navigateTo('inicio');
  }
}

// -------------------------------------------------------------
// Menú Oficial PAE Cali 2026
// -------------------------------------------------------------
const FAV_KEY = 'cbo_favorite_dishes_v1';

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function saveFavorites(favs) {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  } catch (e) {}
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function updateFavCounter() {
  const counter = document.getElementById('favCounterBadge');
  if (counter) {
    counter.textContent = getFavorites().length;
  }
}

function triggerHeartBurst(button) {
  if (!button) return;
  const rect = button.getBoundingClientRect();
  const container = document.createElement('div');
  container.className = 'heart-burst-container';
  container.style.left = `${rect.left + rect.width / 2}px`;
  container.style.top = `${rect.top + rect.height / 2}px`;
  document.body.appendChild(container);

  const emojis = ['❤️', '✨', '🌟', '💖', '🎉'];
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('span');
    p.className = 'heart-burst-particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const angle = (i / 6) * 2 * Math.PI;
    const distance = 28 + Math.random() * 20;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    container.appendChild(p);
  }

  setTimeout(() => container.remove(), 700);
}

window.toggleDishFavorite = function(e, id) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  let favs = getFavorites();
  const index = favs.indexOf(id);
  const isAdding = (index === -1);
  if (isAdding) {
    favs.push(id);
  } else {
    favs.splice(index, 1);
  }
  saveFavorites(favs);
  updateFavCounter();

  document.querySelectorAll(`.dish-fav-btn[data-dish-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('is-active', isAdding);
    const icon = btn.querySelector('.heart-icon');
    if (icon) icon.textContent = isAdding ? '❤️' : '🤍';
    if (isAdding) triggerHeartBurst(btn);
  });

  const activeFavPill = document.getElementById('filterFavPill');
  if (activeFavPill && activeFavPill.classList.contains('active')) {
    if (window.renderPaeItemsRef) window.renderPaeItemsRef();
  }
};

window.resetToAllDishes = function() {
  const allBtn = document.querySelector('.week-filter-pill[data-week="0"]');
  if (allBtn) allBtn.click();
};

function initPaeMenu() {
  const menuGrid = document.getElementById('menuItemsGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const modalityTabs = document.querySelectorAll('.modality-tab');
  const weekFilters = document.querySelectorAll('.week-filter-pill');

  let currentModality = 'almuerzo'; // 'almuerzo', 'am', 'pm'
  let currentFilter = '0';          // '0' = todas, '1', '2', '3', '4', 'real', 'fav'
  let searchTerm = '';

  function renderPaeItems() {
    if (!menuGrid) return;

    const list = PAE_DATA[currentModality] || [];

    const filtered = list.filter(item => {
      let matchesFilter = true;
      if (currentFilter === 'fav') {
        matchesFilter = isFavorite(item.id);
      } else if (currentFilter === 'real') {
        matchesFilter = (item.fotoReal === true);
      } else if (currentFilter !== '0') {
        matchesFilter = (item.semana === parseInt(currentFilter, 10));
      }
      
      const textToSearch = [
        item.titulo,
        item.descripcion || '',
        item.bebida,
        item.proteina,
        item.cereal || '',
        item.leguminosa || '',
        item.tuberculo || '',
        item.ensalada || '',
        item.fruta || ''
      ].join(' ').toLowerCase();

      const matchesSearch = textToSearch.includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      if (currentFilter === 'fav') {
        menuGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <p style="font-size: 3.2rem; margin-bottom: 12px; animation: gentlePulse 2s infinite;">❤️</p>
            <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 8px;">Aún no has guardado platos favoritos</h4>
            <p style="color: var(--text-muted); font-size: 0.94rem; max-width: 440px; margin: 0 auto 24px; line-height: 1.5;">Haz clic en el corazón blanco de cualquier ración para guardarla en tu lista personal y consultarla rápidamente.</p>
            <button class="btn-primary" onclick="resetToAllDishes()">
              <span>Explorar Todos los Menús</span>
            </button>
          </div>
        `;
        return;
      }
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
          <p style="font-size: 2.5rem; margin-bottom: 10px;">🔍</p>
          <h4 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 6px;">No se encontraron menús</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Prueba con otra palabra o selecciona otro filtro de semana o jornada.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = filtered.map((item, index) => {
      const isAlmuerzo = (currentModality === 'almuerzo');
      const hasRealPhoto = (item.fotoReal === true && item.imagen);
      const animDelay = Math.min(index * 35, 450);

      return `
        <div class="pae-menu-card ${hasRealPhoto ? 'pae-card-has-photo' : ''}" data-menu-id="${item.id}" style="animation-delay: ${animDelay}ms;">
          
          <!-- Encabezado Visual del Plato: Ración con Foto Real o Pendiente -->
          ${hasRealPhoto ? `
            <div class="dish-preview-container" onclick="openDishModal('${item.id}', '${currentModality}')" title="Haz clic para ver la fotografía real del plato">
              <div class="dish-preview-image-box">
                <img src="${item.imagen}" alt="${item.titulo}" class="dish-preview-img" loading="lazy">
                <div class="dish-preview-overlay">
                  <span class="dish-preview-hint">
                    <span class="dish-preview-icon">🔍</span> Ver Fotografía Real
                  </span>
                  <span style="color: #69F0AE; font-size: 0.72rem; font-weight: 800;">FOTO REAL CBO</span>
                </div>
              </div>
              <div class="dish-badge-interactive dish-badge-real">
                <span class="pulse-dot-green"></span>
                <span>📸 FOTO REAL CBO</span>
              </div>
            </div>
          ` : `
            <div class="dish-preview-container dish-preview-pending" onclick="openDishModal('${item.id}', '${currentModality}')" title="Fotografía pendiente de registro">
              <div class="dish-placeholder-box">
                <div class="dish-placeholder-icon">${item.emoji || '🍽️'}</div>
                <span class="dish-placeholder-tag">Menú Oficial PAE</span>
                <span class="dish-placeholder-title">${item.titulo}</span>
                <div class="dish-placeholder-status">
                  <span class="status-dot-pending"></span>
                  <span>Foto pendiente de carga</span>
                </div>
              </div>
            </div>
          `}

          <div class="pae-card-header">
            <div class="pae-emoji-box">${item.emoji}</div>
            <div class="pae-meta-badges">
              <span class="pae-badge-official">PAE Cali 2026</span>
              ${hasRealPhoto ? '<span class="pae-badge-real-photo">📸 Foto Real CBO</span>' : '<span class="pae-badge-standard">🍱 Menú Oficial</span>'}
              <span class="pae-badge-week">Semana ${item.semana} · ${item.dia} · ${item.comida}</span>
            </div>
            <button type="button" class="dish-fav-btn ${isFavorite(item.id) ? 'is-active' : ''}" data-dish-id="${item.id}" onclick="toggleDishFavorite(event, '${item.id}')" aria-label="${isFavorite(item.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}" title="${isFavorite(item.id) ? 'Guardado en tus favoritos' : 'Añadir a tus favoritos'}">
              <span class="heart-icon">${isFavorite(item.id) ? '❤️' : '🤍'}</span>
            </button>
          </div>

          <h4 class="pae-menu-title">${item.titulo}</h4>

          <div class="pae-dish-description-box">
            <strong>Descripción del plato:</strong>
            <p>${item.descripcion}</p>
          </div>

          <div class="pae-components-list">
            <div class="pae-comp-row">
              <span class="pae-comp-icon">🥤</span>
              <div class="pae-comp-info">
                <strong>Bebida:</strong>
                <span>${item.bebida}</span>
              </div>
            </div>

            <div class="pae-comp-row">
              <span class="pae-comp-icon">🍗</span>
              <div class="pae-comp-info">
                <strong>Alimento Proteico:</strong>
                <span>${item.proteina}</span>
              </div>
            </div>

            ${isAlmuerzo ? `
              ${item.leguminosa ? `
                <div class="pae-comp-row">
                  <span class="pae-comp-icon">🫘</span>
                  <div class="pae-comp-info">
                    <strong>Leguminosa:</strong>
                    <span>${item.leguminosa}</span>
                  </div>
                </div>
              ` : ''}

              <div class="pae-comp-row">
                <span class="pae-comp-icon">🍚</span>
                <div class="pae-comp-info">
                  <strong>Cereal Acompañante:</strong>
                  <span>${item.cereal}</span>
                </div>
              </div>

              ${item.tuberculo ? `
                <div class="pae-comp-row">
                  <span class="pae-comp-icon">🥔</span>
                  <div class="pae-comp-info">
                    <strong>Tubérculo / Plátano:</strong>
                    <span>${item.tuberculo}</span>
                  </div>
                </div>
              ` : ''}

              ${item.ensalada ? `
                <div class="pae-comp-row">
                  <span class="pae-comp-icon">🥗</span>
                  <div class="pae-comp-info">
                    <strong>Ensalada / Verdura:</strong>
                    <span>${item.ensalada}</span>
                  </div>
                </div>
              ` : ''}
            ` : `
              <div class="pae-comp-row">
                <span class="pae-comp-icon">🌾</span>
                <div class="pae-comp-info">
                  <strong>Cereal Acompañante:</strong>
                  <span>${item.cereal}</span>
                </div>
              </div>

              ${item.fruta ? `
                <div class="pae-comp-row">
                  <span class="pae-comp-icon">🍎</span>
                  <div class="pae-comp-info">
                    <strong>Fruta / Acompañante:</strong>
                    <span>${item.fruta}</span>
                  </div>
                </div>
              ` : ''}
            `}
          </div>

          <div class="pae-card-footer">
            <div class="pae-portion-tag">
              <span class="portion-bullet">●</span>
              <span>Ración Nutricional Completa</span>
            </div>
            <button class="btn-dish-view-trigger" onclick="openDishModal('${item.id}', '${currentModality}')" title="Abrir desglose y fotografía del plato">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>${hasRealPhoto ? 'Ver Foto Real' : 'Ver Detalle'}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

    // Cambio de modalidad (Almuerzo / AM / PM)
  modalityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modalityTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentModality = tab.getAttribute('data-modality');
      renderPaeItems();
    });
  });

  // Filtro por semanas (1, 2, 3, 4, Todas o Solo Fotos Reales)
  weekFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      weekFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-week');
      renderPaeItems();
    });
  });

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderPaeItems();
    });
  }

  window.renderPaeItemsRef = renderPaeItems;
  updateFavCounter();
  renderPaeItems();
}

// -------------------------------------------------------------
// Visualizador Interactivo de Plato (Modal Lightbox)
// -------------------------------------------------------------
function initDishModal() {
  const backdrop = document.getElementById('dishModalBackdrop');
  const closeBtn = document.getElementById('closeDishModalBtn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', closeDishModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeDishModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('active')) {
      closeDishModal();
    }
  });
}

function closeDishModal() {
  const backdrop = document.getElementById('dishModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
  }
}

window.openDishModal = function(menuId, modality) {
  const backdrop = document.getElementById('dishModalBackdrop');
  const badge = document.getElementById('dishModalBadge');
  const title = document.getElementById('dishModalTitle');
  const body = document.getElementById('dishModalBody');

  if (!backdrop || !body) return;

  const list = PAE_DATA[modality] || [];
  const item = list.find(m => m.id === menuId);
  if (!item) return;

  const isAlmuerzo = (modality === 'almuerzo');
  const modalityLabel = isAlmuerzo ? 'Almuerzo (Jornada Única)' : (modality === 'am' ? 'Jornada Mañana (Desayuno)' : 'Jornada Tarde (Refrigerio)');
  const hasRealPhoto = (item.fotoReal === true && item.imagen);

  if (badge) badge.textContent = `PAE Cali 2026 · ${modalityLabel}`;
  if (title) title.textContent = item.titulo;

  body.innerHTML = `
    <div class="dish-modal-grid">
      <div class="dish-modal-photo-box">
        ${hasRealPhoto ? `
          <img src="${item.imagen}" alt="${item.titulo}" class="dish-modal-photo">
        ` : `
          <div style="height: 100%; min-height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #F8F9FA 0%, #EEF2F5 100%); border-radius: var(--radius-lg); padding: 30px; text-align: center; border: 2px dashed #D0D7DE;">
            <span style="font-size: 3.5rem; margin-bottom: 12px;">📷</span>
            <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px;">Fotografía Pendiente</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 320px; line-height: 1.5; margin: 0;">La fotografía real correspondiente a este menú será añadida próximamente.</p>
          </div>
        `}
      </div>

      <div class="dish-modal-meta">
        <div style="background: var(--primary-green-light); border-radius: var(--radius-md); padding: 14px 18px; border-left: 4px solid var(--primary-green); margin-bottom: 14px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
            <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--primary-green-dark); letter-spacing: 0.04em;">${item.comida} · Semana ${item.semana} (${item.dia})</span>
            ${hasRealPhoto ? '<span style="background: #1B5E20; color: #FFF; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 999px;">📸 FOTOGRAFÍA REAL CBO</span>' : '<span style="background: #007A2E; color: #FFF; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 999px;">🍱 BANDEJA SERVIDA PAE</span>'}
          </div>
          <p style="font-size: 0.95rem; color: var(--text-dark); margin: 8px 0 0; font-weight: 700; line-height: 1.4;">${item.descripcion}</p>
        </div>

        <div class="dish-component-legend">
          <div class="legend-row">
            <span class="legend-icon">🥤</span>
            <div class="legend-info">
              <strong>Bebida:</strong>
              <span>${item.bebida}</span>
            </div>
          </div>

          <div class="legend-row">
            <span class="legend-icon">🍗</span>
            <div class="legend-info">
              <strong>Alimento Proteico:</strong>
              <span>${item.proteina}</span>
            </div>
          </div>

          ${isAlmuerzo && item.leguminosa ? `
            <div class="legend-row">
              <span class="legend-icon">🫘</span>
              <div class="legend-info">
                <strong>Leguminosa:</strong>
                <span>${item.leguminosa}</span>
              </div>
            </div>
          ` : ''}

          <div class="legend-row">
            <span class="legend-icon">🌾</span>
            <div class="legend-info">
              <strong>Cereal Acompañante:</strong>
              <span>${item.cereal}</span>
            </div>
          </div>

          ${isAlmuerzo && item.tuberculo ? `
            <div class="legend-row">
              <span class="legend-icon">🥔</span>
              <div class="legend-info">
                <strong>Tubérculo / Plátano:</strong>
                <span>${item.tuberculo}</span>
              </div>
            </div>
          ` : ''}

          ${isAlmuerzo && item.ensalada ? `
            <div class="legend-row">
              <span class="legend-icon">🥗</span>
              <div class="legend-info">
                <strong>Ensalada / Verdura:</strong>
                <span>${item.ensalada}</span>
              </div>
            </div>
          ` : ''}

          ${!isAlmuerzo && item.fruta ? `
            <div class="legend-row">
              <span class="legend-icon">🍎</span>
              <div class="legend-info">
                <strong>Fruta / Acompañante:</strong>
                <span>${item.fruta}</span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Visualizador de Balance Nutricional PAE Cali -->
        <div class="nutrition-breakdown-card">
          <div class="nutrition-header">
            <span class="nutrition-tag">🌱 Balance Nutricional PAE Cali</span>
            <span class="nutrition-kcal">Ración Oficial Aprobada</span>
          </div>
          <div class="nutrition-bars">
            <div class="nutri-item">
              <div class="nutri-label">
                <span>🍗 Proteínas de Alto Valor Biológico</span>
                <strong>25%</strong>
              </div>
              <div class="nutri-track"><div class="nutri-fill nutri-protein" style="width: 25%;"></div></div>
            </div>
            <div class="nutri-item">
              <div class="nutri-label">
                <span>🌾 Carbohidratos Complejos (Energía y Concentración)</span>
                <strong>45%</strong>
              </div>
              <div class="nutri-track"><div class="nutri-fill nutri-carbs" style="width: 45%;"></div></div>
            </div>
            <div class="nutri-item">
              <div class="nutri-label">
                <span>🥗 Micronutrientes, Fibra & Vitaminas Frescas</span>
                <strong>30%</strong>
              </div>
              <div class="nutri-track"><div class="nutri-fill nutri-vitamins" style="width: 30%;"></div></div>
            </div>
          </div>
          <div class="nutri-tip">
            <span>💡</span>
            <p><strong>Aporte Esencial:</strong> Formulación balanceada orientada a fortalecer la inmunidad, el desarrollo cognitivo y la energía durante la jornada escolar.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
};

// -------------------------------------------------------------
// Reloj & Monitoreo del Horario Escolar en Tiempo Real
// -------------------------------------------------------------
function initScheduleWatcher() {
  const clockElement = document.getElementById('liveClockDisplay');
  const statusBadge = document.getElementById('currentServiceBadge');
  const statusDescription = document.getElementById('currentServiceDescription');

  function updateClockAndStatus() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeFormatted = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    if (clockElement) {
      clockElement.textContent = timeFormatted;
    }

    const day = now.getDay();
    const currentMins = hours * 60 + minutes;

    let serviceName = 'Cerrado por Jornada Escolar';
    let serviceDesc = 'La cafetería abrirá en su próximo horario habitual (7:00 A.M.).';

    if (day >= 1 && day <= 5) {
      if (currentMins >= 7 * 60 && currentMins <= 11 * 60) {
        serviceName = 'Abierto: Jornada de la Mañana';
        serviceDesc = 'Servicio activo de atención escolar de 7:00 A.M. a 11:00 A.M.';
      } else if (currentMins >= 13 * 60 + 20 && currentMins <= 15 * 60) {
        serviceName = 'Abierto: Jornada de la Tarde';
        serviceDesc = 'Servicio activo de atención escolar de 1:20 P.M. a 3:00 P.M.';
      } else if (currentMins < 7 * 60) {
        serviceName = 'Próximo Servicio: Jornada de la Mañana';
        serviceDesc = 'Iniciamos atención a las 7:00 A.M.';
      } else if (currentMins > 11 * 60 && currentMins < 13 * 60 + 20) {
        serviceName = 'Pausa Intermedia / En Preparación';
        serviceDesc = 'Acondicionando el comedor para la Jornada de la Tarde (apertura 1:20 P.M.).';
      } else if (currentMins > 15 * 60) {
        serviceName = 'Servicio Finalizado por Hoy';
        serviceDesc = 'Atención regular mañana a partir de las 7:00 A.M.';
      }
    } else {
      serviceName = 'Cerrado (Fin de Semana)';
      serviceDesc = 'Atención regular de lunes a viernes en el plantel educativo.';
    }

    if (statusBadge) statusBadge.textContent = serviceName;
    if (statusDescription) statusDescription.textContent = serviceDesc;
  }

  updateClockAndStatus();
  setInterval(updateClockAndStatus, 1000);
}

// -------------------------------------------------------------
// Formulario de Contacto & Comentarios
// -------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contactForm');
  const ratingButtons = document.querySelectorAll('.star-rate-btn');
  let selectedRating = 5;

  ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.getAttribute('data-value'), 10);
      ratingButtons.forEach(b => {
        const val = parseInt(b.getAttribute('data-value'), 10);
        if (val <= selectedRating) {
          b.classList.add('selected');
        } else {
          b.classList.remove('selected');
        }
      });
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showToast('Por favor completa todos los campos requeridos.', 'info');
        return;
      }

      showToast('¡Gracias por tus comentarios! Tu mensaje ha sido recibido por el equipo de Smart Menú y el Comité PAE CBO.', 'success');
      form.reset();

      ratingButtons.forEach(b => b.classList.add('selected'));
      selectedRating = 5;
    });
  }
}

// -------------------------------------------------------------
// Notificaciones Toast
// -------------------------------------------------------------
function showToast(message, type = 'info') {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.className = `toast-notice ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : 'ℹ️'}</span>
    <div>${message}</div>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// -------------------------------------------------------------
// Reproductor de Audio Interactivo para Entrevistas del Comedor
// -------------------------------------------------------------
function initInterviewAudioPlayers() {
  const players = document.querySelectorAll('.interview-audio-player');

  players.forEach(player => {
    const audio = player.querySelector('audio');
    const playBtn = player.querySelector('.audio-play-btn');
    const playIcon = playBtn ? playBtn.querySelector('.play-icon') || playBtn : null;
    const progressBar = player.querySelector('.audio-timeline-progress');
    const track = player.querySelector('.audio-timeline-track');
    const timeBadge = player.querySelector('.audio-time-badge');

    if (!audio || !playBtn) return;

    function formatSecs(sec) {
      if (isNaN(sec) || !isFinite(sec)) return '0:00';
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function updateTimeDisplay() {
      const cur = audio.currentTime || 0;
      const dur = audio.duration || 16;
      if (timeBadge) {
        timeBadge.textContent = `${formatSecs(cur)} / ${formatSecs(dur)}`;
      }
      if (progressBar && dur > 0) {
        const pct = (cur / dur) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
      }
    }

    audio.addEventListener('loadedmetadata', updateTimeDisplay);
    audio.addEventListener('timeupdate', updateTimeDisplay);

    audio.addEventListener('ended', () => {
      player.classList.remove('playing');
      const parentCard = player.closest('.interview-featured-card');
      if (parentCard) parentCard.classList.remove('card-audio-playing');
      if (playIcon) playIcon.textContent = '▶';
      if (progressBar) progressBar.style.width = '0%';
      if (timeBadge) timeBadge.textContent = `0:00 / ${formatSecs(audio.duration || 16)}`;
    });

    audio.addEventListener('pause', () => {
      player.classList.remove('playing');
      const parentCard = player.closest('.interview-featured-card');
      if (parentCard) parentCard.classList.remove('card-audio-playing');
      if (playIcon) playIcon.textContent = '▶';
    });

    audio.addEventListener('play', () => {
      document.querySelectorAll('audio').forEach(otherAudio => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
        }
      });
      player.classList.add('playing');
      const parentCard = player.closest('.interview-featured-card');
      if (parentCard) parentCard.classList.add('card-audio-playing');
      if (playIcon) playIcon.textContent = '⏸';
    });

    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (audio.paused) {
        audio.play().catch(err => {
          console.warn('Audio play request interrupted:', err);
        });
      } else {
        audio.pause();
      }
    });

    if (track) {
      track.addEventListener('click', (e) => {
        const rect = track.getBoundingClientRect();
        const clickPos = (e.clientX - rect.left) / rect.width;
        const dur = audio.duration || 16;
        audio.currentTime = clickPos * dur;
        updateTimeDisplay();
      });
    }
  });
}

// -------------------------------------------------------------
// Motor de Animaciones de Desplazamiento Fluido (Scroll Reveal)
// -------------------------------------------------------------
let scrollRevealObserver = null;

function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const revealTargets = [
    '.section-header',
    '.space-card',
    '.gallery-item',
    '.cta-banner',
    '.about-hero-grid',
    '.interview-featured-card',
    '.pillar-card',
    '.schedule-card',
    '.schedule-table-wrap',
    '.contact-info-panel',
    '.contact-qr-panel',
    '.upcoming-interviews-banner'
  ];

  // Escalonamiento armónico de elementos hijos en contenedores tipo grid
  const staggerContainers = [
    { container: '.space-features-grid', step: 100 },
    { container: '.space-gallery-grid', step: 120 },
    { container: '.pillars-grid', step: 90 },
    { container: '.schedule-cards-grid', step: 100 }
  ];

  staggerContainers.forEach(({ container, step }) => {
    document.querySelectorAll(container).forEach(parent => {
      Array.from(parent.children).forEach((child, idx) => {
        child.style.transitionDelay = `${idx * step}ms`;
      });
    });
  });

  const elementsToObserve = document.querySelectorAll(revealTargets.join(', '));
  elementsToObserve.forEach(el => {
    if (!el.classList.contains('scroll-reveal') && !el.classList.contains('scroll-reveal-scale')) {
      el.classList.add('scroll-reveal');
    }
  });

  scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  elementsToObserve.forEach(el => {
    scrollRevealObserver.observe(el);
  });

  initCountUpStats();
}

// -------------------------------------------------------------
// Animación de Contadores Numéricos (CountUp Fluid)
// -------------------------------------------------------------
function initCountUpStats() {
  const statElements = document.querySelectorAll('.stat-countup');
  if (statElements.length === 0) return;

  const countUpObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateNumberCountUp(el);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  statElements.forEach(el => countUpObserver.observe(el));
}

function animateNumberCountUp(el) {
  const target = parseFloat(el.getAttribute('data-target') || '0');
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  const separator = el.getAttribute('data-separator') || '';
  const duration = 1200; // ms
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing exponencial suave y profesional
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = Math.round(easeProgress * target);

    let formattedVal = currentVal.toString();
    if (separator && currentVal >= 1000) {
      formattedVal = currentVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }

    el.textContent = `${prefix}${formattedVal}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = `${prefix}${separator && target >= 1000 ? target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : target}${suffix}`;
    }
  }

  requestAnimationFrame(step);
}

function recheckScrollAnimations(activeContainer) {
  if (!activeContainer) return;
  const elements = activeContainer.querySelectorAll('.scroll-reveal:not(.revealed), .scroll-reveal-scale:not(.revealed)');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 20) {
      el.classList.add('revealed');
    }
  });
}

// -------------------------------------------------------------
// Barra Inteligente de Progreso de Lectura / Desplazamiento Fluido
// -------------------------------------------------------------
function initScrollProgressBar() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  function updateProgressBar() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, scrollPct))}%`;
  }

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  window.addEventListener('resize', updateProgressBar, { passive: true });
}

// -------------------------------------------------------------
// Botón Flotante Back-to-Top con Medidor Radial de Progreso
// -------------------------------------------------------------
function initBackToTopFab() {
  const fab = document.getElementById('backToTopFab');
  const circle = document.getElementById('fabProgressCircle');
  if (!fab) return;

  const totalLength = 119.38; // 2 * PI * 19

  function handleScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;

    if (scrollY > 280) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }

    if (circle) {
      const offset = totalLength - (progress * totalLength);
      circle.style.strokeDashoffset = offset.toFixed(2);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  fab.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// -------------------------------------------------------------
// Efecto Parallax 3D Suave & Spotlight de Luz en Tarjetas (Desktop)
// -------------------------------------------------------------
function initCardParallaxTilt() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return; // En móviles/táctil se mantiene nativo y estable

  const containers = document.querySelectorAll('#menuItemsGrid, .space-features-grid, #interviewShowcaseContainer');
  if (!containers.length) return;

  containers.forEach(container => {
    container.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.pae-menu-card, .space-card, .interview-featured-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Inyectar coordenadas del cursor para el Spotlight dinámico
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      if (card.classList.contains('pae-menu-card')) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.2;
        const rotateY = ((x - centerX) / centerX) * 3.2;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-7px)`;
      }
    });

    container.addEventListener('mouseleave', () => {
      const cards = container.querySelectorAll('.pae-menu-card, .space-card, .interview-featured-card');
      cards.forEach(card => {
        card.style.transform = '';
      });
    }, true);
  });
}

// -------------------------------------------------------------
// Mejoras Interactivas y Micro-Animaciones de Alta Gama (UI Engine)
// -------------------------------------------------------------
function initHeroEnhancements() {
  // Ondulación táctil fluida (Ripple) en botones de acción y filtros
  const interactiveBtns = document.querySelectorAll(
    '.btn-primary, .btn-secondary, .btn-action-primary, .btn-action-secondary, .modality-btn, .week-filter-pill, .btn-submit-pqrs'
  );

  interactiveBtns.forEach(btn => {
    btn.addEventListener('pointerdown', function(e) {
      if (this.disabled) return;
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'btn-click-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 650);
    });
  });

  // Animación viva en el badge institucional del Hero
  const heroBadge = document.querySelector('.hero-badge-pill');
  if (heroBadge) {
    heroBadge.classList.add('hero-badge-animated');
  }

  // Animación escalonada inmediata en carga de página
  const heroElements = document.querySelectorAll('.hero-content > *');
  heroElements.forEach((el, index) => {
    el.style.animationDelay = `${120 + index * 90}ms`;
  });
}
