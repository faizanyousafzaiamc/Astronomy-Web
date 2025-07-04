// Space data array
const spaceData = [ 
    {
        id: 1,
        title: "Mercury",
        videoSrc: "assets/videos/vedio(mercury).mp4",
        description: "Mercury is the smallest planet in our solar system and closest to the Sun. It's only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system.",
        distance: "57.9 million km",
        orbitalPeriod: "88 days",
        diameter: "4,880 km",
        tag: "Planet",
        temperature: "-173°C to 427°C",
        discovery: "Known since ancient times",
        atmosphere: "Thin exosphere: oxygen, sodium, hydrogen"
    },
    {
        id: 2,
        title: "Mars",
        videoSrc: "assets/videos/vedio(mars).mp4",
        description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Often called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface. Mars has the largest dust storms in the solar system, capable of blanketing the entire planet.",
        distance: "227.9 million km",
        orbitalPeriod: "687 days",
        diameter: "6,779 km",
        temperature: "-140°C to 20°C",
        tag: "Planet",
        discovery: "Known since ancient times",
        atmosphere: "95% CO₂, 2.7% nitrogen"
    },
    {
        id: 3,
        title: "Venus",
        videoSrc: "assets/videos/vedio(venus).mp4",
        description: "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Similar in size to Earth, Venus has a thick, toxic atmosphere filled with carbon dioxide and clouds of sulfuric acid. It's the hottest planet in our solar system, even though Mercury is closer to the Sun.",
        distance: "108.2 million km",
        orbitalPeriod: "225 days",
        diameter: "12,104 km",
        temperature: "462°C average",
        tag: "Planet",
        discovery: "Known since ancient times",
        atmosphere: "96.5% CO₂, 3.5% nitrogen"
    },
    {
        id: 4,
        title: "Earth",
        videoSrc: "assets/videos/vedio (earth).mp4",
        description: "Earth is the third planet from the Sun and the only known planet that supports life. It has a balanced atmosphere made of nitrogen and oxygen, liquid water on its surface, and a stable climate. A day on Earth is 24 hours, and it takes 365 days to complete one orbit around the Sun. Surface temperatures range from extreme cold to heat but are generally suitable for life. Earth has one natural moon and a strong magnetic field that protects it from harmful solar radiation. Gravity is ideal for human life, and its surface includes land, oceans, mountains, forests, and deserts.",
        distance: "149.6 million km",
        temperature: "-89°C to 57°C",
        orbitalPeriod: "Varies (years to millions of years)",
        diameter: "12,742 km",
        tag: "Planet",
        discovery: "Our home planet",
        atmosphere: "78% nitrogen, 21% oxygen"

    },
    {
        id: 5,
        title: "Jupiter",
        videoSrc: "assets/videos/vedio(jupitar).mp4",
        description: "Jupiter is the fifth planet from the Sun and the largest in our solar system. It's a gas giant made mostly of hydrogen and helium, with no solid surface. A day on Jupiter is very short — just about 10 hours — while it takes 12 Earth years to orbit the Sun. Its atmosphere has powerful storms, including the Great Red Spot, a giant storm bigger than Earth. Jupiter has at least 95 moons, including the four largest — Io, Europa, Ganymede, and Callisto. Gravity is more than twice that of Earth. Life cannot exist here, but its moons, especially Europa, might hold signs of life. Spacecraft like Juno are currently studying it.",
        distance: "778.3 million km",
        orbitalPeriod: "Varies (years to millions of years)",
        temperature: "-108°C average",
        diameter: "139,820 km",
        tag: "Planet",
        discovery: "Known since ancient times",
        atmosphere: "90% hydrogen, 10% helium"
    },
    {
        id: 6,
        title: "Saturn",
        videoSrc: "assets/videos/vedio(saturn).mp4",
        description: "Saturn is the sixth planet from the Sun and the second-largest in the solar system. It's a gas giant, mainly made of hydrogen and helium, and is famous for its beautiful rings made of ice and rock. A day on Saturn lasts about 10.7 hours, and it takes 29 Earth years to complete one orbit around the Sun. Saturn has at least 146 moons, with Titan being the largest. The planet has strong winds and storms but no solid surface. Gravity is slightly stronger than Earth's. Life can't exist on Saturn, but some of its moons, like Titan and Enceladus, may have the right conditions for life. Missions like Cassini have provided detailed information about Saturn and its rings.",
        distance: "1.4 billion km",
        temperature: "-139°C average",
        orbitalPeriod: "Varies (years to millions of years)",
        diameter: "116,460 km",
        tag: "Planet",
        discovery: "Known since ancient times",
        atmosphere: "96% hydrogen, 3% helium"
    },
    {
        id: 7,
        title: "Uranus",
        videoSrc: "assets/videos/vedio(uranus).mp4",
        description: "Comets are cosmic snowballs of frozen gases, rock, and dust that orbit the Sun. When frozen, they're the size of a small town. When a comet's orbit brings it close to the Sun, it heats up and spews dust and gases into a giant glowing head larger than most planets.",
        distance: "2.9 billion km",
        orbitalPeriod: "Varies (years to millions of years)",
        temperature: "-197°C average",
        diameter: "50,724 km",
        tag: "Planet",
        discovery: "1781 by William Herschel",
        atmosphere: "83% hydrogen, 15% helium, 2% methane"
    },
    {
        id: 8,
        title: "Neptune",
        videoSrc: "assets/videos/vedio(neptune).mp4",
        description: "Neptune is the eighth and farthest planet from the Sun. It's an ice giant with a deep blue color, caused by methane in its atmosphere. A day on Neptune lasts about 16 hours, while its year is 165 Earth years long. Neptune has 14 known moons, with Triton being the largest. Its winds are the fastest in the solar system, reaching speeds of up to 2,100 km/h. The planet has a very cold atmosphere, with temperatures around -214°C. Neptune has strong storms, including the Great Dark Spot, which is similar to Jupiter's Great Red Spot. Life cannot exist on Neptune due to its extreme conditions.",
        distance: "4.5 billion km",
        orbitalPeriod: "Varies (years to millions of years)",
        diameter: "49,244 km",
        temperature: "-201°C average",
        tag: "Planet",
        discovery: "1846 by Johann Galle",
        atmosphere: "80% hydrogen, 19% helium, 1% methane"
    }
];

// Generate cards dynamically
function generateCards() {
    const container = document.getElementById('cards-container');

    spaceData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = item.id;

        card.innerHTML = `
      <div class="imgbox">
        <video src="${item.videoSrc}" autoplay muted loop></video>
      </div>
      <div class="content">
        <h2>${item.title}</h2>
        <p>${item.description.substring(0, 100)}...</p>
        <a href="#" class="read-more">Explore</a>
      </div>
    `;

        container.appendChild(card);
    });

    // Add event listeners to all "Read More" buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.card');
            const itemId = parseInt(card.dataset.id);
            const itemData = spaceData.find(item => item.id === itemId);

            if (itemData) {
                openModal(itemData);
            }
        });
    });
}

// Open modal with data
function openModal(data) {
    const modal = document.getElementById('spaceModal');

    // Set modal content
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('planet-tag').textContent = data.tag;
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('distance').textContent = data.distance;
    document.getElementById('orbital-period').textContent = data.orbitalPeriod;
    document.getElementById('diameter').textContent = data.diameter;

    // Set video source
    const modalVideo = document.getElementById('modal-video');
    modalVideo.src = data.videoSrc;
    modalVideo.load();

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add class for animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Close modal
function closeModal() {
    const modal = document.getElementById('spaceModal');
    modal.classList.remove('show');

    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Event listeners for modal close
document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('spaceModal')) {
        closeModal();
    }
});

// Close with ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.getElementById('spaceModal').style.display === 'block') {
        closeModal();
    }
});

// Initialize the page
window.addEventListener('DOMContentLoaded', generateCards);