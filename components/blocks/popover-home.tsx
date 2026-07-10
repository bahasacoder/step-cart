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
              <div className="relative h-48 w-48 mx-auto my-auto p-4">
                 <h1 className="absolute top-0 left-0 text-5x z-10 font-bold tracking-normal transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold hover:tracking-widest">Kami Juga Melayani Pembuatan Website UMKM</h1>
                  <Image
                    src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@70c3f27ff5a6d467cf2db3331d5744f0431eb500/uploads/2026-02-11T14-57-41-361Z-vizvnobtw.png"
                    width={500}
                    height={500}
                    alt="Web Developer"
                    fill
                    priority
                    className="border-2 relative right-0"
                  />
                </div>
          </DialogContent>
        </Dialog>
      
    </div> 
    
  )
}
