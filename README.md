[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/trinhpham/test-with-gitpod) 

# Simple Web Browser test with Gitpod

## Getting Started
- Click on the Gitpod icon above to start your session. Follow the instructions on-screen for installation.
- When asked, allow the noVNC popup be opened and enter `secret` as the VNC password. (If you miss this step, see the port 6080 at bottom, click on it then click on `Open Browser` on the opened panel). Highly recommend opening the VNC page in browser.
- [Enable beta feataures](https://docs.gondolatest.com/guides/beta-features.html#enabling-beta-features)
## Run Test
- [Generate a Gondola token](https://docs.gondolatest.com/subscription/#generating-a-token)
- Open package.json, then add --licenseToken for "test" script. Example: "test": "./node_modules/.bin/gondola run --steps --reporter mochawesome --licenseToken ABCDEFDSFASDFASDFASDFASD"
- Run your test with `npm run test` and see how it runs on the VNC page.
## Record A Test
- Create a new test or open an existing test with Gondola Test Designer
- Click on Test Builder icon
- Record the test in the VNC page
