"use client"
import { type ChangeEvent, useState } from "react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FormSecondaryAddress() {
    const [region, setRegion] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
        setRegion(event.currentTarget.value)
    }

    return (

                            <div
                                        data-orientation="vertical"
                                        data-index="0"
                                        data-open=""
                                        id="base-ui-_R_6inpfiv5ubr9fiv5uj9bH1_"
                                        aria-labelledby="base-ui-_R_6inpfiv5ubr9fiv5uj9bH2_"
                                        role="region"
                                        style={
                                            {
                                                ["--accordion-panel-height" as any]: "auto",
                                                ["--accordion-panel-width" as any]: "auto",
                                                animationName: "none",
                                            } as React.CSSProperties
                                        }
                                        data-slot="accordion-content"
                                        className="cn-accordion-content overflow-hidden"
                                    >
                                        <div className="w-full flex gap-2 m-4"><input type="checkbox" className="" value={'sama'} /><p>Sama dengan Personal Detail Address</p></div>
                                        
                                        <div
                                        className="cn-accordion-content-inner [&amp;_a]:hover:text-foreground h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&amp;_a]:underline [&amp;_a]:underline-offset-3 [&amp;_p:not(:last-child)]:mb-4 px-5 pb-4"
                                        >
                                        <form>
                                            <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>Profil Info</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="firstName"
                                                            >
                                                            First Name
                                                            </label>
                                                            <input
                                                            id="firstName"
                                                            type="text"
                                                            data-slot="input"
                                                            placeholder="First Name"
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="lastName"
                                                            >
                                                            Last Name
                                                            </label>
                                                            <input
                                                            id="lastName"
                                                            type="text"
                                                            data-slot="input"
                                                            placeholder="Last Name"
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="email"
                                                            >
                                                            Email Address
                                                            </label>
                                                            <input
                                                            id="email"
                                                            type="email"
                                                            data-slot="input"
                                                            placeholder="Email address"
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="phone"
                                                            >
                                                            Phone
                                                            </label>
                                                            <input
                                                            id="phone"
                                                            type="tel"
                                                            data-slot="input"
                                                            placeholder="Phone"
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>
                                                        
                                                        <div className="space-y-3.5">
                                                            <label
                                                            data-slot="label"
                                                            className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                            htmlFor="address"
                                                            >
                                                            Company Name (Optional)
                                                            </label>
                                                            <input
                                                            id="company"
                                                            type="text"
                                                            data-slot="input"
                                                            placeholder="Company Name"
                                                            className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                            />
                                                        </div>                                          
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>Address Info</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:max-md:grid-cols-2 lg:grid-cols-2">
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="address"
                                                                >
                                                                Mailing Address
                                                                </label>
                                                                <input
                                                                id="address"
                                                                type="text"
                                                                data-slot="input"
                                                                placeholder="Mailing Address"
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="desa"
                                                                >
                                                                Desa / Kelurahan
                                                                </label>
                                                                <input
                                                                id="desa"
                                                                type="text"
                                                                data-slot="input"
                                                                placeholder="desa"
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="kecamatan"
                                                                >
                                                                Kecamatan
                                                                </label>
                                                                <input
                                                                id="kecamatan"
                                                                type="text"
                                                                data-slot="input"
                                                                placeholder="kecamatan"
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="kabupaten"
                                                                >
                                                                Kabupaten
                                                                </label>
                                                                <input
                                                                id="country"
                                                                type="text"
                                                                data-slot="input"
                                                                placeholder="kabupaten"
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            
                                                            <div className="space-y-3.5">
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                                htmlFor="postCode"
                                                                >
                                                                Post Code
                                                                </label>
                                                                <input
                                                                id="postCode"
                                                                type="text"
                                                                data-slot="input"
                                                                placeholder="Post Code"
                                                                className="border text-gray-600 p-2 focus:ring-blue-500 focus:border-blue-900 focus:bg-blue-50 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                data-slot="label"
                                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed mb-3.5 leading-5"
                                                                htmlFor="region"
                                                                >
                                                                Region/State
                                                                </label>
                                                                <button
                                                                type="button"
                                                                data-placeholder=""
                                                                tabIndex={0}
                                                                id="base-ui-_R_56minpfiv5ubr9fiv5uj9b_"
                                                                role="combobox"
                                                                aria-expanded="false"
                                                                aria-haspopup="listbox"
                                                                data-slot="select-trigger"
                                                                data-size="default"
                                                                className="cn-select-trigger flex items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 h-9! w-full"
                                                                >
                                                                <span data-placeholder="" data-slot="select-value" className="cn-select-value">
                                                                    Select a state
                                                                </span>
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                    className="remixicon cn-select-trigger-icon pointer-events-none"
                                                                >
                                                                    <path
                                                                    d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                                                                    ></path>
                                                                </svg>
                                                                </button>
                                                                <input
                                                                style={{
                                                                    clipPath: "inset(50%)",
                                                                    overflow: "hidden",
                                                                    whiteSpace: "nowrap",
                                                                    border: 0,
                                                                    padding: 0,
                                                                    width: "1px",
                                                                    height: "1px",
                                                                    margin: -1,
                                                                    position: "fixed",
                                                                    top: 0,
                                                                    left: 0,
                                                                }}
                                                                tabIndex={-1}
                                                                aria-hidden="true"
                                                                value={region}
                                                                onChange={handleChange }
                                                                />
                                                            </div>                              
                                                        </div>
                                                    </CardContent>
                                                </Card>                                            
                                            
                                            </div>
                                            
                                            <div className="flex justify-end mt-4">
                                                <button
                                                type="submit"
                                                tabIndex={0}
                                                data-slot="button"
                                                className="cn-button group/button inline-flex shrink-0 items-center justify-center 
                                                    whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none 
                                                    disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg
                                                    bg-gray-400 py-2 px-8 rounded-full text-white font-medium"
                                                >
                                                Save
                                                </button>
                                            </div>
                                        </form>
                                        </div>
                                        
                                        </div>
                                        
    )
}