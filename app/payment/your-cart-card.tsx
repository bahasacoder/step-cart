"use client"

export default function YourCartCardInfo() {

    return (
        <>
            <div data-slot="card-content" className="cn-card-content flex flex-col gap-9">

                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex h-full items-center gap-4">
                                        <img
                                            src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/checkout/image-10.png"
                                            alt="Red cap"
                                            className="size-15.5 rounded-sm object-cover"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-base font-medium">Red cap</p>
                                            <p className="text-muted-foreground text-base">Red and white cap</p>
                                        </div>
                                    </div>
                                    <div className="sm:text-end">
                                        <span className="text-lg font-semibold">
                                            $
                                            36.00
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex h-full items-center gap-4">
                                    <img
                                        src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/checkout/image-9.png"
                                        alt="Oversized T-shirt"
                                        className="size-15.5 rounded-sm object-cover"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-base font-medium">Oversized T-shirt</p>
                                        <p className="text-muted-foreground text-base">Awesome white T-shirt</p>
                                    </div>
                                    </div>
                                    <div className="sm:text-end">
                                    <span className="text-lg font-semibold">
                                        $
                                        29.00
                                    </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex h-full items-center gap-4">
                                    <img
                                        src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/checkout/image-8.png"
                                        alt="Girl brown T-shirt"
                                        className="size-15.5 rounded-sm object-cover"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-base font-medium">Girl brown T-shirt</p>
                                        <p className="text-muted-foreground text-base">it's a nice brown t-shirt</p>
                                    </div>
                                    </div>
                                    <div className="sm:text-end">
                                    <span className="text-lg font-semibold">
                                        $
                                        30.00
                                    </span>
                                    </div>
                                </div>
                                </div>
                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>
                                <div data-slot="card-content" className="cn-card-content space-y-3.5">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg">Subtotal</span>
                                    <span className="text-lg font-medium">
                                    $
                                    95.00
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg">Shipping Cost (+)</span>
                                    <span className="text-lg font-medium">
                                    $
                                    10.66
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg">Discount (-)</span>
                                    <span className="text-lg font-medium">
                                    $
                                    9.00
                                    </span>
                                </div>
                                </div>
                                <div
                                data-orientation="horizontal"
                                role="separator"
                                aria-orientation="horizontal"
                                data-slot="separator"
                                className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"
                                ></div>
                                <div data-slot="card-content" className="cn-card-content space-y-6">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-lg font-medium">Total Payable</span>
                                    <span className="text-lg font-semibold">
                                    $
                                    96.66
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    tabIndex={0}
                                    data-slot="button"
                                    className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg w-full"
                                >
                                    Place Order
                                </button>
                                <p className="text-muted-foreground text-base">
                                    By placing your order, you agree to our company
                                    <a href="#" className="text-card-foreground font-semibold hover:underline">Privacy Policy</a>
                                    and
                                    <a href="#" className="text-card-foreground font-semibold hover:underline">Conditions of use</a>
                                    .
                                </p>
                                </div>
        </>
        
    )
}