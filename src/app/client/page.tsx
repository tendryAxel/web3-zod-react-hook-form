"use client"

import { useEffect } from "react";
import { useForm } from "react-hook-form"
import "./style.scss"

interface FormData {
  name?: string;
}

const MyForm = () => {
  const form = useForm<FormData>();

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
          {...form.register("name", {
            required: {
              value: true,
              message: "It's required",
            } ,
            maxLength: {
              value: 20,
              message: "The max length is exeded"
            }
          })}
        />
        {form.formState.errors.name && <span>{form.formState.errors.name.message}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
}

export default MyForm
