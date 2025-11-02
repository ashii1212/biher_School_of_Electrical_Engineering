// Event data with poster images
const eventsData = {
  technical: [
    {
      id: 1,
      title: "Spotlight Session",
      category: "Technical",
      description:
        "Present your innovative ideas on cutting-edge ECE topics. Showcase your research and technical expertise in front of esteemed judges.",
      date: "Nov 12, 2025",
      time: "10:00 AM",
      venue: "Smart Room",
      rules: [
        "Team of 2-3 members",
        "10-minute presentation followed by 3-minute Q&A",
        "PPT should be submitted 2 days prior to the event",
        "Original work only - plagiarism will lead to disqualification",
        "Topics should be related to Electronics and Communication",
        "Judges decision will be final and binding",
      ],
      coordinators: [
        {
          name: "S.Bharath raja",
          role: "Event Coordinator",
          contact: "+91 80562 85437",
          photo: "images/coordinators/baharath.png",
        },
        {
          name: "N.Aswinth",
          role: "Event Coordinator",
          contact: "+91 9080 121922",
          photo: "images/coordinators/kumar.jpg",
        },
        {
          name: "Ms.R.Maheshwari",
          role: "Faculty Coordinator",
          contact: "+91 98407 53618",
          photo: "images/coordinators/kumar.jpg",
        },
      ],
      registerLink: "https://forms.gle/9H2jEP6uCnxUkzq66",
      poster: "images/events/spotlight.png",
    },
    {
      id: 2,
      title: "Knowledge Knockout",
      category: "Technical",
      description:
        "Showcase your talent in Electronics & Communication — test your knowledge, speed, and logic!",
      date: "Nov 12, 2025",
      time: "9:00 AM",
      venue: "ECE Block",
      rules: [
        "Individual participation or team of up to 2 members",
        "The quiz will consist of multiple rounds including prelims and finals",
        "Questions will cover Electronics, Communication Systems, and General Technology",
        "Use of mobile phones or smart devices is strictly prohibited during the quiz",
        "Participants must report 15 minutes before the event starts",
        "In case of a tie, a tie-breaker round will be conducted",
        "The decision of the judges and organizers will be final",
        "Certificates and exciting prizes will be awarded to winners",
      ],
      coordinators: [
        {
          name: "K.Sanjay",
          role: "Event Coordinator",
          contact: "+91 91770 67667",
          photo: "images/coordinators/priya.jpg",
        },
        {
          name: "K.Mahendra",
          role: "Event Coordinator",
          contact: "+91 79892 87495",
          photo: "images/coordinators/meena.jpg",
        },
        {
          name: "Dr.M.Nagarajan",
          role: "Faculty Coordinator",
          contact: "+91 99651 22470",
          photo: "images/coordinators/kumar.jpg",
        },
      ],
      registerLink: "https://forms.gle/9H2jEP6uCnxUkzq66",
      poster: "images/events/knowledge.png",
    },
    {
      id: 3,
      title: "The Circuit Race",
      category: "Technical",
      description:
        "Test your circuit analysis and problem-solving skills. Identify and fix issues in given electronic circuits.",
      date: "Nov 12, 2025",
      time: "3:00 PM",
      venue: "Electronics Lab",
      rules: [
        "Individual participation only",
        "Time limit: 45 minutes",
        "No external devices allowed",
        "Judges' decision will be final",
        "Basic components and tools will be provided",
        "Participants must bring their own multimeter",
      ],
      coordinators: [
        {
          name: "K.Vishnu vardhan",
          role: "Event Coordinator",
          contact: "+91 87122 21575",
          photo: "images/coordinators/rahul.jpg",
        },
        {
          name: "M.Arunsai",
          role: "Event Coordinator",
          contact: "+91 73826 74639",
          photo: "images/coordinators/rajesh.jpg",
        },
        {
          name: "Dr.S.Saravana",
          role: "Faculty Coordinator",
          contact: "+91 99529 47458",
          photo: "images/coordinators/kumar.jpg",
        },
      ],
      registerLink: "https://forms.gle/9H2jEP6uCnxUkzq66",
      poster: "images/events/circuit.png",
    },
  ],
  nonTechnical: [
    {
      id: 6,
      title: "Just a Minute",
      category: "Non-Technical",
      description:
        "A fun and engaging speaking challenge! Participants will be given a random topic and one restricted word they must avoid using. Speak fluently and creatively for 5 to 7 minutes without slipping up!",
      date: "Nov 13, 2025",
      time: "2:00 PM",
      venue: "Auditorium",
      rules: [
        "Individual participation only",
        "A random topic and one restricted word will be given on the spot",
        "Participant must speak continuously for 5 to 7 minutes",
        "Using the restricted word leads to instant disqualification",
        "Judging will be based on confidence, fluency, and creativity",
        "Decision of the judges will be final",
        "Certificates and prizes will be awarded to top performers",
      ],
      coordinators: [
        {
          name: "Ysv.chakradardhan",
          role: "Event Coordinator",
          contact: "+91 82475 76988",
          photo: "images/coordinators/arun.jpg",
        },
        {
          name: "G.Monohar Krishna",
          role: "Event Coordinator",
          contact: "+91 90595 04533",
          photo: "images/coordinators/arun.jpg",
        },
        {
          name: "Ms.R.Geetha",
          role: "Faculty Coordinator",
          contact: "+91 91765 76762",
          photo: "images/coordinators/kumar.jpg",
        },
      ],
      registerLink: "https://forms.gle/9H2jEP6uCnxUkzq66",
      poster: "images/events/just.png",
    },
    {
      id: 7,
      title: "Talent Hunt",
      category: "Non-Technical",
      description:
        "Showcase your unique talents — dance, singing, mimicry, instrumental music, art, or any special skill! Take the stage, impress the audience, and win amazing prizes.",
      date: "Nov 13, 2025",
      time: "3:00 PM",
      venue: "Auditorium",
      rules: [
        "Individual or group participation allowed (up to 5 members)",
        "Performance time: 5 to 7 minutes per act",
        "Participants must bring their own props or instruments if required",
        "Music or background tracks should be submitted in advance",
        "Vulgarity or inappropriate content is strictly prohibited",
        "Judging will be based on creativity, confidence, and audience engagement",
        "Decision of the judges and organizers will be final",
        "Certificates and prizes will be awarded to top performers",
      ],
      coordinators: [
        {
          name: "B.Balamuragan",
          role: "Event Coordinator",
          contact: "+91 74486 19322",
          photo: "images/coordinators/sneha.jpg",
        },
        {
          name: "B.Ramesh",
          role: "Event Coordinator",
          contact: "+91 80745 24542",
          photo: "images/coordinators/gupta.jpg",
        },
        {
          name: "Ms.P.Vanithamani",
          role: "Faculty Coordinator",
          contact: "+91 80150 15041",
          photo: "images/coordinators/kumar.jpg",
        },
      ],
      registerLink: "https://forms.gle/9H2jEP6uCnxUkzq66",
      poster: "images/events/talent.png",
    },
    {
      id: 8,
      title: "Connexion",
      category: "Non-Technical",
      description: "Capture the essence of SYSPASE 2K25 through your mind's eye! Connexions is a brain-teasing puzzle where participants are presented with a grid or sequence of seemingly unrelated images. Your challenge is to decipher the hidden theme or common link that connects them all. It's a race against time and other participants to showcase your creativity, logical reasoning, and unique perspective on the interconnected world of technology and culture.",
  "date": "Nov 13, 2025",
  "time": "All Day",
  "venue": "Smart room",
  "rules": [
    "Eligibility: The event is open to all registered participants of SYSPASE 2K25",
    "Individual or team participation (max 2 members per team)",
    "Participants will be given a set of puzzles with 4-5 images each",
    "Identify the single common connection between all images in the sequence",
    "Submit answers via provided Google Form or submission platform",
    "Each submission must clearly state puzzle number and deduced connection",
    "Points awarded for correct answers",
    "Tie-breaker: earliest submission time for correct answers",
    "All answers must be original work of participant/team",
    "No cheating, plagiarism, or external help (internet searches, AI tools, etc.)",
    "Immediate disqualification for rule violations",
    "Decisions of event coordinators are final and binding"
  ],
      coordinators: [
        {
          name: " M.Akshitha",
          role: "event Coordinator",
          contact: "+91 21098 76543",
          photo: "images/coordinators/faraaz.jpg",
        },
        {
          name: "P.Vamshi Krishna",
          role: "event Coordinator",
          contact: "+91 76598 15310",
          photo: "images/coordinators/meena.jpg",
        },
        {
          name: "Ms.G.kanagavalli",
          role: "Faculty Coordinator",
          contact: "+91 9551485989",
          photo: "images/coordinators/kumar.jpg",
        },
      ],
      registerLink: "https://forms.gle/9H2jEP6uCnxUkzq66",
      poster: "images/events/connexions.png",
    },
  ],
};

// DOM Elements
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const eventModal = document.getElementById("event-modal");
const closeModal = document.querySelector(".close-modal");
const modalBody = document.querySelector(".modal-body");
const tabButtons = document.querySelectorAll(".tab-button");
const technicalEventsGrid = document.getElementById("technical-events");
const nonTechnicalEventsGrid = document.getElementById("non-technical-events");

// Event date for countdown (March 14, 2025)
const eventDate = new Date("March 14, 2025 09:00:00").getTime();

// Initialize the website
document.addEventListener("DOMContentLoaded", function () {
  initializeNavbar();
  initializeCountdown();
  initializeEvents();
  initializeScrollAnimations();
});

// Navbar functionality
function initializeNavbar() {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(10, 14, 23, 0.95)";
      navbar.style.padding = "0.7rem 0";
    } else {
      navbar.style.background = "rgba(10, 14, 23, 0.9)";
      navbar.style.padding = "1rem 0";
    }
  });
}

// Countdown timer
function initializeCountdown() {
  // Set event date (Nov 12, 2025 at 10:00 AM)
  const eventDate = new Date("November 12, 2025 10:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      document.querySelector(".countdown-title").textContent =
        "The Event Has Started!";
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Start the countdown immediately
initializeCountdown();

// Events functionality
function initializeEvents() {
  // Populate technical events
  eventsData.technical.forEach((event) => {
    const eventCard = createEventCard(event);
    technicalEventsGrid.appendChild(eventCard);
  });

  // Populate non-technical events
  eventsData.nonTechnical.forEach((event) => {
    const eventCard = createEventCard(event);
    nonTechnicalEventsGrid.appendChild(eventCard);
  });

  // Tab switching
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");

      // Update active tab button
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Show/hide appropriate event grids
      if (tab === "technical") {
        technicalEventsGrid.classList.remove("hidden");
        nonTechnicalEventsGrid.classList.add("hidden");
      } else {
        technicalEventsGrid.classList.add("hidden");
        nonTechnicalEventsGrid.classList.remove("hidden");
      }
    });
  });

  // Modal functionality
  closeModal.addEventListener("click", function () {
    eventModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === eventModal) {
      eventModal.style.display = "none";
    }
  });
}

function createEventCard(event) {
  const card = document.createElement("div");
  card.className = "event-card fade-in";

  // Use poster image if available, otherwise use gradient background
  const posterStyle = event.poster
    ? `background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${event.poster}') center/cover no-repeat;`
    : `background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));`;

  card.innerHTML = `
        <div class="event-poster" style="${posterStyle}">
            ${event.title}
        </div>
        <div class="event-info">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-category">${event.category}</p>
            <p class="event-description">${event.description}</p>
        </div>
    `;

  card.addEventListener("click", function () {
    openEventModal(event);
  });

  return card;
}

function openEventModal(event) {
  // Use poster image if available, otherwise use gradient background
  const posterStyle = event.poster
    ? `background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${event.poster}') center/cover no-repeat;`
    : `background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));`;

  // Create modal content
  modalBody.innerHTML = `
        <div class="modal-poster" style="${posterStyle}">
            ${event.title}
        </div>
        <h2 class="modal-title">${event.title}</h2>
        <div class="modal-details">
            <div class="detail-item">
                <i class="fas fa-calendar-alt"></i>
                <span>${event.date}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-clock"></i>
                <span>${event.time}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${event.venue}</span>
            </div>
        </div>
        <div class="rules-section">
            <h3 class="section-heading">Rules & Regulations</h3>
            <ul class="rules-list">
                ${event.rules.map((rule) => `<li>${rule}</li>`).join("")}
            </ul>
        </div>
        <div class="coordinators-section">
            <h3 class="section-heading">Coordinators</h3>
            <div class="coordinators-grid">
                ${event.coordinators
                  .map(
                    (coordinator) => `
                    <div class="coordinator-card">
                        <div class="coordinator-photo">
                            ${coordinator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </div>
                        <div class="coordinator-name">${coordinator.name}</div>
                        <div class="coordinator-role">${coordinator.role}</div>
                        <div class="coordinator-contact">${
                          coordinator.contact
                        }</div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
        <a href="${
          event.registerLink
        }" target="_blank" class="modal-register">Register Now</a>
    `;

  eventModal.style.display = "block";
}

// Scroll animations
function initializeScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// Utility function to scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}
function createEventCard(event) {
  const card = document.createElement("div");
  card.className = "event-card fade-in";

  // Create poster element
  const posterDiv = document.createElement("div");
  posterDiv.className = "event-poster";

  if (event.poster) {
    // Set background image with gradient overlay for card view
    posterDiv.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${event.poster}') center/cover no-repeat`;

    // Preload image and handle errors
    preloadImage(event.poster, function (success) {
      if (!success) {
        posterDiv.style.background = `linear-gradient(135deg, var(--accent-blue), var(--accent-purple))`;
        posterDiv.classList.add("error");
      }
    });
  } else {
    posterDiv.style.background = `linear-gradient(135deg, var(--accent-blue), var(--accent-purple))`;
  }

  posterDiv.textContent = event.title;
  card.appendChild(posterDiv);

  const eventInfo = document.createElement("div");
  eventInfo.className = "event-info";
  eventInfo.innerHTML = `
        <h3 class="event-title">${event.title}</h3>
        <p class="event-category">${event.category}</p>
        <p class="event-description">${event.description}</p>
    `;

  card.appendChild(eventInfo);

  card.addEventListener("click", function () {
    openEventModal(event);
  });

  return card;
}

function openEventModal(event) {
  // Create modal poster element
  const posterDiv = document.createElement("div");
  posterDiv.className = "modal-poster";

  if (event.poster) {
    // For modal, show full poster without gradient overlay
    posterDiv.style.background = `url('${event.poster}') center/contain no-repeat`;
    posterDiv.style.backgroundColor = "#0a0e17"; // Dark background

    // Hide text when poster is present
    posterDiv.textContent = "";

    // Handle image loading
    preloadImage(event.poster, function (success) {
      if (!success) {
        posterDiv.style.background = `linear-gradient(135deg, var(--accent-blue), var(--accent-purple))`;
        posterDiv.classList.add("error");
        posterDiv.textContent = event.title; // Show title if image fails
      }
    });
  } else {
    posterDiv.style.background = `linear-gradient(135deg, var(--accent-blue), var(--accent-purple))`;
    posterDiv.textContent = event.title;
    posterDiv.classList.add("no-poster");
  }

  // Create modal content
  modalBody.innerHTML = "";
  modalBody.appendChild(posterDiv);

  modalBody.innerHTML += `
        <h2 class="modal-title">${event.title}</h2>
        <div class="modal-details">
            <div class="detail-item">
                <i class="fas fa-calendar-alt"></i>
                <span>${event.date}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-clock"></i>
                <span>${event.time}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${event.venue}</span>
            </div>
        </div>
        <div class="rules-section">
            <h3 class="section-heading">Rules & Regulations</h3>
            <ul class="rules-list">
                ${event.rules.map((rule) => `<li>${rule}</li>`).join("")}
            </ul>
        </div>
        <div class="coordinators-section">
            <h3 class="section-heading">Coordinators</h3>
            <div class="coordinators-grid">
                ${event.coordinators
                  .map(
                    (coordinator) => `
                    <div class="coordinator-card">
                        <div class="coordinator-photo">
                            ${coordinator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </div>
                        <div class="coordinator-name">${coordinator.name}</div>
                        <div class="coordinator-role">${coordinator.role}</div>
                        <div class="coordinator-contact">${
                          coordinator.contact
                        }</div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
        <a href="${
          event.registerLink
        }" target="_blank" class="modal-register">Register Now</a>
    `;

  eventModal.style.display = "block";

  // Debug info
  console.log("Opening modal for:", event.title);
  console.log("Poster path:", event.poster);
}

// Helper function to preload images
function preloadImage(src, callback) {
  const img = new Image();
  img.onload = function () {
    console.log("✅ Poster loaded successfully:", src);
    callback(true);
  };
  img.onerror = function () {
    console.error("❌ Failed to load poster:", src);
    callback(false);
  };
  img.src = src;
} // Enhanced image error handling with initials fallback
function handleImageError(img) {
  console.warn(`❌ Image failed to load: ${img.src}`);

  const parent = img.parentElement;
  const name = img.alt || "Coordinator";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // Hide the broken image
  img.style.display = "none";

  // Add initials as fallback
  parent.classList.add("fallback");
  parent.setAttribute("data-initials", initials);

  // Add a subtle animation
  parent.style.animation = "pulse 2s infinite";
}

// Initialize all coordinator images
function initializeCoordinatorImages() {
  const coordinatorImages = document.querySelectorAll(".coordinator-img img");

  coordinatorImages.forEach((img) => {
    // Success handler
    img.onload = function () {
      console.log(`✅ Coordinator image loaded: ${img.src}`);
      img.parentElement.classList.remove("fallback");
    };

    // Error handler
    if (!img.onerror) {
      img.onerror = function () {
        handleImageError(this);
      };
    }

    // Pre-check image availability
    const tempImg = new Image();
    tempImg.src = img.src;
    tempImg.onerror = function () {
      console.log(`⚠️ Image might not exist: ${img.src}`);
    };
  });
}

// Add pulse animation to CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
function handleImageError(img) {
  console.warn("❌ Image failed to load:", img.src);

  const parent = img.parentElement;
  const name = img.alt || "Coordinator";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // Hide the broken image
  img.style.display = "none";

  // Add fallback styling
  parent.classList.add("fallback");
  parent.setAttribute("data-initials", initials);
}

// Initialize all coordinator images
function initializeCoordinatorImages() {
  const coordinatorImages = document.querySelectorAll(".coordinator-img img");

  coordinatorImages.forEach((img) => {
    img.onload = function () {
      console.log("✅ Image loaded:", img.src);
    };

    if (!img.onerror) {
      img.onerror = function () {
        handleImageError(this);
      };
    }
  });
}

// Call this in DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  initializeCoordinatorImages();
  // ... other initializations
});
// Countdown Timer
function updateCountdown() {
  const eventDate = new Date("March 15, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.querySelector(".countdown-title").textContent = "Event Started!";
  }
}

// Update countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth scroll function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}
