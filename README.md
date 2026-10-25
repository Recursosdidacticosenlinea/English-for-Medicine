# English for Medicine

Sitio web de práctica autónoma de inglés con propósitos específicos (ESP) para la Licenciatura en Medicina, CAA Virtual, BUAP.
Usa el mismo motor que *English for Communication*. Todo el contenido para alumnos está en inglés.

## Unidades (15)

Cada unidad se conecta con una materia del Plan de Estudios 2016 de la Facultad de Medicina.

| Nivel | Unidad | Materia | Gramática / enfoque |
| --- | --- | --- | --- |
| A1 | Meet the Body | Anatomía Integral | partes del cuerpo, have / has, this / these, plurales |
| A1 | Inside the Cell | Biología Celular | there is / there are, preposiciones de lugar |
| A1 | Safety First in the Lab | Bioquímica (laboratorio) | imperativos, can / can't, secuenciadores |
| A1 | A Day at Med School | Psicología Médica | presente simple, rutinas, adverbios de frecuencia |
| A1 | How Does It Work? | Fisiología | presente simple (he / she / it), órganos y funciones |
| A2 | Where Does It Hurt? | Clínica Propedéutica | pasado simple, preguntas de historia clínica |
| A2 | Bugs and Germs | Microbiología y Virología | comparativos y superlativos |
| A2 | A Healthy Plate | Nutriología Médica | contables / incontables, some / any, how much / many |
| A2 | Take Two a Day | Farmacología | should / shouldn't, dosis y frecuencia |
| A2 | On the Ward | Práctica Clínica I | presente continuo vs. presente simple, signos vitales |
| B1 | Prevention Is Better | Salud Pública / Epidemiología | primer condicional, unless, as soon as |
| B1 | The Case Presentation | Medicina Interna | presente perfecto con for / since vs. pasado |
| B1 | Informed Consent | Bioética y Derechos Humanos | must, have to, mustn't, don't have to |
| B1 | What the Study Found | Metodología de la Investigación / Bioestadística | voz pasiva, estructura de un abstract |
| B1 | Code Red in the ER | Urgencias (IRP) | pasado continuo vs. pasado simple, ABCDE |

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal con las unidades, filtros por nivel y buscador (también busca por materia). |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad | `index.html` + `data.js`. |
| `_template/` | Copia de una unidad para crear temas nuevos (por ejemplo, unidades B2). |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `english-for-medicine`.
2. Sube todo el contenido de esta carpeta (no la carpeta en sí).
3. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
4. El sitio queda en `https://TU-USUARIO.github.io/english-for-medicine/`.

## Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos).
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta, pon la materia en `subject` y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html` (con `subject`). Para B2, agrega también `{key:"B2", …}` en `GROUPS` y `"B2"` en `LEVELS`.

## Notas

- **Speaking, actividad 1 (Voice practice):** el alumno elige un papel, la computadora lee al otro personaje y el alumno dice sus líneas. El reconocimiento de voz del navegador revisa si se entendió (75 % de las palabras o más). Funciona en Google Chrome y Microsoft Edge (y en Safari reciente). En otros navegadores aparece un aviso. El audio lo procesa el servicio de voz del navegador (en Chrome, Google); no se guarda en el sitio.

- El progreso se guarda en el navegador con la clave `med:` (distinta de `esp:` y `caa:`), así que no se mezcla con los otros sitios.
- Los personajes de cada unidad tienen su voz (mujer/hombre) en `speakers` dentro de su `data.js`.
- El contenido médico es simplificado para fines de aprendizaje del idioma; conviene que un docente de la Facultad lo revise.
