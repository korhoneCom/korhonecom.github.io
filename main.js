import kaplay from "https://unpkg.com/kaplay@3001/dist/kaplay.mjs";
kaplay();
loadSprite("dracula", "dracula.png");

add([sprite("dracula"), pos(80, 40)]);
add([
  text("KorhoneCom KAPLAY testing"), 
  pos(20, 40)
]);
