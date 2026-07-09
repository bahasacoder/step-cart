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
      className="flex items-center justify-center mx-auto my-auto p-4 h-24 w-24 border-2 border-red font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
     
       <Dialog>
          <DialogTrigger>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            
             <DialogTitle>Are you absolutely sure?</DialogTitle>
               <h1 className="text-2x text-center">Kami Juga Melayani Pembuatan Website UMKM</h1>
          </DialogContent>
        </Dialog>
      
    </div> 
    
  )
}
