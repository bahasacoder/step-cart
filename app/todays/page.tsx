export default async function ItemsTodaysPage() {
    // const response = await fetch(`https://www.jsonkeeper.com/b/AIVAX`, {
    // https://raw.githubusercontent.com/<username>/<repo>/main/db.json')
    // https://github.com/<your_Github_username>/<your_repository_name>/<branch_name>/<file_name>.<extension_name>
    // https://raw.githubusercontent.com/bahasacoder/step-cart/main/db/todays.json
    const response = await fetch(`api/todays`, {
        method: "GET"
        }
      );
      const itemsTodays = await response.json();
      // const todaysTodaysList = itemsTodays["todays"]; // array of nama items todays
      const todaysTodaysList = itemsTodays;
      console.log("items todays : ", todaysTodaysList); // array of object
      /*
      const itemsTodaysString = JSON.stringify(itemsTodays);
      console.log("items todays string : ", itemsTodaysString); // stringified array of object
        const jsonItemsTodays = JSON.parse(itemsTodaysString);
        console.log("json items todays parse : ", jsonItemsTodays); // array of object again
        const itemsTodaysList = jsonItemsTodays[0]; // array of nama items todays
        console.log("items todays list : ", itemsTodaysList); // array of nama items todays
        const itemsTodaysValues = Object.values(itemsTodaysList);
        console.log("items todays values : ", itemsTodaysValues); // array of nama items todays
      //console.log("items todays : ", jsonItemsTodays);
      */
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="flex flex-col items-center gap-4">
                <p>Items Todays Page</p>    
            </div>
            <div className="flex flex-col">
                {todaysTodaysList.map((item: any) => (
                    <div className="flex" key={item.id}>
                        <div>
                            <h3 className="text-2xl">{item.nama}</h3>
                            <p>{item.deskripsi}</p>
                        </div>
                        <div className="mb-2 mt-2"></div>
                    </div>
                ))}
            </div>
        </div>

    )
}
