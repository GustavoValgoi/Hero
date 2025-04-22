/**
 * Formata a data para um formato compatível com o input do tipo "date" (YYYY-MM-DD).
 * O método divide a string da data e pega a parte da data, ignorando a parte de hora.
 *
 * @param {Date} date - A data que será formatada.
 * @returns {string} - A data formatada no formato 'YYYY-MM-DD'.
 */
export const formatDateToInput = (date: Date): string => {
  return String(date).split('T')[0];
};

/**
 * Formata a data para o formato de data brasileira (DD/MM/YYYY).
 * A função usa o método toLocaleDateString para formatar a data no padrão local.
 * O fuso horário é ajustado para UTC.
 *
 * @param {Date} date - A data que será formatada.
 * @returns {string} - A data formatada no formato 'DD/MM/YYYY'.
 */
export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};
