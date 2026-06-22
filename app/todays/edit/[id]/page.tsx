// import TodaysDB from '@/db/todays.json';
// import EditItemTodaysForm from "./edit-item-todays-form"; 
import { Octokit } from "@octokit/rest";
import { createTokenAuth } from "@octokit/auth-token";

export default async function EditItemTodaysPage()  {
   
  
const octokit = new Octokit({
  auth: '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'
})

const fetchOcto = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'bahasacoder',
  repo: 'roastand',
  path: 'db/items.json',
  headers: {
    'X-GitHub-Api-Version': '2026-03-10'
  }
})
  console.log("fetchOcto :", fetchOcto);
  return (

    <div>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col items-center gap-4">
          <p>Product Page</p>
        </div>
      </div>
    </div>
    
  );
}
