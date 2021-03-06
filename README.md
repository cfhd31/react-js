![EVE](https://github.com/cfhd31/react-js/blob/master/public/assets/imagen/eve0.png)
# Mercado de la Alianza [Bot5]
## _Proyecto e-commerce para vender naves de la corporacion [GDA] a la Alianza[Bot5]._
> Proyecto final E-commerce, Curso React-Js de [CoderHouse](https://www.coderhouse.com/). Año 2021 

## Contenido
- Este proyecto (actuanmente en desarrollo) tiene una única rama, main.
- Periodo de prueba.

## Objetivos y Características

> El objetivo del proyecto es crear un Mercado  E-commerce  (un sistema de venta de productos con gestión de 
> su base de datos a través de Firebase), en una single-page application (SPA), o aplicación de página única. 
>Donde se puede navegar por los distintos productos (también sobre sus categorías)
>e ir a sus detalles. Desde el detalle se puede ver la descripción, foto y precio del producto y permite 
>agregarlos al carrito. También se pueden ver y modificar los elementos del carrito, para luego finalizar la compra de
>los elementos cargados al mismo a través del llenado de un formulario de compra. Y finaliza guardando la orden
>de compra (con todos sus productos más la fecha de compra) en una base de datos del proyecto, alojada en Firebase.


## Tecnología

Este proyecto se está desarrolando en React-Js:

- [React-Js](https://create-react-app.dev/) - La App fue creada con Create React App
- Utiliza una serea de librerías externas (detalladas en Complementos).

## Instalación

Se requiere [Node.js](https://nodejs.org/en/) para ejecutarse.

Instale las dependencias y devDependencies e inicie el servidor.

```sh
$ cd coderhouse-ecommerce
$ npm install

```

Para clonar este repositorio debe seguir las siguientes instrucciones:

1 - Abre el Visual Studio Code

2 - Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.

3 - Escribe `git clone` y luego pega la siguiente URL ``

4 - Presiona `Enter` para crear tu clon local.

Por mayor información: `https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository`

## Complementos istalados

Una vez clonado el repositorio, para que el proyecto se ejecute correctamente, se deben instalar las siguientes librerias:

`react-router.dom`  : Es una librería que nos permite el enrutamiento y navegabilidad entre los diferentes componentes de nuestra SPA. Para instalarlo se debe ejecutar en la terminal lo siguiente:

```sh
npm install react-router-dom
```

`Firebase`  : Libreria de servicios de Google, que nos facilita y permite desarrollar el front-end, sin preocuparnos del back-end. Permite satisfacer las distintas necesidades de esta aplicación y su ciclo de desarrollo, dentro de las cuales encontramos: Seguridad y autenticación, Almacenamiento y consulta, Hosting, Monitoreo, Functions y más.

`react-bootstrap 5.1.1`  : Es un framework front-end con el que le damos los diferentes estilos a la SPA.

```sh
npm install react-bootstrap@next bootstrap@5.1.1
```

`react-awesome-reveal`  : Biblioteca de React que nos permite la animación de los componentes del proyecto, de manera fácil y eficiente. Para agregarlo, ejecute el siguiente comando:
```sh
npm install --save react-awesome-reveal
```


`react-loadingg`  : React-Loading es una biblioteca de componentes de animación de "Loading" basada en React que incluye muchos componentes de carga exquisitos. Aliviará eficazmente la ansiedad del usuario. Esta biblioteca de componentes admite la carga bajo demanda, así que elija un componente de carga favorito ahora para enriquecer su proyecto. Para agregarlo, ejecute el siguiente comando:
```sh
npm install react-loadingg
```

## Ejecución

Para ejecutar este proyecto simplemente escriba y ejecute en su consola de Visual Studio Code:

```sh
npm start
```
>Esto hará que la aplicación se ejecute en modo de desarrollo.
>Abra http: // localhost: 3000 para verlo en el navegador.


## Estado del Proyecto

Actualmente cuenta con los siguientes Componentes: 
- `NavBar` : barra de navegación de la SPA.
- `HomeContainer` : componente de bienvenida.
- `ItemListContainer` : En donde mostramos el catálogo, en conjunción con los compomentes `ItemList` e `Item`.
- `ItemDetailContainer` : Para mostrar la información del item seleccionado `ItemDetail`, en  dónde ingresaremos la cantidad y nos permite la opción de agregar al carrito `ItemCount`.
- `CardWidget` : componente para mostrar en la barra de navación la cantidad de productos seleccionados (en desarrollo).
- `getFirestone` : componente que nos vincula y permite la configuración de la base de datos que usa el Proyecto en Firebase.
- `Cart` : nos devuelve el listado de los productos agregados al carrito `CartList` , indicando el total del mismo. Permite la elimación de productos y da la opción de Generar la orden de compra, a través del llenado del formulario de compra `CartForm`.
- `CartContext` : que contiene todas las funcionalidades asociadas al carrito de compras.

## Demo del Proyecto
- [Eve](https://evemercado.netlify.app/)

## Avance del Proyecto

Vista del proyecto en ejecución:

Home
![home](....)

Listado de Productos
![productos](....)

Item:
![item](...)

Carrito Compra:
![carrito](...)

Formulario Compra:
![formulario](...)

## Licencia

- [...](...)


**Software Libre!!!**
