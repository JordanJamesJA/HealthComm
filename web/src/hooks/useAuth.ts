import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import type { AuthContextValue } from "../contexts/AuthTypes";

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
