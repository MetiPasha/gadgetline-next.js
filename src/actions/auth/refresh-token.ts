"use server";

import { apiFetch } from "@/api/server-api/base";
import { AUTH_BASE_URL } from "@/config.server";
import { auth, createSession, deleteSession } from "@/lib/session";

export async function refreshTokenAction() {
  try {
    const { refreshToken } = await auth();
    const data = await apiFetch<{ accessToken: string; refreshToken: string }>(
      AUTH_BASE_URL + "/refresh",
      {
        method: "post",
        body: JSON.stringify({ refreshToken }),
      }
    );
    await createSession(data);
  } catch (e) {
    console.log(e);
    await deleteSession();
    // redirect("/auth/login");
  }
}
