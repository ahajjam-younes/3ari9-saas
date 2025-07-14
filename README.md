# 3ari9 - Plataforma de Cuentos con IA

🌟 **3ari9** es una plataforma SaaS moderna que utiliza inteligencia artificial para crear cuentos personalizados para niños. Inspirada en el diseño de DreamTales.ai, ofrece una experiencia única de narración interactiva.

## ✨ Características Principales

- 🎨 **Interfaz Moderna**: Diseño inspirado en DreamTales.ai con gradientes púrpura-rosa-naranja
- 🤖 **IA Generativa**: Creación automática de cuentos personalizados
- 👨‍👩‍👧‍👦 **Gestión Familiar**: Sistema de perfiles para padres e hijos
- 💳 **Suscripciones**: Planes flexibles (Básico, Pro, Familiar)
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 🎵 **Multimedia**: Soporte para audio e ilustraciones

## 🚀 Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones fluidas
- **React Context** - Gestión de estado

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **JWT** - Autenticación

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- MongoDB

### Configuración del Proyecto

1. **Clonar el repositorio**
```bash
git clone https://github.com/ahajjam-younes/3ari9-saas.git
cd 3ari9-saas
```

2. **Instalar dependencias**
```bash
# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd frontend
npm install
```

3. **Configurar variables de entorno**

**Backend (.env)**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/3ari9
JWT_SECRET=tu_jwt_secret_aqui
OPENAI_API_KEY=tu_openai_api_key
```

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_APP_NAME=3ari9
```

## 🏃‍♂️ Ejecución

### Desarrollo

1. **Iniciar el backend**
```bash
cd backend
npm run dev
```

2. **Iniciar el frontend**
```bash
cd frontend
npm run dev
```

3. **Acceder a la aplicación**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Producción

```bash
# Build del frontend
cd frontend
npm run build
npm start

# Iniciar backend en producción
cd backend
npm start
```

## 📁 Estructura del Proyecto

```
3ari9-saas/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Controladores de la API
│   │   ├── models/         # Modelos de MongoDB
│   │   ├── routes/         # Rutas de la API
│   │   ├── middleware/     # Middleware personalizado
│   │   └── index.js        # Punto de entrada
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── app/           # App Router de Next.js
│   │   ├── components/    # Componentes React
│   │   ├── context/       # Context providers
│   │   └── lib/          # Utilidades
│   ├── public/           # Archivos estáticos
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🎨 Componentes Principales

### Frontend
- **HeroSection**: Sección principal con branding 3ari9
- **FeaturesSection**: Características del producto
- **PricingSection**: Planes de suscripción
- **Dashboard**: Panel de usuario
- **StoryCreator**: Creador de cuentos

### Contextos
- **AuthContext**: Gestión de autenticación
- **StoryContext**: Gestión de cuentos
- **SubscriptionContext**: Gestión de suscripciones

## 🔧 Scripts Disponibles

### Frontend
```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting
```

### Backend
```bash
npm run dev          # Desarrollo con nodemon
npm start            # Producción
```

## 🚀 Despliegue

### Vercel (Frontend)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

### Railway/Heroku (Backend)
1. Conectar repositorio
2. Configurar variables de entorno
3. Deploy automático

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit los cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Proyecto**: 3ari9 - Plataforma de Cuentos con IA
- **Repositorio**: [GitHub](https://github.com/ahajjam-younes/3ari9-saas)

---

⭐ **¡No olvides dar una estrella al proyecto si te ha sido útil!**