<<<<<<< HEAD
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
    "select-0": z.string().min(1, { message: "This field is required" }),
    "file-input-0": z.string().min(1, { message: "This field is required" }),
    "file-input-1": z.string(),
    "text-input-image-link-0": z.string().url({ message: "Please enter a valid URL" }),
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
      "text-input-image-link-0": "",
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
      <Controller
          control={form.control}
          name="text-input-product-name-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Product Name</FieldLabel>

              <Input
                key="input-product-name-0"
                placeholder="Product Name"
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
          name="select-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">
                Position Side
              </FieldLabel>

              <Select
                key="select-0"
                value={field.value}
                name={field.name}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="developer" value="one-row">
                    One Row
                  </SelectItem>
                  <SelectItem key="designer" value="left-block">
                    Left Block
                  </SelectItem>
                  <SelectItem key="manager" value="right-block">
                    Right Block
                  </SelectItem>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        
        <Controller
          control={form.control}
          name="file-input-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Image Product</FieldLabel>

              <Input
                key="file-image-product-0"
                placeholder=""
                type="file"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        
        <Controller
          control={form.control}
          name="textarea-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">
                Description Your Product
              </FieldLabel>

              <Textarea
                key="textarea-description-product-0"
                id="textarea-0"
                placeholder="Describe your product..."
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="text-input-image-link-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Image Link</FieldLabel>

              <Input
                key="input-image-link-0"
                placeholder="Image Link"
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
          name="text-input-date-time-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Tanggal Input</FieldLabel>

              <Input
                key="input-date-time-0"
                placeholder="data-time"
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
          name="select-payment-method-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">
                Payment Method
              </FieldLabel>

              <Select
                key="select-0"
                value={field.value}
                name={field.name}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="virtual-account" value="virtual-account">
                    Virtual Account
                  </SelectItem>
                  <SelectItem key="ewallet" value="ewallet">
                    E-Wallet
                  </SelectItem>
                  <SelectItem key="bank-transfer" value="bank-transfer">
                    Bank Transfer
                  </SelectItem>
                  <SelectItem key="otc-payment" value="OTC-payment">
                    Overh-the-counter payments (OTC)
                  </SelectItem>
                  <SelectItem key="qris" value="qris">
                    Qris
                  </SelectItem>
                  <SelectItem key="paylater" value="paylater">
                    Paylater
                  </SelectItem>
                  <SelectItem key="credit-card" value="credit-card">
                    Credit Card
                  </SelectItem>
                  <SelectItem key="direct-debit" value="direct-debit">
                    Direct Debit
                  </SelectItem>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        
        <Controller
          control={form.control}
          name="checkbox-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="hidden w-auto!">
                Shipping Methode
              </FieldLabel>

              <div
                key="checkbox-0"
                className="border-0 p-0 w-full flex items-start has-[[data-state=checked]]:border-primary"
              >
                <Checkbox
                  id="checkbox-0"
                  name={field.name}
                  className=""
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <div className="grid gap-1.5 leading-none">
                  <FieldLabel>
                    I confirm that all information provided is accurate
                  </FieldLabel>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

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

=======
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
    "select-0": z.string().min(1, { message: "This field is required" }),
    "file-input-0": z.string().min(1, { message: "This field is required" }),
    "file-input-1": z.string(),
    "text-input-image-link-0": z.string().url({ message: "Please enter a valid URL" }),
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
      "text-input-image-link-0": "",
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
      <Controller
          control={form.control}
          name="text-input-product-name-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Product Name</FieldLabel>

              <Input
                key="input-product-name-0"
                placeholder="Product Name"
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
          name="select-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">
                Position Side
              </FieldLabel>

              <Select
                key="select-0"
                value={field.value}
                name={field.name}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="developer" value="one-row">
                    One Row
                  </SelectItem>
                  <SelectItem key="designer" value="left-block">
                    Left Block
                  </SelectItem>
                  <SelectItem key="manager" value="right-block">
                    Right Block
                  </SelectItem>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        
        <Controller
          control={form.control}
          name="file-input-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Image Product</FieldLabel>

              <Input
                key="file-image-product-0"
                placeholder=""
                type="file"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        
        <Controller
          control={form.control}
          name="textarea-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">
                Description Your Product
              </FieldLabel>

              <Textarea
                key="textarea-description-product-0"
                id="textarea-0"
                placeholder="Describe your product..."
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="text-input-image-link-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Image Link</FieldLabel>

              <Input
                key="input-image-link-0"
                placeholder="Image Link"
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
          name="text-input-date-time-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Tanggal Input</FieldLabel>

              <Input
                key="input-date-time-0"
                placeholder="data-time"
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
          name="select-payment-method-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">
                Payment Method
              </FieldLabel>

              <Select
                key="select-0"
                value={field.value}
                name={field.name}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="virtual-account" value="virtual-account">
                    Virtual Account
                  </SelectItem>
                  <SelectItem key="ewallet" value="ewallet">
                    E-Wallet
                  </SelectItem>
                  <SelectItem key="bank-transfer" value="bank-transfer">
                    Bank Transfer
                  </SelectItem>
                  <SelectItem key="otc-payment" value="OTC-payment">
                    Overh-the-counter payments (OTC)
                  </SelectItem>
                  <SelectItem key="qris" value="qris">
                    Qris
                  </SelectItem>
                  <SelectItem key="paylater" value="paylater">
                    Paylater
                  </SelectItem>
                  <SelectItem key="credit-card" value="credit-card">
                    Credit Card
                  </SelectItem>
                  <SelectItem key="direct-debit" value="direct-debit">
                    Direct Debit
                  </SelectItem>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        
        <Controller
          control={form.control}
          name="checkbox-0"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="hidden w-auto!">
                Shipping Methode
              </FieldLabel>

              <div
                key="checkbox-0"
                className="border-0 p-0 w-full flex items-start has-[[data-state=checked]]:border-primary"
              >
                <Checkbox
                  id="checkbox-0"
                  name={field.name}
                  className=""
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <div className="grid gap-1.5 leading-none">
                  <FieldLabel>
                    I confirm that all information provided is accurate
                  </FieldLabel>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

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

>>>>>>> ad606bca612e00dec0b864e514b841c40303963d
