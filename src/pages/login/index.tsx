import { Form, FormField, FormItem, FormMessage } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { loginSchema } from '@/libs/schema/logins-schema'
import 'react-toastify/dist/ReactToastify.css'
import { Input } from '@/components/input'
import { Eye, EyeOff, Lock, MailIcon } from 'lucide-react'
import { useState } from 'react'

export default function Login() {
  const [isShow, setIsShow] = useState<boolean>(false)

  const form = useForm<zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  })

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-1/4 flex-col gap-32 rounded-2xl border bg-white p-48 shadow-lg phones:w-[80%]">
        {/* --- Logo --- */}
        <div className="flex items-center justify-center">
          <img
            src="/img/logo-md.png"
            alt="Logo"
            className="h-[12rem] w-[12rem]"
            loading="lazy"
          />
        </div>
        <Form {...form}>
          <form
            className="flex flex-col gap-32"
            // onSubmit={form.handleSubmit(handleSubmit)}
          >
            {/* --- Form --- */}
            <div className="flex flex-col gap-12">
              <FormField
                control={form?.control}
                name="email"
                render={({ field }) => (
                  <FormItem
                    className={`flex flex-col gap-y-8 text-[2rem] text-black`}
                  >
                    <Input
                      {...field}
                      className="bg-white"
                      type="email"
                      placeholder="Email"
                      value={field.value}
                      prefix={<MailIcon size={16} />}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form?.control}
                name="password"
                render={({ field }) => (
                  <FormItem
                    className={`flex flex-col gap-y-8 text-[2rem] text-black`}
                  >
                    <Input
                      {...field}
                      className="bg-white"
                      type={!isShow ? 'password' : 'text'}
                      placeholder="Password"
                      value={field.value}
                      prefix={<Lock size={16} />}
                      suffix={
                        <span
                          onClick={() => {
                            setIsShow(!isShow)
                          }}
                        >
                          {!isShow ? <Eye size={16} /> : <EyeOff size={16} />}
                        </span>
                      }
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* --- Button --- */}
            <div className="flex flex-col gap-12">
              <button
                type="submit"
                className="rounded-lg bg-primary-300 py-16 text-[2rem] text-primary-100 hover:bg-primary-500 phones:text-[2.4rem]"
              >
                Login
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-12 rounded-lg border border-border py-16 text-[2rem] hover:border-primary-500 phones:text-[2.4rem]"
              >
                <img src="/svg/google-sm.svg" alt="Google" loading="lazy" />
                Login with Google
              </button>
              <div className="flex flex-col gap-4">
                <p className="text-center font-nunito text-[2rem]">
                  Forgot Password
                </p>
                <p className="text-center font-nunito text-[2rem]">
                  Don't have an account?{' '}
                  <span className="text-primary-300">Register</span>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
