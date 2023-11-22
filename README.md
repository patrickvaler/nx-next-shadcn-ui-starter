# nx-next-shadcn-ui-starter

This is a starter repository for integrating [shadcn/ui](https://github.com/shadcn/ui) with [Next.js](https://nextjs.org/) in an [Nx](https://nx.dev/) monorepo.

Detailed instructions for configuring and setting up this repository can be found in a tutorial on [Medium.com](https://medium.com/@patrickvaler/how-to-get-started-with-shadcn-ui-and-next-js-within-a-nx-monorepo-57908f48b4ef). Explore the tutorial for comprehensive insights into the repository's setup, ensuring a smooth and informed integration process.

## Features

- Shared library based on `shadcn/ui` components integrated in Next.js app
- Monorepo structure using Nx for better organization and scalability

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/patrickvaler/nx-next-shadcn-ui-starter.git
   ```

2. Install npm dependencies

   ```bash
   npm install
   ```

### Run application

```bash
npm start
```

## Add shadcn/ui components

`shadcn/ui` offers a cli to generate ui components.

Use the `add` command to add components and dependencies to your project:

```bash
npx shadcn-ui@latest add [component]
```

You will be presented with a list of components to choose from:

```bash
Which components would you like to add? › Space to select. A to toggle all.
Enter to submit.

◯  accordion
◯  alert
◯  alert-dialog
◯  aspect-ratio
◯  avatar
◯  badge
◯  button
◯  calendar
◯  card
◯  checkbox
```

Check the `shadcn/ui` [cli docs](https://ui.shadcn.com/docs/cli) for further information.
