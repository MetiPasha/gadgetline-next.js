import { AUTH_BASE_URL } from "@/config.server";
import type { LoginType, RegisterType } from "@/lib/validations";
import { apiFetch } from "./base";
import type { LoginResponse, RegisterResponse } from "./types";

export async function loginRequest(params: LoginType) {
  const data = await apiFetch<LoginResponse>(`${AUTH_BASE_URL}/login`, {
    method: "post",
    body: JSON.stringify(params),
  });
  return data;
}
export async function registerAdminRequest(params: RegisterType) {
  const data = await apiFetch<RegisterResponse>(
    `${AUTH_BASE_URL}/admin/register`,
    {
      method: "post",
      body: JSON.stringify(params),
    }
  );
  return data;
}
export async function registerUserRequest(params: RegisterType) {
  const data = await apiFetch<RegisterResponse>(`${AUTH_BASE_URL}/register`, {
    method: "post",
    body: JSON.stringify(params),
  });
  return data;
}

export async function registerShopRequest(params: RegisterType) {
  const data = await apiFetch<RegisterResponse>(
    `${AUTH_BASE_URL}/seller/register`,
    {
      method: "post",
      body: JSON.stringify(params),
    }
  );
  return data;
}
