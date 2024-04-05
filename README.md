## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 20.11.1 or later. You can download and install [Node.js](https://nodejs.org/) if you haven't already.

### Obtain API Key

- Obtain a GitHub API key by following [these instructions](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-a-github-app).

### Setup

- Rename `.env.local.example` to `.env.local` and add the API key obtained earlier.

### Customize

1. Add your name:
   - Update `my-portfolio/constants/constants.ts`.

2. Add your social links:
   - Update `my-portfolio/components/Footer.tsx`.

3. Add your tech stack icons:
   - Update `my-portfolio/components/TechStack.tsx`.
   - Grab the SVG icon from [Devicon](https://devicon.dev/).

### Install Dependencies

```bash
# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install
```

### Run the Application

```bash
# Start the application
npm run dev
```

Once the server is running, open `http://localhost:3000` in your web browser to view the result.
