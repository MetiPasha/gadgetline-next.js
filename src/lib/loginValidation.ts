import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید." }).trim(),
  password: z
    .string()
    .min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد." }) // حداقل 6 کاراکتر
    .regex(/[A-Z]/, { message: "رمز عبور باید حداقل یک حرف بزرگ داشته باشد." }) // حاوی یک حرف بزرگ
    .regex(/[a-z]/, { message: "رمز عبور باید حداقل یک حرف کوچک داشته باشد." }) // حاوی یک حرف کوچک
    .regex(/[0-9]/, { message: "رمز عبور باید حداقل یک عدد داشته باشد." }) // حاوی یک عدد
    .regex(/[\W_]/, {
      message: "رمز عبور باید حداقل یک نماد (مثل @, #) داشته باشد.",
    }) // حاوی یک نماد
    .trim(),
});

// تایپ وضعیت فرم لاگین
export type LoginFormState =
  | {
      errors?: {
        email?: string[]; // ارورهای ایمیل
        password?: string[]; // ارورهای رمز عبور
      };
      message?: string; // پیام عمومی
    }
  | undefined;

export const validateLoginData = (data: {
  email: string;
  password: string;
}) => {
  try {
    // اعتبارسنجی داده‌ها با استفاده از اسکیما
    LoginFormSchema.parse(data);

    return { isValid: true, errors: {} }; // داده‌ها معتبر هستند
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce(
        (acc: Record<string, string[]>, curr) => {
          const key = curr.path[0];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(curr.message); // جمع‌آوری خطاها
          return acc;
        },
        {}
      );

      return { isValid: false, errors }; // خطاها جمع‌آوری شد
    }
    throw error; // مدیریت خطاهای دیگر
  }
};
