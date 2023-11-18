import { Button } from '@nx-next-shadcn-ui-starter/ui-kit/ui';

export default async function Index() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome to web-app!
          </h2>
          <p className="text-muted-foreground">
            A project to show how to integrate shadcn/ui with Next.js and Nx
          </p>
        </div>
      </div>
      <div>
        <Button>Click me!</Button>
      </div>
    </div>
  );
}
