import { SubmitIdeaForm } from "./_components/submit-idea-form";
import MaxWidthWrapper from "./_components/max-width-wrapper";
import { api } from "~/trpc/server";

export default async function Home() {
  const ideas = await api.idea.getAll.query();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <MaxWidthWrapper>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
              Create
              <span className="ml-2 bg-gradient-to-r from-[#cc66ff] to-red-600 bg-clip-text text-transparent">
                Idea
              </span>
            </h1>
            <p className="ml-4 text-lg font-bold">
              Your ideas, for Theo's next videos ❤️
            </p>
            <SubmitIdeaForm />
            {ideas.map((idea) => (
              <div key={idea.id} className="flex items-center justify-center">
                <p className="text-xl font-bold">{idea.title}</p>
                <p className="ml-4 text-xl font-bold">{idea.title}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
