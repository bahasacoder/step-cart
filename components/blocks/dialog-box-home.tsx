import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogBoxHome() {
  // absolute
  return(
    <div data-popover="popover"
      className="flex font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
     
       <Dialog defaultOpen>
          <DialogContent className="sm:max-w-md">            
             <DialogTitle></DialogTitle>
              <div className="relative w-full h-auto mx-auto my-auto p-4">
                 <h1 className=" w-full absolute top-0 left-0 text-8x z-10 font-bold tracking-normal transition-all duration-300 ease-in-out hover:scale-103 hover:text-blue-700 hover:font-bold hover:tracking-widest">Kami Juga Melayani Pembuatan Website UMKM</h1>
                 
                </div>
          </DialogContent>
        </Dialog>
      
    </div> 
    
  )
}
