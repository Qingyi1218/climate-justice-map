// === Custom Leaflet Icons ===
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});
const blueIcon = new L.Icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png', shadowUrl: redIcon.options.shadowUrl, iconSize: redIcon.options.iconSize, iconAnchor: redIcon.options.iconAnchor, popupAnchor: redIcon.options.popupAnchor, shadowSize: redIcon.options.shadowSize });
const greenIcon = new L.Icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png', shadowUrl: redIcon.options.shadowUrl, iconSize: redIcon.options.iconSize, iconAnchor: redIcon.options.iconAnchor, popupAnchor: redIcon.options.popupAnchor, shadowSize: redIcon.options.shadowSize });
const orangeIcon = new L.Icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png', shadowUrl: redIcon.options.shadowUrl, iconSize: redIcon.options.iconSize, iconAnchor: redIcon.options.iconAnchor, popupAnchor: redIcon.options.popupAnchor, shadowSize: redIcon.options.shadowSize });
const violetIcon = new L.Icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png', shadowUrl: redIcon.options.shadowUrl, iconSize: redIcon.options.iconSize, iconAnchor: redIcon.options.iconAnchor, popupAnchor: redIcon.options.popupAnchor, shadowSize: redIcon.options.shadowSize });

// === Initialize Map ===
const map = L.map('map').setView([-30.5595, 22.9375], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markerLayer = L.layerGroup();

// Add locations
const locations = [
    {
        name: "eMalahleni",
        coords: [-25.875, 29.233],
        type: "Air Pollution Hotspot",
        description: "Heavy coal pollution, acid mine drainage, and high respiratory illness rates.",
        icon: redIcon,
        url: "https://groundwork.org.za/reports/eMalahleni-Air-Pollution.html"
    },
    {
        name: "Middelburg",
        coords: [-25.775, 29.455],
        type: "Air Pollution Hotspot",
        description: "Coal mining and smelter emissions impacting local communities.",
        icon: redIcon,
        url: "https://ejfundsa.org.za/ejf-grantees/middelburg-social-and-environmental-justice-alliance/"
    },
    {
        name: "Secunda",
        coords: [-26.5167, 29.2],
        type: "Air Pollution / Industrial",
        description: "Sasol site—largest single-site GHG emitter globally.",
        icon: redIcon,
        url: "https://groundup.org.za/article/sasol-makes-the-world-co2-emissions-blacklist/"
    },
    {
        name: "Hendrina",
        coords: [-26.1586, 29.7197],
        type: "Air Pollution Hotspot",
        description: "Coal plant pollution and exposure in nearby low-income settlements.",
        icon: redIcon,
        url: " https://cer.org.za/wp-content/uploads/2014/06/Eskom-response-to-the-appeal-of-Hendrina-Power-Station-AEL-by-CER.pdf"
    },
    {
        name: "Kriel",
        coords: [-26.2597, 29.2632],
        type: "Air Pollution Hotspot",
        description: "Near multiple coal plants; health impacts and ecological degradation.",
        icon: redIcon,
        url: "https://cer.org.za/news/eskoms-application-for-increased-pollution-from-kriel-power-station-refused"
    },
    {
        name: "Soweto",
        coords: [-26.2678, 27.8586],
        type: "Toxic Waste Dumping",
        description: "Historic and ongoing environmental injustice from illegal waste dumping.",
        icon: violetIcon,
        url: "https://sahris.sahra.org.za/sites/default/files/additionaldocs/Soweto_Cluster_FEIA.pdf"
    },
    {
        name: "Xolobeni",
        coords: [-31.5916, 29.5468],
        type: "Land Justice / Mining",
        description: "Anti-mining struggle to protect ancestral land from titanium extraction.",
        icon: greenIcon,
        url: "https://groundup.org.za/article/xolobeni-judgment-vital-land-debate/"
    },
    {
        name: "Cape Town",
        coords: [-33.9249, 18.4241],
        type: "Water Scarcity",
        description: "Day Zero drought (2017–2018), especially severe in informal settlements.",
        icon: blueIcon,
        url: "https://groundup.org.za/ctwatercrisis/"
    },
    {
        name: "Philippi",
        coords: [-34.0027, 18.6026],
        type: "Water Scarcity / Food",
        description: "Urban farming at risk due to groundwater depletion and heat.",
        icon: blueIcon,
        url: "https://cer.org.za/virtual-library/judgments/high-courts/philippi-horticultural-area-food-farming-campaign-others-v-mec-for-local-government-environmental-affairs-and-development-planning-western-cape"
    },
    {
        name: "Atlantis",
        coords: [-33.5612, 18.4891],
        type: "Water Innovation Site",
        description: "Groundwater recharge project — model for climate resilience.",
        icon: blueIcon,
        url: "https://www.wrc.org.za/wp-content/uploads/mdocs/175-1-901.pdf"
    },
    {
        name: "Khayelitsha",
        coords: [-34.0395, 18.6784],
        type: "Urban Vulnerability",
        description: "Heatwaves, flooding risk, and limited climate infrastructure.",
        icon: orangeIcon,
        url: "https://groundup.org.za/article/khayelitsha-residents-document-their-daily-struggle-with-toilets/"
    },
    {
        name: "Alexandra, JHB",
        coords: [-26.1051, 28.0898],
        type: "Urban Heat Island",
        description: "High-density, low-green space area suffering from rising temperatures.",
        icon: orangeIcon,
        url: "https://www.joburg.org.za/media_/Newsroom/Pages/2023%20News%20Articles/June/Joburg-sets-out-to-reduce-impact-of-heat-island-effect.aspx"
    },
    {
        name: "Diepsloot",
        coords: [-25.9376, 27.9986],
        type: "Urban Flood Risk",
        description: "Informal housing built along floodplains, impacted by seasonal floods.",
        icon: orangeIcon,
        url: "https://www.scielo.org.za/scielo.php?pid=S1816-79502017000200014&script=sci_arttext"
    },
    {
        name: "Kliptown",
        coords: [-26.2842, 27.8456],
        type: "Water Insecurity",
        description: "Unreliable municipal water supply in dense informal community.",
        icon: blueIcon,
        url: "https://groundup.org.za/article/teenagers-drowning-highlights-tough-living-conditions-and-broken-promises-for-kliptown-families/"
    },
    {
        name: "Orange Farm",
        coords: [-26.4742, 27.8619],
        type: "Climate Vulnerability",
        description: "Urban poor facing infrastructure failure, power cuts, and extreme weather.",
        icon: orangeIcon,
        url: "https://joburg.org.za/Campaigns/Documents/2014%20Documents/climate%20change%20adaptation%20plan_city%20of%20joburg.pdf"
    },
    {
        name: "Giyani",
        coords: [-23.3024, 30.7194],
        type: "Water Crisis",
        description: "Ongoing municipal water failures and drought impacts.",
        icon: blueIcon,
        url: "https://apf.org.za/rubrique.php3?id_rubrique=41"
    },
    {
        name: "Vhembe District",
        coords: [-22.9786, 30.5287],
        type: "Heat + Disease Risk",
        description: "High climate vulnerability zone with malaria, food insecurity, and drought.",
        icon: violetIcon,
        url: "https://jamba.org.za/index.php/jamba/article/view/1093/2149"
    },
    {
        name: "Musina",
        coords: [-22.351, 30.0433],
        type: "Heat Stress Zone",
        description: "Border town affected by heat extremes and migrant vulnerability.",
        icon: violetIcon,
        url: "https://jamba.org.za/index.php/jamba/article/view/1093/2149"
    },
    {
        name: "Makhanda",
        coords: [-33.2968, 26.5244],
        type: "Drought Zone",
        description: "Declared water disaster area due to persistent drought and infrastructure collapse.",
        icon: blueIcon,
        url: "https://hsf.org.za/publications/hsf-briefs/water-scarcity-in-south-africa-a-result-of-physical-or-economic-factors"
    },
    {
        name: "Beaufort West",
        coords: [-32.3471, 22.5839],
        type: "Drought & Economic Decline",
        description: "Town ran out of water; livestock farming affected.",
        icon: blueIcon,
        url: "https://hsf.org.za/publications/hsf-briefs/water-scarcity-in-south-africa-a-result-of-physical-or-economic-factors"
    },
    {
        name: "Kuruman",
        coords: [-27.4504, 23.4325],
        type: "Water Insecurity",
        description: "Borehole-dependent town impacted by drought and over-extraction.",
        icon: blueIcon,
        url: "https://hsf.org.za/publications/hsf-briefs/water-scarcity-in-south-africa-a-result-of-physical-or-economic-factors"
    },
    {
        name: "Springbok",
        coords: [-29.6646, 17.8866],
        type: "Mining Dust Pollution",
        description: "Windblown dust from historic and active mines affecting respiratory health.",
        icon: greenIcon,
        url: "https://cer.org.za/news/mining-town-residents-voice-health-concerns"
    },
    {
        name: "Kimberley",
        coords: [-28.7384, 24.7637],
        type: "Abandoned Mine Hazards",
        description: "Sinkholes, acid mine water & land contamination from historic mining.",
        icon: greenIcon,
        url: "https://cer.org.za/news/mining-town-residents-voice-health-concerns"
    },
    {
        name: "Lephalale",
        coords: [-23.6649, 27.7442],
        type: "Coal Development Conflict",
        description: "Location of new coal projects (Medupi) + community protest.",
        icon: redIcon,
        url: "https://cer.org.za/news/defining-moments-of-2019-opposing-new-climate-devastating-coal-power-plants"
    },
    {
        name: "Koster",
        coords: [-25.86, 26.9019],
        type: "Fracking Proposal Zone",
        description: "Identified as potential fracking area; local opposition ongoing.",
        icon: greenIcon,
        url: "https://cer.org.za/news/defining-moments-of-2019-opposing-new-climate-devastating-coal-power-plants"
    },
    {
        name: "Karoo Region",
        coords: [-31.6167, 24.0],
        type: "Shale Gas Risk",
        description: "Proposed fracking threatens fragile ecosystem and scarce water.",
        icon: greenIcon,
        url: "https://cer.org.za/news/defining-moments-of-2019-opposing-new-climate-devastating-coal-power-plants"
    },
    {
        name: "Mbombela",
        coords: [-25.4658, 30.9853],
        type: "Pollution + Rainfall Shifts",
        description: "Urbanization + shifting rainfall affecting rivers and farming.",
        icon: violetIcon,
        url: "https://cer.org.za/news/the-struggle-to-breathe-clean-air-in-mpumalanga-goes-to-court"
    },
    {
        name: "Durban South",
        coords: [-29.944, 30.9452],
        type: "Industrial Pollution",
        description: "Petrochemical corridor with long-term air quality & cancer concerns.",
        icon: violetIcon,
        url: "https://cer.org.za/news/new-legal-challenges-to-eskoms-ongoing-air-pollution"
    },
    {
        name: "Richards Bay",
        coords: [-28.783, 32.0377],
        type: "Heavy Industry Pollution",
        description: "Aluminum smelting, port emissions, and biodiversity loss.",
        icon: violetIcon,
        url: "https://cer.org.za/news/new-legal-challenges-to-eskoms-ongoing-air-pollution"
    },
    {
        name: "Uitenhage",
        coords: [-33.7682, 25.3971],
        type: "Industrial Pollution",
        description: "Automotive and chemical industries contributing to air/water pollution.",
        icon: violetIcon,
        url: "https://cer.org.za/news/new-legal-challenges-to-eskoms-ongoing-air-pollution"
    }
];

locations.forEach(loc => {
    const marker = L.marker(loc.coords, { icon: loc.icon, title: loc.name })
        .bindPopup(`
    <b>${loc.name}</b><br>
    <i>${loc.type}</i><br>
    ${loc.description}<br>
    ${loc.url ? `<a href="${loc.url}" target="_blank" style="color:blue; text-decoration:underline;">Learn more</a>` : ""}
    `);
    markerLayer.addLayer(marker);
    marker._locData = loc;
});
markerLayer.addTo(map);



// === Dropdown Filter ===

// Expose icon variables to global scope
window.redIcon = redIcon;
window.blueIcon = blueIcon;
window.greenIcon = greenIcon;
window.orangeIcon = orangeIcon;
window.violetIcon = violetIcon;

const filterSelect = document.getElementById("filter-select");
filterSelect.addEventListener("change", function () {
    const selected = this.value;
    markerLayer.clearLayers();

    locations.forEach(loc => {
        const iconMatch = (selected === "All") || (loc.icon === window[selected]);
        if (iconMatch) {
            const marker = L.marker(loc.coords, { icon: loc.icon, title: loc.name })
                .bindPopup(`
    <b>${loc.name}</b><br>
    <i>${loc.type}</i><br>
    ${loc.description}<br>
    ${loc.url ? `<a href="${loc.url}" target="_blank" style="color:blue; text-decoration:underline;">Learn more</a>` : ""}
`   );
            markerLayer.addLayer(marker);
        }
    });
});

// === Legend ===
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += `
    <h4>Issue Type</h4>
    <div class="legend-item" title="Coal and industrial air pollution">
        <i style="background: url('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png') no-repeat center center; background-size: contain; width: 25px; height: 41px; display: inline-block;"></i>
        Air Pollution & Industry
    </div>
    <div class="legend-item" title="Water stress, drought, and water insecurity">
        <i style="background: url('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png') no-repeat center center; background-size: contain; width: 25px; height: 41px; display: inline-block;"></i>
        Water Scarcity & Drought
    </div>
    <div class="legend-item" title="Land rights and anti-mining activism">
        <i style="background: url('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png') no-repeat center center; background-size: contain; width: 25px; height: 41px; display: inline-block;"></i>
        Land & Mining Justice
    </div>
    <div class="legend-item" title="Informal settlements facing heat or flooding">
        <i style="background: url('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png') no-repeat center center; background-size: contain; width: 25px; height: 41px; display: inline-block;"></i>
        Urban Vulnerability
    </div>
    <div class="legend-item" title="Health risks, toxic waste, or industrial exposure">
        <i style="background: url('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png') no-repeat center center; background-size: contain; width: 25px; height: 41px; display: inline-block;"></i>
        Environmental Health Conflict
    </div>
    `;
    return div;
};
legend.addTo(map);

// === Desmond Tutu Quotes ===
const tutuQuotes = [
    "We must stop climate change. And we can, if we use the tactics that worked in South Africa.",
    "The destruction of the Earth's environment is the human rights challenge of our time.",
    "We can no longer continue feeding our addiction to fossil fuels as if there is no tomorrow. For there will be no tomorrow.",
    "We are part of nature. Yet we alone can act. Our destiny must be as guardians of the Earth, not users and abusers of the only home we have.",
    "Do your little bit of good where you are; it’s those little bits of good put together that overwhelm the world.",
    "Those who have no involvement in creating the problem are the most affected.",
    "We have allowed the interests of capital to outweigh the interests of human beings and our Earth.",
    "There is a clear moral imperative to tackle the causes of global warming.",
    "We are the custodians of creation. If we destroy creation, creation will destroy us.",
    "Once we start living in a way that is people-friendly to all of God's family, we will also be environment-friendly.",
    "The whole world stands faced with a common threat of climate change. This global threat already affects us all, especially the poorest.",
    "We fought apartheid. Now climate change is our global enemy."
];

// === Strategic Blank Map Locations for Popups ===
const quoteLocations = [
    [-28.0, 11.0],    // Far west of Northern Cape/Namibia border
    [-30.0, 12.0],   // Deeper South Atlantic off Western Cape
    [-33.0, 14.0],   // Southwest of Cape Town
    [-36.0, 16.0],   // Far southwest offshore
    [-37.0, 19.0],   // Deep southern ocean
    [-37.0, 22.0],   // Off Mossel Bay/Knysna
    [-36.5, 26.0],   // South of Eastern Cape
    [-36.0, 30.0],   // Southern Indian Ocean
    [-32.0, 35.0],   // Indian Ocean, far east of Durban
    [-29.0, 37.0]    // Farther northeast toward Mozambique Channel
];




// === Random Quote Popups at Intervals ===
let currentPopup = null;

// Show one quote for 15s
function showRandomTutuQuote() {
  const quote = tutuQuotes[Math.floor(Math.random() * tutuQuotes.length)];
  const coords = quoteLocations[Math.floor(Math.random() * quoteLocations.length)];

  // Close the previous popup if it exists
  if (currentPopup) map.closePopup(currentPopup);

  const popup = L.popup({
    closeButton: false,
    autoClose: false,
    className: "tutu-quote-popup"
  })
  .setLatLng(coords)
  .setContent(`
    <blockquote style="
      font-style: italic;
      font-size: 15px;
      padding: 8px;
      background: white;
      border-left: 4px solid #5e9ca0;
      border-radius: 5px;
      margin: 0;
    ">
      “${quote}”
      <br><span style="font-size: 0.9em;">— Desmond Tutu</span>
    </blockquote>
  `)
  .openOn(map);

  currentPopup = popup;
}

// 🔁 Recursive loop: 15s show + 5s pause
function cycleQuotes() {
  showRandomTutuQuote(); // Show a quote
  setTimeout(() => {
    if (currentPopup) map.closePopup(currentPopup); // Close it
    setTimeout(cycleQuotes, 5000); // Wait 5s, then repeat
  }, 15000); // Quote stays for 15s
}

// 🚀 Start the first quote immediately
cycleQuotes();


// === Intro Panel / Info Box ===
const infoPanel = L.control({ position: 'topright' });

infoPanel.onAdd = function () {
    const div = L.DomUtil.create('div', 'info-panel');
    div.innerHTML = `
    <div class="info-header">
    <h4>🌍 Climate Justice Map of South Africa</h4>
    <button class="info-close" onclick="this.parentElement.parentElement.style.display='none';">❌</button>
    </div>
    <p>This map highlights <b>pollution hotspots</b>, <b>water-insecure communities</b>, and other areas facing <b>climate injustice</b> across South Africa.</p>
    <p><i>Desmond Tutu’s quotes appear around the map to remind us of the moral urgency of climate action.</i></p>
    <p style="font-size: 13px; color: #555;">Click markers to explore stories. Use the dropdown to filter issues.</p>`;
    return div;
};

infoPanel.addTo(map);








