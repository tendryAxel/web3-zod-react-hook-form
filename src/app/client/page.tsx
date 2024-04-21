"use client"

import { useEffect } from "react";
import { FieldError, FieldErrors, UseFormRegister, useForm } from "react-hook-form"
import { z } from "zod"
import "./style.scss"
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(0),
  email: z.string().email(),
  phone: z.string().length(10),
})

type FormData = z.infer<typeof schema>

const Input = ({
  register,
  errors,
  placeholder,
  registerName,
} : {
  register: UseFormRegister<FormData>,
  errors: FieldError | undefined,
  placeholder: string,
  registerName: "name" | "email" | "phone",
}) => {
  return <>
  <input
          type="tel"
          placeholder={placeholder}
          {...register(registerName)}
        />
        {errors && <span>{errors.message}</span>}</>
}

const MyForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  }
  
  useEffect(()=>{
  })

  return <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input
          register={form.register}
          errors={form.formState.errors.name}
          registerName="name"
          placeholder="Name"/>
        <Input
          register={form.register}
          errors={form.formState.errors.email}
          registerName="email"
          placeholder="Email"/>
        <Input
          register={form.register}
          errors={form.formState.errors.phone}
          registerName="phone"
          placeholder="Tel: 032 12 345 67"/>
        <button type="submit">Submit</button>
      </form>
    </div>
}

export default MyForm
