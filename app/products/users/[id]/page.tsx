const userDetails = async ({ params }: { params: Promise<{id : string  }> } ) => {
  const { id } = await params;
  return (
    <div className="flex flex-col  min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">User Details for User {id}</h1>
      <div className="flex flex-col items-center gap-4">
         <p>Name: User {id}</p>
         <p>Email: user{id}@example.com</p>
      </div>
    </div>
  );
}

export default userDetails;
