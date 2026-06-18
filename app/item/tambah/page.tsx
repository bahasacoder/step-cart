
import { myActionItems } from "@/app/actions";

export default async function AddItemPage() {
    
    return (
        <div className="flex min-h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex flex-col items-center gap-4">
                <p>Add Item Page</p>
            </div>
            <form action={myActionItems} className="w-full max-w-md">
                <div className="flex flex-col items-center gap-4">
                    <input type="text" placeholder="Identity" name="Identity" className="border p-2 mb-4" />
                    <input type="text" placeholder="Value" name="value" className="border p-2 mb-4" />
                    <input type="text" placeholder="Trigger" name="trigger" className="border p-2 mb-4" />
                    <textarea placeholder="Content" name="content" className="border p-2 mb-4"></textarea>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">Tambah Item</button>
                </div>
            </form>
        </div>
    )   

}
