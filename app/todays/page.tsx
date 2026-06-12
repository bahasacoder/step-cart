export default async function ItemsTodaysPage() {
    const response = await fetch(`/api/todays`, {
        method: "GET"
        }
      );
      const itemsTodays = await response.json();

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex flex-col items-center gap-4">
                <p>Items Todays Page</p>    
            </div>
            <div>
            {
                itemsTodays.map((item: any) => (
                    <p key={item.id}>{item.nama}</p>
                ))
            }
            </div>
        </div>

    )
}
