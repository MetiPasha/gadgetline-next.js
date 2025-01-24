// validateLogin.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("ایمیل نباید خالی باشد")
    .email("فرمت ایمیل نادرست است"),
  password: z
    .string()
    .nonempty("رمز عبور نباید خالی باشد")
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
});

const validateLogin = (data: { email: string; password: string }) => {
  try {
    loginSchema.parse(data);
    return { isValid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {} as Record<string, string>);
      return { isValid: false, errors };
    }
    return { isValid: false, errors: {} };
  }
};

export default validateLogin;
