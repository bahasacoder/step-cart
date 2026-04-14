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

export default function FormEditItem({ id }: { id: string }) {
  const satupost = posts.find((post) => post.id === id)
  if (!satupost) {
    return <div>Loading...</div>;
  }

    const formSchema = z.object({
    "text-0": z.string(),
    "text-input-product-name-0": z.string().min(1, { message: "This field is required" }),
    "text-input-date-time-0": z.string().min(1, { message: "This field is required" }),
    "email-input-0": z
      .string()
      .min(1, { message: "This field is required" }),
    "select-0": z.string().min(1, { message: "This field is required" }),
    "file-input-0": z.string().min(1, { message: "This field is required" }),
    "file-input-1": z.string(),
    "textarea-0": z
      .string()
      .min(1, { message: "This field is required" })
      .min(100, { message: "Must be at least 100 characters" }),
    "select-payment-method-0": z.string().min(1, { message: "This field is required" }),
    "checkbox-0": z
      .boolean({
        error: "This field is required.",
      })
      .refine((value) => value === true, {
        message: "This field is required.",
      }),
    "submit-button-0": z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "text-0": "",
      "text-input-product-name-0": "",
      "text-input-date-time-0": "", 
      "select-0": "",
      "file-input-0": "",
      "file-input-1": "",
      "textarea-0": "",
      "checkbox-0": false,
      "select-payment-method-0": "",
      "submit-button-0":"",
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
    <div>
      <h2>Edit Post</h2>
      <p>Title: {satupost.title}</p>
      <p>Content: {satupost.content}</p>
    </div>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      onReset={onReset}
      className="space-y-8 @container"
    >
      <div className="grid grid-cols-12 gap-4">
        <div key="text-0" id="text-0" className=" col-span-12 col-start-auto">
          <p className="leading-7 not-first:mt-6">
            <span className="text-lg font-semibold">Job Application</span>
            <br />
            <span className="text-sm text-muted-foreground">
              Apply for the position and join our team.
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Field key="text-input-product-name-0" className="col-span-12 col-start-auto">
          <FieldLabel>Product Name</FieldLabel>
          <FieldDescription>
            Please enter the name of the product you want to apply for. This will help us identify the position you are interested in.
          </FieldDescription>
          <InputGroup>  
            <Controller
              control={form.control}
              name="text-input-product-name-0"
              render={({ field }) => (        
                <Input
                  {...field}
                  id="text-input-product-name-0"
                  placeholder="Enter product name"  
                />
              )}
            />
          </InputGroup>
          </Field>
        </div>
        </form>

    </>
    
  );
}

