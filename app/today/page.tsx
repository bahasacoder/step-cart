export default async function HomeTodayPage(){
  const response = await fetch("http://localhost:3000/api/todays", {
    method: "GET"
    }
  );
  const itemsTodays = await response.json();
console.log(itemsTodays);
  return (
    <div>This Home Today</div>
  )
}
