import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-tech0", "Unity Utils", "img/tech/unity_thumbnail.png", "",
     ``,
      `Useful Unity scripts I've built and gathered over the years `,
      ` 
      Every developer who has worked with Unity knows that there are a lot of very useful functions that are surprisingly not directly built in Unity despite being useful accross a wide range of projects.
      I am no exception, and I have wrote over the years a variety of little useful scripts that I import in almost every project.
      
      <h4>SmartAudioSource.cs</h4>
        Playing an audio file from script in Unity can be as simple as typing "GetComponent<AudioSource>().Play()".
        But it can get pretty verbose once you want to tweak some basic settings, like randomizing pitch, volume, or even the audio clip playing, which is a must for game-audio.
        This is why I usually add a SmartAudioSource.cs component on all my AudioSource game objects, where I can set the aforementioned values.
        This is especially useful for mobile game because of how lightweight this solution is. For bigger games, I tend to use FMOD.

      <h4><a href="https://github.com/Rouli-M/KnightVSAstronomer/blob/main/KnightVSAstronomeerUnity/Assets/HandyBehaviour.cs">  HandyBehaviour.cs</a></h4>
      <div  style="text-align: center;">
      <img title= "CICD for Groupement U" src="img/tech/unity_thumbnail.png"/>
      </div>
      
      It took me a while to master all the twists of Unity's animation system. The biggest issue I faced was understand how to properly trigger event depending on animation timing.
        As it turns out, using Unity's Animation Events isn't recommended if you use the Animation Graph, as the events can sometimes be skipped if played either early or late during the animation state.
        I ended up writing my implementation of the AnimationBehaviour that I named CustomEventBehaviour.cs to easily subscribe to Animator's state changes, by only specifying the name of a state. 
        The only downside of this technique is that you have to subscribe to the events everytime the GameObject is Enabled for it to work properly.
        You can see this script being used in my little mobile game Knight VS Astronomer <a href="https://github.com/Rouli-M/KnightVSAstronomer/blob/main/KnightVSAstronomeerUnity/Assets/HandyBehaviour.cs">  here</a>.
        
      <h4>SaveData.cs</h4>
        They are several way to save and retrieve game data, and I tend to gravitate towards the same logic for games I work on, which led me to creating this generic C# class.
        For device-specific settings such as a fullscreen toggle, enabling vibration or selecting an input type, I prioritize the use of Unity's PlayerPref.
        But for game-data such as counters, checkpoints, customization or overall game progression, it's preferable to use a customizable data structure that can be serialized in a file.
        
        My static class <code>SaveData</code> does just that: by customizing the subclass <code>DataContent</code> with the data structure I need, I can then simply call SaveData.Save() and SaveData.Load(), and read the save data from anywhere with a simple SaveData.content, making full use of the singleton pattern.

      <h4> <a href="https://gist.github.com/onevcat/6025819"> MonoSingleton.cs </a></h4>
        While I didn't write this script myself, it is so convenient that I was quick to add it to my little collection. <a href="https://gist.github.com/onevcat/6025819"> MonoSingleton.cs </a> allows me to implement the singleton pattern on any MonoBehaviour object by simply inheriting from this class: now, I can get the reference of this objects from anywhere in the code. This is especially useful for "managers" such as AudioManager, GameManager, etc.
        <br>
        
        `, false, true),
    new ProjectData("project-tech1", "CICD Pipelines", "img/tech/u-cicd_thumbnail.png","",
      ``,
      `Continuous Integration/Deployement pipelines I've set up`,

      `<h3> At Groupement U </h3>
      During my engineering internship at Groupement U (major retail company in France), I was tasked with creating a CICD pipeline for Informatica. Informatica is a data management software used to clean up and compute data such as stocks, receipts, commands, etc.
      In practice, developpers use Informatica to create "data workflows", which are then deployed on various test environment, before eventually making it to the production server where they handle data in real time. 
      The goal was to automate the long deployement and versioning process of these workflows.
      <br> <br>
      <div  style="text-align: center;">
      <img title= "CICD for Groupement U" src="img/tech/u-cicd.png"/ >
      </div>
      <br>I started off with the documentation that developers used to manually deploy and managed to successfully design and develop a simple pipeline with the following stack:
      <ul>
      <li> <b>Jenkins</b> for the front end, allowing for user to easily set up and launch a pipeline execution, as well as access logs</li>
      <li> <b>Python</b> scripts are the implementation of existing builder and deployer scripts within Groupement U's infrastructure</li>
      <li>Legacy <b>kornshell</b> scripts, running directly on the server, were used and tweaked to properly communicate with Informatica's backend. The builder running inside Docker had to call these scripts using a custom SSH request.</li>
      </ul>
      <br>

      <h3> For Mask Around </h3>
      Years later, I faced a situation were setting up CICD pipelines was relevant again. For my game project <i>Mask Around</i>, I was targeting 5 different types of builds:
      <ul>
      <li> Windows build for Steam (with Steam SDK integration)
      <li> Standalone Windows build (for itch.io)
      <li> Android build for Google Play Store (android bundle format)
      <li> Android standalone build Premium (apk of paid version, includes bonus content)
      <li> Android standalone build Free (with a specific prompt to buy premium)
      </ul>
      The differences between these builds were minor, but it was still a long process to build each one manually, especially considering that the game was frequently updated.
      With the help of a friend specialized in DevOps, we set up a build pipeline leveraging GitHub actions, since the project was already hosted on github.
      <br>
      <br>
      <div  style="text-align: center;">
      <img title= "CICD for Groupement U" src="img/tech/cicd_ma.png"/>
      </div>
      <br>
      Starting a build workflow can be done in a few clicks, where you are prompted for a version ID and for all the build types you wish to build. We used a YAML file to pass all this setting to the virtual machine tasked with the build. After the workflow is done running, you received the archive inside a zip folder.
      `,),
      new ProjectData("project-tech2", "Custom World Generation Algorithm", "img/tech/worldgen_thumbnail.png","",
        ``,
        `Non-tile based algorithm made for my 2D roguelike Mask Around`,
        `In Mask Around, the game's world is generated randomly with each run, in a traditional roguelike fashion. But unlike games like <i>The Binding of Isaac</i> and <i>Spelunky</i>, I didn't want to use a basic grid for world generation, because I felt the pattern can become too easily identified by players. So I took the challenge to create a worldgen that wasn't using a grid system.

      <br> <br>
      <div  style="text-align: center;">
      <img title= "Example of world generation Mask Around" src="img/tech/2022-05-09_175132.png"/>
      </div>

      I still wanted to design room patterns inside Unity's editor, which I tweaked using Gizmos and Editor Scripts, facilitating the level design. Each room could have 0-n exits, on which other rooms' entrances would be plugged in. I would also need to have some constraints such as maximum depth, mandatory rooms to spawn, etc.
      This script took a lot of time and iteration to be made. In the end, it uses a mix of iterative and recursive functions, as well as a "blueprint" logic to avoid instantiating too many room patterns during its execution, which proved to be too demanding for the weaker mobile devices the game was expected to run on.
         `),
         new ProjectData("project-tech-4", "Portfolio website", "img/projects/portfolio.png","",
          `<a target="_blank"class=icon href="https://github.com/Rouli-M/rouli-m.github.io">
        <img title= "Source code on Github" src="img/icons/github.png" ></a>`,
    
          `<div class="paragraph"> Little portfolio website you're browsing right now. Made with Vue.js, source code available on github </div>`,
          ` `),
    new ProjectData("project-tech3", "Homemade Physic System", "img/tech/physics_thumbnail.png","",
      ``,
      `Custom lightweight C# 2D physics system I made for my mobile games`,
      `Before using Unity, I was working mainly with MonoGame, which is a Mono C# open source framework that has been used for commercial games like <i>Celeste</i> or <i>Stardew Valley</i>.
      Unlike Unity or Godot, MonoGame doesn't come with a physics engine, a sprite class, or even an editor: everything has to be made from craft using C#, including development tools. 
      <br> <br>
      <div  style="text-align: center;">
      <img title= "Plant Down use this physics system" src="img/projects/oslmgv.png"/>
      </div>

      I created a set of class that allowed me to have a simple but robust 2D physics system. This system only supports AABB (axis aligned bounding boxes), making the computation and overall logic a lot easier than in modern physics system (which allow for rotation and fancier collider shapes).
      I reused and upgraded this physic system accross several projects, from Mask Up to Plant Down. In it's latest iteration, I added a debug menu and editor, improving the level design workflow and debugging. 
      `),
        new ProjectData("project-tech-5", "Interactive Board for Gemo", "img/tech/gemo_thumbnail.png","img/tech/gemo.gif",
          ``,
          `Physical installation made at Design Factory 2022. Hardware and software project, Python & C with Arduino`,
          `<i>Design Factory</i> is an interdisciplinary innovation program that focuses on addressing real-world challenges through a combination of design, engineering, and social sciences.
          I was a participant of the 2022 edition of Design Factory, where we met with Gemo, a major actor of shoe retailer in France. They tasked us with a mission: making the offline shoe-buying experience more engaging for parents and children.
          <br>
          <br>
          <img title:"Gemo prototype" src="img/tech/gemo_proto0.png">
          <br>
          During the initial phase, we developed several prototypes. Among them, only one was chosen by Gemo for further development, which we subsequently brought to life as a physical prototype. Our solution: a playful and interactive panel designed to be installed directly in the shop. It allows customers to test their shoes by walking on an illuminated panel. For the frame, we opted for wood, while the surface was crafted using semi-transparent plastic. As for the hardware, we integrated addressable LED strips controlled by an Arduino.
          
          <br> <br>
          <div  style="text-align: center;">
          <img title:"Gemo prototype" src="img/tech/gemo_thumbnail.png">
          </div>
          <br>
          I was tasked to write the code for the board's logic, namely light patterns, input detection and output mapping.
          I ended up writing a python code generator because of limitations with the library provided by the LED strip manufacturer. This python script took as input a range of settings about the hardware, such as:
          <ul> 
          <li> Number of LED strip
          <li> Number of LED per strip
          <li> Choosen lighting logic and pattern
          <li> Desired color 
          </ul>
          This code would output the C program that would then run directly on the arduino card.
          Here's one example of generated code:
          <pre> 
          <code>
            #include <PololuLedStrip.h>

            // Create an ledStrip object and specify the pin it will use.
            PololuLedStrip<2> ledStrip1;
            PololuLedStrip<3> ledStrip2;
            PololuLedStrip<4> ledStrip3;
            PololuLedStrip<5> ledStrip4;

            #define TOTAL_LED_COUNT 60 // CHANGE THIS to match the number of leds connected. One band = 60 leds
            #define PANEL_COUNT 5 // CHANGE THIS to match the number of panel/buttons connected
            int panel_on_x = 0;
            int panel_on_y = 0; 
            int buttons_pin_strip1[PANEL_COUNT] =  {31, 32, 33, 34, 35}; // CHANGE THIS to add the pin of each button (physical adress)
            int buttons_pin_strip2[PANEL_COUNT] =  {36, 37, 38, 39, 40}; 
            int buttons_pin_strip3[PANEL_COUNT] =  {41, 42, 43, 44, 45}; 
            int buttons_pin_strip4[PANEL_COUNT] =  {46, 47, 48, 49, 50}; 
            rgb_color all_black[TOTAL_LED_COUNT];

            int buttons_values_strip1[PANEL_COUNT]; // values of each buttons
            int buttons_values_strip2[PANEL_COUNT];
            int buttons_values_strip3[PANEL_COUNT];
            int buttons_values_strip4[PANEL_COUNT];

            void setup() {
                Serial.begin(9600);
                Serial.print(257);

                for(uint16_t i = 0; i < TOTAL_LED_COUNT; i++)
                {
                    all_black[i-1] = rgb_color(0,0,0);
                }
              
                for(int i = 0; i < PANEL_COUNT; i++)
                {
                  // set each button input
                  pinMode(buttons_pin_strip1[i], INPUT_PULLUP);
                  pinMode(buttons_pin_strip2[i], INPUT_PULLUP);
                  pinMode(buttons_pin_strip3[i], INPUT_PULLUP);
                  pinMode(buttons_pin_strip4[i], INPUT_PULLUP);
                }  
                ResetLeds();
                UpdatePanels();
                }

            void loop() { 
                for(int i = 0; i < PANEL_COUNT; i++)
                {
                  // read input for each pin
                  buttons_values_strip1[i] = digitalRead(buttons_pin_strip1[i]);
                  buttons_values_strip2[i] = digitalRead(buttons_pin_strip2[i]);
                  buttons_values_strip3[i] = digitalRead(buttons_pin_strip3[i]);
                  buttons_values_strip4[i] = digitalRead(buttons_pin_strip4[i]);
                }
                
                UpdateLogic();
                //WriteColor(60, rgb_color(255, 255, 255));
                UpdatePanels();
                
            }

            void ResetLeds() /* Shut down all leds */
            {
                WriteColor(TOTAL_LED_COUNT, rgb_color(0,0,0));
            }

            void UpdateLogic() /* shut down the light if the right button is pressed and light next panel */
            {
                for(int i = 0; i < PANEL_COUNT; i++)
                {
                  if(panel_on_y == i && 
                  ((panel_on_x == 0) && (!buttons_values_strip1[i])
                  || (panel_on_x == 1) && (!buttons_values_strip2[i])
                  || (panel_on_x == 2) && (!buttons_values_strip3[i])
                  || (panel_on_x == 3) && (!buttons_values_strip4[i])))
                  {
                      TriggerPanelChange();
                  }
                }  
            }

            void TriggerPanelChange()
            {
              panel_on_x = (panel_on_x + 1 + rand() % 3) % 4;
              panel_on_y = (panel_on_y + 1 +(rand() % (PANEL_COUNT - 1))) % PANEL_COUNT;
            }

            void UpdatePanels() /* update the panel lights, called each loop */
            {
                rgb_color colors[TOTAL_LED_COUNT];
                int panelID = 0;
                for(uint16_t i = 0; i < TOTAL_LED_COUNT; i++)
                {
                  if(i > (panelID + 1) * TOTAL_LED_COUNT/PANEL_COUNT) panelID++;
                  
                  if(panelID == panel_on_y)
                  {
                      colors[i-1] = rgb_color(0,250, 250);
                  }
                  else colors[i-1] = rgb_color(0,0,0);
                }

                ledStrip1.write(all_black, TOTAL_LED_COUNT);
                ledStrip2.write(all_black, TOTAL_LED_COUNT);
                ledStrip3.write(all_black, TOTAL_LED_COUNT);
                ledStrip4.write(all_black, TOTAL_LED_COUNT);
                if(panel_on_x == 0) ledStrip1.write(colors, TOTAL_LED_COUNT);
                else if(panel_on_x == 1) ledStrip2.write(colors, TOTAL_LED_COUNT);
                else if(panel_on_x == 2) ledStrip3.write(colors, TOTAL_LED_COUNT);
                else ledStrip4.write(colors, TOTAL_LED_COUNT);
            }

            void WriteColor(int n, rgb_color color) /* set the first n leds to color */
            {
                rgb_color colors[TOTAL_LED_COUNT];
                for(uint16_t i = 0; i < n; i++)
                {
                  colors[i] = color;
                }    
                ledStrip1.write(colors, n);
                ledStrip2.write(colors, n);
                ledStrip3.write(colors, n);
                ledStrip4.write(colors, n);
            }

          </code>
          </pre>
          `),
   
];