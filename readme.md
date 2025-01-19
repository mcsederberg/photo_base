# Plantilla de galería de fotos

Este repositorio es una plantilla para crear galerías de fotos alojadas en GitHub Pages.

## Cómo usar

1. **Bifurcar el repositorio**:
- Ejecutar el script `create_and_clone_repo.bat` (opcional si está automatizado).
- Alternativamente, bifurcar este repositorio manualmente desde GitHub.

2. **Clonar el repositorio**:
- Usar el comando:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

3. **Agregar fotos**:
- Colocar todas las fotos del evento en la carpeta `photos/`.

4. **Subir cambios**:
- Ejecutar el script `subir.bat` para confirmar y enviar los cambios.

5. **Ver la galería**:
- Habilitar GitHub Pages en la configuración del repositorio.
- La galería estará accesible en:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## Notas
- Asegúrate de que las fotos estén en formatos web comunes (por ejemplo, JPG, PNG).
- Mantén los nombres de archivo cortos y evita espacios o caracteres especiales.

## Automatizaciones
- Una acción de GitHub genera automáticamente un archivo `photos.json` cuando se agregan fotos a la carpeta `photos/`.
- La galería muestra dinámicamente todas las fotos enumeradas en `photos.json`.