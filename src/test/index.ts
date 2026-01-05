import * as ani from "../index";

document.documentElement.style.background = "#fff"; // #223
const totalSec = 120;
const stage = new ani.Stage(undefined, totalSec);
initStage(stage).then((stage) => {
  stage.play();
  stage.renderController();
});

async function initStage(stage: ani.Stage) {
  stage.output = false;
  await stage.resource.loadImage("./pic/pattern.png", "pattern");
  await stage.resource.loadCSV("./data/test.csv", "data");

  await stage.resource.loadImage(
    "https://picsum.photos/id/236/300/200",
    "麦克"
  );

  await stage.resource.loadImage(
    "https://picsum.photos/id/238/300/200",
    "大卫"
  );

  await stage.resource.loadImage(
    "https://picsum.photos/id/238/300/200",
    "bg_1"
  );

  // #2277cc #00ccee #ee88aa #ffbb00  #ff7722 #556699 #22cc88 #ddddaa #cc88cc #cc8866
  ani.colorPicker.setColor("麦克", "#dc2626");
  ani.colorPicker.setColor("大卫", "#2277cc");
  ani.colorPicker.setColor("kate", "#ee88aa");

  const barChart = new ani.BarChart({
    aniTime: [1, totalSec],
    showXAxis: false,
    margin: { top: 0, left: 0, right: 20, bottom: 10 },
    itemCount: 11,
    showLabel: false,
    barFontSizeScale: 0.6,
    dy: 18,
    barInfoOptions: {},
    dateLabelOptions: {
      fontSize: 52,
    },
  });

  stage.addChild(barChart);

  return stage;
}
