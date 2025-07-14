# 📚 Instrucciones para Subir 3ari9 a GitHub

Sigue estos pasos para subir tu proyecto **3ari9** a GitHub:

## 🚀 Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (verde) o el ícono **"+"** → **"New repository"**
3. Configura el repositorio:
   - **Repository name**: `3ari9-saas`
   - **Description**: `3ari9 - Plataforma de Cuentos con IA para Niños`
   - **Visibility**: Público o Privado (según prefieras)
   - ✅ **Add a README file** (déjalo marcado)
   - ✅ **Add .gitignore** → Selecciona **"Node"**
   - **License**: MIT (opcional)
4. Haz clic en **"Create repository"**

## 💻 Paso 2: Preparar el Proyecto Local

### Abrir Terminal/PowerShell
1. Presiona `Win + R`, escribe `cmd` y presiona Enter
2. Navega a tu proyecto:
```bash
cd "C:\Users\yahajjam\Desktop\TRAE  SaaS new"
```

### Inicializar Git (si no está inicializado)
```bash
git init
```

### Configurar Git (si es la primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

## 📤 Paso 3: Subir el Código

### Agregar archivos al staging
```bash
git add .
```

### Hacer el primer commit
```bash
git commit -m "🎉 Initial commit: 3ari9 - Plataforma de Cuentos con IA"
```

### Conectar con el repositorio remoto
```bash
git remote add origin https://github.com/TU-USUARIO/3ari9-saas.git
```
> ⚠️ **Importante**: Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub

### Subir el código
```bash
git branch -M main
git push -u origin main
```

## 🔐 Paso 4: Configurar Variables de Entorno (Importante)

### En GitHub (para despliegue)
1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** → **"Secrets and variables"** → **"Actions"**
3. Agrega estas variables:
   - `MONGODB_URI`: Tu URI de MongoDB
   - `JWT_SECRET`: Tu clave secreta JWT
   - `OPENAI_API_KEY`: Tu API key de OpenAI
   - `STRIPE_SECRET_KEY`: Tu clave secreta de Stripe

### Localmente
Asegúrate de que tus archivos `.env` NO se suban a GitHub:
- ✅ Ya están en `.gitignore`
- ✅ Usa `.env.example` como plantilla

## 🌐 Paso 5: Configurar Despliegue (Opcional)

### Frontend en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa el repositorio `3ari9-saas`
4. Configura:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Agrega variables de entorno en Vercel

### Backend en Railway
1. Ve a [railway.app](https://railway.app)
2. Conecta tu cuenta de GitHub
3. Importa el repositorio `3ari9-saas`
4. Configura:
   - **Root Directory**: `backend`
   - **Start Command**: `npm start`
5. Agrega variables de entorno en Railway

## 📋 Comandos de Git Útiles

### Para futuras actualizaciones
```bash
# Verificar estado
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "✨ Descripción de los cambios"

# Subir cambios
git push
```

### Para crear ramas
```bash
# Crear nueva rama
git checkout -b feature/nueva-caracteristica

# Cambiar de rama
git checkout main

# Fusionar rama
git merge feature/nueva-caracteristica
```

## 🆘 Solución de Problemas

### Error de autenticación
Si tienes problemas de autenticación:
1. Usa un **Personal Access Token** en lugar de contraseña
2. Ve a GitHub → Settings → Developer settings → Personal access tokens
3. Genera un nuevo token con permisos de repositorio

### Error de PowerShell
Si PowerShell no permite ejecutar comandos:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Archivos grandes
Si tienes archivos muy grandes (>100MB):
```bash
# Instalar Git LFS
git lfs install

# Rastrear archivos grandes
git lfs track "*.mp4"
git lfs track "*.zip"
```

## ✅ Verificación Final

Después de subir el código, verifica:
- ✅ El repositorio aparece en tu GitHub
- ✅ Todos los archivos están presentes
- ✅ Los archivos `.env` NO están en el repositorio
- ✅ El README.md se ve correctamente
- ✅ La estructura de carpetas es correcta

## 🎉 ¡Listo!

Tu proyecto **3ari9** ya está en GitHub y listo para:
- 🤝 Colaboración con otros desarrolladores
- 🚀 Despliegue automático
- 📝 Seguimiento de cambios
- 🔄 Control de versiones

---

💡 **Tip**: Guarda este archivo para futuras referencias y compártelo con tu equipo.

🌟 **¡No olvides hacer tu repositorio público y agregar una estrella!**