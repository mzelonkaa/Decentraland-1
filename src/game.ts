import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";
import Script1 from "../6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item";
import Script2 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item";
import Script3 from "../1ed28f7d-046b-428c-8ac5-fcbed8df275e/src/item";
import Script4 from "../7d1e643c-2925-4845-b166-f75d766e9986/src/item";
import Script5 from "../4adfea35-fb5c-4f64-bb5e-c7ebfa350868/src/item";
import Script6 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item";
import Script7 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item";
import Script8 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item";
import { isPreviewMode } from "@decentraland/EnvironmentAPI";
import { PredefinedEmote, triggerEmote } from "@decentraland/RestrictedActions";
import * as utils from "@dcl/ecs-scene-utils";
import { createDispenser } from "./booth/dispenser";
import { object } from "./applyVisibility";
import * as crypto from "@dcl/crypto-scene-utils";
import { Door } from "./door";
import * as ui from "@dcl/ui-scene-utils";
import { DonationsBox } from "./donationbox";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
_scene.addComponentOrReplace(transform);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape = new GLTFShape(
  "dee32299-2f09-4d42-b682-3dfd1d4e1e4d/Stones1.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity.addComponentOrReplace(transform2);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape);
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity2.addComponentOrReplace(transform3);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape);
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity3.addComponentOrReplace(transform4);

const entity4 = new Entity("entity4");
engine.addEntity(entity4);
entity4.setParent(_scene);
entity4.addComponentOrReplace(gltfShape);
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity4.addComponentOrReplace(transform5);

const traditionalStonePagodaLantern = new Entity(
  "traditionalStonePagodaLantern"
);
engine.addEntity(traditionalStonePagodaLantern);
traditionalStonePagodaLantern.setParent(_scene);
const transform6 = new Transform({
  position: new Vector3(13, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(
    0.7730274200439453,
    0.7730274200439453,
    0.7730274200439453
  ),
});
traditionalStonePagodaLantern.addComponentOrReplace(transform6);
const gltfShape2 = new GLTFShape(
  "2fab56bd-6a6e-4418-84e4-72d0528c7646/ChineseFountain_02/ChineseFountain_02.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
traditionalStonePagodaLantern.addComponentOrReplace(gltfShape2);

const curvedStoneBrickWall = new Entity("curvedStoneBrickWall");
engine.addEntity(curvedStoneBrickWall);
curvedStoneBrickWall.setParent(_scene);
const transform7 = new Transform({
  position: new Vector3(14.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
curvedStoneBrickWall.addComponentOrReplace(transform7);
const gltfShape3 = new GLTFShape(
  "0c52bf55-7b0f-4eca-9b3c-b1fbb81c7219/Module_Stone_Curve_02/Module_Stone_Curve_02.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
curvedStoneBrickWall.addComponentOrReplace(gltfShape3);

const curvedStoneBrickWall2 = new Entity("curvedStoneBrickWall2");
engine.addEntity(curvedStoneBrickWall2);
curvedStoneBrickWall2.setParent(_scene);
curvedStoneBrickWall2.addComponentOrReplace(gltfShape3);
const transform8 = new Transform({
  position: new Vector3(19.5, 0, 20.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269),
});
curvedStoneBrickWall2.addComponentOrReplace(transform8);

const diamondRed = new Entity("diamondRed");
engine.addEntity(diamondRed);
diamondRed.setParent(_scene);
const transform9 = new Transform({
  position: new Vector3(22.337841033935547, 0, 19.940223693847656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed.addComponentOrReplace(transform9);
const gltfShape4 = new GLTFShape(
  "8836a6c4-503a-48a6-aee0-be598a9db32f/diamond_pattern_red.glb"
);
gltfShape4.withCollisions = true;
gltfShape4.isPointerBlocker = true;
gltfShape4.visible = true;
diamondRed.addComponentOrReplace(gltfShape4);



const doorframeBlack2 = new Entity("doorframeBlack2");
engine.addEntity(doorframeBlack2);
doorframeBlack2.setParent(_scene);
const gltfShape5 = new GLTFShape(
  "fb7c3a1e-aaf1-4bb1-baa1-0e0f57ed9b3f/BlackDoorframe.glb"
);
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
doorframeBlack2.addComponentOrReplace(gltfShape5);
const transform10 = new Transform({
  position: new Vector3(19.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4939792156219482, 1, 1),
});
doorframeBlack2.addComponentOrReplace(transform10);

const ancientStonePagodaLantern = new Entity("ancientStonePagodaLantern");
engine.addEntity(ancientStonePagodaLantern);
ancientStonePagodaLantern.setParent(_scene);
const transform11 = new Transform({
  position: new Vector3(
    28.066274642944336,
    4.775974273681641,
    28.505268096923828
  ),
  rotation: new Quaternion(
    3.0654397646840987e-15,
    -0.3896298408508301,
    4.644748941018406e-8,
    0.9209715723991394
  ),
  scale: new Vector3(0.940428614616394, 0.9404277801513672, 0.940428614616394),
});
ancientStonePagodaLantern.addComponentOrReplace(transform11);
const gltfShape6 = new GLTFShape(
  "a8f0b74e-8331-4897-9ba9-fe12ef701388/ChineseFountain_01/ChineseFountain_01.glb"
);
gltfShape6.withCollisions = true;
gltfShape6.isPointerBlocker = true;
gltfShape6.visible = true;
ancientStonePagodaLantern.addComponentOrReplace(gltfShape6);

const diamondRed2 = new Entity("diamondRed2");
engine.addEntity(diamondRed2);
diamondRed2.setParent(_scene);
diamondRed2.addComponentOrReplace(gltfShape4);
const transform12 = new Transform({
  position: new Vector3(22.337841033935547, 1, 19.940223693847656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed2.addComponentOrReplace(transform12);


const diamondRed3 = new Entity("diamondRed3");
engine.addEntity(diamondRed3);
diamondRed3.setParent(_scene);
diamondRed3.addComponentOrReplace(gltfShape4);
const transform13 = new Transform({
  position: new Vector3(22.337841033935547, 2, 19.940223693847656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed3.addComponentOrReplace(transform13);

const diamondRed4 = new Entity("diamondRed4");
engine.addEntity(diamondRed4);
diamondRed4.setParent(_scene);
diamondRed4.addComponentOrReplace(gltfShape4);
const transform14 = new Transform({
  position: new Vector3(22.337841033935547, 3, 19.940223693847656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed4.addComponentOrReplace(transform14);

const diamondRed5 = new Entity("diamondRed5");
engine.addEntity(diamondRed5);
diamondRed5.setParent(_scene);
diamondRed5.addComponentOrReplace(gltfShape4);
const transform15 = new Transform({
  position: new Vector3(11.620019912719727, 2, 19.958635330200195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed5.addComponentOrReplace(transform15);

const diamondRed6 = new Entity("diamondRed6");
engine.addEntity(diamondRed6);
diamondRed6.setParent(_scene);
diamondRed6.addComponentOrReplace(gltfShape4);
const transform16 = new Transform({
  position: new Vector3(11.620019912719727, 1, 19.958635330200195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed6.addComponentOrReplace(transform16);

const diamondRed7 = new Entity("diamondRed7");
engine.addEntity(diamondRed7);
diamondRed7.setParent(_scene);
diamondRed7.addComponentOrReplace(gltfShape4);
const transform17 = new Transform({
  position: new Vector3(11.620019912719727, 3, 19.958635330200195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed7.addComponentOrReplace(transform17);

const diamondRed8 = new Entity("diamondRed8");
engine.addEntity(diamondRed8);
diamondRed8.setParent(_scene);
diamondRed8.addComponentOrReplace(gltfShape4);
const transform18 = new Transform({
  position: new Vector3(11.620019912719727, 0, 19.958635330200195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed8.addComponentOrReplace(transform18);

const traditionalRoundPavilion = new Entity("traditionalRoundPavilion");
engine.addEntity(traditionalRoundPavilion);
traditionalRoundPavilion.setParent(_scene);
const transform19 = new Transform({
  position: new Vector3(28.13096809387207, 0, 28.411991119384766),
  rotation: new Quaternion(
    -2.7258204221748293e-15,
    -0.7071065902709961,
    8.429367426288081e-8,
    0.7071070075035095
  ),
  scale: new Vector3(1.1250030994415283, 1.125, 1.1250030994415283),
});
traditionalRoundPavilion.addComponentOrReplace(transform19);
const gltfShape7 = new GLTFShape(
  "d9adde10-9349-49c8-ad6f-3083060fb93f/ChinesePergola_01/ChinesePergola_01.glb"
);
gltfShape7.withCollisions = true;
gltfShape7.isPointerBlocker = true;
gltfShape7.visible = true;
traditionalRoundPavilion.addComponentOrReplace(gltfShape7);

const caribbeanShoreWithRocksPatch = new Entity("caribbeanShoreWithRocksPatch");
engine.addEntity(caribbeanShoreWithRocksPatch);
caribbeanShoreWithRocksPatch.setParent(_scene);
const transform20 = new Transform({
  position: new Vector3(24, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanShoreWithRocksPatch.addComponentOrReplace(transform20);
const gltfShape8 = new GLTFShape(
  "fd9eb4ee-2caa-4fc5-8bd3-bc34288b515e/WaterPatchCurve_01/WaterPatchCurve_01.glb"
);
gltfShape8.withCollisions = true;
gltfShape8.isPointerBlocker = true;
gltfShape8.visible = true;
caribbeanShoreWithRocksPatch.addComponentOrReplace(gltfShape8);

const caribbeanWaterWithCornerRocks = new Entity(
  "caribbeanWaterWithCornerRocks"
);
engine.addEntity(caribbeanWaterWithCornerRocks);
caribbeanWaterWithCornerRocks.setParent(_scene);
const transform21 = new Transform({
  position: new Vector3(32, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithCornerRocks.addComponentOrReplace(transform21);
const gltfShape9 = new GLTFShape(
  "fc559a0b-41b9-4d53-b24c-1713ad9c161c/WaterPatchCornerInside_01/WaterPatchCornerInside_01.glb"
);
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
caribbeanWaterWithCornerRocks.addComponentOrReplace(gltfShape9);

const caribbeanWaterWithTwoSideRocks = new Entity(
  "caribbeanWaterWithTwoSideRocks"
);
engine.addEntity(caribbeanWaterWithTwoSideRocks);
caribbeanWaterWithTwoSideRocks.setParent(_scene);
const transform22 = new Transform({
  position: new Vector3(32, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithTwoSideRocks.addComponentOrReplace(transform22);
const gltfShape10 = new GLTFShape(
  "01d15783-7d05-42d6-a010-3db4b60c63dd/WaterPatchCornerOutside_01/WaterPatchCornerOutside_01.glb"
);
gltfShape10.withCollisions = true;
gltfShape10.isPointerBlocker = true;
gltfShape10.visible = true;
caribbeanWaterWithTwoSideRocks.addComponentOrReplace(gltfShape10);

const archwayOfHonesty = new Entity("archwayOfHonesty");
engine.addEntity(archwayOfHonesty);
archwayOfHonesty.setParent(_scene);
const transform23 = new Transform({
  position: new Vector3(15.77514362335205, 0, 2.3221964836120605),
  rotation: new Quaternion(
    2.1425963098593544e-15,
    0.9999984502792358,
    -1.192090977042426e-7,
    -0.001758534461259842
  ),
  scale: new Vector3(1, 1, 1),
});
archwayOfHonesty.addComponentOrReplace(transform23);
const gltfShape11 = new GLTFShape(
  "8f63046f-c2c5-4750-800a-921d57d82163/ChineseGate_02/ChineseGate_02.glb"
);
gltfShape11.withCollisions = true;
gltfShape11.isPointerBlocker = true;
gltfShape11.visible = true;
archwayOfHonesty.addComponentOrReplace(gltfShape11);

const tianlongDragonStatue = new Entity("tianlongDragonStatue");
engine.addEntity(tianlongDragonStatue);
tianlongDragonStatue.setParent(_scene);
const transform24 = new Transform({
  position: new Vector3(16, 1, 10),
  rotation: new Quaternion(
    4.381712770396007e-9,
    0.9951847791671753,
    0.09801705181598663,
    -7.414705294195301e-8
  ),
  scale: new Vector3(1.0000007152557373, 0.9999998807907104, 1.000000238418579),
});
tianlongDragonStatue.addComponentOrReplace(transform24);
const gltfShape12 = new GLTFShape(
  "2807c5c8-b44a-46fc-b79d-2c3c7ee0c9d4/ChineseStatueDragon_01/ChineseStatueDragon_01.glb"
);
gltfShape12.withCollisions = true;
gltfShape12.isPointerBlocker = true;
gltfShape12.visible = true;
tianlongDragonStatue.addComponentOrReplace(gltfShape12);

//lazy-loading 

export class Visibility 
{
  update()
  {
    object(tianlongDragonStatue)

  }
}

engine.addSystem(new Visibility ())

//lazy loading 

const yearOfThePigPostBanner = new Entity("yearOfThePigPostBanner");
engine.addEntity(yearOfThePigPostBanner);
yearOfThePigPostBanner.setParent(_scene);
const transform25 = new Transform({
  position: new Vector3(31, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 2.25),
});
yearOfThePigPostBanner.addComponentOrReplace(transform25);
const gltfShape13 = new GLTFShape(
  "11de39a5-2064-4249-837c-12c08697e308/ChineseFlag_02/ChineseFlag_02.glb"
);
gltfShape13.withCollisions = true;
gltfShape13.isPointerBlocker = true;
gltfShape13.visible = true;
yearOfThePigPostBanner.addComponentOrReplace(gltfShape13);

const hardwoodRoundedBridge = new Entity("hardwoodRoundedBridge");
engine.addEntity(hardwoodRoundedBridge);
hardwoodRoundedBridge.setParent(_scene);
const transform26 = new Transform({
  position: new Vector3(
    22.86903190612793,
    3.160540131830203e-7,
    28.588008880615234
  ),
  rotation: new Quaternion(
    -6.386771147349037e-15,
    -3.3527609843986284e-7,
    4.618748688633295e-14,
    -1
  ),
  scale: new Vector3(1.1250026226043701, 1.125, 1.1250026226043701),
});
hardwoodRoundedBridge.addComponentOrReplace(transform26);
const gltfShape14 = new GLTFShape(
  "f9f8de37-8131-4e8a-b593-38cbac147001/Bridge_03/Bridge_03.glb"
);
gltfShape14.withCollisions = true;
gltfShape14.isPointerBlocker = true;
gltfShape14.visible = true;
hardwoodRoundedBridge.addComponentOrReplace(gltfShape14);

const yearOfThePigPostBanner2 = new Entity("yearOfThePigPostBanner2");
engine.addEntity(yearOfThePigPostBanner2);
yearOfThePigPostBanner2.setParent(_scene);
yearOfThePigPostBanner2.addComponentOrReplace(gltfShape13);
const transform27 = new Transform({
  position: new Vector3(26.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 2.25),
});
yearOfThePigPostBanner2.addComponentOrReplace(transform27);

const caribbeanWaterWithSideRocks = new Entity("caribbeanWaterWithSideRocks");
engine.addEntity(caribbeanWaterWithSideRocks);
caribbeanWaterWithSideRocks.setParent(_scene);
const transform28 = new Transform({
  position: new Vector3(8, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
caribbeanWaterWithSideRocks.addComponentOrReplace(transform28);
const gltfShape15 = new GLTFShape(
  "52850b6b-49b5-40f6-8b1b-c5ee95de159b/WaterPatchSide_01/WaterPatchSide_01.glb"
);
gltfShape15.withCollisions = true;
gltfShape15.isPointerBlocker = true;
gltfShape15.visible = true;
caribbeanWaterWithSideRocks.addComponentOrReplace(gltfShape15);

const caribbeanShoreWithRocksPatch2 = new Entity(
  "caribbeanShoreWithRocksPatch2"
);
engine.addEntity(caribbeanShoreWithRocksPatch2);
caribbeanShoreWithRocksPatch2.setParent(_scene);
const transform29 = new Transform({
  position: new Vector3(8, 0, 32),
  rotation: new Quaternion(
    -2.427593885731983e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552),
});
caribbeanShoreWithRocksPatch2.addComponentOrReplace(transform29);
caribbeanShoreWithRocksPatch2.addComponentOrReplace(gltfShape8);

const imageScreen = new Entity("imageScreen");
engine.addEntity(imageScreen);
imageScreen.setParent(_scene);
const transform30 = new Transform({
  position: new Vector3(3.330472469329834, 0, 28.28333282470703),
  rotation: new Quaternion(
    -3.2789066787105225e-15,
    -0.9238796234130859,
    1.1013501932666259e-7,
    -0.3826833963394165
  ),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492),
});
imageScreen.addComponentOrReplace(transform30);

const imageScreen2 = new Entity("imageScreen2");
engine.addEntity(imageScreen2);
imageScreen2.setParent(_scene);
const transform31 = new Transform({
  position: new Vector3(
    9.189702987670898,
    3.311456708843252e-8,
    30.68150520324707
  ),
  rotation: new Quaternion(
    -1.790757246536521e-15,
    -1,
    1.1920926823449918e-7,
    -2.9802322387695312e-8
  ),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283),
});
imageScreen2.addComponentOrReplace(transform31);

const radio = new Entity("radio");
engine.addEntity(radio);
radio.setParent(_scene);
const transform32 = new Transform({
  position: new Vector3(7.523285388946533, 0, 30.86094093322754),
  rotation: new Quaternion(
    -1.2881046022297695e-15,
    -0.9999729990959167,
    1.1920605658133354e-7,
    -0.0073477355763316154
  ),
  scale: new Vector3(3.750011682510376, 3.75, 3.750011682510376),
});
radio.addComponentOrReplace(transform32);

const radio2 = new Entity("radio2");
engine.addEntity(radio2);
radio2.setParent(_scene);
const transform33 = new Transform({
  position: new Vector3(10.806427001953125, 0, 30.90382194519043),
  rotation: new Quaternion(
    -1.2881046022297695e-15,
    -0.9999729990959167,
    1.1920605658133354e-7,
    -0.0073477355763316154
  ),
  scale: new Vector3(3.7500104904174805, 3.75, 3.7500104904174805),
});
radio2.addComponentOrReplace(transform33);

const radio3 = new Entity("radio3");
engine.addEntity(radio3);
radio3.setParent(_scene);
const transform34 = new Transform({
  position: new Vector3(
    2.225841999053955,
    2.393029063796348e-8,
    27.2337646484375
  ),
  rotation: new Quaternion(
    -3.2717390859108566e-15,
    0.9210156798362732,
    -1.0979361064755722e-7,
    0.3895256519317627
  ),
  scale: new Vector3(3.750013828277588, 3.75, 3.750013828277588),
});
radio3.addComponentOrReplace(transform34);

const radio4 = new Entity("radio4");
engine.addEntity(radio4);
radio4.setParent(_scene);
const transform35 = new Transform({
  position: new Vector3(
    4.516725063323975,
    1.3764450557118835e-7,
    29.585935592651367
  ),
  rotation: new Quaternion(
    -3.2717390859108566e-15,
    0.9210156798362732,
    -1.0979361064755722e-7,
    0.3895256519317627
  ),
  scale: new Vector3(3.7500128746032715, 3.75, 3.7500128746032715),
});
radio4.addComponentOrReplace(transform35);

const diamondRed9 = new Entity("diamondRed9");
engine.addEntity(diamondRed9);
diamondRed9.setParent(_scene);
diamondRed9.addComponentOrReplace(gltfShape4);
const transform36 = new Transform({
  position: new Vector3(11.746657371520996, 2, 16.811433792114258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed9.addComponentOrReplace(transform36);

const diamondRed10 = new Entity("diamondRed10");
engine.addEntity(diamondRed10);
diamondRed10.setParent(_scene);
diamondRed10.addComponentOrReplace(gltfShape4);
const transform37 = new Transform({
  position: new Vector3(11.746657371520996, 3, 16.811433792114258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed10.addComponentOrReplace(transform37);

const diamondRed11 = new Entity("diamondRed11");
engine.addEntity(diamondRed11);
diamondRed11.setParent(_scene);
diamondRed11.addComponentOrReplace(gltfShape4);
const transform38 = new Transform({
  position: new Vector3(11.746657371520996, 0, 16.811433792114258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed11.addComponentOrReplace(transform38);

const diamondRed12 = new Entity("diamondRed12");
engine.addEntity(diamondRed12);
diamondRed12.setParent(_scene);
diamondRed12.addComponentOrReplace(gltfShape4);
const transform39 = new Transform({
  position: new Vector3(11.746657371520996, 1, 16.811433792114258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed12.addComponentOrReplace(transform39);

const diamondRed13 = new Entity("diamondRed13");
engine.addEntity(diamondRed13);
diamondRed13.setParent(_scene);
diamondRed13.addComponentOrReplace(gltfShape4);
const transform40 = new Transform({
  position: new Vector3(22.364099502563477, 2, 16.766267776489258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed13.addComponentOrReplace(transform40);

const diamondRed14 = new Entity("diamondRed14");
engine.addEntity(diamondRed14);
diamondRed14.setParent(_scene);
diamondRed14.addComponentOrReplace(gltfShape4);
const transform41 = new Transform({
  position: new Vector3(22.364099502563477, 3, 16.766267776489258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed14.addComponentOrReplace(transform41);

const diamondRed15 = new Entity("diamondRed15");
engine.addEntity(diamondRed15);
diamondRed15.setParent(_scene);
diamondRed15.addComponentOrReplace(gltfShape4);
const transform42 = new Transform({
  position: new Vector3(22.364099502563477, 0, 16.766267776489258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed15.addComponentOrReplace(transform42);

const diamondRed16 = new Entity("diamondRed16");
engine.addEntity(diamondRed16);
diamondRed16.setParent(_scene);
diamondRed16.addComponentOrReplace(gltfShape4);
const transform43 = new Transform({
  position: new Vector3(22.364099502563477, 1, 16.766267776489258),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
diamondRed16.addComponentOrReplace(transform43);

const largeIronFence = new Entity("largeIronFence");
engine.addEntity(largeIronFence);
largeIronFence.setParent(_scene);
const transform44 = new Transform({
  position: new Vector3(
    19.02474594116211,
    1.805616855621338,
    5.862507343292236
  ),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(0.5000009536743164, 0.5, 0.5000009536743164),
});
largeIronFence.addComponentOrReplace(transform44);
const gltfShape16 = new GLTFShape(
  "1bea49b5-528b-48cf-8d97-8aef8c86bbd0/FenceIronLarge_01/FenceIronLarge_01.glb"
);
gltfShape16.withCollisions = true;
gltfShape16.isPointerBlocker = true;
gltfShape16.visible = true;
largeIronFence.addComponentOrReplace(gltfShape16);

const largeStoneWall = new Entity("largeStoneWall");
engine.addEntity(largeStoneWall);
largeStoneWall.setParent(_scene);
const transform45 = new Transform({
  position: new Vector3(19, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
largeStoneWall.addComponentOrReplace(transform45);
const gltfShape17 = new GLTFShape(
  "d8586e63-20ac-426d-8602-3c28603e8294/FenceStoneTallLarge_01/FenceStoneTallLarge_01.glb"
);
gltfShape17.withCollisions = true;
gltfShape17.isPointerBlocker = true;
gltfShape17.visible = true;
largeStoneWall.addComponentOrReplace(gltfShape17);

const largeStoneWall2 = new Entity("largeStoneWall2");
engine.addEntity(largeStoneWall2);
largeStoneWall2.setParent(_scene);
largeStoneWall2.addComponentOrReplace(gltfShape17);
const transform46 = new Transform({
  position: new Vector3(18.94928550720215, 0, 5.895563125610352),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373),
});
largeStoneWall2.addComponentOrReplace(transform46);

const largeIronFence2 = new Entity("largeIronFence2");
engine.addEntity(largeIronFence2);
largeIronFence2.setParent(_scene);
largeIronFence2.addComponentOrReplace(gltfShape16);
const transform47 = new Transform({
  position: new Vector3(
    21.417346954345703,
    1.805616855621338,
    5.857013702392578
  ),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(0.5000011920928955, 0.5, 0.5000011920928955),
});
largeIronFence2.addComponentOrReplace(transform47);

const largeIronFence3 = new Entity("largeIronFence3");
engine.addEntity(largeIronFence3);
largeIronFence3.setParent(_scene);
largeIronFence3.addComponentOrReplace(gltfShape16);
const transform48 = new Transform({
  position: new Vector3(
    23.95221710205078,
    1.805616855621338,
    5.836554527282715
  ),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(0.500001072883606, 0.5, 0.500001072883606),
});
largeIronFence3.addComponentOrReplace(transform48);

const largeIronFence4 = new Entity("largeIronFence4");
engine.addEntity(largeIronFence4);
largeIronFence4.setParent(_scene);
largeIronFence4.addComponentOrReplace(gltfShape16);
const transform49 = new Transform({
  position: new Vector3(
    26.344818115234375,
    1.805616855621338,
    5.831060886383057
  ),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(0.5000013113021851, 0.5, 0.5000013113021851),
});
largeIronFence4.addComponentOrReplace(transform49);

const largeStoneWall3 = new Entity("largeStoneWall3");
engine.addEntity(largeStoneWall3);
largeStoneWall3.setParent(_scene);
largeStoneWall3.addComponentOrReplace(gltfShape17);
const transform50 = new Transform({
  position: new Vector3(23.87675666809082, 0, 5.86961030960083),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
largeStoneWall3.addComponentOrReplace(transform50);

const largeStoneWall4 = new Entity("largeStoneWall4");
engine.addEntity(largeStoneWall4);
largeStoneWall4.setParent(_scene);
largeStoneWall4.addComponentOrReplace(gltfShape17);
const transform51 = new Transform({
  position: new Vector3(26.95072364807129, 0, 5.858148097991943),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
largeStoneWall4.addComponentOrReplace(transform51);

const largeIronFence5 = new Entity("largeIronFence5");
engine.addEntity(largeIronFence5);
largeIronFence5.setParent(_scene);
largeIronFence5.addComponentOrReplace(gltfShape16);
const transform52 = new Transform({
  position: new Vector3(
    28.835800170898438,
    1.805616855621338,
    5.82206916809082
  ),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(0.5000015497207642, 0.5, 0.5000015497207642),
});
largeIronFence5.addComponentOrReplace(transform52);

const largeStoneWall5 = new Entity("largeStoneWall5");
engine.addEntity(largeStoneWall5);
largeStoneWall5.setParent(_scene);
largeStoneWall5.addComponentOrReplace(gltfShape17);
const transform53 = new Transform({
  position: new Vector3(12.456000328063965, 0, 6.034951686859131),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
largeStoneWall5.addComponentOrReplace(transform53);

const largeIronFence6 = new Entity("largeIronFence6");
engine.addEntity(largeIronFence6);
largeIronFence6.setParent(_scene);
largeIronFence6.addComponentOrReplace(gltfShape16);
const transform54 = new Transform({
  position: new Vector3(
    12.463866233825684,
    1.805616855621338,
    6.036853790283203
  ),
  rotation: new Quaternion(
    -4.033602235044027e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.5000016689300537, 0.5, 0.5000016689300537),
});
largeIronFence6.addComponentOrReplace(transform54);

const largeStoneWall6 = new Entity("largeStoneWall6");
engine.addEntity(largeStoneWall6);
largeStoneWall6.setParent(_scene);
largeStoneWall6.addComponentOrReplace(gltfShape17);
const transform55 = new Transform({
  position: new Vector3(0.048668622970581055, 0, 6.013527870178223),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537),
});
largeStoneWall6.addComponentOrReplace(transform55);

const largeIronFence7 = new Entity("largeIronFence7");
engine.addEntity(largeIronFence7);
largeIronFence7.setParent(_scene);
largeIronFence7.addComponentOrReplace(gltfShape16);
const transform56 = new Transform({
  position: new Vector3(
    10.68906307220459,
    1.805616855621338,
    6.042347431182861
  ),
  rotation: new Quaternion(
    -4.033602235044027e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.5000019073486328, 0.5, 0.5000019073486328),
});
largeIronFence7.addComponentOrReplace(transform56);

const largeIronFence8 = new Entity("largeIronFence8");
engine.addEntity(largeIronFence8);
largeIronFence8.setParent(_scene);
largeIronFence8.addComponentOrReplace(gltfShape16);
const transform57 = new Transform({
  position: new Vector3(
    8.154192924499512,
    1.805616855621338,
    6.062806606292725
  ),
  rotation: new Quaternion(
    -4.033602235044027e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.5000017881393433, 0.5, 0.5000017881393433),
});
largeIronFence8.addComponentOrReplace(transform57);

const largeStoneWall7 = new Entity("largeStoneWall7");
engine.addEntity(largeStoneWall7);
largeStoneWall7.setParent(_scene);
largeStoneWall7.addComponentOrReplace(gltfShape17);
const transform58 = new Transform({
  position: new Vector3(4.484212875366211, 0, 6.010794162750244),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
largeStoneWall7.addComponentOrReplace(transform58);

const largeIronFence9 = new Entity("largeIronFence9");
engine.addEntity(largeIronFence9);
largeIronFence9.setParent(_scene);
largeIronFence9.addComponentOrReplace(gltfShape16);
const transform59 = new Transform({
  position: new Vector3(
    5.511591911315918,
    1.805616855621338,
    6.066454887390137
  ),
  rotation: new Quaternion(
    -4.033602235044027e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.5000019073486328, 0.5, 0.5000019073486328),
});
largeIronFence9.addComponentOrReplace(transform59);

const largeStoneWall8 = new Entity("largeStoneWall8");
engine.addEntity(largeStoneWall8);
largeStoneWall8.setParent(_scene);
largeStoneWall8.addComponentOrReplace(gltfShape17);
const transform60 = new Transform({
  position: new Vector3(7.55817985534668, 0, 5.999331951141357),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
});
largeStoneWall8.addComponentOrReplace(transform60);

const largeIronFence10 = new Entity("largeIronFence10");
engine.addEntity(largeIronFence10);
largeIronFence10.setParent(_scene);
largeIronFence10.addComponentOrReplace(gltfShape16);
const transform61 = new Transform({
  position: new Vector3(
    3.0206098556518555,
    1.805616855621338,
    6.075446605682373
  ),
  rotation: new Quaternion(
    -4.033602235044027e-15,
    -0.7071068286895752,
    8.429370268459024e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(0.5000021457672119, 0.5, 0.5000021457672119),
});
largeIronFence10.addComponentOrReplace(transform61);

const smallStoneWall = new Entity("smallStoneWall");
engine.addEntity(smallStoneWall);
smallStoneWall.setParent(_scene);
const transform62 = new Transform({
  position: new Vector3(12.437453269958496, 0, 1.1387279033660889),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373),
});
smallStoneWall.addComponentOrReplace(transform62);
const gltfShape18 = new GLTFShape(
  "43888045-631f-4907-9bf5-e0529d9cc10d/FenceStoneTallSmall_01/FenceStoneTallSmall_01.glb"
);
gltfShape18.withCollisions = true;
gltfShape18.isPointerBlocker = true;
gltfShape18.visible = true;
smallStoneWall.addComponentOrReplace(gltfShape18);

const smallStoneWall2 = new Entity("smallStoneWall2");
engine.addEntity(smallStoneWall2);
smallStoneWall2.setParent(_scene);
smallStoneWall2.addComponentOrReplace(gltfShape18);
const transform63 = new Transform({
  position: new Vector3(13.006670951843262, 0, 1.136988878250122),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
smallStoneWall2.addComponentOrReplace(transform63);

const smallStoneWall3 = new Entity("smallStoneWall3");
engine.addEntity(smallStoneWall3);
smallStoneWall3.setParent(_scene);
smallStoneWall3.addComponentOrReplace(gltfShape18);
const transform64 = new Transform({
  position: new Vector3(17.529375076293945, 0, 1.2256388664245605),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
smallStoneWall3.addComponentOrReplace(transform64);

const smallStoneWall4 = new Entity("smallStoneWall4");
engine.addEntity(smallStoneWall4);
smallStoneWall4.setParent(_scene);
smallStoneWall4.addComponentOrReplace(gltfShape18);
const transform65 = new Transform({
  position: new Vector3(18.09859275817871, 0, 1.2238998413085938),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    -0.7071068286895752,
    8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
smallStoneWall4.addComponentOrReplace(transform65);

const policeCar = new Entity("policeCar");
engine.addEntity(policeCar);
policeCar.setParent(_scene);
const transform66 = new Transform({
  position: new Vector3(26.79827308654785, 0, 2.4537649154663086),
  rotation: new Quaternion(
    -2.420181076894087e-15,
    -0.7730104923248291,
    9.215002449991516e-8,
    0.6343933343887329
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373),
});
policeCar.addComponentOrReplace(transform66);

const adRock = new Entity("adRock");
engine.addEntity(adRock);
adRock.setParent(_scene);
const transform67 = new Transform({
  position: new Vector3(16, 0, 10),
  rotation: new Quaternion(
    0.25586727261543274,
    -0.7109013795852661,
    -0.011613816022872925,
    0.6549933552742004
  ),
  scale: new Vector3(
    1.6058658361434937,
    1.6058646440505981,
    1.6058669090270996
  ),
});
adRock.addComponentOrReplace(transform67);
const gltfShape19 = new GLTFShape(
  "017c0c8b-724a-4aa2-b298-afb9a450906c/Rock_03/Rock_03.glb"
);
gltfShape19.withCollisions = true;
gltfShape19.isPointerBlocker = true;
gltfShape19.visible = true;
adRock.addComponentOrReplace(gltfShape19);

const rockArch = new Entity("rockArch");
engine.addEntity(rockArch);
rockArch.setParent(_scene);
const transform68 = new Transform({
  position: new Vector3(5.719943523406982, 0, 8.400341033935547),
  rotation: new Quaternion(
    -3.2855162885561846e-15,
    0.9997152090072632,
    -1.1917532560801192e-7,
    -0.02386752888560295
  ),
  scale: new Vector3(
    0.9015378952026367,
    0.9015371799468994,
    0.9015378952026367
  ),
});
rockArch.addComponentOrReplace(transform68);
const gltfShape20 = new GLTFShape(
  "d77e45df-3850-4bee-8280-d88abf1cf5d9/RockArc_01/RockArc_01.glb"
);
gltfShape20.withCollisions = true;
gltfShape20.isPointerBlocker = true;
gltfShape20.visible = true;
rockArch.addComponentOrReplace(gltfShape20);

const traditionalStonePagodaLantern2 = new Entity(
  "traditionalStonePagodaLantern2"
);
engine.addEntity(traditionalStonePagodaLantern2);
traditionalStonePagodaLantern2.setParent(_scene);
traditionalStonePagodaLantern2.addComponentOrReplace(gltfShape2);
const transform69 = new Transform({
  position: new Vector3(18.295080184936523, 0, 0.5497883558273315),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(
    0.7730274200439453,
    0.7730274200439453,
    0.7730274200439453
  ),
});
traditionalStonePagodaLantern2.addComponentOrReplace(transform69);

const galleryInfoNavy = new Entity("galleryInfoNavy");
engine.addEntity(galleryInfoNavy);
galleryInfoNavy.setParent(_scene);
const transform70 = new Transform({
  position: new Vector3(8, 0, 5.5),
  rotation: new Quaternion(
    -1.5990989956821719e-15,
    -0.9999034404754639,
    1.1919776454760722e-7,
    -0.013896165415644646
  ),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269),
});
galleryInfoNavy.addComponentOrReplace(transform70);

const galleryInfoNavy2 = new Entity("galleryInfoNavy2");
engine.addEntity(galleryInfoNavy2);
galleryInfoNavy2.setParent(_scene);
const transform71 = new Transform({
  position: new Vector3(5, 0, 5.5),
  rotation: new Quaternion(
    -1.5990989956821719e-15,
    -0.9999034404754639,
    1.1919776454760722e-7,
    -0.013896165415644646
  ),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582),
});
galleryInfoNavy2.addComponentOrReplace(transform71);

const galleryInfoNavy3 = new Entity("galleryInfoNavy3");
engine.addEntity(galleryInfoNavy3);
galleryInfoNavy3.setParent(_scene);
const transform72 = new Transform({
  position: new Vector3(23.5, 0, 5.5),
  rotation: new Quaternion(
    -1.5990989956821719e-15,
    -0.9999034404754639,
    1.1919776454760722e-7,
    -0.013896165415644646
  ),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373),
});
galleryInfoNavy3.addComponentOrReplace(transform72);

const galleryInfoNavy4 = new Entity("galleryInfoNavy4");
engine.addEntity(galleryInfoNavy4);
galleryInfoNavy4.setParent(_scene);
const transform73 = new Transform({
  position: new Vector3(20.5, 0, 5.5),
  rotation: new Quaternion(
    -1.5990989956821719e-15,
    -0.9999034404754639,
    1.1919776454760722e-7,
    -0.013896165415644646
  ),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687),
});
galleryInfoNavy4.addComponentOrReplace(transform73);

const lightYellowSycamoreTree = new Entity("lightYellowSycamoreTree");
engine.addEntity(lightYellowSycamoreTree);
lightYellowSycamoreTree.setParent(_scene);
const transform74 = new Transform({
  position: new Vector3(19, 0, 6),
  rotation: new Quaternion(
    -5.583651352695715e-15,
    0.7730103731155396,
    -9.215002449991516e-8,
    -0.6343934535980225
  ),
  scale: new Vector3(1.5000001192092896, 1.5, 1.5000001192092896),
});
lightYellowSycamoreTree.addComponentOrReplace(transform74);
const gltfShape21 = new GLTFShape(
  "6dd971fe-6284-4c74-8327-c87f0d692b32/TreeSycamore_02/TreeSycamore_02.glb"
);
gltfShape21.withCollisions = true;
gltfShape21.isPointerBlocker = true;
gltfShape21.visible = true;
lightYellowSycamoreTree.addComponentOrReplace(gltfShape21);

const lightYellowSycamoreTree2 = new Entity("lightYellowSycamoreTree2");
engine.addEntity(lightYellowSycamoreTree2);
lightYellowSycamoreTree2.setParent(_scene);
const transform75 = new Transform({
  position: new Vector3(26.72088050842285, 0, 7.1664838790893555),
  rotation: new Quaternion(
    6.762008939974399e-17,
    0.40371671319007874,
    -4.8126775453738446e-8,
    0.914884090423584
  ),
  scale: new Vector3(
    1.1781048774719238,
    1.1781044006347656,
    1.1781048774719238
  ),
});
lightYellowSycamoreTree2.addComponentOrReplace(transform75);
lightYellowSycamoreTree2.addComponentOrReplace(gltfShape21);

const lightYellowPineTree = new Entity("lightYellowPineTree");
engine.addEntity(lightYellowPineTree);
lightYellowPineTree.setParent(_scene);
const transform76 = new Transform({
  position: new Vector3(29.978042602539062, 0, 7.808494567871094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(
    1.1843128204345703,
    1.4539605379104614,
    1.1843128204345703
  ),
});
lightYellowPineTree.addComponentOrReplace(transform76);
const gltfShape22 = new GLTFShape(
  "02606ec8-602e-4a5f-9485-06a1594be6e9/TreePine_02/TreePine_02.glb"
);
gltfShape22.withCollisions = true;
gltfShape22.isPointerBlocker = true;
gltfShape22.visible = true;
lightYellowPineTree.addComponentOrReplace(gltfShape22);

const lightYellowSquaredTree = new Entity("lightYellowSquaredTree");
engine.addEntity(lightYellowSquaredTree);
lightYellowSquaredTree.setParent(_scene);
const transform77 = new Transform({
  position: new Vector3(7.596834182739258, 0, 6.4135284423828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lightYellowSquaredTree.addComponentOrReplace(transform77);
const gltfShape23 = new GLTFShape(
  "e34b243a-dfc9-4f6a-8fb1-8dc01bd30895/TreeTall_03/TreeTall_03.glb"
);
gltfShape23.withCollisions = true;
gltfShape23.isPointerBlocker = true;
gltfShape23.visible = true;
lightYellowSquaredTree.addComponentOrReplace(gltfShape23);

const lightYellowSycamoreTree3 = new Entity("lightYellowSycamoreTree3");
engine.addEntity(lightYellowSycamoreTree3);
lightYellowSycamoreTree3.setParent(_scene);
const transform78 = new Transform({
  position: new Vector3(1.825227975845337, 0, 6.553536891937256),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
lightYellowSycamoreTree3.addComponentOrReplace(transform78);
lightYellowSycamoreTree3.addComponentOrReplace(gltfShape21);

const lightYellowSycamoreTree4 = new Entity("lightYellowSycamoreTree4");
engine.addEntity(lightYellowSycamoreTree4);
lightYellowSycamoreTree4.setParent(_scene);
const transform79 = new Transform({
  position: new Vector3(10.85518741607666, 0, 6.6508588790893555),
  rotation: new Quaternion(
    -1.10062582369541e-15,
    0.6343932747840881,
    -7.562556447737734e-8,
    0.7730104327201843
  ),
  scale: new Vector3(
    0.7217844724655151,
    0.7217845916748047,
    0.7217844724655151
  ),
});
lightYellowSycamoreTree4.addComponentOrReplace(transform79);
lightYellowSycamoreTree4.addComponentOrReplace(gltfShape21);

const caribbeanWaterWithSideRocks2 = new Entity("caribbeanWaterWithSideRocks2");
engine.addEntity(caribbeanWaterWithSideRocks2);
caribbeanWaterWithSideRocks2.setParent(_scene);
const transform80 = new Transform({
  position: new Vector3(0.11057162284851074, 0, 6.0124406814575195),
  rotation: new Quaternion(
    8.734495331869097e-15,
    -0.999987781047821,
    1.1920780451646351e-7,
    -0.004945000167936087
  ),
  scale: new Vector3(1.0000032186508179, 1, 1.0000032186508179),
});
caribbeanWaterWithSideRocks2.addComponentOrReplace(transform80);
caribbeanWaterWithSideRocks2.addComponentOrReplace(gltfShape15);

const caribbeanShoreWithRocksPatch3 = new Entity(
  "caribbeanShoreWithRocksPatch3"
);
engine.addEntity(caribbeanShoreWithRocksPatch3);
caribbeanShoreWithRocksPatch3.setParent(_scene);
const transform81 = new Transform({
  position: new Vector3(5.458647727966309, 0, 6.845690727233887),
  rotation: new Quaternion(
    -4.239648251067908e-14,
    -0.995383620262146,
    1.1865898841278977e-7,
    0.09597640484571457
  ),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582),
});
caribbeanShoreWithRocksPatch3.addComponentOrReplace(transform81);
const gltfShape24 = new GLTFShape(
  "75f2ea4e-e061-4627-ae43-9460aa106066/WaterPatchCurve_02/WaterPatchCurve_02.glb"
);
gltfShape24.withCollisions = true;
gltfShape24.isPointerBlocker = true;
gltfShape24.visible = true;
caribbeanShoreWithRocksPatch3.addComponentOrReplace(gltfShape24);

const treasureSword = new Entity("treasureSword");
engine.addEntity(treasureSword);
treasureSword.setParent(_scene);
const transform82 = new Transform({
  position: new Vector3(
    28.067407608032227,
    6.175380706787109,
    28.490158081054688
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
treasureSword.addComponentOrReplace(transform82);
const gltfShape25 = new GLTFShape(
  "06a07e47-6dff-4d97-881a-9c91688a945b/Sword_01/Sword_01.glb"
);
gltfShape25.withCollisions = true;
gltfShape25.isPointerBlocker = true;
gltfShape25.visible = true;
treasureSword.addComponentOrReplace(gltfShape25);

const doubleStoneStairs = new Entity("doubleStoneStairs");
engine.addEntity(doubleStoneStairs);
doubleStoneStairs.setParent(_scene);
const transform83 = new Transform({
  position: new Vector3(7.189977169036865, 0, 14.11284065246582),
  rotation: new Quaternion(
    -5.953873783831045e-15,
    -0.9997764229774475,
    1.1918262998733553e-7,
    -0.02114652469754219
  ),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701),
});
doubleStoneStairs.addComponentOrReplace(transform83);
const gltfShape26 = new GLTFShape(
  "40cd7240-58ec-4e04-bcec-bc93f75f0e0e/Stairs_L_01/Stairs_L_01.glb"
);
gltfShape26.withCollisions = true;
gltfShape26.isPointerBlocker = true;
gltfShape26.visible = true;
doubleStoneStairs.addComponentOrReplace(gltfShape26);

const doubleStoneStairs2 = new Entity("doubleStoneStairs2");
engine.addEntity(doubleStoneStairs2);
doubleStoneStairs2.setParent(_scene);
const transform84 = new Transform({
  position: new Vector3(22.87026023864746, 0, 16.264671325683594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
doubleStoneStairs2.addComponentOrReplace(transform84);
doubleStoneStairs2.addComponentOrReplace(gltfShape26);

const curvedStoneBrickWall3 = new Entity("curvedStoneBrickWall3");
engine.addEntity(curvedStoneBrickWall3);
curvedStoneBrickWall3.setParent(_scene);
curvedStoneBrickWall3.addComponentOrReplace(gltfShape3);
const transform85 = new Transform({
  position: new Vector3(14.5, 4, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
curvedStoneBrickWall3.addComponentOrReplace(transform85);

const curvedStoneBrickWall4 = new Entity("curvedStoneBrickWall4");
engine.addEntity(curvedStoneBrickWall4);
curvedStoneBrickWall4.setParent(_scene);
curvedStoneBrickWall4.addComponentOrReplace(gltfShape3);
const transform86 = new Transform({
  position: new Vector3(19.5, 4, 20.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606),
});
curvedStoneBrickWall4.addComponentOrReplace(transform86);

const curvedStoneBrickWall5 = new Entity("curvedStoneBrickWall5");
engine.addEntity(curvedStoneBrickWall5);
curvedStoneBrickWall5.setParent(_scene);
curvedStoneBrickWall5.addComponentOrReplace(gltfShape3);
const transform87 = new Transform({
  position: new Vector3(14.5, 8, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
curvedStoneBrickWall5.addComponentOrReplace(transform87);

const curvedStoneBrickWall6 = new Entity("curvedStoneBrickWall6");
engine.addEntity(curvedStoneBrickWall6);
curvedStoneBrickWall6.setParent(_scene);
curvedStoneBrickWall6.addComponentOrReplace(gltfShape3);
const transform88 = new Transform({
  position: new Vector3(19.5, 8, 20.5),
  rotation: new Quaternion(
    -2.4085271740892887e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185),
});
curvedStoneBrickWall6.addComponentOrReplace(transform88);

const largeStoneFloor = new Entity("largeStoneFloor");
engine.addEntity(largeStoneFloor);
largeStoneFloor.setParent(_scene);
const transform89 = new Transform({
  position: new Vector3(
    22.0621337890625,
    3.988710403442383,
    24.695581436157227
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5529353618621826, 5.578503608703613, 1.9039056301116943),
});
largeStoneFloor.addComponentOrReplace(transform89);
const gltfShape27 = new GLTFShape(
  "717323f7-72ff-48f4-b4ca-9afffb81aaa8/Stone_Module_4M/Stone_Module_4M.glb"
);
gltfShape27.withCollisions = true;
gltfShape27.isPointerBlocker = true;
gltfShape27.visible = true;
largeStoneFloor.addComponentOrReplace(gltfShape27);

const largeStoneFloor2 = new Entity("largeStoneFloor2");
engine.addEntity(largeStoneFloor2);
largeStoneFloor2.setParent(_scene);
largeStoneFloor2.addComponentOrReplace(gltfShape27);
const transform90 = new Transform({
  position: new Vector3(
    23.068546295166016,
    3.988710403442383,
    17.441478729248047
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7540454864501953, 5.578503608703613, 1.9039055109024048),
});
largeStoneFloor2.addComponentOrReplace(transform90);

const largeStoneFloor3 = new Entity("largeStoneFloor3");
engine.addEntity(largeStoneFloor3);
largeStoneFloor3.setParent(_scene);
largeStoneFloor3.addComponentOrReplace(gltfShape27);
const transform91 = new Transform({
  position: new Vector3(
    16.028949737548828,
    3.988710403442383,
    20.894519805908203
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5529353618621826, 5.578503608703613, 1.1936545372009277),
});
largeStoneFloor3.addComponentOrReplace(transform91);

const largeStoneFloor4 = new Entity("largeStoneFloor4");
engine.addEntity(largeStoneFloor4);
largeStoneFloor4.setParent(_scene);
largeStoneFloor4.addComponentOrReplace(gltfShape27);
const transform92 = new Transform({
  position: new Vector3(
    27.36128807067871,
    3.988710403442383,
    20.515077590942383
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5529353618621826, 5.578503608703613, 1.1936545372009277),
});
largeStoneFloor4.addComponentOrReplace(transform92);

const largeStoneFloor5 = new Entity("largeStoneFloor5");
engine.addEntity(largeStoneFloor5);
largeStoneFloor5.setParent(_scene);
largeStoneFloor5.addComponentOrReplace(gltfShape27);
const transform93 = new Transform({
  position: new Vector3(
    22.942493438720703,
    3.988710403442383,
    14.281031608581543
  ),
  rotation: new Quaternion(
    -0.7153316140174866,
    -1.2924955151492174e-15,
    8.527413797310146e-8,
    0.6987852454185486
  ),
  scale: new Vector3(1.2764676809310913, 2.789254665374756, 0.951953649520874),
});
largeStoneFloor5.addComponentOrReplace(transform93);

const largeStoneFloor6 = new Entity("largeStoneFloor6");
engine.addEntity(largeStoneFloor6);
largeStoneFloor6.setParent(_scene);
largeStoneFloor6.addComponentOrReplace(gltfShape27);
const transform94 = new Transform({
  position: new Vector3(
    12.235319137573242,
    4.14188289642334,
    16.45881462097168
  ),
  rotation: new Quaternion(
    -0.7150090932846069,
    -0.02097996324300766,
    -0.02147665061056614,
    0.6984701752662659
  ),
  scale: new Vector3(
    1.2764674425125122,
    2.7896833419799805,
    1.2112241983413696
  ),
});
largeStoneFloor6.addComponentOrReplace(transform94);

const wallPinkBoards = new Entity("wallPinkBoards");
engine.addEntity(wallPinkBoards);
wallPinkBoards.setParent(_scene);
const transform95 = new Transform({
  position: new Vector3(
    19.425628662109375,
    4.089224815368652,
    24.351581573486328
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.4948527812957764, 1.967172622680664, 1),
});
wallPinkBoards.addComponentOrReplace(transform95);
const gltfShape28 = new GLTFShape(
  "f6fb3031-dc9e-4a10-92a5-ffaac7339e50/PinkBoardsWall.glb"
);
gltfShape28.withCollisions = true;
gltfShape28.isPointerBlocker = true;
gltfShape28.visible = true;
wallPinkBoards.addComponentOrReplace(gltfShape28);

const roofBlackEdge = new Entity("roofBlackEdge");
engine.addEntity(roofBlackEdge);
roofBlackEdge.setParent(_scene);
const transform96 = new Transform({
  position: new Vector3(
    14.099302291870117,
    7.807171821594238,
    21.642845153808594
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
roofBlackEdge.addComponentOrReplace(transform96);
const gltfShape29 = new GLTFShape(
  "d7d63b68-ca09-43dd-a897-432a0cf60626/BlackRoof_1Edge.glb"
);
gltfShape29.withCollisions = true;
gltfShape29.isPointerBlocker = true;
gltfShape29.visible = true;
roofBlackEdge.addComponentOrReplace(gltfShape29);

const roofBlackEdge2 = new Entity("roofBlackEdge2");
engine.addEntity(roofBlackEdge2);
roofBlackEdge2.setParent(_scene);
roofBlackEdge2.addComponentOrReplace(gltfShape29);
const transform97 = new Transform({
  position: new Vector3(
    19.6248779296875,
    7.807171821594238,
    17.760910034179688
  ),
  rotation: new Quaternion(
    6.721179331408561e-15,
    1,
    -1.1920928244535389e-7,
    -3.725290298461914e-8
  ),
  scale: new Vector3(1, 1, 1),
});
roofBlackEdge2.addComponentOrReplace(transform97);

const floorBlackSmall = new Entity("floorBlackSmall");
engine.addEntity(floorBlackSmall);
floorBlackSmall.setParent(_scene);
const transform98 = new Transform({
  position: new Vector3(22.944087982177734, 0, 22.58416748046875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.719104766845703, 1.2871466875076294, 4.319084167480469),
});
floorBlackSmall.addComponentOrReplace(transform98);
const gltfShape30 = new GLTFShape(
  "b726fb2a-49dd-4cb0-9305-94a8ba66c706/BlackFloor_Small.glb"
);
gltfShape30.withCollisions = true;
gltfShape30.isPointerBlocker = true;
gltfShape30.visible = true;
floorBlackSmall.addComponentOrReplace(gltfShape30);

const windowBlackLarge = new Entity("windowBlackLarge");
engine.addEntity(windowBlackLarge);
windowBlackLarge.setParent(_scene);
const transform99 = new Transform({
  position: new Vector3(24.88004493713379, 0, 17.380537033081055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
windowBlackLarge.addComponentOrReplace(transform99);
const gltfShape31 = new GLTFShape(
  "3480f2f9-fd1a-43c8-a84f-9fe443aff7e9/BlackWindowLarge.glb"
);
gltfShape31.withCollisions = true;
gltfShape31.isPointerBlocker = true;
gltfShape31.visible = true;
windowBlackLarge.addComponentOrReplace(gltfShape31);

const windowBlackLarge2 = new Entity("windowBlackLarge2");
engine.addEntity(windowBlackLarge2);
windowBlackLarge2.setParent(_scene);
const transform100 = new Transform({
  position: new Vector3(10.45727825164795, 0, 21.12325096130371),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
windowBlackLarge2.addComponentOrReplace(transform100);
windowBlackLarge2.addComponentOrReplace(gltfShape31);

const theLonelyFountain = new Entity("theLonelyFountain");
engine.addEntity(theLonelyFountain);
theLonelyFountain.setParent(_scene);
const transform101 = new Transform({
  position: new Vector3(16.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(
    0.8962451219558716,
    0.8962451219558716,
    0.8962451219558716
  ),
});
theLonelyFountain.addComponentOrReplace(transform101);
const gltfShape32 = new GLTFShape(
  "af0445bd-5654-4d3d-936c-e2b57a740d1a/Fountain_03/Fountain_03.glb"
);
gltfShape32.withCollisions = true;
gltfShape32.isPointerBlocker = true;
gltfShape32.visible = true;
theLonelyFountain.addComponentOrReplace(gltfShape32);

const mixtable = new Entity("mixtable");
engine.addEntity(mixtable);
mixtable.setParent(_scene);
const transform102 = new Transform({
  position: new Vector3(
    17.118772506713867,
    4.265879154205322,
    19.535396575927734
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
mixtable.addComponentOrReplace(transform102);

const nftPictureFrame = new Entity("nftPictureFrame");
engine.addEntity(nftPictureFrame);
nftPictureFrame.setParent(_scene);
const transform103 = new Transform({
  position: new Vector3(16.939926147460938, 6.5, 24.50505828857422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.140900611877441, 8.413694381713867, 0.9999999403953552),
});
nftPictureFrame.addComponentOrReplace(transform103);

const videoStream = new Entity("videoStream");
engine.addEntity(videoStream);
videoStream.setParent(_scene);
const transform104 = new Transform({
  position: new Vector3(16.9946346282959, 5, 20.989578247070312),
  rotation: new Quaternion(
    5.6802808713184855e-15,
    0.9999988079071045,
    -1.192091474422341e-7,
    0.001561751589179039
  ),
  scale: new Vector3(
    3.0096256732940674,
    3.0096187591552734,
    3.0096256732940674
  ),
});
videoStream.addComponentOrReplace(transform104);

const largeStoneFloor7 = new Entity("largeStoneFloor7");
engine.addEntity(largeStoneFloor7);
largeStoneFloor7.setParent(_scene);
largeStoneFloor7.addComponentOrReplace(gltfShape27);
const transform105 = new Transform({
  position: new Vector3(
    21.756643295288086,
    4.14188289642334,
    16.345731735229492
  ),
  rotation: new Quaternion(
    -0.7152814269065857,
    -0.008276009000837803,
    -0.00847188662737608,
    0.6987361907958984
  ),
  scale: new Vector3(1.007036566734314, 2.7875559329986572, 1.2112255096435547),
});
largeStoneFloor7.addComponentOrReplace(transform105);

const floorBlackSmall2 = new Entity("floorBlackSmall2");
engine.addEntity(floorBlackSmall2);
floorBlackSmall2.setParent(_scene);
floorBlackSmall2.addComponentOrReplace(gltfShape30);
const transform106 = new Transform({
  position: new Vector3(19.0208740234375, 0, 8.629236221313477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.308518171310425, 1.2871466875076294, 4.319083213806152),
});
floorBlackSmall2.addComponentOrReplace(transform106);

const blockFloorLight = new Entity("blockFloorLight");
engine.addEntity(blockFloorLight);
blockFloorLight.setParent(_scene);
const transform107 = new Transform({
  position: new Vector3(27.3407039642334, 4.143222332000732, 20.47042465209961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blockFloorLight.addComponentOrReplace(transform107);

const blockFloorLight2 = new Entity("blockFloorLight2");
engine.addEntity(blockFloorLight2);
blockFloorLight2.setParent(_scene);
const transform108 = new Transform({
  position: new Vector3(27.3250732421875, 4.143222332000732, 16.0999813079834),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blockFloorLight2.addComponentOrReplace(transform108);

const blockFloorLight3 = new Entity("blockFloorLight3");
engine.addEntity(blockFloorLight3);
blockFloorLight3.setParent(_scene);
const transform109 = new Transform({
  position: new Vector3(
    6.072849273681641,
    4.143222332000732,
    20.80434226989746
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blockFloorLight3.addComponentOrReplace(transform109);

const blockFloorLight4 = new Entity("blockFloorLight4");
engine.addEntity(blockFloorLight4);
blockFloorLight4.setParent(_scene);
const transform110 = new Transform({
  position: new Vector3(
    6.057218551635742,
    4.143222332000732,
    16.43389892578125
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blockFloorLight4.addComponentOrReplace(transform110);

const floorRed = new Entity("floorRed");
engine.addEntity(floorRed);
floorRed.setParent(_scene);
const transform111 = new Transform({
  position: new Vector3(18.974897384643555, 0, 14.00606918334961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6355303525924683, 2.5, 1.3439375162124634),
});
floorRed.addComponentOrReplace(transform111);
const gltfShape33 = new GLTFShape(
  "8f9ae905-00de-4ae1-b2ef-dab27559eb50/RedFloor.glb"
);
gltfShape33.withCollisions = true;
gltfShape33.isPointerBlocker = true;
gltfShape33.visible = true;
floorRed.addComponentOrReplace(gltfShape33);

const floorRed2 = new Entity("floorRed2");
engine.addEntity(floorRed2);
floorRed2.setParent(_scene);
floorRed2.addComponentOrReplace(gltfShape33);
const transform112 = new Transform({
  position: new Vector3(22.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.13517720997333527, 1, 2.1570475101470947),
});
floorRed2.addComponentOrReplace(transform112);

const floorRed3 = new Entity("floorRed3");
engine.addEntity(floorRed3);
floorRed3.setParent(_scene);
floorRed3.addComponentOrReplace(gltfShape33);
const transform113 = new Transform({
  position: new Vector3(9.275947570800781, 0, 14.127016067504883),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.13517720997333527, 1, 0.612564742565155),
});
floorRed3.addComponentOrReplace(transform113);

const floorRed4 = new Entity("floorRed4");
engine.addEntity(floorRed4);
floorRed4.setParent(_scene);
floorRed4.addComponentOrReplace(gltfShape33);
const transform114 = new Transform({
  position: new Vector3(
    22.978891372680664,
    4.2910943031311035,
    20.406539916992188
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.13517720997333527, 1, 2.6412692070007324),
});
floorRed4.addComponentOrReplace(transform114);

const floorRed5 = new Entity("floorRed5");
engine.addEntity(floorRed5);
floorRed5.setParent(_scene);
floorRed5.addComponentOrReplace(gltfShape33);
const transform115 = new Transform({
  position: new Vector3(
    12.673375129699707,
    3.951721668243408,
    22.612598419189453
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(
    0.13517720997333527,
    15.171900749206543,
    3.225419044494629
  ),
});
floorRed5.addComponentOrReplace(transform115);

const floorRed6 = new Entity("floorRed6");
engine.addEntity(floorRed6);
floorRed6.setParent(_scene);
floorRed6.addComponentOrReplace(gltfShape33);
const transform116 = new Transform({
  position: new Vector3(
    22.944414138793945,
    4.2910943031311035,
    15.606501579284668
  ),
  rotation: new Quaternion(0, 0, -0.6861779093742371, 0.7274337410926819),
  scale: new Vector3(
    0.23835895955562592,
    1.0026049613952637,
    1.4496382474899292
  ),
});
floorRed6.addComponentOrReplace(transform116);

const floorRed7 = new Entity("floorRed7");
engine.addEntity(floorRed7);
floorRed7.setParent(_scene);
floorRed7.addComponentOrReplace(gltfShape33);
const transform117 = new Transform({
  position: new Vector3(
    12.130254745483398,
    4.2910943031311035,
    15.517266273498535
  ),
  rotation: new Quaternion(0, 0, -0.6861779093742371, 0.7274337410926819),
  scale: new Vector3(
    0.23835891485214233,
    1.0026049613952637,
    1.4496382474899292
  ),
});
floorRed7.addComponentOrReplace(transform117);

const floorRed8 = new Entity("floorRed8");
engine.addEntity(floorRed8);
floorRed8.setParent(_scene);
floorRed8.addComponentOrReplace(gltfShape33);
const transform118 = new Transform({
  position: new Vector3(
    12.076679229736328,
    4.2910943031311035,
    9.734386444091797
  ),
  rotation: new Quaternion(
    0.4880753457546234,
    -0.5174204111099243,
    -0.48230960965156555,
    0.5113081336021423
  ),
  scale: new Vector3(
    0.23835895955562592,
    1.0027097463607788,
    2.7008004188537598
  ),
});
floorRed8.addComponentOrReplace(transform118);

const floorRed9 = new Entity("floorRed9");
engine.addEntity(floorRed9);
floorRed9.setParent(_scene);
floorRed9.addComponentOrReplace(gltfShape33);
const transform119 = new Transform({
  position: new Vector3(
    22.92189598083496,
    4.3778181076049805,
    18.52271270751953
  ),
  rotation: new Quaternion(
    7.868940844552778e-16,
    0.7027630805969238,
    -8.377588045505036e-8,
    0.7114239931106567
  ),
  scale: new Vector3(0.784852147102356, 1, 2.6426548957824707),
});
floorRed9.addComponentOrReplace(transform119);

const floorRed10 = new Entity("floorRed10");
engine.addEntity(floorRed10);
floorRed10.setParent(_scene);
floorRed10.addComponentOrReplace(gltfShape33);
const transform120 = new Transform({
  position: new Vector3(
    22.620098114013672,
    4.2910943031311035,
    9.831993103027344
  ),
  rotation: new Quaternion(
    7.868940844552778e-16,
    0.7027630805969238,
    -8.377588045505036e-8,
    0.7114239931106567
  ),
  scale: new Vector3(0.1400255262851715, 1, 2.642329692840576),
});
floorRed10.addComponentOrReplace(transform120);

const floorRed11 = new Entity("floorRed11");
engine.addEntity(floorRed11);
floorRed11.setParent(_scene);
floorRed11.addComponentOrReplace(gltfShape33);
const transform121 = new Transform({
  position: new Vector3(
    14.501358032226562,
    4.2910943031311035,
    19.1832275390625
  ),
  rotation: new Quaternion(
    -0.4880753457546234,
    0.5174204111099243,
    -0.48230960965156555,
    0.5113081336021423
  ),
  scale: new Vector3(
    0.2458583116531372,
    8.721267700195312,
    -1.2462693452835083
  ),
});
floorRed11.addComponentOrReplace(transform121);

const floorRed12 = new Entity("floorRed12");
engine.addEntity(floorRed12);
floorRed12.setParent(_scene);
floorRed12.addComponentOrReplace(gltfShape33);
const transform122 = new Transform({
  position: new Vector3(
    19.245046615600586,
    4.2910943031311035,
    18.897438049316406
  ),
  rotation: new Quaternion(
    0.009067803621292114,
    -0.009613186120986938,
    -0.686117947101593,
    0.7273702621459961
  ),
  scale: new Vector3(
    0.24585746228694916,
    8.715291976928711,
    -0.2884555757045746
  ),
});
floorRed12.addComponentOrReplace(transform122);

const floorRed14 = new Entity("floorRed14");
engine.addEntity(floorRed14);
floorRed14.setParent(_scene);
floorRed14.addComponentOrReplace(gltfShape33);
const transform123 = new Transform({
  position: new Vector3(
    14.351593971252441,
    4.2910943031311035,
    18.977920532226562
  ),
  rotation: new Quaternion(
    0.009067803621292114,
    -0.009613186120986938,
    -0.686117947101593,
    0.7273702621459961
  ),
  scale: new Vector3(
    0.24585741758346558,
    8.715289115905762,
    -0.2884554862976074
  ),
});
floorRed14.addComponentOrReplace(transform123);

const stoneLampPost = new Entity("stoneLampPost");
engine.addEntity(stoneLampPost);
stoneLampPost.setParent(_scene);
const transform124 = new Transform({
  position: new Vector3(
    18.919025421142578,
    4.211620330810547,
    18.529071807861328
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
stoneLampPost.addComponentOrReplace(transform124);
const gltfShape34 = new GLTFShape(
  "660a5512-d571-439e-b343-48872461d9d8/ChineseLampPost_01/ChineseFountain_03.glb"
);
gltfShape34.withCollisions = true;
gltfShape34.isPointerBlocker = true;
gltfShape34.visible = true;
stoneLampPost.addComponentOrReplace(gltfShape34);

const blockFloorLight5 = new Entity("blockFloorLight5");
engine.addEntity(blockFloorLight5);
blockFloorLight5.setParent(_scene);
const transform125 = new Transform({
  position: new Vector3(
    22.225271224975586,
    4.449929714202881,
    20.477590560913086
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4.66019344329834, 1),
});
blockFloorLight5.addComponentOrReplace(transform125);

const blockFloorLight6 = new Entity("blockFloorLight6");
engine.addEntity(blockFloorLight6);
blockFloorLight6.setParent(_scene);
const transform126 = new Transform({
  position: new Vector3(
    12.117959022521973,
    4.396610260009766,
    20.259105682373047
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4.66019344329834, 1),
});
blockFloorLight6.addComponentOrReplace(transform126);

const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const script1 = new Script1();
const script2 = new Script2();
const script3 = new Script3();
const script4 = new Script4();
const script5 = new Script5();
const script6 = new Script6();
const script7 = new Script7();
const script8 = new Script8();
script1.init(options);
script2.init(options);
script3.init(options);
script4.init(options);
script5.init(options);
script6.init(options);
script7.init(options);
script8.init(options);

// script1.spawn(
//   imageScreen,
//   { image: "https://i.imgur.com/d25gO61.jpg" },
//   createChannel(channelId, imageScreen, channelBus)
// );
script1.spawn(
  imageScreen,
  { image: "images/elvis.jpg" },
  createChannel(channelId, imageScreen, channelBus)
);
script1.spawn(
  imageScreen2,
  { image: "images/elvis2.jpg" },
  createChannel(channelId, imageScreen2, channelBus)
);
script2.spawn(
  radio,
  {
    startOn: false,
    volume: 1,
    onClickText: "Radio On/Off",
    onClick: [{ entityName: "radio", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, radio, channelBus)
);
script2.spawn(
  radio2,
  {
    startOn: false,
    volume: 1,
    onClickText: "Radio On/Off",
    onClick: [{ entityName: "radio2", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, radio2, channelBus)
);
script2.spawn(
  radio3,
  {
    startOn: false,
    volume: 1,
    onClickText: "Radio On/Off",
    onClick: [{ entityName: "radio3", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, radio3, channelBus)
);
script2.spawn(
  radio4,
  {
    startOn: false,
    volume: 1,
    onClickText: "Radio On/Off",
    onClick: [{ entityName: "radio4", actionId: "toggle", values: {} }],
  },
  createChannel(channelId, radio4, channelBus)
);
script3.spawn(
  policeCar,
  { clickable: true },
  createChannel(channelId, policeCar, channelBus)
);
script4.spawn(
  galleryInfoNavy,
  { text: "Some text", fontSize: 5, font: "SF", color: "#000000" },
  createChannel(channelId, galleryInfoNavy, channelBus)
);
script4.spawn(
  galleryInfoNavy2,
  { text: "Some text", fontSize: 5, font: "SF", color: "#000000" },
  createChannel(channelId, galleryInfoNavy2, channelBus)
);
script4.spawn(
  galleryInfoNavy3,
  { text: "Some text", fontSize: 5, font: "SF", color: "#000000" },
  createChannel(channelId, galleryInfoNavy3, channelBus)
);
script4.spawn(
  galleryInfoNavy4,
  { text: "Some text", fontSize: 5, font: "SF", color: "#000000" },
  createChannel(channelId, galleryInfoNavy4, channelBus)
);
script5.spawn(mixtable, {}, createChannel(channelId, mixtable, channelBus));
script6.spawn(
  nftPictureFrame,
  {
    id: "558536",
    contract: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
    style: "Classic",
    color: "#FFFFFF",
    ui: true,
    uiText: ""
  },

  createChannel(channelId, nftPictureFrame, channelBus)
);


script7.spawn(
  videoStream,
  {
    startOn: false,
    onClickText: "Play video",
    volume: 1,
    onClick: [{ entityName: "videoStream", actionId: "toggle", values: {} }],
    customStation: "videos/rickAstley.mp4",
  },
  createChannel(channelId, videoStream, channelBus)
);
script8.spawn(
  blockFloorLight,
  { startOn: true, clickable: true },
  createChannel(channelId, blockFloorLight, channelBus)
);
script8.spawn(
  blockFloorLight2,
  { startOn: true, clickable: true },
  createChannel(channelId, blockFloorLight2, channelBus)
);
script8.spawn(
  blockFloorLight3,
  { startOn: true, clickable: true },
  createChannel(channelId, blockFloorLight3, channelBus)
);
script8.spawn(
  blockFloorLight4,
  { startOn: true, clickable: true },
  createChannel(channelId, blockFloorLight4, channelBus)
);
script8.spawn(
  blockFloorLight5,
  { startOn: true, clickable: true },
  createChannel(channelId, blockFloorLight5, channelBus)
);
script8.spawn(
  blockFloorLight6,
  { startOn: true, clickable: true },
  createChannel(channelId, blockFloorLight6, channelBus)
);

/****
 *
 *
 *
 * DANCE AREAS
 *
 *
 *
 */
//// List of dance areas - add here the locations where you want dancing to happen

export const danceAreas: any = [
  {
    transform: {
      position: new Vector3(17.7, 6.5, 14),
      scale: new Vector3(9.2, 4, 8),
    },
    type: "all",
  },
];

////// DEBUG FLAG - Set to true to view all dance areas
const DEBUG_FLAG = false;

///// This system acts on the danceAreas defined above

export class DanceSystem {
  length = 11;
  timer = 2;
  routine: any;
  danceFunction: () => void = () => {
    this.dance();
  };

  routines: PredefinedEmote[] = [
    PredefinedEmote.ROBOT,
    PredefinedEmote.TIK,
    PredefinedEmote.TEKTONIK,
    PredefinedEmote.HAMMER,
    PredefinedEmote.HEAD_EXPLODDE,
    PredefinedEmote.HANDS_AIR,
    PredefinedEmote.DISCO,
    PredefinedEmote.DAB,
  ];

  constructor(routine: PredefinedEmote) {
    this.routine = routine;
  }

  update(dt: number) {
    if (this.timer > 0) {
      this.timer -= dt;
    } else {
      this.dance();
    }
  }
  dance() {
    this.timer = this.length;
    if (this.routine === "all") {
      const rand = Math.floor(Math.random() * (this.routine.length - 0) + 0);
      void triggerEmote({ predefined: this.routines[rand] });
    } else {
      void triggerEmote({ predefined: this.routine });
    }
  }
  addEvents() {
    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.FORWARD,
      false,
      this.danceFunction
    );

    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.BACKWARD,
      false,
      this.danceFunction
    );

    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.RIGHT,
      false,
      this.danceFunction
    );

    Input.instance.subscribe(
      "BUTTON_UP",
      ActionButton.LEFT,
      false,
      this.danceFunction
    );
  }
  removeEvents() {
    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.FORWARD,
      this.danceFunction
    );

    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.BACKWARD,
      this.danceFunction
    );

    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.RIGHT,
      this.danceFunction
    );

    Input.instance.unsubscribe(
      "BUTTON_UP",
      ActionButton.LEFT,
      this.danceFunction
    );
  }
}

for (const i in danceAreas) {
  const area = new Entity("dance-" + i);
  area.addComponent(new Transform(danceAreas[i].transform));

  void executeTask(async () => {
    if (DEBUG_FLAG && (await isPreviewMode())) {
      area.addComponent(new BoxShape());
      area.getComponent(BoxShape).withCollisions = false;
    }
  });

  engine.addEntity(area);
  const dsystem = new DanceSystem(danceAreas[i].type);

  area.addComponent(
    new utils.TriggerComponent(
      new utils.TriggerBoxShape(
        new Vector3(
          area.getComponent(Transform).scale.x,
          area.getComponent(Transform).scale.y,
          area.getComponent(Transform).scale.z
        ),
        new Vector3(0, 2.5, 0)
      ),
      {
        enableDebug: false,
        onCameraEnter: () => {
          engine.addSystem(dsystem);
          dsystem.addEvents();
        },
        onCameraExit: () => {
          dsystem.removeEvents();
          engine.removeSystem(dsystem);
        },
      }
    )
  );
}

/****
 *
 *
 * POAP BOOTH
 *
 *
 */

createDispenser(
  {
    position: new Vector3(2, 0, 5),
    rotation: Quaternion.Euler(0, 180, 0),
  },
  "acd27e4b-24bd-4040-b715-c0e11e863fb0"
);

/************
 *
 *
 *
 * NFT SCANNER
 *
 *
 */

// Config
let userAddress: string;

// Example token from the contract: https://opensea.io/assets/0x6b47e7066c7db71aa04a1d5872496fe05c4c331f/2
// Contract address on Etherscan: https://etherscan.io/address/0x6b47e7066c7db71aa04a1d5872496fe05c4c331f
const contractAddress = "0x6b47e7066c7db71aa04a1d5872496fe05c4c331f"; // Contract for RTFKT x Atari wearables collection

// Base
const base = new Entity();
base.addComponent(new GLTFShape("models/door/baseDarkWithCollider.glb"));
engine.addEntity(base);

// Facade
const facade = new Entity();
// facade.addComponent(new GLTFShape("models/door/facade.glb"));
facade.addComponent(new Transform({ position: new Vector3(16, -0.3, 0.5) }));
//facade.addComponent(new Transform({ position: new Vector3(8, 0.05, 10) }));
facade.getComponent(Transform).rotate(Vector3.Up(), 180);
engine.addEntity(facade);

// Door
const door = new Door(new GLTFShape("models/door/door.glb"));
door.setParent(facade);
door.addComponent(
  new OnPointerDown(
    () => {
      checkTokens();
    },
    {
      button: ActionButton.PRIMARY,
      hoverText: "Enter Club",
      showFeedback: true,
    }
  )
);

// UI
let noSign = new ui.CenterImage(
  "images/no-sign.png",
  1,
  true,
  0,
  20,
  128,
  128,
  {
    sourceHeight: 512,
    sourceWidth: 512,
    sourceLeft: 0,
    sourceTop: 0,
  }
);

// On load
executeTask(async () => {
  try {
    // userAddress = await EthereumController.getUserAccount();
    userAddress = "0xc054Ddc5bb1083d0Ab0409C9A9f557B78e14762A";
    log("User Address: ", userAddress);
  } catch (error: unknown) {
    log(error);
  }
});

// Check player's wallet to see if they're holding any tokens relating to that contract address
async function checkTokens() {
  let balance = await crypto.currency.balance(contractAddress, userAddress);
  log("BALANCE: ", balance);
  if (Number(balance) > -1) {
    door.playDoorOpen();
    
  } else {
    noSign.show(1);
  }
}

const box  = new DonationsBox({position: new Vector3(5, 0, 1),
  rotation:Quaternion.Euler(0,0,0)},
"0x6b47e7066c7db71aa04a1d5872496fe05c4c331f",
10)