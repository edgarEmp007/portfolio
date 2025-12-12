// portfolio/components/ContributionGraph.tsx
'use client';

import styles from './ContributionGraph.module.css';

// --- TIPOS (TYPES) ---
type Contribution = {
  date: string;
  count: number;
};

type ContributionGraphProps = {
  contributions: Contribution[];
  viewMode: 'normal' | 'fullscreen';
  onClose?: () => void; // Función para cerrar la vista fullscreen desde el padre
};

// --- FUNCIONES AUXILIARES (HELPERS) ---

/**
 * Formatea un objeto Date a un string 'YYYY-MM-DD' para usar como clave.
 */
const formatDateKey = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Devuelve el nombre de la animación GIF según el número de contribuciones.
 * Basado en estadísticas de la industria para un reflejo más realista.
 */
const getAnimationForCount = (count: number): string | null => {
  if (count >= 1 && count <= 2) return 'relaxed';
  if (count >= 3 && count <= 8) return 'normal';
  if (count >= 9 && count <= 15) return 'tired';
  if (count > 15) return 'angry';
  return null;
};

/**
 * Devuelve un código de color teal según el número de contribuciones.
 * Escala basada en el color de acento #00BFA5.
 */
const getColorForCount = (count: number): string => {
  if (count >= 1 && count <= 2) return '#004d40'; // Teal muy oscuro
  if (count >= 3 && count <= 8) return '#00695c'; // Teal oscuro
  if (count >= 9 && count <= 15) return '#00897b'; // Teal medio
  if (count > 15) return '#00BFA5'; // Teal brillante (Accent)
  return '#2d333b'; // Color base para días sin contribuciones (gris oscuro)
};

// --- COMPONENTE PRINCIPAL ---

const ContributionGraph = ({ contributions, viewMode, onClose }: ContributionGraphProps) => {
  // --- PREPARACIÓN DE DATOS ---

  // 1. Generar la lista de todos los días de los últimos 6 meses (183 días).
  const today = new Date();
  const days = Array.from({ length: 183 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    return date;
  }).reverse(); // Ordenar de más antiguo a más reciente.

  // 2. Crear un mapa para buscar contribuciones de forma eficiente (O(1) lookup).
  const contributionsMap = new Map<string, number>();
  contributions.forEach(contrib => {
    const dateKey = new Date(contrib.date).toISOString().split('T')[0];
    contributionsMap.set(dateKey, contrib.count);
  });

  // --- RENDERIZADO (JSX) ---

  return (
    <div className={`${styles.graphWrapper} ${viewMode === 'fullscreen' ? styles.fullscreen : ''}`}>
      {/* Botón para cerrar la vista fullscreen, solo visible en ese modo */}
      {viewMode === 'fullscreen' && (
        <button onClick={onClose} className={styles.toggleButton}>
          Cerrar
        </button>
      )}

      <div className={styles.graphContainer}>
        <div className={styles.graph}>
          {days.map(date => {
            const dateKey = formatDateKey(date);
            const count = contributionsMap.get(dateKey) || 0;
            const readableDate = date.toLocaleDateString('es-MX', {
              year: 'numeric', month: 'long', day: 'numeric',
            });

            return (
              <div
                key={dateKey}
                className={styles.cell}
                style={viewMode === 'normal' ? { backgroundColor: getColorForCount(count) } : {}}
              >
                {/* Renderizado condicional: GIF en fullscreen, color en normal */}
                {viewMode === 'fullscreen' && count > 0 && (
                  <img
                    src={`/stats-animations/${getAnimationForCount(count)}.gif`}
                    alt={`Contribuciones: ${count}`}
                    className={styles.gif}
                  />
                )}

                {/* Tooltip que se muestra al hacer hover */}
                <span className={styles.tooltip}>
                  {count > 0 ? `${count} contribuciones` : 'Sin contribuciones'} el {readableDate}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;