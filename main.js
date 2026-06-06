// ==========================================================================
// HACKATHON MEMORIES DATA (4 Entries)
// ==========================================================================
const hackathonMemories = [
    {
        title: "VIT Void Hackathon (Fintech Track)",
        date: "2025",
        location: "Chennai",
        teamSize: "4 members",
        role: "Expense Tracker & Finance Module Developer",
        built: "An interactive expense management application incorporating gamified financial modules to help users map budget thresholds.",
        learned: "Secured Top 5 in the fintech category! We coded fun interactive games and survived to give our 2nd review at 2 AM!"
    },
    {
        title: "National Hackathon",
        date: "2026",
        location: "Presidency University, Bengaluru",
        teamSize: "4 members",
        role: "Frontend Developer & Product Ideation Lead",
        built: "Preventive Healthcare Awareness Platform: A portal designed for rural communities focusing on women's health and hospital connectivity.",
        learned: "Represented our college at a national event. We were so deeply focused on coding all day that we completely forgot to have lunch!"
    },
    {
        title: "Smart India Hackathon (SIH) - Internal Round",
        date: "2025",
        location: "Chennai",
        teamSize: "6 members",
        role: "Full Stack Developer",
        built: "Aadhaar & DBT Awareness Platform: A clean web app guiding rural users through Aadhaar-enabled Direct Benefit Transfer services.",
        learned: "Cleared internal screening rounds and participated in a 36-hour hackathon. Gained hands-on experience designing services for rural populations."
    },
    {
        title: "Smart Attendance Tracking System",
        date: "First Hackathon Experience",
        location: "Saveetha Engineering College",
        teamSize: "4 members",
        role: "Face Recognition Developer",
        built: "Built a webcam-based attendance automation prototype using face recognition concepts to verify and log student attendance.",
        learned: "My first ever hackathon experience! Learned how camera feeds buffer images, managed a tight sprint deadline, and worked within a team dynamic."
    }
];

// ==========================================================================
// HERO SECTION: TYPING ANIMATION (Writing inside Top Left Hero Container)
// ==========================================================================
function startHeroTypingAnimation() {
    const titleElement = document.querySelector(".hero-title");
    const roleElement = document.querySelector(".hero-role");

    if (!titleElement || !roleElement) return;

    const titleText = "Hi, I'm Pavithra";
    const roleText = "I am a Computer Science and Business Systems Student";

    // Clear initial content
    titleElement.textContent = "";
    roleElement.textContent = "";

    // Add blink cursor elements
    titleElement.innerHTML = `<span class="title-text"></span><span class="cursor">|</span>`;
    roleElement.innerHTML = `<span class="role-text"></span><span class="cursor" style="display:none">|</span>`;

    const titleSpan = titleElement.querySelector(".title-text");
    const roleSpan = roleElement.querySelector(".role-text");
    const titleCursor = titleElement.querySelector(".cursor");
    const roleCursor = roleElement.querySelector(".cursor");

    let titleIndex = 0;
    let roleIndex = 0;

    function typeTitle() {
        if (titleIndex < titleText.length) {
            titleSpan.textContent += titleText.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitle, 80);
        } else {
            // Swap active cursors
            titleCursor.style.display = "none";
            roleCursor.style.display = "inline";
            setTimeout(typeRole, 400);
        }
    }

    function typeRole() {
        if (roleIndex < roleText.length) {
            roleSpan.textContent += roleText.charAt(roleIndex);
            roleIndex++;
            setTimeout(typeRole, 55);
        } else {
            roleCursor.classList.add("blink-animation");
        }
    }

    typeTitle();
}

// ==========================================================================
// SECTION 2: ABOUT NOTEBOOK STICKERS (SCROLL PEECK-OUTS)
// ==========================================================================
function setupNotebookScrollObserver() {
    const aboutSection = document.getElementById("about");
    const stickers = document.querySelectorAll(".notebook-sticker");

    if (!aboutSection) return;

    const observerOptions = {
        root: null,
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stickers.forEach(sticker => {
                    sticker.classList.add("revealed");
                });
            } else {
                stickers.forEach(sticker => {
                    sticker.classList.remove("revealed");
                });
            }
        });
    }, observerOptions);

    observer.observe(aboutSection);
}

// ==========================================================================
// SECTION 3: PRESSED BETWEEN PAGES (MODAL CONTROLLER)
// ==========================================================================
const modalOverlay = document.getElementById("memoryModal");

window.openMemoryModal = function(index) {
    const data = hackathonMemories[index];
    if (!data || !modalOverlay) return;

    // Safely populate modal header details
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDate").textContent = data.date;
    document.getElementById("modalLocation").textContent = data.location;
    document.getElementById("modalBuilt").textContent = data.built;
    document.getElementById("modalLearned").textContent = data.learned;

    // Open modal
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
};

window.closeMemoryModal = function(event) {
    if (modalOverlay) {
        modalOverlay.classList.remove("open");
        document.body.style.overflow = "";
    }
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("open")) {
        closeMemoryModal();
    }
});

// ==========================================================================
// SECTION 6: CONTACT ENVELOPE CONTROLLER
// ==========================================================================
function setupContactEnvelope() {
    const envelopeWrapper = document.querySelector(".envelope-wrapper");

    if (!envelopeWrapper) return;

    envelopeWrapper.addEventListener("click", () => {
        envelopeWrapper.classList.toggle("open");
    });
}

// ==========================================================================
// SECTION 1.5: NOTEBOOK POLAROID PHOTOS STACK INTERACTION
// ==========================================================================
function setupNotebookPhotosInteraction() {
    const photos = document.querySelectorAll(".photo-tape-container .polaroid-photo");
    if (photos.length === 0) return;

    // Set first photo as active stack initially
    photos[0].classList.add("front-stack");

    photos.forEach(photo => {
        photo.addEventListener("click", () => {
            photos.forEach(p => p.classList.remove("front-stack"));
            photo.classList.add("front-stack");
        });
    });
}

// ==========================================================================
// SCROLL REVEAL ANIMATIONS (Fade-in / slide-up elements as scrolled down)
// ==========================================================================
function setupScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                // Once it is revealed, we can stop observing it
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// PHOTO CHEMICAL DEVELOPMENT (Left Notebook Spread Polaroids Only)
// ==========================================================================
function setupLeftPolaroidsDevelopment() {
    const leftPhotos = document.querySelectorAll(".page-left .polaroid-photo");
    if (leftPhotos.length === 0) return;

    // Trigger Instax chemical photo development on page load after a slight delay
    setTimeout(() => {
        leftPhotos.forEach(photo => {
            photo.classList.add("developed");
        });
    }, 600);
}

// ==========================================================================
// TACTILE INTERACTION: DRAGGABLE STICKERS ONLY
// ==========================================================================
function setupDraggableStickers() {
    const stickers = document.querySelectorAll(
        ".notebook-sticker, .education-sticker, .memories-sticker, .projects-sticker, .skills-sticker, .contact-sticker"
    );

    stickers.forEach(sticker => {
        let isDragging = false;
        let startX = 0, startY = 0;
        let initX = 0, initY = 0;

        const startDrag = (e) => {
            isDragging = true;
            sticker.classList.add("dragging-sticker");

            // Handle touch coordinates vs mouse coordinates
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            startX = clientX;
            startY = clientY;

            // Extract current CSS transform offsets using DOMMatrix
            try {
                const style = window.getComputedStyle(sticker);
                const matrix = new DOMMatrix(style.transform);
                initX = matrix.m41;
                initY = matrix.m42;
            } catch (err) {
                initX = 0;
                initY = 0;
            }

            window.addEventListener("mousemove", dragMove, { passive: false });
            window.addEventListener("touchmove", dragMove, { passive: false });
            window.addEventListener("mouseup", endDrag);
            window.addEventListener("touchend", endDrag);

            // Avoid text selection or standard page scroll on drag
            if (e.cancelable) e.preventDefault();
        };

        const dragMove = (e) => {
            if (!isDragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const deltaX = clientX - startX;
            const deltaY = clientY - startY;

            // Update transform translation in real time, adding lifting scale and tilt
            sticker.style.transform = `translate3d(${initX + deltaX}px, ${initY + deltaY}px, 0) scale(1.1) rotate(5deg)`;
            if (e.cancelable) e.preventDefault();
        };

        const endDrag = (e) => {
            if (!isDragging) return;
            isDragging = false;
            sticker.classList.remove("dragging-sticker");

            // Extract final coordinates to drop static placement
            let finalX = initX;
            let finalY = initY;
            try {
                const style = window.getComputedStyle(sticker);
                const matrix = new DOMMatrix(style.transform);
                finalX = matrix.m41;
                finalY = matrix.m42;
            } catch (err) {}

            sticker.style.transform = `translate3d(${finalX}px, ${finalY}px, 0)`;

            window.removeEventListener("mousemove", dragMove);
            window.removeEventListener("touchmove", dragMove);
            window.removeEventListener("mouseup", endDrag);
            window.removeEventListener("touchend", endDrag);
        };

        sticker.addEventListener("mousedown", startDrag);
        sticker.addEventListener("touchstart", startDrag, { passive: false });
    });
}

// ==========================================================================
// TACTILE INTERACTION: CLICK TO STAMP INK TOOL (DESK SURFACE ONLY)
// ==========================================================================
function setupClickToStamp() {
    const stampColors = [
        'rgba(255, 92, 138, 0.48)',   // Pink ink
        'rgba(62, 56, 53, 0.38)',    // Dark charcoal ink
        'rgba(139, 162, 132, 0.45)',  // Sage green ink
        'rgba(156, 39, 176, 0.38)',   // Lavender ink
        'rgba(245, 176, 39, 0.45)'    // Pale gold ink
    ];

    const stampSVGs = [
        // Flower stamp SVG
        `<svg viewBox="0 0 100 100" width="40" height="40" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="50" cy="50" r="8" />
            <path d="M 50,32 C 40,32 38,42 50,42 C 62,42 60,32 50,32 Z" />
            <path d="M 50,68 C 40,68 38,58 50,58 C 62,58 60,68 50,68 Z" />
            <path d="M 32,50 C 32,40 42,38 42,50 C 42,60 32,58 32,50 Z" />
            <path d="M 68,50 C 68,40 58,38 58,50 C 58,60 68,58 68,50 Z" />
        </svg>`,
        // Star stamp SVG
        `<svg viewBox="0 0 100 100" width="36" height="36" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 50,10 C 50,35 65,50 90,50 C 65,50 50,65 50,90 C 50,65 35,50 10,50 C 35,50 50,35 50,10 Z" />
        </svg>`,
        // Heart stamp SVG
        `<svg viewBox="0 0 100 100" width="34" height="34" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 50,30 C 60,10 90,15 90,45 C 90,70 65,85 50,90 C 35,85 10,70 10,45 C 10,15 40,10 50,30 Z" />
        </svg>`,
        // Sparkle stamp SVG
        `<svg viewBox="0 0 100 100" width="36" height="36" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 50,8 Q 58,38 90,42 Q 60,55 58,88 Q 44,60 10,54 Q 40,42 50,8 Z" />
        </svg>`
    ];

    window.addEventListener("click", (e) => {
        // Exclude interactive sections so clicking text or links doesn't trigger stamps
        if (e.target.closest('a, button, input, select, textarea, .btn, .polaroid-photo, .project-card-wrapper, .education-paper-scrap, .sticky-note, .polaroid-card, .envelope, .notebook-container, .letter-container, .notebook-sticker, .education-sticker, .memories-sticker, .projects-sticker, .skills-sticker, .contact-sticker')) {
            return;
        }

        const section = e.target.closest('section, footer');
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Pick random properties for characterful ink stamp effects
        const stampIndex = Math.floor(Math.random() * stampSVGs.length);
        const color = stampColors[Math.floor(Math.random() * stampColors.length)];
        const rotation = Math.floor(Math.random() * 60) - 30; // Random tilt between -30deg and 30deg
        const opacity = (Math.random() * 0.2 + 0.45).toFixed(2); // Ink density variance

        // Render stamp wrapper
        const stamp = document.createElement("div");
        stamp.className = "ink-stamp";
        stamp.style.left = `${x}px`;
        stamp.style.top = `${y}px`;
        stamp.style.color = color;
        stamp.style.setProperty("--stamp-rotation", `${rotation}deg`);
        stamp.style.setProperty("--stamp-opacity", opacity);
        stamp.innerHTML = stampSVGs[stampIndex];

        section.appendChild(stamp);

        // Remove stamp DOM nodes after their fade-out cycle
        setTimeout(() => {
            stamp.remove();
        }, 12000);
    });
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    startHeroTypingAnimation();
    setupNotebookScrollObserver();
    setupNotebookPhotosInteraction();
    setupContactEnvelope();
    setupScrollReveal();
    setupLeftPolaroidsDevelopment();
    setupDraggableStickers();
    setupClickToStamp();
});

