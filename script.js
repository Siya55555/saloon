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

// Booking State
let bookingState = {
    currentStep: 0,
    selectedService: null,
    selectedLocation: null,
    selectedDate: null,
    selectedTime: null,
    total: 0
};

// DOM Elements
const modal = document.getElementById('bookingModal');
const modalClose = document.querySelector('.modal-close');
const bookNowBtn = document.getElementById('bookNowBtn');
const nextStepBtn = document.getElementById('nextStep');
const prevStepBtn = document.getElementById('prevStep');
const bookingTotal = document.getElementById('bookingTotal');
const locationsGrid = document.getElementById('locationsGrid');
const locationList = document.getElementById('locationList');
const modalLocationOptions = document.getElementById('modalLocationOptions');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLocations();
    initializeBookingModal();
    initializeEventListeners();
    initializeScrollEffects();
});

// Initialize Locations
function initializeLocations() {
    // Populate locations grid
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

    // Populate location dropdown
    locationList.innerHTML = locations.map(location => `
        <div class="location-item" data-location-id="${location.id}">
            <img src="${location.image}" alt="${location.name}" class="location-image">
            <div class="location-info">
                <h4>${location.name}</h4>
                <p>${location.address}</p>
            </div>
        </div>
    `).join('');

    // Populate modal location options
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

// Initialize Booking Modal
function initializeBookingModal() {
    const steps = document.querySelectorAll('.booking-step');
    const totalSteps = steps.length;

    // Service selection
    document.querySelectorAll('input[name="service"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const service = services.find(s => s.id === this.value);
                bookingState.selectedService = service;
                bookingState.total = service.price;
                updateBookingTotal();
                enableNextStep();
            }
        });
    });

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
    nextStepBtn.addEventListener('click', nextStep);
    prevStepBtn.addEventListener('click', prevStep);

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
        selectedService: null,
        selectedLocation: null,
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

function showStep(stepIndex) {
    const steps = document.querySelectorAll('.booking-step');
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
    });
    
    bookingState.currentStep = stepIndex;
    updateNavigationButtons();
}

function nextStep() {
    const currentStep = bookingState.currentStep;
    const steps = document.querySelectorAll('.booking-step');
    
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
        
        // Initialize date picker if moving to time step
        if (currentStep + 1 === 2) {
            initializeDatePicker();
        }
    } else {
        // Final step - complete booking
        completeBooking();
    }
}

function prevStep() {
    const currentStep = bookingState.currentStep;
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
}

function updateNavigationButtons() {
    const currentStep = bookingState.currentStep;
    const steps = document.querySelectorAll('.booking-step');
    
    prevStepBtn.style.display = currentStep === 0 ? 'none' : 'block';
    nextStepBtn.textContent = currentStep === steps.length - 1 ? 'Complete Booking' : 'Continue';
    
    // Enable/disable next button based on selections
    enableNextStep();
}

function enableNextStep() {
    const currentStep = bookingState.currentStep;
    let canProceed = false;
    
    switch (currentStep) {
        case 0: // Service selection
            canProceed = bookingState.selectedService !== null;
            break;
        case 1: // Location selection
            canProceed = bookingState.selectedLocation !== null;
            break;
        case 2: // Time selection
            canProceed = bookingState.selectedDate !== null && bookingState.selectedTime !== null;
            break;
    }
    
    nextStepBtn.disabled = !canProceed;
    nextStepBtn.style.opacity = canProceed ? '1' : '0.5';
}

function updateBookingTotal() {
    bookingTotal.textContent = `$${bookingState.total}`;
}

// Date and Time Picker Functions
function initializeDatePicker() {
    const dateGrid = document.getElementById('dateGrid');
    const currentMonth = document.querySelector('.current-month');
    const today = new Date();
    
    // Generate next 14 days
    const dates = [];
    for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date);
    }
    
    // Update month display
    const firstDate = dates[0];
    currentMonth.textContent = firstDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
    });
    
    // Generate date grid
    dateGrid.innerHTML = dates.map((date, index) => {
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayNumber = date.getDate();
        const isToday = index === 0;
        
        return `
            <button class="date-btn ${isToday ? 'today' : ''}" data-date="${date.toISOString().split('T')[0]}">
                <span class="day-number">${dayNumber}</span>
                <span class="day-name">${dayName}</span>
            </button>
        `;
    }).join('');
    
    // Add event listeners to date buttons
    document.querySelectorAll('.date-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            
            const selectedDate = this.dataset.date;
            bookingState.selectedDate = selectedDate;
            
            // Generate time slots for selected date
            generateTimeSlots();
            enableNextStep();
        });
    });
    
    // Auto-select today
    document.querySelector('.date-btn.today').click();
}

function generateTimeSlots() {
    const timeSlots = document.getElementById('timeSlots');
    const slots = [];
    
    // Generate time slots from 9 AM to 6 PM, every 15 minutes
    for (let hour = 9; hour <= 18; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            if (hour === 18 && minute > 0) break; // Stop at 6 PM
            
            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            const time12 = new Date(`2000-01-01T${time}:00`).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            
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
            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            
            bookingState.selectedTime = this.dataset.time;
            enableNextStep();
        });
    });
}

function completeBooking() {
    // Here you would typically send the booking data to your backend
    const bookingData = {
        service: bookingState.selectedService,
        location: bookingState.selectedLocation,
        date: bookingState.selectedDate,
        time: bookingState.selectedTime,
        total: bookingState.total
    };
    
    console.log('Booking completed:', bookingData);
    
    // Show success message
    alert('Booking completed successfully! We\'ll send you a confirmation email shortly.');
    
    closeBookingModal();
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