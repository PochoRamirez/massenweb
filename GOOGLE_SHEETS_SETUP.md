# Configuración de Google Sheets para Precios Dinámicos

## Pasos para configurar:

### 1. Crear Google Sheet
1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nombra las columnas en la primera fila:
   - A1: `id`
   - B1: `name`
   - C1: `type`
   - D1: `price`
   - E1: `image`
   - F1: `description`

### 2. Agregar datos de ejemplo:
```
id | name                      | type         | price           | image    | description
1  | Tablones de Roble Premium | Madera Dura  | Desde $45/pie²  | #d2b48c  | Hermosos tablones de roble perfectos para pisos
2  | Madera de Cedro          | Madera Blanda| Desde $28/pie²  | #deb887  | Madera de cedro aromática ideal para exteriores
3  | Tablas de Nogal          | Madera Dura  | Desde $65/pie²  | #cd853f  | Rica madera de nogal con patrones impresionantes
4  | Pino para Construcción   | Madera Blanda| Desde $18/pie²  | #f4e4bc  | Madera de pino confiable para construcción
```

### 3. Publicar la hoja:
1. Archivo → Compartir → Publicar en la web
2. Selecciona "Hoja 1" o la hoja que contiene los productos
3. Formato: "Valores separados por comas (.csv)"
4. Copia la URL generada

### 4. Actualizar el código:
En `products.component.ts`, reemplaza la URL en la línea:
```typescript
const sheetUrl = 'TU_URL_DE_GOOGLE_SHEETS_AQUI';
```

## Ventajas:
- ✅ Editar precios desde cualquier dispositivo
- ✅ No necesita conocimientos técnicos
- ✅ Cambios se reflejan automáticamente
- ✅ Historial de cambios en Google Sheets
- ✅ Colaboración en tiempo real

## Para cambiar precios:
1. Abre tu Google Sheet
2. Modifica el precio en la columna D
3. Los cambios se verán en la web en unos minutos
4. Los usuarios verán los nuevos precios al recargar

## Notas importantes:
- La hoja debe estar publicada públicamente
- Mantén el formato de las columnas
- Los tipos deben ser exactamente "Madera Dura" o "Madera Blanda"
- Los colores en formato hexadecimal (#d2b48c)