import { defineStore } from "pinia";
import { BURI, CHICKEN } from "../../constants/mode";

export const useModeStore = defineStore("counter", {
  state: () => ({ mode: CHICKEN }),
  getters: {
    getMode: (state) => state.mode,
  },
  actions: {
    switchMode() {
      this.mode = this.mode === CHICKEN ? BURI : CHICKEN;
    },
    setMode(mode) {
      // mode only can be chicken or buri
      this.mode = mode;
    },
  },
});
