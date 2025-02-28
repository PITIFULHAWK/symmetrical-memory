//frontend/src/atoms/pageAtom.ts
import { atomWithStorage } from "jotai/utils";

export const pageAtom = atomWithStorage("page", "Login");

// Store user state with localStorage (Persistent Login)
export const authAtom = atomWithStorage("auth", {
  isAuthenticated: false,
  user: null,
});

// Store current organization view state
export const organizationViewAtom = atomWithStorage("organizationView", {
  view: "list", // "list" or "details"
  selectedOrgId: null,
});
