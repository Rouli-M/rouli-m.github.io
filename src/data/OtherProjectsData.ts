import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Rouli Font", "img/projects/rouli_thumbnail.png", 
      `<a target="_blank"class=icon href="https://github.com/Rouli-M/RouliFont">
      <img title= "Rouli Font on Github" src="img/icons/github.png" ></a>`,
   
      `<div class="paragraph">
      Font I use in my games!
        </div>
    `,` `, "#c10606", false, true),
    new ProjectData("project-7", "The Meadow", "img/projects/the_meadow.png",
      `<a target="_blank"class=icon href="https://t.me/ambientmeadow">
    <img title= "Ambient Meadow on Telegram" src="img/icons/web.png" ></a>`,

      `<div class="paragraph"> Telegram channel curating ambient music </div>`,
      ` `, "#1ca1e2"),
    new ProjectData("project-8", "Linocut", "img/projects/linocut.png", ``,
      `<div class="paragraph">
      Black and white linocut illustrations</div>`,
      `<img src="img/projects/linocut.png">`,
      ` `),
   
];