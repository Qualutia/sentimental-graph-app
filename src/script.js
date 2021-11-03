///////////////////////////////////
/////  USING 3d-force-graph  /////

import data from './Data/main.js'

const Graph = ForceGraph3D({
    controlType: 'orbit'
  })
  (document.getElementById('3d-graph'))
  .cooldownTicks(100)
  .graphData(data)
  .linkDirectionalArrowLength((links) => links.value * 6)
  .linkDirectionalArrowRelPos(0.5)
  .linkCurvature(0.3)
  .nodeLabel('id')
  .linkDirectionalParticleColor(() => '#fdc732')
  .linkDirectionalParticles((links) => links.value / 2)
  .linkDirectionalParticleWidth((links) => links.value * 2)
  .linkColor((links) => links.value === 3 ? '#ed6c5c' : links.value === 2 ? '#7dd19b' : '#ffffff')
  .backgroundColor("rgb(20,20,20)")
  .showNavInfo(false);
Graph.onEngineStop(() => Graph.zoomToFit(100));


initNodes();

function reportWindowSize() {
  Graph.height(window.innerHeight);
  Graph.width(window.innerWidth);
}

window.onresize = reportWindowSize;


//LINKS FORCE//
Graph.d3Force('link').distance(({
  distance
}) => distance * 30);


//NODE ICONS//
function initNodes() {
  Graph.nodeThreeObject(({
    group,
    size
  }) => {

    const obj = new THREE.Mesh(
      new THREE.SphereGeometry(Math.cbrt(size), Math.cbrt(size)),
      new THREE.MeshBasicMaterial({
        depthWrite: false,
        transparent: true,
        opacity: 0
      })
    );
    const imgTexture = new THREE.TextureLoader().load(
      group === "neutral" ? `./icons/neutral_icon.png` : group === "positive" ? `./icons/positive_icon.png` : `./icons/negative_icon.png`
    );
    const material = new THREE.SpriteMaterial({
      map: imgTexture
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(Math.cbrt(size), Math.cbrt(size));
    obj.add(sprite);

    return obj;

  })
}


Graph.linkWidth((link) => link.value)
Graph.onNodeHover((node) => sendInfo(node))


function sendInfo(element) {

  if (element) {

    const titleElement = document.getElementById('titleValue');
    const twitterElement = document.getElementById('twitterValue');
    const accountElement = document.getElementById('accountCount');
    const rangeElement = document.getElementById('dateRange');
    const polarityElement = document.getElementById('polarityValue');

    titleElement.innerHTML = element.id;
    twitterElement.innerHTML = element.count;
    accountElement.innerHTML = element.size;
    rangeElement.innerHTML = element.range;
    polarityElement.innerHTML = element.polarity;
  }

}

export default initNodes;