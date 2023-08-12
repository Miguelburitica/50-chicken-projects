import { createPinia } from "pinia";

export const pinia = createPinia();

export function useStore() {
  return pinia.useStore();
}
