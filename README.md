# AROKIA — Construcción e Ingeniería Inmobiliaria S.A.C.

Sitio web corporativo y portafolio de obras para **AROKIA Construcción e Ingeniería Inmobiliaria S.A.C.** — Contratistas Generales especializados en edificación de obras civiles, ingeniería estructural sismo-resistente y gerencia de construcción para desarrolladoras inmobiliarias e inversionistas en Lima, Perú.

## 🚀 Tecnologías y Arquitectura
- **Frontend**: HTML5 Semántico, Vanilla CSS (Design System con tokens HSL, temas claro/oscuro), JavaScript ES6+.
- **Páginas**:
  - `index.html`: Portal principal con propuesta de valor, rol contratista general, maquinaría, proyectos destacados, avance de obras y selector interactivo de modelos de diseño.
  - `proyectos.html`: Portafolio interactivo de obras con filtrado dinámico por estado (en construcción, culminadas), tipología y distrito.
  - `proyecto-detalle.html`: Ficha técnica de obra con memoria descriptiva, alcance de contratación, planos estructurales SVG, estándares de calidad QA/QC, cronograma valorizado y formulario de cotización técnica.
- **Servidor Web & Despliegue**: Nginx Alpine (`Dockerfile` + `nginx.conf`) optimizado para Coolify con compresión Gzip, caché de estáticos y cabeceras de seguridad.

## 📦 Despliegue en Coolify
Este repositorio está preparado para despliegue automático en Coolify utilizando tanto el build pack **Static** como **Dockerfile**.
- **Puerto expuesto**: `80`
- **Dominio**: `https://arioka.molinazdev.lat/`
