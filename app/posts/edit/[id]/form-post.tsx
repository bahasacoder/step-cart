"use client"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import posts from "@/db/posts.json";

export default function FormEditPost({ id }: { id: string }) {
  const satupost = posts.find((post) => post.id === id)
  if (!satupost) {
    return <div>Loading...</div>;
  }

    const formSchema = z.object({
    "text-0": z.string(),
    "text-id-0": z.string().min(1, { message: "This field is required" }),
    "text-title-0": z.string().min(1, { message: "This field is required" }),
    "text-content-0": z.string().min(1, { message: "This field is required" }),
    "text-created-0": z.string().optional(),
    "submit-button-0": z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "text-0": "",
      "text-id-0": satupost.id,
      "text-title-0": satupost.title,
      "text-content-0": satupost.content,
      "text-created-0": satupost.createdAt,
      "submit-button-0": "",
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  
  return (
    <> 
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      onReset={onReset}
      className="space-y-8 @container"
    >
      <div className="grid grid-cols-12 gap-4">
        <div key="text-0" id="text-0" className=" col-span-12 col-start-auto">
          <p className="leading-7 not-first:mt-6">
            <span className="text-lg font-semibold">Post Edit</span>
          </p>
        </div>
      </div>
      <Controller
          control={form.control}
          name="text-id-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">ID post</FieldLabel>

              <Input
                key="input-id-0"
                placeholder="ID post"
                type="text"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />        
      <Controller
          control={form.control}
          name="text-title-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Title Post</FieldLabel>

              <Input
                key="input-title-0"
                placeholder="Title Post"
                type="text"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      <Controller
          control={form.control}
          name="text-content-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Content Post</FieldLabel>

              <Input
                key="input-content-0"
                placeholder="Content Post"
                type="text"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
                
      <Controller
          control={form.control}
          name="text-created-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Create Post</FieldLabel>

              <Input
                key="input-created-0"
                placeholder="Created Posts"
                type="text"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit" variant="default">
          Submit
        </Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>

      </form>

    </>
    
  );
}
