import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Mask Around", "img/projects/mask_around_thumbnail.png", 
    ` <a target="_blank"class=icon href="https://store.steampowered.com/app/2849230/Mask_Around/">
    <img title="Mask Around on Steam" src="img/icons/steam.png"></a>

    <a target="_blank"class=icon href="https://rouli.itch.io/mask-around">
    <img title= "Mask Around on itch.io" src="img/icons/itch.png" ></a>

    <a target="_blank"class=icon href="https://play.google.com/store/apps/details?id=com.rouli.maskaround">
    <img title= "Mask Around on Google Play Store" src="img/icons/playstore.png"/ ></a>`,
    
    `PC & Mobile 2D platformer shooter roguelike `,
    
    ` <div class="paragraph">
     <strong>Mask Around</strong> is a 2D shooter platformer roguelike released on Steam and Google Play in 2024. The game is a solo indie project, with external help for localization and the soundtrack.
    </div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/0vIYJLskF7w?si=wGr655y1F0x3Sydp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <div class="paragraph">
        <h3>Challenges faced</h3>
        <ul>
        <li>Creating a complete moveset with limited input</li>
        <li>Cross-platform oriented design and development, multiple input support (controller, on-screen controls, gyro & mouse support)</li>
        <li>Non-tile-based world generation</li>
        <li>Community management & marketing</li>
        </ul>
    </div>
    `, "#23bd69", false, true),
    new ProjectData("project-2", "Knight Games", "img/projects/knight_thumbnail.png", 

        `<a target="_blank"class=icon href="https://rouli.itch.io/knight-vs-astronomer">
        <img title= "Knight VS Astronomer on itch.io" src="img/icons/itch.png"/ ></a>

        <a target="_blank"class=icon href="https://play.google.com/store/apps/details?id=com.rouli.knightvsastronomer">
        <img title= "Knight VS Astronomer on Google Play Store" src="img/icons/playstore.png"/ ></a>`,

        `Collection of hypercasual mobile games`,
        `The Knight game series is a collection of short mini-hypercasual games I developed in solo, in very short developement cycles.
        <h3> Challenges faced:</h3>
        <ul>
        <li>Going from an idea on paper to a published game in a matter weeks </li>
        <li>Creating an efficient 3D workflow</li>
        <li>Setting up a project blueprint to improve iteration speed</li>
        </ul>
        <a target="_blank"href="https://play.google.com/store/apps/dev?id=7208598410203630451"> Page Google Play Store </a>
        `, "#5a78af"),
    new ProjectData("project-3", "DSN : Une Aventure Bloquissime", "img/projects/DSN_thumbnail.png", ``, `
    Serious game developed at Urssaf focusing on an administrative regulation called "Déclaration Sociale Nominative" 
    `,
    `
    ‘DSN : Une Aventure Bloquissime’ is a serious game focusing on a dense administrative process for french businesses called ‘Déclaration Sociale Nominative’. The game was created to acculturate Urssaf employees on this important internal topic.
    <h2>Challenges faced</h2>
    <ul>
    <li>Finding the right balance between fun and learning through game design and writing</li>
    <li>Designing for a wide audience of 16 000+ employees, mostly unfamiliar with gaming</li>
    <li>Integrating administrative experts in the design process</li>
    <li>Iterating with a multi-faceted internal team with little experience on video-game creation, but a strong expertise in other media and educational projects</li>
    </ul>
    `, "#383838"),
    new ProjectData("project-4", "All That Glitters", "img/projects/ATG_thumbnail.png",
        `<a target="_blank"class=icon href="https://store.steampowered.com/app/3288100/All_That_Glitters/">
    <img title="All That Glitters on Steam" src="img/icons/steam.png"/ ></a>`,
        
    ` Indie narrative game about gold panning, loneliness, and talking fishes `,

    ` All That Glitters is a french visual novel about loneliness, alternative societies and diogenes syndrome. The game originated in a workshop at Gobelins/Enjmin schools during the specialised master’s degree ‘Interactive Digital Experiences’ (IDE).
    I took the role of developer and lead writer.
    <h2>Challenges faced</h2>
    <ul>
    <li>Finding the perfect tone between funny, mysterious and coherent</li>
    <li>Incorporating narrative-focused tools such as Yarn Spinner and Text Animator</li>
    <li>Creating a 3D focused workflow fitted for the variety of the team (modeling, texturing, rigging, animating)</li>
    </ul>
    `, "#e80fb7"),
    new ProjectData("project-5", "Plant Down", "img/projects/plant_down_thumbnail.png", 
        ` <a target="_blank"class=icon href="https://rouli.itch.io/plant-down">
        <img title= "Plant Down on itch.io" src="img/icons/itch.png"/ ></a>
    
        <a target="_blank"class=icon href="https://play.google.com/store/apps/details?id=com.rouli.plantdown">
        <img title= "Plant Down on Google Play Store" src="img/icons/playstore.png"/ ></a>`,
        
    `Mobile boss-rush tiny game
    `,
    `Plant Down is a mobile 2D boss-rush platformer where you play as a plant in its instinctive quest to take down the monarchy.
    <h3>Challenges faced</h3>
    <ul>
    <li>‘Tiny design’: making a small game for a small platform (mobile), focusing on quality while working as a solo developer.</li>
    <li>Designing and animating 3 bosses with multiple attacks and pattern</li>
    <li>Creating a simple 2D moveset using only two buttons </li>
    </ul>
    `,
 "#e48246")
];