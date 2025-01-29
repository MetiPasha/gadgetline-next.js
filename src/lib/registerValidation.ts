import { z } from "zod";

export const RegisterFormSchema = z.object({
  firstName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید." }).trim(),
  lastName: z.string().min(2, { message: "حداقل ۲ کارکتر وارد کنید." }).trim(),
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید." }).trim(),
  password: z
    .string()
    .min(8, { message: "حداقل ۸ کارکتر" })
    .regex(/[a-zA-Z]/, { message: "شامل یک حرف باید باشد." })
    .regex(/[0-9]/, { message: "شامل یک عدد باید باشد." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "حداقل یک کارکتر عجیب بزارید.",
    }),
});

export const validateFormData = (data: Record<string, any>) => {
  try {
    // اعتبارسنجی داده‌ها با استفاده از اسکیما
    RegisterFormSchema.parse(data); // بررسی صحت داده‌ها

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

// تایپ وضعیت فرم
export type RegisterFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
