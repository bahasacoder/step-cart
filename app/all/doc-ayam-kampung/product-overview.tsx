import Image from "next/image";

export default function ProductOverviewBlock() {
  return (
     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
       <section className="py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 xl:gap-24">
                    <div className="flex flex-col gap-6">
                       <p>Image Productg Overview</p>
                           
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  );
}
