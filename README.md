# First Docz Site
Docz works amazingly well (`npx create-docz-app` and then get right to editing mdx files)

### Deploying to Netlify
- see it here: https://docz-mdx-documentation.netlify.app/
- build command: `npm run build`
- build folder: `.docz/dist`

### Features I Like
- Creates a tree with pages for every MDX file in /src/ to navigate in the sidebar
- Uses MDX under the hood - enables users to embed React components into markdown pages

### Original Article
I gained interest in MDX after reading this article: [https://emasuriano.medium.com/write-staggering-documentation-for-your-react-projects-7de2ea263806](https://emasuriano.medium.com/write-staggering-documentation-for-your-react-projects-7de2ea263806)

### Extra Customization with MDX
MDX can be used with Next.js with steps from the official documentation: [https://mdxjs.com/getting-started/next](https://mdxjs.com/getting-started/next)
though I believe Docz makes documentation far easier.

Earlier I made an MDX and Next.js app:
- `npx create-next-app next-sample-documentation`
- `npm install --save @next/mdx @mdx-js/loader`
- create next.config.js (with same content as this project)
- create example.md in the /pages/ folder with markdown content
- `npm run dev`

## Using `create-docz-app`

```sh
npx create-docz-app docz-app-basic
# or
yarn create docz-app docz-app-basic
```

## Download manually

```sh
curl https://codeload.github.com/doczjs/docz/tar.gz/master | tar -xz --strip=2 docz-master/examples/basic
mv basic docz-basic-example
cd docz-basic-example
```

## Setup

```sh
yarn # npm i
```

## Run

```sh
yarn dev # npm run dev
```

## Build

```sh
yarn build # npm run build
```

## Serve built app

```sh
yarn serve # npm run serve
```
