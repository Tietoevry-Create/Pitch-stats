# Pitch-stats
Website for analyzing SEO, carbon footprint, UU etc of other websites


## How we work



## Web app

This procject uses Next.js for the web part.

To run the app, navigate to the `web` directory, change your node version to at least 16. It is recommended to install [NVM](https://github.com/nvm-sh/nvm)

Then run `npm install`, then `npm run dev` to run the development version of the app, which can be seen at [http://localhost:3000](http://localhost:3000). 

To learn more about Next, go to - [Next.js Documentation](https://nextjs.org/docs) or [Learn Next.js](https://nextjs.org/learn).


## Storybook

To run storybook: `npm run storybook` - (Accessible at: http://localhost:6006).

If storybook fails: try resetting ->
    1) remove storybook related dependencies from file: `./web/package.json`.
    2) remove node modules and reinstall: `npm install`.
    3) reinstall storybook: `npx storybook init`.


