# Pitch-stats
Website for analyzing SEO, carbon footprint, UU etc of other websites


## How we work

We use [Zenhub](https://www.zenhub.com) for issue tracking. It is advised to install the [Zenhub browser extension](https://www.zenhub.com/extension), which gives access to Zenhub directly from Github. Invitation can be found in to Zenhub and link to the Figma project can be found in the Slack channel for the project.

## Studio

This project will use Sanity.io as a CMS, go to the [Sanity documentation to learn more](https://www.sanity.io/docs/sanity-studio)

To install the [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) on your machine, run `npm install -g @sanity/cli`.

Navigate to the `studio` folder and run `sanity login` if you have not logged in and then run `sanity start`. If that doesn't work, you might have to run 'sanity install' first to fetch project-specific commands.

Go to `localhost:3333` to see the local build of the Sanity Studio

To deploy your changes to the hosted Sanity Studio, run `sanity deploy` from the `studio` directory. 

Go to [https://www.sanity.io/manage](https://www.sanity.io/manage) to manage project.

For now, the hosted Studio lives in  [https://stats.sanity.studio/](https://stats.sanity.studio/)


## Web app

This procject uses Next.js for the web part.

To run the app, navigate to the `web` directory, change your node version to at least 16.

Then run `npm install`, then `npm run dev` to run the development version of the app, which can be seen at [http://localhost:3000](http://localhost:3000). 

To learn more about Next, go to - [Next.js Documentation](https://nextjs.org/docs) or [Learn Next.js](https://nextjs.org/learn).


## Storybook


