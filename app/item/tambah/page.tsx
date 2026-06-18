
import { error } from "console";
import fs from "fs/promises";
import path from "path";




export default async function AddItemPage() {
    async function myAction(formData: FormData): Promise<{ success: boolean }> {
        "use server";
        // Logic to handle form submission and add item to the database
        console.log("Item added!");
        const rawFormData = {
                Value: formData.get('value'),
                Trigger: formData.get('trigger'),
                Content: formData.get('content'),
        }
        console.log("Raw Form Data:", rawFormData);
            const filePath = path.join(process.cwd(), "db", "todays.json");
            const fileData = await fs.readFile(filePath, "utf8");
           //  const itemsTodays = JSON.parse(fileData);
           const itemsTodays = [];
            itemsTodays.push(rawFormData);
            // await fs.writeFile(filePath, JSON.stringify(itemsTodays, null, 2));
            console.log("Updated Items:", itemsTodays);
        
         try {
                await fs.writeFile(filePath, JSON.stringify(itemsTodays, null, 2), 'utf-8');
                return { success: true };
            } catch (error) {
                console.error('Failed to write file:', error);
                return { success: false };
            }
       
    }

    return (
        <div className="flex min-h-screen flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex flex-col items-center gap-4">
                <p>Add Item Page</p>
            </div>
            <form action={myAction} className="w-full max-w-md">
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
