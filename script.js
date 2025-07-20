// Location Data - 25 locations as requested
const locations = [
    {
        id: 1,
        name: "Highland Village",
        address: "2400 FM-407, Highland Village, TX 75077",
        phone: "(972) 317-1234",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 2,
        name: "Flower Mound",
        address: "2800 FM-2499, Flower Mound, TX 75022",
        phone: "(972) 317-1235",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "15 min"
    },
    {
        id: 3,
        name: "Las Colinas Riverside",
        address: "6300 N O'Connor Blvd, Irving, TX 75039",
        phone: "(972) 317-1236",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519415943484-cfbdfb8361a8?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 4,
        name: "Las Colinas O'Connor",
        address: "7200 N O'Connor Blvd, Irving, TX 75039",
        phone: "(972) 317-1237",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "30 min"
    },
    {
        id: 5,
        name: "Colleyville",
        address: "4800 Colleyville Blvd, Colleyville, TX 76034",
        phone: "(972) 317-1238",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 6,
        name: "Addison",
        address: "5100 Belt Line Rd, Addison, TX 75254",
        phone: "(972) 317-1239",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "45 min"
    },
    {
        id: 7,
        name: "Castle Hills",
        address: "2540 King Arthur Blvd, Lewisville, TX 75056",
        phone: "(972) 317-1240",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 8,
        name: "Frisco FM423",
        address: "12345 FM-423, Frisco, TX 75034",
        phone: "(972) 317-1241",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "20 min"
    },
    {
        id: 9,
        name: "Frisco Warren",
        address: "6789 Warren Pkwy, Frisco, TX 75034",
        phone: "(972) 317-1242",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519415943484-cfbdfb8361a8?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 10,
        name: "Frisco US380",
        address: "11111 US-380, Frisco, TX 75034",
        phone: "(972) 317-1243",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "10 min"
    },
    {
        id: 11,
        name: "McKinney",
        address: "22222 McKinney Ranch Pkwy, McKinney, TX 75070",
        phone: "(972) 317-1244",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 12,
        name: "Allen",
        address: "33333 Stacy Rd, Allen, TX 75013",
        phone: "(972) 317-1245",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "25 min"
    },
    {
        id: 13,
        name: "Plano",
        address: "44444 Preston Rd, Plano, TX 75093",
        phone: "(972) 317-1246",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 14,
        name: "Fort Worth",
        address: "55555 Camp Bowie W, Fort Worth, TX 76107",
        phone: "(972) 317-1247",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "35 min"
    },
    {
        id: 15,
        name: "Dallas",
        address: "66666 Greenville Ave, Dallas, TX 75231",
        phone: "(972) 317-1248",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519415943484-cfbdfb8361a8?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 16,
        name: "Arlington",
        address: "77777 Cooper St, Arlington, TX 76013",
        phone: "(972) 317-1249",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "15 min"
    },
    {
        id: 17,
        name: "Grapevine",
        address: "88888 Grapevine Mills Pkwy, Grapevine, TX 76051",
        phone: "(972) 317-1250",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 18,
        name: "Southlake",
        address: "99999 State Hwy 114, Southlake, TX 76092",
        phone: "(972) 317-1251",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "40 min"
    },
    {
        id: 19,
        name: "Keller",
        address: "10101 Keller Pkwy, Keller, TX 76248",
        phone: "(972) 317-1252",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 20,
        name: "Roanoke",
        address: "20202 US-377, Roanoke, TX 76262",
        phone: "(972) 317-1253",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "20 min"
    },
    {
        id: 21,
        name: "Denton",
        address: "30303 University Dr, Denton, TX 76201",
        phone: "(972) 317-1254",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519415943484-cfbdfb8361a8?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 22,
        name: "Lewisville",
        address: "40404 Main St, Lewisville, TX 75057",
        phone: "(972) 317-1255",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "30 min"
    },
    {
        id: 23,
        name: "Carrollton",
        address: "50505 Josey Ln, Carrollton, TX 75010",
        phone: "(972) 317-1256",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    },
    {
        id: 24,
        name: "Richardson",
        address: "60606 Coit Rd, Richardson, TX 75080",
        phone: "(972) 317-1257",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "25 min"
    },
    {
        id: 25,
        name: "Garland",
        address: "70707 Garland Rd, Garland, TX 75043",
        phone: "(972) 317-1258",
        hours: "9AM-7PM",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=50&q=80",
        availability: "Available",
        waitTime: "0 min"
    }
];

// Services Data
const services = [
    { id: 'classic', name: 'CLASSIC HAIRCUT', duration: '45 min', price: 35 },
    { id: 'fade', name: 'SKIN FADE', duration: '45 min', price: 40 },
    { id: 'beard', name: 'BEARD TRIM', duration: '30 min', price: 25 },
    { id: 'shave', name: 'HOT TOWEL SHAVE', duration: '45 min', price: 45 },
    { id: 'package', name: 'EXECUTIVE PACKAGE', duration: '1 hr 15 min', price: 115 }
];

// Professionals Data (sample)
const professionals = [
    { id: 'any', name: 'Any Professional', image: '', available: true },
    { id: 'allan', name: 'Allan A.', image: 'https://randomuser.me/api/portraits/men/32.jpg', available: true },
    { id: 'idiel', name: 'Idiel C.', image: 'https://randomuser.me/api/portraits/men/33.jpg', available: true },
    { id: 'marcos', name: 'Marcos C.', image: 'https://randomuser.me/api/portraits/men/34.jpg', available: true },
    { id: 'john', name: 'John D.', image: 'https://randomuser.me/api/portraits/men/35.jpg', available: true },
    { id: 'mike', name: 'Mike S.', image: 'https://randomuser.me/api/portraits/men/36.jpg', available: true }
];

// Update bookingState to support multiple selected services
let bookingState = {
    currentStep: 0,
    selectedServices: [], // now an array
    selectedLocation: null,
    selectedProfessional: null,
    selectedDate: null,
    selectedTime: null,
    total: 0
};

// DOM Elements
const modal = document.getElementById('bookingModal');
const modalClose = document.querySelector('.modal-close');
const bookNowBtn = document.getElementById('bookNowBtn');
const bookingTotal = document.getElementById('bookingTotal');
const locationsGrid = document.getElementById('locationsGrid');
const locationList = document.getElementById('locationList');
const modalLocationOptions = document.getElementById('modalLocationOptions');
const bookNowBtnNav = document.getElementById('bookNowBtnNav');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLocations();
    initializeBookingModal();
    initializeEventListeners();
    initializeScrollEffects();
    // Ensure modal back button works
    const modalBackBtn = document.getElementById('modalBackBtn');
    if (modalBackBtn) {
        modalBackBtn.addEventListener('click', function() {
            if (bookingState.currentStep > 0) {
                showStep(bookingState.currentStep - 1);
            }
        });
    }
    // Ensure navbar Book Now button works
    const bookNowBtnNav = document.getElementById('bookNowBtnNav');
    if (bookNowBtnNav) {
        bookNowBtnNav.addEventListener('click', function(e) {
            e.preventDefault();
            openBookingModal();
        });
    }
    setupOrderNextBtn();
});

// Initialize Locations
function initializeLocations() {
    if (locationsGrid) {
    locationsGrid.innerHTML = locations.map(location => `
        <div class="location-card" data-location-id="${location.id}">
            <div class="location-header">
                <img src="${location.image}" alt="${location.name}" class="location-image">
                <div class="location-info">
                    <h4>${location.name}</h4>
                    <p>${location.address}</p>
                </div>
            </div>
            <div class="location-details">
                <div class="location-detail">
                    <i class="fas fa-phone"></i>
                    <span>${location.phone}</span>
                </div>
                <div class="location-detail">
                    <i class="fas fa-clock"></i>
                    <span>Today's hours: ${location.hours}</span>
                </div>
                <div class="location-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Google Maps</span>
                </div>
            </div>
            <div class="location-actions">
                <button class="book-btn" onclick="openBookingModal(${location.id})">Make An Appointment</button>
                <span class="availability">${location.availability}, Approx Wait time: ${location.waitTime}</span>
            </div>
        </div>
    `).join('');
    }
    if (locationList) {
    locationList.innerHTML = locations.map(location => `
        <div class="location-item" data-location-id="${location.id}">
            <img src="${location.image}" alt="${location.name}" class="location-image">
            <div class="location-info">
                <h4>${location.name}</h4>
                <p>${location.address}</p>
            </div>
        </div>
    `).join('');
    }
    setTimeout(() => {
        if (locationList) {
            document.querySelectorAll('#locationList .location-item').forEach(item => {
                item.addEventListener('click', function() {
                    const locationId = parseInt(this.getAttribute('data-location-id'));
                    const location = locations.find(l => l.id === locationId);
                    if (location) {
                        const selectedLocationName = document.getElementById('selectedLocationName');
                        if (selectedLocationName) {
                            selectedLocationName.textContent = location.name;
                        }
                        // Close the dropdown
                        const dropdown = this.closest('.location-dropdown');
                        if (dropdown) {
                            dropdown.style.opacity = '0';
                            dropdown.style.visibility = 'hidden';
                            dropdown.style.transform = 'translateY(-10px)';
                        }
                    }
                });
            });
        }
        // Make the navbar location clickable to toggle the dropdown
        const navLocation = document.querySelector('.location-link');
        const dropdown = document.querySelector('.location-dropdown');
        if (navLocation && dropdown) {
            navLocation.addEventListener('click', function(e) {
                e.preventDefault();
                // Toggle dropdown visibility
                if (dropdown.style.opacity === '1' && dropdown.style.visibility === 'visible') {
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.transform = 'translateY(-10px)';
                } else {
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.transform = 'translateY(0)';
                }
            });
        }
    }, 0);
    if (modalLocationOptions) {
    modalLocationOptions.innerHTML = locations.map(location => `
        <div class="service-option">
            <input type="radio" name="location" id="loc-${location.id}" value="${location.id}">
            <label for="loc-${location.id}">
                <span class="service-name">${location.name}</span>
                <span class="service-duration">${location.address}</span>
                <span class="service-price">${location.availability}</span>
            </label>
        </div>
    `).join('');
    }
}

// Initialize Booking Modal
function initializeBookingModal() {
    const steps = document.querySelectorAll('.booking-step');
    const totalSteps = steps.length;

    // Service selection (grid, multi-select)
    // Move renderServiceSelection to top-level scope
    function renderServiceSelection() {
        const selectedBox = document.getElementById('selectedServicesBox');
        const addonBox = document.getElementById('addonServicesBox');
        const addonHeading = document.getElementById('addonServicesHeading');
        const viewOrderBar = document.getElementById('viewOrderBar');
        if (!selectedBox || !addonBox || !addonHeading || !viewOrderBar) return;
        // Selected services
        if (bookingState.selectedServices.length > 0) {
            selectedBox.innerHTML = bookingState.selectedServices.map(service => `
                <div class="selected-service-card" data-service-id="${service.id}">
                    <div class="service-name">${service.name}</div>
                    <div class="service-duration">${service.duration}</div>
                    <div class="service-price">$${service.price}</div>
                    <span class="checkmark"><i class="fas fa-check"></i></span>
                </div>
            `).join('');
            selectedBox.style.display = '';
        } else {
            selectedBox.innerHTML = '';
            selectedBox.style.display = 'none';
        }
        // Add-on services
        const selectedIds = bookingState.selectedServices.map(s => s.id);
        const addons = services.filter(s => !selectedIds.includes(s.id));
        if (addons.length > 0) {
            addonBox.innerHTML = addons.map(service => `
                <div class="service-card" data-service-id="${service.id}">
                    <div class="service-name">${service.name}</div>
                    <div class="service-duration">${service.duration}</div>
                    <div class="service-price">$${service.price}</div>
                </div>
            `).join('');
            addonBox.style.display = '';
            addonHeading.style.display = (bookingState.selectedServices.length > 0) ? '' : 'none';
        } else {
            addonBox.innerHTML = '';
            addonBox.style.display = 'none';
            addonHeading.style.display = 'none';
        }
        // Add click handlers
        document.querySelectorAll('.selected-service-card').forEach(card => {
            card.addEventListener('click', function() {
                const serviceId = this.getAttribute('data-service-id');
                bookingState.selectedServices = bookingState.selectedServices.filter(s => s.id !== serviceId);
                bookingState.total = bookingState.selectedServices.reduce((sum, s) => sum + s.price, 0);
                updateBookingTotal();
                renderServiceSelection();
                enableNextStep();
        });
    });
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                const serviceId = this.getAttribute('data-service-id');
                const service = services.find(s => s.id === serviceId);
                if (!service) return;
                bookingState.selectedServices.push(service);
                bookingState.total = bookingState.selectedServices.reduce((sum, s) => sum + s.price, 0);
                updateBookingTotal();
                renderServiceSelection();
                enableNextStep();
                // Don't automatically advance - let user click order bar
            });
        });
        // View order bar
        if (bookingState.selectedServices.length > 0) {
            viewOrderBar.style.display = 'flex';
            viewOrderBar.innerHTML = `
                <span class="view-order-link">View order</span>
                <span class="order-total">${formatCurrency(bookingState.total)}</span>
            `;
        } else {
            viewOrderBar.style.display = 'none';
            viewOrderBar.innerHTML = '';
        }
        // Always set up the click handler after rendering
        setupViewOrderBar();
    }
    // In initializeBookingModal, call renderServiceSelection after setTimeout for service step
    setTimeout(() => {
        renderServiceSelection();
    }, 0);

    // Location selection
    document.querySelectorAll('input[name="location"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const location = locations.find(l => l.id === parseInt(this.value));
                bookingState.selectedLocation = location;
                enableNextStep();
            }
        });
    });

    // Professional selection (added)
    function setupProfessionalCards() {
        // Add event listeners to professional cards
        document.querySelectorAll('.professional-card').forEach(card => {
            card.addEventListener('click', function() {
                const proId = this.getAttribute('data-professional-id');
                // If clicking the 'Choose a service first' card, go to service step
                if (proId === 'any') {
                    showStep(2); // Go to service step
                    return;
                }
                // Select professional and go to service step
                bookingState.selectedProfessional = professionals.find(p => p.id === proId);
                // Update visual selection
                document.querySelectorAll('.professional-card').forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
                enableNextStep();
                // Move to next step automatically
                showStep(2);
            });
        });
    }
    // In initializeBookingModal, call setupProfessionalCards
    setTimeout(() => {
        setupProfessionalCards();
    }, 0);
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Modal controls
    modalClose.addEventListener('click', closeBookingModal);
    bookNowBtn.addEventListener('click', openBookingModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeBookingModal();
        }
    });

    // Navigation buttons
    // nextStepBtn.addEventListener('click', nextStep); // Removed
    // prevStepBtn.addEventListener('click', prevStep); // Removed

    // Location dropdown tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Here you could implement search functionality
        });
    });

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });
}

// Initialize Scroll Effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .location-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// Booking Modal Functions
// When opening the booking modal, show the professional step first
function openBookingModal(locationId = null) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (locationId) {
        bookingState.selectedLocation = locations.find(l => l.id === locationId);
        // Auto-select location in modal
        const locationRadio = document.querySelector(`input[name="location"][value="${locationId}"]`);
        if (locationRadio) {
            locationRadio.checked = true;
        }
    }
    // Always render location list and tabs before showing the first step
    renderModalLocationList('nearby');
    setupLocationTabs();
    showStep(0);
}

function closeBookingModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    resetBookingState();
}

function resetBookingState() {
    bookingState = {
        currentStep: 0,
        selectedServices: [],
        selectedLocation: null,
        selectedProfessional: null,
        selectedDate: null,
        selectedTime: null,
        total: 0
    };
    
    // Reset form
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    
    updateBookingTotal();
    showStep(0);
}

// Add event delegation for view order bar click to show order summary step
function setupViewOrderBar() {
    const viewOrderLink = document.querySelector('.view-order-link');
    console.log('setupViewOrderBar called', viewOrderLink);
    if (viewOrderLink) {
        viewOrderLink.onclick = function() {
            console.log('View order clicked');
            showStep(3); // Go to order page 1
            renderOrderSummary();
        };
    }
}

function renderOrderSummary() {
    const orderSummaryBox = document.getElementById('orderSummaryBox');
    const orderSubtotal = document.getElementById('orderSubtotal');
    if (!orderSummaryBox || !orderSubtotal) return;
    let html = '';
    // Show location info if selected
    if (bookingState.selectedLocation) {
        html += `<div class="order-location-info">
            <i class='fas fa-map-marker-alt order-location-icon'></i>
            <div style='flex:1;'>
                <div class='order-location-name'>${bookingState.selectedLocation.name}</div>
                <div class='order-location-address'>${bookingState.selectedLocation.address}</div>
            </div>
        </div>`;
    }
    // Show professional info if selected
    if (bookingState.selectedProfessional) {
        html += `<div style="display:flex; align-items:center; background:#f5f5f5; border-radius:12px; padding:16px 14px; margin-bottom:10px;">
            <img src='${bookingState.selectedProfessional.image}' alt='${bookingState.selectedProfessional.name}' style='width:48px; height:48px; border-radius:8px; object-fit:cover; margin-right:12px;'>
            <div style='flex:1;'>
                <div style='font-weight:700; font-size:16px;'>${bookingState.selectedProfessional.name}</div>
                <div style='color:#888; font-size:13px;'>${bookingState.selectedProfessional.available ? 'Available Today' : ''}</div>
            </div>
        </div>`;
    }
    // Show main service and add-ons
    if (bookingState.selectedServices.length > 0) {
        html += `<div style="background:#f5f5f5; border-radius:12px; padding:16px 14px; margin-bottom:10px;">
            <div style='font-weight:700; font-size:16px;'>${bookingState.selectedServices[0].name}</div>
            <div style='color:#888; font-size:14px;'>${bookingState.selectedServices[0].duration}</div>
            <div style='font-weight:700; float:right;'>$${bookingState.selectedServices[0].price}</div>
        </div>`;
        if (bookingState.selectedServices.length > 1) {
            html += bookingState.selectedServices.slice(1).map(s =>
                `<div style='margin-left:10px; color:#666; font-size:15px;'>+ ${s.name} <span style='float:right;'>$${s.price}</span></div>`
            ).join('');
        }
    }
    orderSummaryBox.innerHTML = html;
    orderSubtotal.textContent = `$${bookingState.total}`;
}

function renderFinalOrderSummary() {
    const finalOrderSummaryBox = document.getElementById('finalOrderSummaryBox');
    const finalOrderSubtotal = document.getElementById('finalOrderSubtotal');
    const finalOrderTimeBox = document.getElementById('finalOrderTimeBox');
    if (!finalOrderSummaryBox || !finalOrderSubtotal || !finalOrderTimeBox) return;
    let html = '';
    // Show location info if selected
    if (bookingState.selectedLocation) {
        html += `<div class="order-location-info">
            <i class='fas fa-map-marker-alt order-location-icon'></i>
            <div style='flex:1;'>
                <div class='order-location-name'>${bookingState.selectedLocation.name}</div>
                <div class='order-location-address'>${bookingState.selectedLocation.address}</div>
            </div>
        </div>`;
    }
    // Show professional info if selected
    if (bookingState.selectedProfessional) {
        html += `<div style="display:flex; align-items:center; background:#f5f5f5; border-radius:12px; padding:16px 14px; margin-bottom:10px;">
            <img src='${bookingState.selectedProfessional.image}' alt='${bookingState.selectedProfessional.name}' style='width:48px; height:48px; border-radius:8px; object-fit:cover; margin-right:12px;'>
            <div style='flex:1;'>
                <div style='font-weight:700; font-size:16px;'>${bookingState.selectedProfessional.name}</div>
                <div style='color:#888; font-size:13px;'>${bookingState.selectedProfessional.available ? 'Available Today' : ''}</div>
            </div>
        </div>`;
    }
    // Show main service and add-ons
    if (bookingState.selectedServices.length > 0) {
        html += `<div style="background:#f5f5f5; border-radius:12px; padding:16px 14px; margin-bottom:10px;">
            <div style='font-weight:700; font-size:16px;'>${bookingState.selectedServices[0].name}</div>
            <div style='color:#888; font-size:14px;'>${bookingState.selectedServices[0].duration}</div>
            <div style='font-weight:700; float:right;'>$${bookingState.selectedServices[0].price}</div>
        </div>`;
        if (bookingState.selectedServices.length > 1) {
            html += bookingState.selectedServices.slice(1).map(s =>
                `<div style='margin-left:10px; color:#666; font-size:15px;'>+ ${s.name} <span style='float:right;'>$${s.price}</span></div>`
            ).join('');
        }
    }
    finalOrderSummaryBox.innerHTML = html;
    finalOrderSubtotal.textContent = `$${bookingState.total}`;
    // Show selected date and time
    if (bookingState.selectedDate && bookingState.selectedTime) {
        const date = new Date(bookingState.selectedDate);
        const dateStr = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        finalOrderTimeBox.innerHTML = `<strong>Time:</strong> ${dateStr} at ${bookingState.selectedTime}`;
    } else {
        finalOrderTimeBox.innerHTML = '';
    }
}

// 1. Populate modalLocationList in the new location step
function renderModalLocationList(tab = 'nearby') {
    const modalLocationList = document.getElementById('modalLocationList');
    if (!modalLocationList) return;
    let filteredLocations = locations;
    // For now, 'nearby' just shows all; implement search if needed
    if (tab === 'search') {
        // Optionally filter for search
    }
    modalLocationList.innerHTML = filteredLocations.map(loc => `
        <div class="location-item" data-location-id="${loc.id}">
            <img src="${loc.image}" alt="${loc.name}">
            <div class="location-info">
                <div class="location-name">${loc.name}</div>
                <div class="location-address">${loc.address}</div>
            </div>
        </div>
    `).join('');
    // Add click handlers
    modalLocationList.querySelectorAll('.location-item').forEach(item => {
        item.onclick = function() {
            const id = parseInt(this.getAttribute('data-location-id'));
            bookingState.selectedLocation = locations.find(l => l.id === id);
            // Highlight selected
            modalLocationList.querySelectorAll('.location-item').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            // Enable next step
            enableNextStep();
            // Immediately go to professional step
            showStep(1);
        };
    });
}

// 2. Handle tab switching in location step
function setupLocationTabs() {
    const tabs = document.querySelectorAll('.location-tabs .tab-btn');
    tabs.forEach(tab => {
        tab.onclick = function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderModalLocationList(this.getAttribute('data-tab'));
        };
    });
}

// 3. Update showStep to handle new step order and logic
function showStep(stepIndex) {
    const steps = document.querySelectorAll('.booking-step');
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
    });
    bookingState.currentStep = stepIndex;
    // Show/hide back button
    const modalBackBtn = document.getElementById('modalBackBtn');
    if (modalBackBtn) {
        modalBackBtn.style.display = (stepIndex === 0) ? 'none' : '';
    }
    // Set modal step title
    const modalStepTitle = document.getElementById('modalStepTitle');
    if (modalStepTitle) {
        let title = '';
        switch (stepIndex) {
            case 0:
                title = 'Choose a location';
                break;
            case 1:
                title = 'Choose a professional';
                break;
            case 2:
                title = 'Choose a service';
                break;
            case 3:
                title = 'Your order';
                break;
            case 4:
                title = 'Choose a time';
                break;
            case 5:
                title = 'Your order';
                break;
            default:
                title = '';
        }
        modalStepTitle.textContent = title;
    }
    // Hide all sticky bars by default
    document.getElementById('viewOrderBar').style.display = 'none';
    document.getElementById('chooseTimeBar').style.display = 'none';
    document.getElementById('finalContinueBar').style.display = 'none';
    // Show the appropriate bar for the current step
    if (stepIndex === 3) { // order summary step (1)
        const chooseTimeBar = document.getElementById('chooseTimeBar');
        chooseTimeBar.innerHTML = 'Choose a time';
        chooseTimeBar.style.display = 'flex';
        chooseTimeBar.onclick = function() {
            showStep(4); // Go to time step
        };
    } else if (stepIndex === 4) { // time selection step
        const viewOrderBar = document.getElementById('viewOrderBar');
        viewOrderBar.style.display = 'flex';
        viewOrderBar.innerHTML = `<div class="view-order-link" style="width:100%;text-align:center;font-weight:700;cursor:pointer;">View order</div>`;
        // Attach click handler to go to final order summary
        const viewOrderLink = viewOrderBar.querySelector('.view-order-link');
        if (viewOrderLink) {
            viewOrderLink.onclick = function() {
                showStep(5); // Go to final order summary
                renderFinalOrderSummary();
            };
        }
    } else if (stepIndex === 5) { // final order summary step (2)
        renderFinalOrderSummary();
        const finalContinueBar = document.getElementById('finalContinueBar');
        finalContinueBar.style.display = 'flex';
        finalContinueBar.innerHTML = `
            <button id="finalContinueBtn">Continue</button>
        `;
        const finalContinueBtn = document.getElementById('finalContinueBtn');
        if (finalContinueBtn) {
            finalContinueBtn.onclick = function() {
                document.getElementById('bookingModal').style.display = 'none';
                alert('Booking confirmed!');
            };
        }
    }
    // Show/hide order next button
    const orderNextBtn = document.getElementById('orderNextBtn');
    if (orderNextBtn) {
        orderNextBtn.style.display = (stepIndex === 3) ? 'block' : 'none';
    }
    // Render service selection UI every time the service step is shown
    if (typeof renderServiceSelection === 'function' && stepIndex === 2) {
        renderServiceSelection();
    }
    // Render order summary every time the order summary step is shown
    if (typeof renderOrderSummary === 'function' && stepIndex === 3) {
        renderOrderSummary();
    }
    // Initialize date picker and time slots on time step
    if (stepIndex === 4 && typeof initializeDatePicker === 'function') {
        if (!bookingState.selectedDate) {
            const today = new Date();
            bookingState.selectedDate = today.toISOString().split('T')[0];
        }
        initializeDatePicker();
    }
    // Render location list and setup tabs on location step
    if (stepIndex === 0) {
        renderModalLocationList('nearby');
        setupLocationTabs();
    }
}

// 4. Only allow proceeding from location step if a location is selected
function enableNextStep() {
    const currentStep = bookingState.currentStep;
    let canProceed = false;
    switch (currentStep) {
        case 0: // Location selection
            canProceed = bookingState.selectedLocation !== null;
            break;
        case 1: // Professional selection
            canProceed = bookingState.selectedProfessional !== null;
            break;
        case 2: // Service selection
            canProceed = bookingState.selectedServices && bookingState.selectedServices.length > 0;
            break;
        case 3: // Order summary
            canProceed = true;
            break;
        case 4: // Time selection
            canProceed = bookingState.selectedDate !== null && bookingState.selectedTime !== null;
            break;
        case 5: // Final order summary
            canProceed = true;
            break;
    }
    // You can enable/disable next step button here if you add one
}

function updateBookingTotal() {
    if (bookingTotal) {
    bookingTotal.textContent = `$${bookingState.total}`;
    }
}

// Date and Time Picker Functions
function initializeDatePicker() {
    const datePickerRow = document.getElementById('datePickerRow');
    const selectedDateLabel = document.getElementById('selectedDateLabel');
    const timeSlots = document.getElementById('timeSlots');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const today = new Date();
    // Generate next 7 days for horizontal picker
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date);
    }
    // Set current month and year
    if (currentMonthYear) {
        currentMonthYear.textContent = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
    // Render horizontal date picker row
    const arrowBtnHtml = `<button id="calendarArrowBtn" class="calendar-arrow-btn" aria-label="Open calendar" tabindex="0"></button>`;
    datePickerRow.innerHTML = dates.map(date => {
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayNumber = date.getDate();
        const iso = date.toISOString().split('T')[0];
        const isSelected = (iso === bookingState.selectedDate);
        return `
            <button class="date-btn${isSelected ? ' selected' : ''}" data-date="${iso}">
                <span class="day-number">${dayNumber}</span>
                <span class="day-name">${dayName}</span>
            </button>
        `;
    }).join('') + arrowBtnHtml;
    // Add event listeners to date buttons
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            const selectedDate = this.dataset.date;
            renderTimeSlots(selectedDate);
            renderSelectedDateLabel(selectedDate);
        });
    });
    // Setup arrow button
    setupCalendarArrowBtn(today.toISOString().split('T')[0]);
    // Show today's date label and time slots by default
    const todayIso = dates[0].toISOString().split('T')[0];
    renderSelectedDateLabel(todayIso);
    renderTimeSlots(todayIso);
}

function renderSelectedDateLabel(dateIso) {
    const selectedDateLabel = document.getElementById('selectedDateLabel');
    if (!selectedDateLabel) return;
    const date = new Date(dateIso);
    const label = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    selectedDateLabel.textContent = label;
}

function renderTimeSlots(dateIso) {
    const timeSlots = document.getElementById('timeSlots');
    if (!timeSlots) return;
    const slots = [];
    // Generate time slots from 9 AM to 4 PM, every 15 minutes
    for (let hour = 9; hour <= 15; hour++) {
        for (let minute of [0, 15, 30, 45]) {
            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            const time12 = new Date(`2000-01-01T${time}:00`).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).replace(' ', '').toLowerCase();
            slots.push(`
                <button class="time-slot" data-time="${time}">
                    <i class="fas fa-sun"></i>
                    ${time12}
                </button>
            `);
        }
    }
    timeSlots.innerHTML = slots.join('');
    // Add event listeners to time slots
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', function() {
            // If this slot is already selected, unselect it
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                bookingState.selectedTime = null;
                // Change text back to "View order"
                const viewOrderBar = document.getElementById('viewOrderBar');
                if (viewOrderBar) {
                    viewOrderBar.innerHTML = `<div class="view-order-link" style="width:100%;text-align:center;font-weight:700;cursor:pointer;">View order</div>`;
                    // Remove the click handler for checkout
                    viewOrderBar.onclick = null;
                }
            } else {
                // Select this slot
                document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                this.classList.add('selected');
                bookingState.selectedTime = this.dataset.time;
                // Change text to "Go to checkout"
                const viewOrderBar = document.getElementById('viewOrderBar');
                if (viewOrderBar) {
                    viewOrderBar.innerHTML = `<div class="checkout-link" style="width:100%;text-align:center;font-weight:700;cursor:pointer;">Go to checkout</div>`;
                    // Add click handler to go to order page 2
                    viewOrderBar.onclick = function() {
                        showStep(5); // Go to final order summary
                        renderFinalOrderSummary();
                    };
                }
            }
            enableNextStep();
        });
    });
}

function completeBooking() {
    // Here you would typically send the booking data to your backend
    const bookingData = {
        services: bookingState.selectedServices,
        location: bookingState.selectedLocation,
        professional: bookingState.selectedProfessional,
        date: bookingState.selectedDate,
        time: bookingState.selectedTime,
        total: bookingState.total
    };
    
    console.log('Booking completed:', bookingData);
    
    // Show success message
    alert('Booking completed successfully! We\'ll send you a confirmation email shortly.');
    
    closeBookingModal();
}

// Add event listener for 'Choose a time' button in order summary step
function setupOrderNextBtn() {
    const orderNextBtn = document.getElementById('orderNextBtn');
    if (orderNextBtn) {
        orderNextBtn.onclick = function() {
            showStep(4); // Go to time step
        };
    }
}

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const optimizedScrollHandler = debounce(function() {
    // Handle scroll events efficiently
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Service Worker for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 

// Calendar dropdown logic
function renderCalendarDropdown(selectedDateIso) {
    const calendarDropdown = document.getElementById('calendarDropdown');
    if (!calendarDropdown) return;
    // Use selectedDateIso to set the calendar's month and year
    let year, month;
    if (selectedDateIso) {
        const selectedDate = new Date(selectedDateIso);
        year = selectedDate.getFullYear();
        month = selectedDate.getMonth();
    } else if (calendarDropdown.dataset.year && calendarDropdown.dataset.month) {
        year = parseInt(calendarDropdown.dataset.year, 10);
        month = parseInt(calendarDropdown.dataset.month, 10);
    } else {
        const today = new Date();
        year = today.getFullYear();
        month = today.getMonth();
    }
    // Store the currently displayed year and month as data attributes
    calendarDropdown.dataset.year = year;
    calendarDropdown.dataset.month = month;
    // First day of month
    const firstDay = new Date(year, month, 1);
    // Last day of month
    const lastDay = new Date(year, month + 1, 0);
    // Days of week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Header
    let html = `<div class='calendar-header'>
        <button id='calendarPrevMonth'>&lt;</button>
        <span style='font-weight:600;'>${firstDay.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        <button id='calendarNextMonth'>&gt;</button>
    </div>`;
    // Days of week row
    html += `<div class='calendar-grid'>`;
    for (let d = 0; d < 7; d++) {
        html += `<div class='calendar-day'>${daysOfWeek[d]}</div>`;
    }
    // Dates grid
    const startDay = firstDay.getDay();
    let day = 1;
    let printed = 0;
    for (let i = 0; i < 6; i++) { // up to 6 weeks
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startDay) {
                html += `<div class='calendar-date disabled'></div>`;
            } else if (day > lastDay.getDate()) {
                html += `<div class='calendar-date disabled'></div>`;
            } else {
                const dateObj = new Date(year, month, day);
                const iso = dateObj.toISOString().split('T')[0];
                const isToday = (new Date().toDateString() === dateObj.toDateString());
                const isSelected = (selectedDateIso === iso);
                html += `<div class='calendar-date${isSelected ? ' selected' : ''}${isToday ? ' today' : ''}' data-date='${iso}'>${day}</div>`;
                day++;
            }
            printed++;
        }
    }
    html += `</div>`;
    calendarDropdown.innerHTML = html;
    // Attach event handlers for prev/next month buttons immediately after rendering
    const prevBtn = document.getElementById('calendarPrevMonth');
    const nextBtn = document.getElementById('calendarNextMonth');
    // Use the currently displayed year and month from data attributes
    const currentYear = parseInt(calendarDropdown.dataset.year, 10);
    const currentMonth = parseInt(calendarDropdown.dataset.month, 10);
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            console.log('Prev month clicked');
            const prevMonth = new Date(currentYear, currentMonth - 1, 1);
            calendarDropdown.dataset.year = prevMonth.getFullYear();
            calendarDropdown.dataset.month = prevMonth.getMonth();
            renderCalendarDropdown(null);
        };
    }
    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.stopPropagation();
            console.log('Next month clicked');
            const nextMonth = new Date(currentYear, currentMonth + 1, 1);
            calendarDropdown.dataset.year = nextMonth.getFullYear();
            calendarDropdown.dataset.month = nextMonth.getMonth();
            renderCalendarDropdown(null);
        };
    }
    // Date selection
    calendarDropdown.querySelectorAll('.calendar-date').forEach(dateEl => {
        if (!dateEl.classList.contains('disabled')) {
            dateEl.onclick = function(e) {
                e.stopPropagation();
                const iso = this.getAttribute('data-date');
                // Set the selected date globally
                bookingState.selectedDate = iso;
                // Update horizontal picker and time slots
                updateHorizontalPickerAndTime(iso);
                calendarDropdown.style.display = 'none';
            };
        }
    });
}

function updateHorizontalPickerAndTime(selectedDateIso) {
    // Update horizontal picker to show the week of the selected date
    const datePickerRow = document.getElementById('datePickerRow');
    const selectedDateLabel = document.getElementById('selectedDateLabel');
    if (!datePickerRow) return;
    const selectedDate = new Date(selectedDateIso);
    // Find the Sunday before (or the selected day if it's Sunday)
    const weekStart = new Date(selectedDate);
    weekStart.setDate(selectedDate.getDate() - selectedDate.getDay());
    // Build 7 days for the week
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(weekStart);
        d.setDate(weekStart.getDate() + i);
        dates.push(d);
    }
    // Re-render horizontal picker
    // Remove the arrow button before re-rendering
    // (No need to remove, since we generate it directly)
    const arrowBtnHtml = `<button id="calendarArrowBtn" class="calendar-arrow-btn" aria-label="Open calendar" tabindex="0"></button>`;
    datePickerRow.innerHTML = dates.map(date => {
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayNumber = date.getDate();
        const iso = date.toISOString().split('T')[0];
        // Only highlight if the selected date is in this week
        const isSelected = (iso === bookingState.selectedDate);
        return `
            <button class="date-btn${isSelected ? ' selected' : ''}" data-date="${iso}">
                <span class="day-number">${dayNumber}</span>
                <span class="day-name">${dayName}</span>
            </button>
        `;
    }).join('') + arrowBtnHtml;
    // Re-attach event listeners
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            const selectedDate = this.dataset.date;
            bookingState.selectedDate = selectedDate;
            renderTimeSlots(selectedDate);
            renderSelectedDateLabel(selectedDate);
        });
    });
    // Re-attach arrow button event
    setupCalendarArrowBtn(selectedDateIso);
    // Always update the label below the picker to show the selected date
    renderSelectedDateLabel(bookingState.selectedDate);
    renderTimeSlots(bookingState.selectedDate);
}

function setupCalendarArrowBtn(selectedDateIso) {
    const arrowBtn = document.getElementById('calendarArrowBtn');
    const calendarDropdown = document.getElementById('calendarDropdown');
    if (arrowBtn && calendarDropdown) {
        arrowBtn.onclick = function(e) {
            e.stopPropagation();
            calendarDropdown.style.display = (calendarDropdown.style.display === 'block') ? 'none' : 'block';
            if (calendarDropdown.style.display === 'block') {
                renderCalendarDropdown(selectedDateIso);
            }
        };
    }
    // Hide calendar when clicking outside
    document.addEventListener('click', function hideCalendar(e) {
        if (calendarDropdown.style.display === 'block' && !calendarDropdown.contains(e.target) && e.target !== arrowBtn) {
            calendarDropdown.style.display = 'none';
            document.removeEventListener('click', hideCalendar);
        }
    });
} 
