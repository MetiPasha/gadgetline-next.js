import { z } from "zod";

export const registrationSchema = z.object({
  firstName: z
    .string()
    .min(2, "نام باید حداقل 2 کاراکتر باشد")
    .max(50, "نام نباید بیشتر از 50 کاراکتر باشد"),
  lastName: z
    .string()
    .min(2, "نام خانوادگی باید حداقل 2 کاراکتر باشد")
    .max(50, "نام خانوادگی نباید بیشتر از 50 کاراکتر باشد"),
  email: z.string().email("لطفاً یک آدرس ایمیل معتبر وارد کنید"),
  password: z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .regex(/[A-Z]/, "حداقل یک حرف بزرگ وارد کنید")
    .regex(/\d/, "حداقل یک عدد وارد کنید")
    .regex(/[!@#$%^&*]/, "حداقل یک کاراکتر خاص وارد کنید"),
  agreed: z
    .boolean()
    .refine((val) => val === true, "لطفاً شرایط و قوانین را بپذیرید"),
});

export type RegistrationData = z.infer<typeof registrationSchema>;

export const validateFormData = (data: RegistrationData) => {
  try {
    registrationSchema.parse(data);
    return { isValid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce(
        (acc: Record<string, string>, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        },
        {}
      );
      return { isValid: false, errors };
    }
    throw error;
  }
};
