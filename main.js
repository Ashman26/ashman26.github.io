/**
 * Lloyd Ashman Portfolio - Main JavaScript
 * Handles interactive features, navigation, and content rendering
 */

// ========================================
// INITIALIZATION & DOM SETUP
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Update year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Initialize navigation
  initializeNavigation();

  // Initialize projects
  renderProjects();
  initializeProjectFilters();

  // Update configuration
  updateConfiguration();

  // Add scroll event listeners
  setupSmoothScrolling();
});

// ========================================
// NAVIGATION
// ========================================

function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu on scroll
  window.addEventListener('scroll', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });

  // Update active nav on scroll
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 80; // Account for navbar
    const targetPosition = section.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  return false;
}

// ========================================
// CONFIGURATION
// ========================================

function updateConfiguration() {
  // Update contact links with real values from config.js
  if (typeof siteConfig !== 'undefined') {
    // Email links
    const emailLinks = [
      document.getElementById('contactEmail'),
      document.getElementById('footerEmail')
    ];
    emailLinks.forEach(link => {
      if (link && siteConfig.email) {
        link.href = `mailto:${siteConfig.email}`;
      }
    });

    // LinkedIn links
    const linkedInLinks = [
      document.getElementById('contactLinkedIn'),
      document.getElementById('footerLinkedIn')
    ];
    linkedInLinks.forEach(link => {
      if (link && siteConfig.linkedin) {
        link.href = siteConfig.linkedin;
      }
    });

    // GitHub links
    const gitHubLinks = [
      document.getElementById('contactGitHub'),
      document.getElementById('footerGitHub')
    ];
    gitHubLinks.forEach(link => {
      if (link && siteConfig.github) {
        link.href = siteConfig.github;
      }
    });

    // Update page title and meta if on page load
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
  }
}

// ========================================
// PROJECTS
// ========================================

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid || typeof projectsData === 'undefined') return;

  projectsGrid.innerHTML = '';

  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-technologies', JSON.stringify(project.technologies));

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-body">
        <span class="project-type">${project.type}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
      </div>
    `;

    projectCard.addEventListener('click', () => {
      openProjectModal(project);
    });

    projectsGrid.appendChild(projectCard);
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');

  let artifactsHTML = '';
  if (project.artifacts && project.artifacts.length > 0) {
    artifactsHTML = `
      <div class="modal-section">
        <h3>Key Artifacts</h3>
        <ul>
          ${project.artifacts.map(artifact => `<li>${artifact}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  let demonstratesHTML = '';
  if (project.demonstrates && project.demonstrates.length > 0) {
    demonstratesHTML = `
      <div class="modal-section">
        <h3>Technical Capabilities Demonstrated</h3>
        <ul>
          ${project.demonstrates.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <span class="modal-type">${project.type}</span>
    <h2 class="modal-title">${project.title}</h2>
    
    <div class="modal-section">
      <h3>Overview</h3>
      <p>${project.description}</p>
    </div>
    
    <div class="modal-section">
      <h3>Business Challenge</h3>
      <p>${project.businessProblem}</p>
    </div>
    
    <div class="modal-section">
      <h3>Data Approach</h3>
      <p>${project.dataApproach}</p>
    </div>
    
    <div class="modal-section">
      <h3>Technical Approach</h3>
      <p>${project.technicalApproach}</p>
    </div>
    
    <div class="modal-section">
      <h3>Outcome</h3>
      <p>${project.outcome}</p>
    </div>
    
    ${demonstratesHTML}
    ${artifactsHTML}
    
    <div class="modal-section">
      <h3>Technologies</h3>
      <div class="modal-tech">
        ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
      </div>
    </div>
    
    <div class="modal-section">
      <p style="font-size: 0.9rem; color: var(--text-tertiary);">${project.notes}</p>
    </div>
  `;

  modal.classList.add('active');

  // Close modal on X click
  const closeBtn = document.getElementById('modalClose');
  closeBtn.addEventListener('click', closeProjectModal);

  // Close modal on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', handleEscapeKey);
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
}

// ========================================
// PROJECT FILTERING
// ========================================

function initializeProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects
      const filter = btn.getAttribute('data-filter');
      filterProjects(filter);
    });
  });
}

function filterProjects(filter) {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const technologies = JSON.parse(card.getAttribute('data-technologies') || '[]');

    if (filter === 'all') {
      card.classList.remove('hidden');
    } else if (technologies.includes(filter)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ========================================
// SMOOTH SCROLLING
// ========================================

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ========================================
// ACCESSIBILITY
// ========================================

// Ensure all interactive elements are keyboard accessible
document.addEventListener('keydown', (e) => {
  // Close modal on Escape
  if (e.key === 'Escape') {
    const modal = document.getElementById('projectModal');
    if (modal.classList.contains('active')) {
      closeProjectModal();
    }
  }
});

// Focus visible styles for keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});
