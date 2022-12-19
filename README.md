# The Film Project
*The Film Project* es el proyecto que fue armado en cuatro dias para el desafio técnico de Gol-ball.

Con algunos puntos a seguir, *The Film Project* nos ayuda a demostrar nuestro conocimiento en distintas tecnologias, y nuestra capacidad de desarrollar codigo estable, escalable, y perdurable con el tiempo.

Este proyecto se basa en el desarrollo de una aplicación web en torno a peliculas y series de TV.

![Portada principal](https://lh3.googleusercontent.com/vqfUmGJj6-XcYItOz0PyYnevV6yngKh5_rUlAnr3vibOBWiOcnLE4hp69kZh8pfdAz6GPvxWA6dG-XzxPyA81rhnkqO4KpWLqmGRV-lHiZCTrdYqp849kt6mjEqdHmflvUa58DPL1gOUlNHM7ImYeMgiYP1aSR_JNVv_o_Ey-Zn47tweyVCiOTlVF9gkumn2DCdkp6ItagacIXsAEka67wGczLZI5uNVguEXu-hmPFs9t_eOxGZNrJooF-JWm453RlJHs7NX75QnXhlngfvxpObn47eWQ7jZzOelAuBQn_l1X50aTHlPniNQWbhlp6uoVM6iK2BHz3CCwVgHs4LmGqJIg7wpx-_xg6DKEExnWJxg83krBIWYcTxFGiq-xe9WGCyx8mKxRQ0b_9wy5Qu_fF6hUXitLb-16JYXj_WpWLJ91z44JqgTuDuznMWryLf1yXUHz8PPzYJZaTkIOq5qIGvBHi3T56iit6F0_mMJWTPJuptQLR7RQdGODXMJRdRj_XgzFDIqyuGbvZ55k4awyE4ZPY0ju2f7NpgL459Gf4Dstspgf-QGtPgSam_H-EMLIL0Qie-FlRCqUJVo9fDIIg_MN-K4MqvgD5_yIaXKuqgXlsW80QyGI9f1VmX8_FwiHDU2KtpEegL3CjNiObFvPWdU4a9-f725FUoycUH2E7sYXaYF_0q4JhyNfuei1_adVxyJZoGNJl8SPA7QPenuNh06omhfDXaCSGwEVLhv3AkirvDuGBjpbQJ8cejKh_he9jIOLnYxZ8jhWB4KBZvUSqYks95GFf2_pzw_hkMXZJ-FCXF5o-zIskhhbLL4k9efvm1paT5ABLRCNetQn07cDpbptksRhxccAP60WZu1lWbTC-ZyUYJAKaO8f4qdOe3l0EqGLHrqen3tCZneHhShFTLtQUND362cAxbJ7F2s4IunjWEQCSb2HzjszxIqWIwrUVIqtSPPKyCGNRpN8bazO2iOq3nee-kSsifecDnVeyO8KlRBZXom5zqs=w1901-h966-no?authuser=0)

# Guia para iniciar rapido
 * Clonar el repositorio con: git clone https://github.com/federicopedraza/the-film-proyect.git
 * Instalar las dependencias usando `npm install` o `yarn install`
* Correr el servidor con: `npm start` or `yarn start`
* Accede a la aplicación en: http://localhost:3000

Puedes crear y vincular tu cuenta de [TMDB](https://www.themoviedb.org/) para acceder a más funciones.

# Dependencias
-   `react`: Una librería de JavaScript para crear interfaces de usuario.
-   `react-dom`: El punto de entrada para las capacidades de renderizado de DOM de React.
-   `react-router-dom`: Una colección de componentes de navegación que se componen de manera declarativa con tu aplicación.
-   `@material-ui/core`: Una librería popular de React UI que proporciona una amplia gama de componentes personalizables.
-   `@material-ui/icons`: Una librería de iconos de Material Design para usar con componentes Material-UI.
-   `@material-ui/lab`: Un conjunto de componentes experimentales de Material-UI.
-   `@mui/icons-material`: Una librería de iconos de Material Design para usar con componentes Material-UI.
-   `@mui/material`: Un conjunto de componentes experimentales de Material-UI.
-   `axios`: Una librería para hacer solicitudes HTTP.
-   `framer-motion`: Una librería para crear animaciones sencillas y complejas en React.
-   `husky`: Una librería para agregar ganchos de Git a tu proyecto.
-   `i18next`: Una librería para la internacionalización.
-   `i18next-browser-languagedetector`: Un plugin de detección de idioma para i18next.
-   `i18next-http-backend`: Un plugin de backend para i18next para cargar archivos de traducción.
-   `moment`: Una librería para analizar, validar, manipular y dar formato a fechas y horas.
-   `msw`: Una librería para simular solicitudes HTTP en pruebas.
-   `react-color-extractor`: Una librería para extraer colores dominantes de una imagen.
-   `react-confetti`: Una librería para crear efectos de confeti en React.
-   `react-i18next`: Una librería que proporciona componentes de React y una API para usar i18next.
-   `react-scripts`: Un conjunto de scripts que se utilizan para construir y iniciar una aplicación de React.
-   `typescript`: Un superconjunto tipado de JavaScript que se compila a JavaScript puro.
-   `web-vitals`: Una librería para medir métricas de rendimiento web.
-   `zustand`: Una librería de gestión de estado minimalista y amigable con React.

# Capacidades

El desafio tecnico consistia de varios pasos obligatorios para poder ser completado. Los siguientes, son aquellos puntos requeridos que fueron completados, y de que manera se lograron los resultados:

## Home
En la pantalla de Home, aparecen lo que llamamos "FilmViewer" o visores de films: Componentes que almacenan X cantidad de films y las distribuyen dependiendo de cuantas sean. Esas films se ven representadas en forma de cartas pequeñas, que ocultan información la cual el usuario puede acceder al pasar el mouse por encima de ellas. 
Una variedad de los FilmViewers, son los FilmViewerSimplified, la cual es una version simplificada de estas, mostradas cuando los films del FilmViewer no superan una cierta cantidad.

FilmViewerSimplified:![FilmViewerSimplified](https://lh3.googleusercontent.com/_0pVVGjGmKhVhteAb8HmO3hGvLxvJTpH8PzB1_UIK3wSuWIgulehEy6L-ivENzIFOn15PdYVuMIYgJhmzRZ2GyWD4EClk0KNfk00TNzUZI0epTuroJeRYMpQbFxnBcYcq2ThtHjxRFvKGCenF6TOcwCniPmxHz1bnXmSiKyrEqCY6A04YPdJyjtJpx9t0VAOSNZFIMcC4lxMMz3QhwUgbxbD-VHeSPT7CmjZpeELadX1V1zVkKL1QfKXucMCYicXIeCT0k58OgsdTAZ0pGZq7AME9clEqsHuQtrhpRNKd-2ymYJnQ-VPE9YUtjz9bwQWRsIM-8CTS4GtWSR4XAT5IJQeS6oAMUg7ICynWMzYmyb_8bTWziNK8aLOuHB0scI3w-SdIEOBdsOTSYl_QEwq_r41-ZV_UPuyzDpXpgFe2G5Y10qOceFpKMFPM1LlOIbVFGUPzzutpFqBhkkB5_dVYTtYrls7d5WyOPh3Eu80zSwbW2S8PYGSwv17_uIYV3bxAydWqGq7Hwl9tqBgrfPkZMI-h6BF8DgdSIwkBv-8nNqjHB7Ua7pdRpmiVgTE253_YP5MB4OD8lXBvzUUD5rjoeyHC8G-H90PfQLWxJbDMufXg1GOQJz1aRLkSGzEUU4Q1vphzDvEl177DLal2qu6zTBZohpG8cgEd-WSKsjDwLVnY0o7uGQsf8JLHotXAFenM6ig32q2sonagwUU_OZw5RDEenOFJQDyTiAA6Xx_LlviZFSngSVRsCgSwEhENCGPSnJ839AkaqzIPXcIPCRiUTaEbHGqpihfEUZWVw8QTMTJ2kc9-e881f4s7keuOc-0bgD52Q081AXEJlk5_pj4wFzXwTHjhoCWqs-IniweKw0cC9rd63oi4oEDxw-nyStTTkuD2kFcjduXVFqXSQFWXfjoIm9Itql_Eu-79X_O6MFVtabflnC97jFtU7CctFxZwLTvYho4CU3eJcqr0ZaEJo7uOQHRMZAA4O2c1iB4zhshyOlvGw-yL3yH=w1606-h353-no?authuser=0)

FilmViewer:
![FilmViewer](https://lh3.googleusercontent.com/OFLzoz0SowcPfePcHlRrtak6k3ctMszudmO6SkAZ-1UvZtVfECJR00BSgaYdAd853YSScwTO_-XXrX0Kc-WHkpsWngoyWE0KaNMmMje6N6wYVKFLp7OcFsm-JlwIpZ8vMA6Rtzfay0eSBd84fKyp9HtY6EWVA-AnPm5EN9hJqjuVUMtgDdScr-txd8GxYYweVo67uJW4PTvgLTeBv_BurRWpsjxAu3u-BDMEsBPWw9VnwMKdB2PPkWwhhXAGVpHoaFb9OFTr0962Wd1w6u-KPv0AIJBp4ajqRPqUDqygVDzCX-bluqT8Pl0CVSLuULUZ9ozNEQ6hNKQiyIf_xrxc6tLdSa_m2mHQGjc4lqI7qPDKy74-PSSRtw6E_8KxWawtm_H1I1IPWlzjOZ3DQ8_7duVqkOkeGDUF8YBB6lcfuwYIVYa4iQ-bMHpQyAhFwa14tdaGjAWHPtcnef9dYDt1N0aybAy81zsp6BBqtbI2D3_vIMu-o78grtSjlV6y1OUsNQeoJP8-BoWmFIpF2P5cVIX0XoKeX8gRO85IuOVCvhHMK6E8rMFapb2orONLjXToqfscrlsJl7_Kl3XWS7vv8rG3YZwx8bA3JeHRTfwsxnOjE0KHx5fe4CWKKEu9dTKHBlDwmaiQTTnfLJqrv65_C6ORD6IeGG3m4ar8NmTAf8pE_HrkbB2w2FMl06kUqAxL7C2aj9i-3O64TRlCx5_Yg1reyYvi6T0AfSDLN29uxFVMRdpxaUgSmAOy8pLEFG9zMVrKOi1hJmRMx1eh5qVXMw22n5k21dIqv3oZQMPzSYmYk5y9lpfZIjHDTTE7pXujBDG2RuhM5uPnReYFaGekIh4eKLYv2ejyLo-wpR-F1lI1aiRzNghU71A03e_k_I8pn3XMS10JKWR6boq7LCYi2su7Vh5t9WjXGskBn0PECBZiXjG6dYWauHFIvaxnSks_MexzsEWUjP68WveYfHsf1hjBKGoBv2ZKCPiS2Eby1KmNcOn4nZVbZbMS=w1193-h207-no?authuser=0)

Por encima de los FilmViewers, hay un RadioControl. Tres botones permiten cambiar los valores mostrados de los FilmViewers, filtrandolos por: `Todos, Peliculas y Series de TV`.

![Filtros](https://lh3.googleusercontent.com/5nOzbgm2GYN6k9ka6I1Ld9krkg5vLA8eImL-qNhOTNy5z1I4EcQSvGgY_ewd4SipuU73aw7wqb8RaSZ8MrP3wsn48_mO2YDV9sdQIg11Slrbere2zrQ_64O2mU2_mddL9qznvlZ7rcgKOedqptFhVxsgBsltCgoDsXRTC1a-rIg3_eD1RX-p3e9mLavNNGzuSq5X9AV3-W7Mp2w_AbW5OxxACdFCf99gJuettazCwAmtlhN53KDUADrzzf37Lqons4wqt_Nb2h6butYsybd7YDU6YJsabi8nIS15WB_idSthbMMeU5UX3cmCOkKNgjBvzhTQvwNRrnanoIHmycxhtCt1Q1PX1mPzzmlTY67jNJSCBPKIV8KIK5wwirum7b2s-BxsZwlEt_Q2o-vRNo3EBuFa4uR9qkYfwr55h8woCX0PLqy2xtwj6nnO9ldT1HOwxO0BDg9Zj2ZnzV4ql4EydjIrygu4AjcOxBoI60r8LfT_PrRhqU4Nd4_kaMcDbbSRCa4F4nFTdi3IeA11JIj--WO909vGIT2Q0jtPxcEaebGMt_qfJNak3QtO0EurQpm8azpB2fKTgAYutVCrXwOz1rhkGk9YuVl9LkJ103Dsvy25pmovTKMT7pb2IUQoPnVLiqQRT5sQYnEHJMBGDb9HZyOdH-gty5xPlQOA0QotRIVZIGkLCbFRKTLfvd5_JGk7xNJ_11TZhP6hIwxpqxWNSDopOFPvnV2snN3eofBjVlJdkL4SAuQZwS8B9w386aT9iPQ5TqPNAOIZkN1uH0Us2bGVTk11TE1z_dbRjNiuKhQxEb_7YzXMZIZOKG4gXYaYzYM1MAE4t9mqMRLS2Je7iRqDajvgXYHumUUN8MrAOIR20pJz7KcZJZOus9P5WggPbNK1vHOmAsXK56Qf9pkJY9CVIDXDpqf9nUrunESmUETo_VmbPAT2NwL0QASiab2WW8qr_rFC-ocxdg42p3iIfZOuNhA0qvW067TrPUXdrsg_jgsV1mNtP4zL=w307-h44-no?authuser=0)

Por encima del filtro, tenemos un buscador de films. Este buscador nos permite filtrar todas las peliculas y series de TV por nombre, dandonos resultados despues de ingresar las primeras dos palabras.

![Buscador activo](https://lh3.googleusercontent.com/aL7pVreLnB6e3ELHuJAvdWoPdPWQ3PncNTPcVpVHMhy46DsGoDqkkW6zMIHq-CUtf38SN-ZbdVI5aN0Eqmh0groMpcuZ9vg2K9lJBinIG-cfsCvGFYMqpY3BissXkMgKrUKcDga90Z2YUOtqi1oTMd5y8mqGUoUkS_XZPiZdSdCfxMAxfYbxbR4H0JfIWGxwPh8tYrzykljpIGw8B423Lp2EG-0M8Yj0bIyOTjmI5R5Me3G6VD7-2TOqHEOsjv-DJ4nldQp0BQPspGBPFwV1ZhAU-5vpRpAWtqEQabxx2oeqcHSniW8Klp20JTFrA4ElRoNvbRWzHwarPBQXr3mN2Yw_GT_u-w_AiyboEWepPN0mPfs5A6WM6HNZeUbqrcohzPLyrCSX78eqOEcAfFnC--RZAAypmHOYtiJpPiQuCQApBH3meARENTTEGZw8BKjuwCb9W1rrDUpyYX7QwAILmkutajhSp6wtXWhQzVxI0rcV-HQ_ZS-s7_wzxetp_Xy6thXqu2NXTkZdPxQ3IUSk1B9IuHFDgzGETd2rJhRXoigBPINSw_3Q4NKIJrK_1vg0BCuRkkPUDIy8zKMvCzttph38Ah6KmqfGRGnsE8NwQqsTMDenVi6yDQ-fxI7X6ldikV2rI3n6L0xKoC01WcWczJwVhaicqhOH3PFxbIAuf3A0gxqMHf33XZEQmUCkiGU_o1Z5f6nBcj0ptmmU7YHKqzS-SBdWJChIyu2SmZEAtNJFChItlT_4UTBwjgPgYFi-El2UV_QwnZInGeClO_bXQtFAJbuchcOLM1sFFIR9HHdnnRruXgswoYUuQW70oPwjQnVsQy-rebD2j9nhp7rHGkspQHE20_jhPvIGlEKBGWnWbnT9LH5rRNkBPKOBxyepYzU8oks02SDNmbw1kghpEY0Zd9LwlMZLiPlvzK6FcL9N-xk2GLDM7aEs_SOHouyJOg2wFcCwoaO09hvC6XsZ0OYmeUruLRbJQ2zWOVr-i60waYSt0NF13jgT=w1899-h692-no?authuser=0)

## Detalles
Las cartas de peliculas en los FilmViewers te redirigen a una pagina dedicada a ese film, en el que se muestran mas datos del mismo, con algunos recursos extras, como lo son comentarios, "favoritos" o "ver mas tarde", vinculados a tu cuenta de TMDB activa.

![Detalles](https://lh3.googleusercontent.com/t5FaSiqF613P1V6C_A2wMb7UDHg747Z0PDsHUUtO2jPuhtaUF8e9baB3RFdKV3J6WOSFU01nZqKoOfqilDFgWybE0_eRlfRmd5i7x3A27IbdJoEv71F8EON0SmjI6x2CP7l1Kh92nCzSW_ax7IqZVV3kocDBr9wWTz8OtnINVSCmL7aGuBJpz3AGT72yMGA2p8LuNoq-S903hZbxziYfW5O6wG07cm3KmRlNcbJ1tVzIDDW8lNDQWHlkcs5r21IBdWgdwvGXWC3YpvWNXiDME-YAzXT42Qko3-mS6ofw6gibWuAIHkraYVwMMcd1kFZIHTtxBJvWshC3H8kLHjIfZ0TL4Nhum8hDP6MLPll-te93KUTziieD-c80bI-9z6185jemc-cnDxOsOmFkQJZN-tINwDE3PQ7kWeZIwPFvJ81o0lJJKs5gr5AzS20YwOmwTB1gO7C-rO_v5ztrFzN2-sCrjaF3YWj5MIaNhc42buYIVzWGYtdifrCNDo16xBGpPGKdu63Bz5HW0dNiN_iqcNmo96VQ8eW1p2Px855VYqSk76RBvigWE1ExFTXBzY8pHoOKKKf3LBO3oOnltnCUmxu2mg_HhrdvbHS75FmLXNIvbw0wcKW61EPYPxTg-8jZGJczqa8N4VwSLKkw563EX5OTQznYs-8YtqGBu33h4oeSVMRneMXiMDgQu6wULpd8jBb4LoJnCRUJL12bZ1aDOpSy6XlB9HnC1TZyhCSSPE3mLORErbNjTigFNXhlX2OHmVupXLdIVeL7VlDiLNgQ4W7dDl-8rq4EoAmPZ38UlAAZ4KaHXQSeKuTFpTGC6E2R_TYJ49M87itidwPHPzixdwg30P-dIKNWU0EjQrKNPpCNSyftwt7jxSO8mbMvm80suSNaNSTib0QAhjudYjTnrDl-VA2vPqVN18mzJl3s2_wvm0w8Ve3gUNLYQI0mDzmMAE5lvjccJ7JYImmxKeARmHgm6sKlTZpoWIGXUH0-lYEEBVmaHvuoisuv=w398-h199-no?authuser=0)

## Sesiones activas

Al hacer clic en la parte superior derecha de la pagina, encima del Avatar, se te da la posibilidad de vincular tu cuenta real de TMDB con la aplicación, para poder acceder a tu lista de favoritos y lista de films "Para ver más tarde".   
![Sesion activa](https://lh3.googleusercontent.com/fmYwWcUEvuEwDG0ISFypfSXdg9k5xWUdn8Sm_SjCURstlnqnLTWlDiSPds8AN9JrMaoeA9ZQBA6IJoxKTTSZS_MqSPJoNVer2h_6tzDjcPeh2fHDAH9AImzVHont3Nc6Y3csMAn-HM2cpgOUGWzFe65OZlh5ufA3aJkbUNUVVy3OxYWJLY9abWM-ib_hAD6zxWH-KjY7QH_rSTsXNJEv-DPh2H4JHGb8EJLRD_ETv1iVVBsYP6I-RzewHzus5-e9pN4jeezWV_MEWOLEE_5UpAE60EnHHKkNtqh9iAOqrwzgo0tmudVEavl_Bb8v9C4_lNU7qRBFK0DEbwgwi0BG5Sy7r389S-SjDcecNzK4aBr6MpWIZU25DDeXGV8wf-k0Y9Pp1jsJ98UetM6u0StIfnK6_a1sWK0kErTTiNa5QIVVU5KSbZVpSmyO31sjYZDq8ovAGrmif1Kz3VJTxaSEkrkpGmNXwWwx7t48iqaIJIGcz9jvCB36Y5QaoWizUILAxXGvnIBYBdr6YV8HZExL1vEqVf5oPhOTPB2gpUVOC8HOHo4xiMoLBGdaI5FWhv8LV4dNz1R59HPhPkHe4-N0iH9TCS3txwfB-795zc6Q2Gt8M7A1n0CHxLqAYhnSVdZzVRReq_aFwNEQKfF7rsXS-Nx9LlNipcLmfaGe2s_17LKduw0yOxNmTVK6sc4p0Vgm5q4fY-jo28GcCxSBfxDLbxh_g8Hv0ciB8Vcn2iWmLmjO7eADsKFZKwk5nJ1u7oKNbmJb32nFV2_-GfzwGUrFED4Ea2PKBKegftC6q1URs3geENrIyZpiQnqPwQTv2KOMpUSjEx-Ttg6btpDX0tXEPHsXTugdyDnnSm0QeIzm1wawH5P3Z0uJ9XAMy_SY0L4MRv4m1YjZIezt4iXBHJnrWesxSbB5Yya7REMnjOxqsRbW8DVYLLMioHMCvB-OB6NZ-k1ZHY6AlGvYBHD9eXmVCyiyZfk3PN_WR6dIiyNJ-g04c27_vP1jf3YD=w328-h204-no?authuser=0)

# Problemas en el camino

Siendo un proyecto con un deadline tan cerrado, no teniamos espacio para errores. Sin embargo, la [API](https://developers.themoviedb.org/3/) obligatoria para realizar el proyecto nos trajo varios problemas en varias ocasiones.

## Inconsistencias en los valores

Entre otros errores de CORS, la API ofrecia varios endpoints que nos traian peliculas segun las necesidades que se planteaban. Por ejemplo: el endpoint que nos ofrecia la API: `/trending/{media_type}/{time_window}` que nos daba como resultado una lista de films, con varias queries para poder filtrar nuestra busqueda.
Por otro lado, el endpoint `/movie/{movie_id}` nos retornaba una pelicula segun el número de identificación de la misma. 

Siendo que si llega una pelicula N a trending, la ID de esa pelicula N puede ser usada para el endpoint `/movie/{movie_id}`, pero al traer la información, los valores de la pelicula cambiaban, como lo son la `popularity`, `release-date`, entre otras.

Esto genero varios problemas, porque para asegurarnos de que una pelicula tenga datos consistentes, tendriamos que obtener todas las peliculas de `/trending/{media_type}/{time_window}`, y luego buscar la pelicula por `/movie/{movie_id}` solo para tener una consistencia en los datos usando una unica endpoint, lo cual traeria varios problemas de performance teniendo en cuenta que tiene que realizar varias llamadas.

## Datos sin definir

La mayoria de las peliculas o series vienen con datos sin definir. Por ejemplo, todas las peliculas y todas las series vienen con un `name` y un `title`. La diferencia entre ellas dos, es que un show de TV tiene un `name`, dejando `title` como undefined, y las peliculas usan `title`, dejando `name` como undefined.
También, se debia asumir si un film era una pelicula o un show a traves de estas inconsistencias o a traves de las endpoints que se utilizaban. 
Esto llevo a varios problemas a la hora de meter varios films distintos, mezclando peliculas y shows en el mismo visor de films, incluyendo la falta de información y los multiples error handles que se debieron usar. Algunas peliculas no traian foto, y se debia usar la foto secundaria, mientras que otras venian practicamente vacias, sin generos asignados, fecha u otros.
