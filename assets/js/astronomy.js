
// navbar
 const currentPage = window.location.pathname.split("/").pop().toLowerCase();

    // Select all links inside nav
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href").toLowerCase();
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });



// big bang theory 
const planets = [
    {
        name: "Mercury",
        video: "assets/videos/vedio(mercury).mp4",
        description: "Mercury is the smallest and closest planet to the Sun. It orbits the Sun in just 88 days and rotates slowly, taking 59 Earth days. Temperatures are extreme: up to 430°C during the day and -180°C at night. It has a thin, unbreathable atmosphere, no moons, and a rocky, cratered surface. Gravity is 38% of Earth's. No life can exist due to lack of air and water. Spacecrafts like Mariner 10 and MESSENGER have visited it, and BepiColombo will arrive in 2025. Mercury has no seasons because its axis is almost straight.",
        diameter: "4,880 km",
        temperature: "-173°C to 427°C",
        sunDistance: "57.9 million km",
        discovery: "Known since ancient times",
        atmosphere: "Thin exosphere: oxygen, sodium, hydrogen"
    },
    {
        name: "Venus",
        video: "assets/videos/vedio(venus).mp4",
        description: "Venus is the second planet from the Sun and Earth's twin in size. It has a thick, toxic atmosphere made of carbon dioxide, trapping heat and making it the hottest planet, with temperatures around 465°C. A day on Venus is longer than its year, taking 243 Earth days to rotate, and it rotates in the opposite direction. Venus has no moons and is covered with volcanoes and mountains. It has extreme pressure and harsh conditions, making life impossible.",
        diameter: "12,104 km",
        temperature: "462°C average",
        sunDistance: "108.2 million km",
        discovery: "Known since ancient times",
        atmosphere: "96.5% CO₂, 3.5% nitrogen"
    },
    {
        name: "Earth",
        video: "assets/videos/vedio (earth).mp4",
        description: "Earth is the third planet from the Sun and the only known planet that supports life. It has a balanced atmosphere made of nitrogen and oxygen, liquid water on its surface, and a stable climate. A day on Earth is 24 hours, and it takes 365 days to complete one orbit around the Sun. Surface temperatures range from extreme cold to heat but are generally suitable for life. Earth has one natural moon and a strong magnetic field that protects it from harmful solar radiation. Gravity is ideal for human life, and its surface includes land, oceans, mountains, forests, and deserts.",
        diameter: "12,742 km",
        temperature: "-89°C to 57°C",
        sunDistance: "149.6 million km",
        discovery: "Our home planet",
        atmosphere: "78% nitrogen, 21% oxygen"
    },
    {
        name: "Mars",
        video: "assets/videos/vedio(mars).mp4",
        description: "Mars is the fourth planet from the Sun and is often called the 'Red Planet' due to its iron-rich dusty surface. It has a thin atmosphere made mostly of carbon dioxide and cannot support human life. A day on Mars is about 24.6 hours, and a year is 687 Earth days. Temperatures are cold, averaging around -60°C. Mars has two small moons, Phobos and Deimos, and features huge volcanoes, deep valleys, and evidence of ancient water flows. Gravity is about 38% of Earth's. Rovers like Curiosity and Perseverance are exploring Mars to study its surface and search for signs of past life.",
        diameter: "6,779 km",
        temperature: "-140°C to 20°C",
        sunDistance: "227.9 million km",
        discovery: "Known since ancient times",
        atmosphere: "95% CO₂, 2.7% nitrogen"
    },
    {
        name: "Jupiter",
        video: "assets/videos/vedio(jupitar).mp4",
        description: "Jupiter is the fifth planet from the Sun and the largest in our solar system. It's a gas giant made mostly of hydrogen and helium, with no solid surface. A day on Jupiter is very short — just about 10 hours — while it takes 12 Earth years to orbit the Sun. Its atmosphere has powerful storms, including the Great Red Spot, a giant storm bigger than Earth. Jupiter has at least 95 moons, including the four largest — Io, Europa, Ganymede, and Callisto. Gravity is more than twice that of Earth. Life cannot exist here, but its moons, especially Europa, might hold signs of life. Spacecraft like Juno are currently studying it.",
        diameter: "139,820 km",
        temperature: "-108°C average",
        sunDistance: "778.3 million km",
        discovery: "Known since ancient times",
        atmosphere: "90% hydrogen, 10% helium"
    },
    {
        name: "Saturn",
        video: "assets/videos/vedio(saturn).mp4",
        description: "Saturn is the sixth planet from the Sun and the second-largest in the solar system. It's a gas giant, mainly made of hydrogen and helium, and is famous for its beautiful rings made of ice and rock. A day on Saturn lasts about 10.7 hours, and it takes 29 Earth years to complete one orbit around the Sun. Saturn has at least 146 moons, with Titan being the largest. The planet has strong winds and storms but no solid surface. Gravity is slightly stronger than Earth's. Life can't exist on Saturn, but some of its moons, like Titan and Enceladus, may have the right conditions for life. Missions like Cassini have provided detailed information about Saturn and its rings.",
        diameter: "116,460 km",
        temperature: "-139°C average",
        sunDistance: "1.4 billion km",
        discovery: "Known since ancient times",
        atmosphere: "96% hydrogen, 3% helium"
    },
    {
        name: "Uranus",
        video: "assets/videos/vedio(uranus).mp4",
        description: "Uranus is the seventh planet from the Sun and the third-largest in diameter. It's an ice giant with a cold, bluish appearance due to methane in its atmosphere. Uniquely, Uranus rotates on its side, making its seasons extremely long and unusual. One day lasts about 17 hours, and a year is 84 Earth years. It has at least 27 known moons and faint rings. Surface temperatures can drop to -224°C, making it one of the coldest planets. Its atmosphere is made of hydrogen, helium, and methane. Life cannot survive here. The Voyager 2 spacecraft is the only one to have flown past Uranus.",
        diameter: "50,724 km",
        temperature: "-197°C average",
        sunDistance: "2.9 billion km",
        discovery: "1781 by William Herschel",
        atmosphere: "83% hydrogen, 15% helium, 2% methane"
    },
    {
        name: "Neptune",
        video: "assets/videos/vedio(neptune).mp4",
        description: "Neptune is the eighth and farthest planet from the Sun. It's an ice giant with a deep blue color, caused by methane in its atmosphere. A day on Neptune lasts about 16 hours, while its year is 165 Earth years long. Neptune has 14 known moons, with Triton being the largest. Its winds are the fastest in the solar system, reaching speeds of up to 2,100 km/h. The planet has a very cold atmosphere, with temperatures around -214°C. Neptune has strong storms, including the Great Dark Spot, which is similar to Jupiter's Great Red Spot. Life cannot exist on Neptune due to its extreme conditions.",
        diameter: "49,244 km",
        temperature: "-201°C average",
        sunDistance: "4.5 billion km",
        discovery: "1846 by Johann Galle",
        atmosphere: "80% hydrogen, 19% helium, 1% methane"
    }
];


// Cosmic Theories Data
const cosmicTheories = [
    {
        title: "Big Bang Theory",
        description: "The prevailing cosmological model explaining the existence of the observable universe from the earliest known periods through its subsequent large-scale evolution.",
        evidence: "Cosmic microwave background, Hubble's law, abundance of light elements"
    },
    {
        title: "String Theory",
        description: "A theoretical framework in which point-like particles are replaced by one-dimensional strings.",
        evidence: "Mathematical consistency, potential unification of forces"
    },
    {
        title: "Multiverse Theory",
        description: "The hypothetical set of multiple possible universes including our own.",
        evidence: "Inflationary cosmology, quantum mechanics interpretations"
    }
];

// Function to display planet cards
function displayPlanets() {
    const planetsContainer = document.getElementById('planets-container');
    
    planets.forEach(planet => {
        const planetCard = document.createElement('div');
        planetCard.className = 'planet-card';
        
        planetCard.innerHTML = `
            <div class="planet-header">
                <h2>${planet.name}</h2>
            </div>
            <div class="planet-content">
                <div class="planet-video">
                    <video src="${planet.video}" loop muted autoplay></video>
                </div>
                <div class="planet-info">
                    <p class="description">${planet.description}</p>
                    <div class="planet-details">
                        <p><strong>Diameter:</strong> ${planet.diameter}</p>
                        <p><strong>Temperature:</strong> ${planet.temperature}</p>
                        <p><strong>Distance from Sun:</strong> ${planet.sunDistance}</p>
                        <p><strong>Discovery:</strong> ${planet.discovery}</p>
                        <p><strong>Atmosphere:</strong> ${planet.atmosphere}</p>
                    </div>
                </div>
            </div>
        `;
        
        planetsContainer.appendChild(planetCard);
    });
}

// Function to display cosmic theories
function displayCosmicTheories() {
    const theoriesContainer = document.getElementById('theories-container');
    
    cosmicTheories.forEach(theory => {
        const theoryCard = document.createElement('div');
        theoryCard.className = 'theory-card';
        
        theoryCard.innerHTML = `
            <h3>${theory.title}</h3>
            <p>${theory.description}</p>
            <p class="evidence"><strong>Evidence:</strong> ${theory.evidence}</p>
        `;
        
        theoriesContainer.appendChild(theoryCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayPlanets();
    displayCosmicTheories();
    
    // Add event listeners for planet cards
    const planetCards = document.querySelectorAll('.planet-card');
    planetCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});

// Search functionality
document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const planetCards = document.querySelectorAll('.planet-card');
    
    planetCards.forEach(card => {
        const planetName = card.querySelector('h2').textContent.toLowerCase();
        if (planetName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Close modal on close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
