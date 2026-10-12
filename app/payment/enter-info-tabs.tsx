"use client"
import React from "react"
import Link from "next/link"
import YourCart from "./your-cart";
import YourCartCardInfo from "./your-cart-card";

export default function EnterInfoTabs() {
    const [value, setValue] = useState('Enter your text here');
    const handleChange = (event: any) => setValue(event.target.value);

    return (
        <div>
            <h1>DATA PEMBELI</h1>
            <div className="h-full w-full">
                <section className="bg-muted py-8 sm:py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-5">
                        {/* -- sisi kiri -- */}
                        <div className="md:col-span-2 lg:col-span-3">
                            <div data-slot="card" data-size="default" className="cn-card group/card flex flex-col shadow-none">
                                <div data-slot="card-content" className="cn-card-content">
                                <div
                                    data-orientation="vertical"
                                    dir="ltr"
                                    role="region"
                                    data-slot="accordion"
                                    className="cn-accordion flex flex-col w-full space-y-2 rounded-md border-0"
                                >
                                    <div
                                    data-orientation="vertical"
                                    data-index="0"
                                    data-open=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                    <h3 data-orientation="vertical" data-index="0" data-open="" className="flex">
                                        <button
                                        type="button"
                                        data-value="item-1"
                                        data-orientation="vertical"
                                        data-panel-open=""
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-controls="base-ui-_R_6inpfiv5ubr9fiv5uj9bH1_"
                                        aria-expanded="true"
                                        id="base-ui-_R_6inpfiv5ubr9fiv5uj9bH2_"
                                        data-slot="accordion-trigger"
                                        className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                        >
                                        Your Personal Details
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="remixicon cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                                        >
                                            <path
                                            d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                                            ></path>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="remixicon cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                                        >
                                            <path
                                            d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"
                                            ></path>
                                        </svg>
                                        </button>
                                    </h3>
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
                                        <div
                                        className="cn-accordion-content-inner [&amp;_a]:hover:text-foreground h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&amp;_a]:underline [&amp;_a]:underline-offset-3 [&amp;_p:not(:last-child)]:mb-4 px-5 pb-4"
                                        >
                                        <form>
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
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
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
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
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
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
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
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
                                                />
                                            </div>
                                            <div className="space-y-3.5 sm:max-md:col-span-2 lg:col-span-2">
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
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
                                                />
                                            </div>
                                            <div className="space-y-3.5">
                                                <label
                                                data-slot="label"
                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                htmlFor="city"
                                                >
                                                City
                                                </label>
                                                <input
                                                id="city"
                                                type="text"
                                                data-slot="input"
                                                placeholder="City"
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
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
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
                                                />
                                            </div>
                                            <div className="space-y-3.5">
                                                <label
                                                data-slot="label"
                                                className="cn-label flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed leading-5"
                                                htmlFor="country"
                                                >
                                                Country
                                                </label>
                                                <input
                                                id="country"
                                                type="text"
                                                data-slot="input"
                                                placeholder="Country"
                                                className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
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
                                                value={0}
                                                onChange={handleChange }
                                                />
                                            </div>
                                            <div>
                                                <button
                                                type="submit"
                                                tabIndex={0}
                                                data-slot="button"
                                                className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg"
                                                >
                                                Next Step
                                                </button>
                                            </div>
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                    </div>
                                    <div
                                    data-orientation="vertical"
                                    data-index="1"
                                    data-closed=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                    <h3 data-orientation="vertical" data-index="1" data-closed="" className="flex">
                                        <button
                                        type="button"
                                        data-value="item-1"
                                        data-orientation="vertical"
                                        data-index="1"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-expanded="false"
                                        id="base-ui-_R_ainpfiv5ubr9fiv5uj9bH2_"
                                        data-slot="accordion-trigger"
                                        className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                        >
                                        Shipping Address
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="remixicon cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                                        >
                                            <path
                                            d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                                            ></path>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="remixicon cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                                        >
                                            <path
                                            d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"
                                            ></path>
                                        </svg>
                                        </button>
                                    </h3>
                                    </div>
                                    <div
                                    data-orientation="vertical"
                                    data-index="2"
                                    data-closed=""
                                    data-slot="accordion-item"
                                    className="cn-accordion-item rounded-md border!"
                                    >
                                    <h3 data-orientation="vertical" data-index="2" data-closed="" className="flex">
                                        <button
                                        type="button"
                                        data-value="item-1"
                                        data-orientation="vertical"
                                        data-index="2"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-expanded="false"
                                        id="base-ui-_R_einpfiv5ubr9fiv5uj9bH2_"
                                        data-slot="accordion-trigger"
                                        className="cn-accordion-trigger group/accordion-trigger relative flex flex-1 justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 items-center px-5 py-4 text-lg font-medium"
                                        >
                                        Payment Info
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="remixicon cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                                        >
                                            <path
                                            d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                                            ></path>
                                        </svg>
                                        <svg
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="remixicon cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                                        >
                                            <path
                                            d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"
                                            ></path>
                                        </svg>
                                        </button>
                                    </h3>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* --sisi kanan --*/}
                        <div className="space-y-6 md:col-span-2 lg:col-span-2">
                            <div data-slot="card" data-size="default" className="cn-card group/card flex flex-col shadow-none">
                                <div
                                data-slot="card-header"
                                className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] gap-2"
                                >
                                <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">Coupon Code</div>
                                <div data-slot="card-description" className="cn-card-description text-base">
                                    Enter code to get discount instantly
                                </div>
                                </div>
                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>
                                <div data-slot="card-content" className="cn-card-content flex gap-3">
                                <input
                                    id="base-ui-_R_3linpfiv5ubr9fiv5uj9b_"
                                    type="text"
                                    data-slot="input"
                                    placeholder="Add discount code"
                                    className="cn-input file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 input-lg"
                                />
                                <button
                                    type="button"
                                    tabIndex={0}
                                    data-slot="button"
                                    className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg"
                                >
                                    Apply
                                </button>
                                </div>
                            </div>
                            <div data-slot="card" data-size="default" className="cn-card group/card flex flex-col shadow-none">
                                <div
                                data-slot="card-header"
                                className="cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] gap-1.5"
                                >
                                <div data-slot="card-title" className="cn-card-title cn-font-heading text-xl font-semibold">
                                    Your Cart
                                </div>
                                <div data-slot="card-description" className="cn-card-description text-base">
                                    You have
                                    3
                                    items in your cart
                                </div>
                                </div>

                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>

                                {/* Your Card Card Info */}
                                <YourCartCardInfo />

                            
                        </div>

                    </div>
                    </div>
                    </div>
                </section>
                <section
                    aria-label="Notifications alt+T"
                    tabIndex={-1}
                    aria-live="polite"
                    aria-relevant="additions text"
                    aria-atomic="false"
                ></section>
                </div> 
            <div>
                <YourCart />
            </div>       
        </div>
    )
}
function useState(arg0: string): [any, any] {
    return React.useState(arg0);
}

