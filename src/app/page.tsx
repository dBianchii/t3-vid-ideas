import { Button } from "~/app/_components/ui/button";
import { SubmitIdeaForm } from "./_components/submit-idea-form";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div>
          <form>
            <Button type="submit">Send!</Button>
          </form>
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
        </div>
      </div>
    </main>
  );
}
