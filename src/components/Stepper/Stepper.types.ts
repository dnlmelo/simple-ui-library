export interface StepsProps {
  /** Index do Step ativo. Quando indefinido, o primeiro será ativado ao renderizar */
  activedStep?: number;

  /** Índices de steps completados ao iniciar.
   * Aceita um array de indíces ou a flag 'allBeforeActive.
   * Se a Flag for passada. Os passos anteriores estarão com o estado de "completos"
   * */
  completedSteps: "allBeforeActive" | "all";

  /** Array com os labels do Step. Cada item será um step  */
  steps: string[];

  /** Retorna para o componente pai qual o indice do step clicado pelo usuário.
   * Pode ser utilizado para navegação entre steps, por exemplo.
   */
  onClickStep?: React.Dispatch<React.SetStateAction<number>>;
}
