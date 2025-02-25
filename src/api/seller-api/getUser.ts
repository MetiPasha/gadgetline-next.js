import { BASE_URL } from "@/config.server";
import { IUser } from "../server-api/types";
import { apiFetch } from "../server-api/base";

export const GetUserData = async (): Promise<IUser> => {
  const data = await apiFetch<IUser>(`${BASE_URL}/auth/user`, {
    method: "GET",
  });

  return data;
};
