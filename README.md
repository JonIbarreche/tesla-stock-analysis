# Tesla Stock Analysis Dashboard

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react)

Un panel de análisis interactivo que proporciona una visión completa del rendimiento de mercado y las perspectivas financieras de Tesla.

![Dashboard](src/img/tesla-1.png)

## 📋 Contenido

- [Características](#características)
- [Demo](#demo)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Análisis Incluidos](#análisis-incluidos)
- [Fuentes de Datos](#fuentes-de-datos)
- [Oportunidades de Mejora](#oportunidades-de-mejora)
- [Licencia](#licencia)
- [Contributors](#contributors)

## ✨ Características

- **Dashboard Completo**: Resumen general con métricas clave del rendimiento de Tesla
- **Visualizaciones Interactivas**: Gráficos y tablas dinámicas para explorar datos financieros
- **Análisis Multidimensional**: Desde datos financieros hasta análisis técnico y sentimiento de mercado
- **Diseño Responsivo**: Experiencia de usuario optimizada en dispositivos móviles y de escritorio
- **Interfaz Intuitiva**: Navegación sencilla entre diferentes secciones de análisis

## 🚀 Demo

Puedes ver una versión en vivo del panel de análisis en [Tesla Analysis Dashboard](https://your-dashboard-url.com)

## 💻 Tecnologías Utilizadas

- **React**: Framework de frontend para la interfaz de usuario
- **Recharts**: Biblioteca de visualización de datos
- **Styled Components**: Estilizado CSS-in-JS
- **React Router**: Navegación entre páginas
- **React Icons**: Iconografía expresiva

## 📦 Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

```bash
# Clonar el repositorio
git clone https://github.com/yourusername/tesla-stock-analysis.git

# Navegar al directorio del proyecto
cd tesla-stock-analysis

# Instalar dependencias
npm install

# Configurar la variable de entorno para compatibilidad con versiones recientes de Node.js
# En Windows (PowerShell):
$env:NODE_OPTIONS='--openssl-legacy-provider'
# En Linux/MacOS:
export NODE_OPTIONS=--openssl-legacy-provider

# Iniciar el servidor de desarrollo
npm start
```

## 🖥️ Uso

Una vez que la aplicación esté ejecutándose, navega a `http://localhost:3000` en tu navegador.

El panel de navegación lateral te permite acceder a las diferentes secciones de análisis:

- Dashboard: Resumen general
- Financial Data: Análisis detallado de ingresos, márgenes y finanzas
- Market Sentiment: Análisis de sentimiento y tendencias de mercado
- Technical Analysis: Indicadores técnicos y patrones de precio
- Competitor Comparison: Comparativa con competidores del sector
- Intrinsic Value: Valoración y análisis fundamental
- Investment Thesis: Recomendaciones de inversión basadas en análisis integral

## 🏗️ Estructura del Proyecto

```
tesla-stock-analysis/
├── public/               # Archivos estáticos
├── src/                  # Código fuente
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Páginas de la aplicación
│   ├── data/             # Datos simulados y utilidades
│   ├── utils/            # Funciones auxiliares
│   ├── assets/           # Recursos estáticos
│   ├── context/          # Contextos de React
│   ├── hooks/            # Hooks personalizados
│   └── img/              # Imágenes utilizadas
└── README.md             # Documentación
```

## 📊 Análisis Incluidos

### Datos Financieros
Análisis detallado de ingresos, márgenes de beneficio, balance general y flujo de efectivo.

![Financial Data](src/img/tesla-2.png)

### Análisis Técnico
Gráficos de precios históricos, niveles de soporte/resistencia e indicadores técnicos.

![Technical Analysis](src/img/tesla-3.png)

### Sentimiento del Mercado
Evaluación de calificaciones de analistas, objetivos de precio y sentimiento en redes sociales.

### Comparación con Competidores
Análisis comparativo de Tesla frente a otros fabricantes de automóviles y competidores de vehículos eléctricos.

### Análisis de Valor Intrínseco
Valoración utilizando metodología de flujo de caja descontado (DCF) y múltiplos de valoración.

### Tesis de Inversión
Análisis DAFO, evaluación de riesgos y recomendaciones para diferentes tipos de inversores.

## 📈 Fuentes de Datos

Actualmente, la aplicación utiliza datos simulados para demostración. En una implementación real, los datos se obtendrían de:

- APIs financieras (Yahoo Finance, Alpha Vantage, etc.)
- Informes trimestrales y anuales de Tesla
- Datos de mercado en tiempo real
- Análisis de sentimiento de fuentes de noticias y redes sociales

## 🚧 Oportunidades de Mejora

- Integración con APIs financieras en tiempo real
- Implementación de análisis predictivo utilizando aprendizaje automático
- Adición de alertas personalizables para movimientos significativos
- Implementación de funcionalidades de escenarios hipotéticos (what-if)
- Expansión para analizar múltiples acciones y crear portafolios

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

## Contributors

- Jon Ibarreche <jon.ibarreche@opendeusto.es>
