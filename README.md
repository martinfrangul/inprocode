# Expense Tracker App

Esta es una pequeña aplicación para el seguimiento de gastos semanales. La aplicación permite ver los gastos totales de la semana, revisar semanas anteriores, mostrar el total de los gastos, los gastos de hoy y los gastos respecto a ayer. Utiliza bibliotecas para manejo de idiomas y gráficos.

## Funcionalidades

- Mostrar el balance total de los gastos de la semana.
- Revisar los gastos de semanas anteriores y siguientes.
- Mostrar los gastos de hoy y compararlos con los de ayer.
- Soporte para múltiples idiomas.
- Visualización de datos mediante gráficos.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/expense-tracker-app.git
   cd expense-tracker-app

2. Instala las dependencias:

  ```bash
  npm install

3. Inicia el servidor json-server:

  ```bash
  json-server --watch db.json --port 8000
   
4. Inicia el servidor de desarrollo:

  ```bash
  npm run dev



## Estructura del proyecto

  ├── src
│   ├── components
│   │   ├── GraphicPanel.tsx
│   │   ├── LangPanel.tsx
│   │   ├── TotalBalance.tsx
│   ├── context
│   │   ├── FetchData.tsx
│   ├── types
│   │   ├── index.ts
│   ├── App.tsx
│   ├── App.css
├── public
│   ├── index.html
├── db.json
├── package.json
├── README.md


## Contribución
Si deseas contribuir a este proyecto, por favor haz un fork del repositorio, crea una rama con tus cambios y envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT. Puedes ver más detalles en el archivo LICENSE.