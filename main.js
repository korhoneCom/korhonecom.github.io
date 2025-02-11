import kaplay from "https://unpkg.com/kaplay@3001/dist/kaplay.mjs";
kaplay();
loadSprite("dracula", "dracula.png");

const player = add([sprite("dracula"), pos(80, 40),area(),body()]);
add([
  text("KorhoneCom KAPLAY testing"), 
  pos(20, 40)
]);
onKeyPress("space", () => {
    if (player.isGrounded()) {
        player.jump();
    }
});
add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
]);
setGravity(1600);

add([
    rect(48, 64),
    area(),
    outline(4),
    pos(width(), height() - 48),
    anchor("botleft"),
    color(255, 180, 255),
    move(LEFT, 240),
    "tree", // add a tag here
]);
