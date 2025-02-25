import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Rouli Font", "img/projects/rouli_thumbnail.png", 
      `<a target="_blank"class=icon href="https://github.com/Rouli-M/RouliFont">
      <img title= "Rouli Font on Github" src="img/icons/github.png" ></a>`,
   
      `<div class="paragraph">
      Font I created for use in my games. Available to anyone with Open Font Licence
        </div>
    `,` `, false, true),
    new ProjectData("project-7", "The Meadow", "img/projects/the_meadow.png",
      `<a target="_blank"class=icon href="https://t.me/ambientmeadow">
    <img title= "Ambient Meadow on Telegram" src="img/icons/web.png" ></a>`,

      `<div class="paragraph"> Public Telegram channel curating ambient music </div>`,
      ` `),
      new ProjectData("project-8", "Portfolio website", "img/projects/portfolio.png",
        `<a target="_blank"class=icon href="https://github.com/Rouli-M/rouli-m.github.io">
      <img title= "Source code on Github" src="img/icons/github.png" ></a>`,
  
        `<div class="paragraph"> This little portfolio website you're browsing right now, source code accessible on github </div>`,
        ` `),
    new ProjectData("project-9", "Linocut illustrations", "img/projects/linocut.png", ``,
      `<div class="paragraph">
      Black and white linocut illustrations I make in my spare time</div>`,
      `<img src="img/projects/linocut.png">`),
   
];