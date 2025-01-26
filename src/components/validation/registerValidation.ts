import { z } from "zod";

// تعریف اسکیما برای اعتبارسنجی
export const registrationSchema = z.object({
  firstName: z
    .string()
    .nonempty("نام را وارد کنید") // پیام برای خالی بودن
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(50, "نام نباید بیشتر از 50 کاراکتر باشد"),
  lastName: z
    .string()
    .nonempty("نام خانوادگی را وارد کنید")
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .max(50, "نام خانوادگی نباید بیشتر از 50 کاراکتر باشد"),
  email: z
    .string()
    .nonempty("ایمیل را وارد کنید")
    .email("لطفاً یک آدرس ایمیل معتبر وارد کنید"),
  password: z
    .string()
    .nonempty("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .regex(/[A-Z]/, "رمز عبور باید حداقل شامل یک حرف بزرگ باشد")
    .regex(/\d/, "رمز عبور باید حداقل شامل یک عدد باشد")
    .regex(/[!@#$%^&*]/, "رمز عبور باید حداقل شامل یک کاراکتر خاص باشد"),
});

// تایپ داده‌های فرم بر اساس اسکیما
export type RegistrationData = z.infer<typeof registrationSchema>;

// تابع اعتبارسنجی داده‌ها
export const validateFormData = (data: RegistrationData) => {
  try {
    registrationSchema.parse(data); // اعتبارسنجی داده‌ها
    return { isValid: true, errors: {} }; // اگر مشکلی نبود
  } catch (error) {
    if (error instanceof z.ZodError) {
      // استخراج خطاها
      const errors = error.errors.reduce(
        (acc: Record<string, string>, curr) => {
          acc[curr.path[0]] = curr.message; // مسیر خطا و پیام
          return acc;
        },
        {}
      );
      return { isValid: false, errors };
    }
    throw error; // مدیریت خطاهای غیرمنتظره
  }
};
