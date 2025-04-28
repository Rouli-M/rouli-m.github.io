
#### What is this?
My name is Martin Loiseau AKA Rouli, I'm a developer based in Paris, and this is the repository of my portolio website. To access it, go to [rouli-m.github.io/portfolio](https://rouli-m.github.io/portfolio)


#### What did you use to do it?
It's a static website made with **Vue.js** and hosted on **github pages**.
I used [schouffy/gamedev-portfolio](https://github.com/schouffy/gamedev-portfolio) as a base to start with.


#### How to build?

To start the local server and preview the change locally, use `npm run serve`

To deploy the website, run the deploy script, then push the build result (located inside the dist folder) to the proper branch of the repo, which is linked to the github page url. The website may take a few minutes to properly reflect the changes.
```
sudo ./deploy.sh
cd dist/
git push -f git@github.com:Rouli-M/portfolio.git master:gh-pages
```
