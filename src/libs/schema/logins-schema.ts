import zod from 'zod'

export const loginSchema = zod.object({
  email: zod.string({
    required_error: 'Email harus di isi',
    invalid_type_error: 'Format email tidak valid',
  }),
  password: zod
    .string({
      required_error: 'Password harus di isi',
      invalid_type_error:
        'Format password tidak valid, terdiri dari minimal 6 karakter',
    })
    .refine(
      (value) => {
        // Validasi bahwa password memiliki minimal 6 karakter
        return value.length >= 6
      },
      {
        message: 'Password harus memiliki minimal 6 karakter',
      },
    ),
})
