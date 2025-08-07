import {prisma} from "db/client"
export default async function Home() {
  const users = await prisma.user.findMany();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      {JSON.stringify(users)}
    </div>
  );
}

