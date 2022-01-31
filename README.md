This is Cloudflare worker script for Penrose Library to get current and +1 minutes from Google Calendar event and feed into other library applications



to deply 


- `npm run build`


To publish 


- `wrangler publish`




====
This is the app that Penrose Library use to pull Google Calendar and intergrated with website. 
src/time.js contains the actual function. Timezone is always set to Pacific Time. 
URL parameters
calendar:  Set google calendar to pull. By default, it's Reference Calendar.
singleEvents:  true/false to let google process recurring event. By default set to true.

It only pull today's event. 
Github workflow will run npm run build and wrangler publish on push to main branch.

===


[Cloudflare Workers](http://developers.cloudflare.com/workers/) allow you to write JavaScript which runs on all of Cloudflare's
160+ global data centers. This repo is an example of how to combine multiple files and dependencies to create a Worker using
the [Webpack](https://webpack.js.org/) build tool.

The actual Worker replaces the content of your site with a Worker which returns the current time in the timezone of the caller's
choice.

### Dependencies

- [npm](https://www.npmjs.com/get-npm)
- [jq](https://stedolan.github.io/jq/) (for the preview script)
- [cURL](https://curl.haxx.se/) (for the preview script)

### Instructions

- `npm install`
- `npm run build`

To open the Workers preview with the built Worker:

- `npm run preview`
