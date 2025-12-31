import * as ani from "../index";

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

  stage.options.sec = 60;
  const barChart = new ani.BarChart({
    aniTime: [1, 60],
    showXAxis: false,
    margin: { top: 0, left: 10, right: 120, bottom: 0 },
    itemCount: 10,
    showLabel: false,
    barFontSizeScale: 0.6,
    dy: 18,
    barInfoOptions: {},
    dateLabelOptions: {
      fontSize: 40,
    },
    // #2277cc #00ccee #ee88aa #ffbb00  #ff7722 #556699 #22cc88 #ddddaa #cc88cc #cc8866
    // colorField: (id) => {
    //   const colorDict = {
    //     麦克: "#dc2626",
    //     大卫: "#2277cc",
    //     kate: "#ee88aa",
    //   };

    //   return colorDict[id] || "pink";
    // },
  });

  stage.addChild(barChart);

  return stage;
}
document.documentElement.style.background = "#fff"; // #223
const stage = new ani.Stage();
initStage(stage).then((s) => {
  s.play();
});
stage.renderController();
