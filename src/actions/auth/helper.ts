import type { IUser } from "@/api/server-api/types";

export function chooseAuthRedirectPath(role: IUser["role"] | undefined) {
  switch (role) {
    case 1:
      return "/";
    case 2:
      return "/sellerp";
    case 3:
      return "/admin/dashboard";
    default:
      return "/auth/login";
  }
}
