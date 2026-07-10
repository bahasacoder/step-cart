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

export default function PopoverHome() {
  // absolute
  return(
    <div data-popover="popover"
      className="flex font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
     
       <Dialog defaultOpen>
          <DialogContent className="sm:max-w-md">            
             <DialogTitle></DialogTitle>
              <div>
                 <h1 className="text-2x text-center">Kami Juga Melayani Pembuatan Website UMKM</h1>
                  <Image
                    src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@ed2c10a5b9c2baebab4b37575b0ef096bc343d03/uploads/2026-07-10T01-54-58-805Z-f3mdld6v0.jpg"
                    width={500}
                    height={500}
                    alt="Web Developer"
                    fill
                    priority
                  />
                </div>
          </DialogContent>
        </Dialog>
      
    </div> 
    
  )
}
