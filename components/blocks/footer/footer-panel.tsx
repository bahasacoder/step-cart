import { Instagram, Facebook, Twitter, Youtube, Linkedin,  } from 'lucide-react';

import Image from "next/image"  
import PbcLogo from '@/public/assets/pbc_logo.svg'
import NomorHapeKu from './NomorHapeKu'
export default function Footer() {

  return (

    <footer>
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-5">
        <div className="flex flex-col items-start gap-4 lg:col-span-2">
          <a href="#">
                <div className="flex items-center gap-3">
                  <Image src={PbcLogo} alt="PasarBone Logo" width={34} height={34} />
                        <span className="text-xl font-semibold">PasarBone.com</span>
                </div>
            </a>
            <p className="text-muted-foreground text-balance">
              Komitmen kami untuk menghadirkan makanan halal, sehat, dan bergizi. 
            </p>
            <div className="flex items-center gap-4">
                  <a href="#" target="#">
                    <Instagram className="size-5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    </a> 
                  <a href="#" target="#">
                    <Facebook className="size-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </a>
                  <a href="#" target="#">
                    <Twitter className="size-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  </a>
                  <a href="#" target="#">
                    <Youtube className="size-5 text-red-600 dark:text-red-400" aria-hidden="true" />
                  </a>  
                  <a href="#" target="#">
                    <Linkedin className="size-5 text-blue-700 dark:text-blue-500" aria-hidden="true" />
                  </a>
                </div>
            <div data-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px !w-35"><br /></div><h4>Desa Pattiro Bajo</h4><h5>Kecamatan Sibulue <br/>Kabupaten Bone</h5>
        </div>
        <div className="flex flex-col gap-5">
            <div className="text-lg font-medium">Resources</div>
            <ul className="text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Ayam Kampung Asli</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Sapi Bali Lokal</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Padi / Beras</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Rempah</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Sayuran</a></li>
            </ul>
        </div>
        <div className="flex flex-col gap-5">
            <div className="text-lg font-medium">Help and Support</div>
            <ul className="text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Affiliation Program</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Discord Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Hire Us</a></li>
            </ul>
        </div>
        <div className="flex flex-col gap-5">
            <div className="text-lg font-medium">Legal</div>
            <ul className="text-muted-foreground space-y-3">
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">License</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Privacy policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Terms &amp; Condition</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Brand Guideline</a></li>
            </ul>
        </div>
    </div>
    <div data-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"><br /></div>
    <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-6 max-sm:flex-col sm:items-center sm:px-6">
        <p className="text-lg font-semibold">Developed By :</p>
            <div className="flex w-fit gap-x-5 gap-y-3 max-sm:flex-col"><a href="https://pasarbone.com"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@70c3f27ff5a6d467cf2db3331d5744f0431eb500/uploads/2026-02-11T14-57-41-361Z-vizvnobtw.png" alt="themeselection logo" className="h-7.5" /></a>
            <div data-orientation="vertical" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px !h-7 max-sm:hidden"><br /></div><a href="https://pasarbone.com"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@12828e0da8faff237ce9dbbc794786dfe2709996/uploads/2026-02-11T14-47-50-945Z-mvcsequv7.png" alt="pixinvent logo" className="h-7.5" /></a>
            <div data-orientation="vertical" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px !h-7 max-sm:hidden"><br /></div><a href="https://pasarbone.com"><img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@94c96a8f3ffa531e6bf9c6480e28e954132c3e22/uploads/2026-02-11T14-46-16-078Z-ib912vlit.webp" alt="jetship logo" className="h-7.5" /></a>
        </div>
    </div>
    <div data-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"><br /></div>
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6">
        <p className="font-medium">&copy;2026 <a href="#" className="link-animated">PasarBone.com</a>, Made with ❤️ for better web.</p>
        <div className="flex flex-wrap items-center gap-4">
                <span data-slot="badge" className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3 text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-base font-normal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="lucide lucide-shield-check !size-4.5 text-green-600" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg> 
                    <svg width="454.064" height="48.545" viewBox="0 0 454.064 48.545" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="nonzero" fontSize="9pt" stroke="#000000" strokeWidth=".5" fill="#000000"><path d="M 78.75 40.729 L 82.188 33.906 A 10.651 10.651 0 0 0 85.755 40.573 A 10.291 10.291 0 0 0 92.813 43.229 A 10.294 10.294 0 0 0 98.151 41.797 A 10.857 10.857 0 0 0 102.005 37.969 A 10.157 10.157 0 0 0 103.438 32.656 A 10.019 10.019 0 0 0 101.979 27.344 A 11.072 11.072 0 0 0 98.099 23.516 A 10.489 10.489 0 0 0 92.656 22.083 A 10.446 10.446 0 0 0 87.786 23.255 A 10.599 10.599 0 0 0 84.063 26.406 L 84.063 1.042 L 105.208 1.042 L 105.208 6.354 L 89.167 6.354 L 89.167 17.917 A 8.621 8.621 0 0 1 91.328 17.266 A 13.453 13.453 0 0 1 93.49 17.083 A 15.326 15.326 0 0 1 101.25 19.115 A 15.662 15.662 0 0 1 106.927 24.661 A 15.092 15.092 0 0 1 109.063 32.656 A 14.95 14.95 0 0 1 106.823 40.729 A 16.613 16.613 0 0 1 100.911 46.432 A 15.97 15.97 0 0 1 92.813 48.542 Q 88.333 48.542 84.609 46.458 A 15.351 15.351 0 0 1 78.75 40.729 Z M 147.865 47.917 L 120.26 47.917 L 139.063 19.948 Q 140.365 17.969 140.859 16.51 A 8.468 8.468 0 0 0 141.354 13.802 A 7.708 7.708 0 0 0 138.958 8.073 A 8.03 8.03 0 0 0 133.125 5.729 Q 129.688 5.729 127.318 8.073 A 7.75 7.75 0 0 0 124.948 13.802 Q 124.948 17.552 128.125 20.104 L 120.99 20.104 Q 119.323 16.927 119.323 13.802 Q 119.323 10 121.198 6.979 A 13.728 13.728 0 0 1 126.224 2.187 A 13.948 13.948 0 0 1 133.177 0.417 Q 136.979 0.417 140.104 2.188 A 13.789 13.789 0 0 1 145.104 6.979 Q 146.979 10 146.979 13.802 A 13.682 13.682 0 0 1 146.25 18.203 Q 145.521 20.365 143.698 22.969 L 130.156 42.604 L 147.865 42.604 L 147.865 47.917 Z M 383.438 40.729 L 386.875 33.906 A 10.651 10.651 0 0 0 390.443 40.573 A 10.291 10.291 0 0 0 397.5 43.229 A 10.391 10.391 0 0 0 402.891 41.797 Q 405.313 40.365 406.719 37.969 A 10.399 10.399 0 0 0 408.125 32.604 A 10.294 10.294 0 0 0 406.693 27.266 Q 405.26 24.844 402.865 23.411 A 10.253 10.253 0 0 0 397.5 21.979 A 9.913 9.913 0 0 0 394.766 22.344 Q 393.49 22.708 392.448 23.281 L 401.354 6.042 L 386.875 6.042 L 386.875 1.042 L 410 1.042 L 401.198 17.448 A 15.213 15.213 0 0 1 407.526 20.26 A 16.024 16.024 0 0 1 412.057 25.547 A 14.673 14.673 0 0 1 413.75 32.604 Q 413.75 37.083 411.563 40.703 Q 409.375 44.323 405.677 46.432 Q 401.979 48.542 397.5 48.542 Q 393.021 48.542 389.297 46.458 A 15.351 15.351 0 0 1 383.438 40.729 Z M 202.5 47.917 L 177.188 47.917 L 177.188 43.229 L 188.021 43.229 L 188.021 8.438 L 177.188 13.958 L 177.188 8.333 L 193.75 0 L 193.75 43.229 L 202.5 43.229 L 202.5 47.917 Z M 241.563 47.917 L 216.25 47.917 L 216.25 43.229 L 227.083 43.229 L 227.083 8.438 L 216.25 13.958 L 216.25 8.333 L 232.813 0 L 232.813 43.229 L 241.563 43.229 L 241.563 47.917 Z M 280.625 47.917 L 255.313 47.917 L 255.313 43.229 L 266.146 43.229 L 266.146 8.438 L 255.313 13.958 L 255.313 8.333 L 271.875 0 L 271.875 43.229 L 280.625 43.229 L 280.625 47.917 Z M 374.375 47.917 L 349.063 47.917 L 349.063 43.229 L 359.896 43.229 L 359.896 8.438 L 349.063 13.958 L 349.063 8.333 L 365.625 0 L 365.625 43.229 L 374.375 43.229 L 374.375 47.917 Z M 306.771 47.917 L 300.313 47.917 L 310.365 29.427 Q 308.958 30.469 307.448 30.859 A 12.022 12.022 0 0 1 304.427 31.25 A 14.483 14.483 0 0 1 296.953 29.245 A 15.564 15.564 0 0 1 291.458 23.802 Q 289.375 20.365 289.375 15.99 Q 289.375 11.563 291.536 8.047 Q 293.698 4.531 297.318 2.474 A 15.896 15.896 0 0 1 305.313 0.417 A 15.855 15.855 0 0 1 313.333 2.474 A 15.955 15.955 0 0 1 319.089 8.047 A 14.858 14.858 0 0 1 321.25 15.99 A 15.246 15.246 0 0 1 320.755 19.896 A 17.667 17.667 0 0 1 319.375 23.49 L 306.771 47.917 Z M 305.313 26.354 A 10.073 10.073 0 0 0 310.521 24.974 Q 312.865 23.594 314.245 21.25 A 10.073 10.073 0 0 0 315.625 16.042 A 10.073 10.073 0 0 0 314.245 10.833 Q 312.865 8.49 310.521 7.109 A 10.073 10.073 0 0 0 305.313 5.729 A 10.073 10.073 0 0 0 300.104 7.109 Q 297.76 8.49 296.38 10.833 A 10.073 10.073 0 0 0 295 16.042 A 10.073 10.073 0 0 0 296.38 21.25 Q 297.76 23.594 300.104 24.974 A 10.073 10.073 0 0 0 305.313 26.354 Z M 439.583 47.917 L 433.125 47.917 L 443.177 29.427 Q 441.771 30.469 440.26 30.859 A 12.022 12.022 0 0 1 437.24 31.25 A 14.483 14.483 0 0 1 429.766 29.245 A 15.564 15.564 0 0 1 424.271 23.802 Q 422.188 20.365 422.188 15.99 Q 422.188 11.563 424.349 8.047 Q 426.51 4.531 430.13 2.474 A 15.896 15.896 0 0 1 438.125 0.417 A 15.855 15.855 0 0 1 446.146 2.474 A 15.955 15.955 0 0 1 451.901 8.047 A 14.858 14.858 0 0 1 454.063 15.99 A 15.246 15.246 0 0 1 453.568 19.896 A 17.667 17.667 0 0 1 452.188 23.49 L 439.583 47.917 Z M 438.125 26.354 A 10.073 10.073 0 0 0 443.333 24.974 Q 445.677 23.594 447.057 21.25 A 10.073 10.073 0 0 0 448.438 16.042 A 10.073 10.073 0 0 0 447.057 10.833 Q 445.677 8.49 443.333 7.109 A 10.073 10.073 0 0 0 438.125 5.729 A 10.073 10.073 0 0 0 432.917 7.109 Q 430.573 8.49 429.193 10.833 A 10.073 10.073 0 0 0 427.813 16.042 A 10.073 10.073 0 0 0 429.193 21.25 Q 430.573 23.594 432.917 24.974 A 10.073 10.073 0 0 0 438.125 26.354 Z M 55.469 48.542 Q 51.042 48.542 47.344 46.432 Q 43.646 44.323 41.432 40.729 Q 39.219 37.135 39.219 32.656 A 14.986 14.986 0 0 1 41.589 24.349 A 15.681 15.681 0 0 1 47.76 18.75 A 11.317 11.317 0 0 1 45.365 15.417 Q 44.479 13.542 44.479 11.198 Q 44.479 8.125 45.964 5.703 A 11.017 11.017 0 0 1 49.948 1.849 A 10.909 10.909 0 0 1 55.469 0.417 A 10.909 10.909 0 0 1 60.99 1.849 Q 63.49 3.281 64.974 5.703 Q 66.458 8.125 66.458 11.198 A 9.933 9.933 0 0 1 65.573 15.443 A 10.57 10.57 0 0 1 63.177 18.75 A 15.681 15.681 0 0 1 69.349 24.349 A 14.986 14.986 0 0 1 71.719 32.656 A 15.083 15.083 0 0 1 69.505 40.729 A 16.335 16.335 0 0 1 63.594 46.432 Q 59.896 48.542 55.469 48.542 Z M 55.469 43.229 A 10.391 10.391 0 0 0 60.859 41.797 Q 63.281 40.365 64.688 37.969 A 10.399 10.399 0 0 0 66.094 32.604 A 10.539 10.539 0 0 0 64.688 27.214 Q 63.281 24.792 60.859 23.385 A 10.539 10.539 0 0 0 55.469 21.979 A 10.399 10.399 0 0 0 50.104 23.385 Q 47.708 24.792 46.276 27.214 A 10.391 10.391 0 0 0 44.844 32.604 A 10.253 10.253 0 0 0 46.276 37.969 Q 47.708 40.365 50.104 41.797 A 10.253 10.253 0 0 0 55.469 43.229 Z M 55.469 17.396 A 5.778 5.778 0 0 0 59.714 15.651 A 5.778 5.778 0 0 0 61.458 11.406 A 5.778 5.778 0 0 0 59.714 7.161 A 5.778 5.778 0 0 0 55.469 5.417 A 5.778 5.778 0 0 0 51.224 7.161 A 5.778 5.778 0 0 0 49.479 11.406 A 5.778 5.778 0 0 0 51.224 15.651 A 5.778 5.778 0 0 0 55.469 17.396 Z M 9.219 46.484 A 16.898 16.898 0 0 1 4.089 40.964 Q 2.031 37.5 1.016 33.203 Q 0 28.906 0 24.479 Q 0 20.052 1.016 15.755 A 27.458 27.458 0 0 1 4.089 7.995 A 16.898 16.898 0 0 1 9.219 2.474 A 12.614 12.614 0 0 1 16.406 0.417 A 12.614 12.614 0 0 1 23.594 2.474 A 16.898 16.898 0 0 1 28.724 7.995 Q 30.781 11.458 31.797 15.755 Q 32.813 20.052 32.813 24.479 Q 32.813 28.906 31.797 33.203 A 27.458 27.458 0 0 1 28.724 40.964 A 16.898 16.898 0 0 1 23.594 46.484 A 12.614 12.614 0 0 1 16.406 48.542 A 12.614 12.614 0 0 1 9.219 46.484 Z M 16.406 43.229 Q 19.167 43.229 21.146 41.563 A 12.304 12.304 0 0 0 24.375 37.135 Q 25.625 34.375 26.25 31.068 Q 26.875 27.76 26.875 24.479 Q 26.875 21.198 26.25 17.891 Q 25.625 14.583 24.375 11.823 A 12.304 12.304 0 0 0 21.146 7.396 Q 19.167 5.729 16.406 5.729 Q 13.698 5.729 11.693 7.396 A 12.156 12.156 0 0 0 8.438 11.823 Q 7.188 14.583 6.563 17.891 Q 5.938 21.198 5.938 24.479 Q 5.938 27.76 6.563 31.068 Q 7.188 34.375 8.438 37.135 A 12.156 12.156 0 0 0 11.693 41.563 A 7.146 7.146 0 0 0 16.406 43.229 Z"/></g></svg>
                </span>
          </div>
    </div>
</footer>
  )  
}
