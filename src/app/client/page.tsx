"use client"

import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import "./style.scss"
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2)
})

type FormData = z.infer<typeof schema>

const MyForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  }
  
  useEffect(()=>{
    console.log(form.formState.errors.name);
  })

  return <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          {...form.register("name")}
        />
        {form.formState.errors.name && <span>{form.formState.errors.name.message}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
}

export default MyForm
