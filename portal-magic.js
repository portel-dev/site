// Magical Portal UI - JavaScript Interactions
class PortalMagic {
    constructor() {
        this.portal = null;
        this.particles = [];
        this.isPortalActive = false;
        this.init();
    }

    init() {
        this.createPortalElements();
        this.setupEventListeners();
        this.startParticleSystem();
        this.createSparkles();
        this.animateCodeSnippets();
        this.startEnergyFlow();
    }

    createPortalElements() {
        this.portal = document.querySelector('.portal');
        if (!this.portal) return;

        // Create dynamic particles
        const particleContainer = document.querySelector('.portal-particles');
        for (let i = 0; i < 20; i++) {
            this.createParticle(particleContainer, i);
        }
    }

    createParticle(container, index) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = (Math.random() * 3) + 's';
        particle.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(particle);
    }

    setupEventListeners() {
        if (!this.portal) return;

        // Portal hover effects
        this.portal.addEventListener('mouseenter', () => {
            this.activatePortal();
        });

        this.portal.addEventListener('mouseleave', () => {
            this.deactivatePortal();
        });

        // Portal click effect
        this.portal.addEventListener('click', () => {
            this.triggerPortalMagic();
        });

        // Scroll-based animations
        window.addEventListener('scroll', () => {
            this.handleScrollAnimation();
        });
    }

    activatePortal() {
        this.isPortalActive = true;
        this.portal.classList.add('activated');
        this.intensifyParticles();
        this.pulseEnergyFlow();
    }

    deactivatePortal() {
        this.isPortalActive = false;
        this.portal.classList.remove('activated');
        this.normalizeParticles();
    }

    triggerPortalMagic() {
        // Create magical explosion effect
        this.createMagicalExplosion();
        
        // Transform elements through portal
        this.animateTransformation();
        
        // Show demo of NCP functionality
        setTimeout(() => {
            this.showNCPDemo();
        }, 1000);
    }

    createMagicalExplosion() {
        const portalCore = document.querySelector('.portal-core');
        if (!portalCore) return;

        // Create explosion particles
        for (let i = 0; i < 30; i++) {
            const explosionParticle = document.createElement('div');
            explosionParticle.className = 'explosion-particle';
            explosionParticle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: #4facfe;
                border-radius: 50%;
                pointer-events: none;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                animation: explode 2s ease-out forwards;
                animation-delay: ${Math.random() * 0.5}s;
                box-shadow: 0 0 10px #4facfe;
            `;
            
            portalCore.appendChild(explosionParticle);
            
            // Remove after animation
            setTimeout(() => {
                explosionParticle.remove();
            }, 2500);
        }

        // Add explosion keyframes if not exists
        if (!document.querySelector('#explosion-styles')) {
            const explosionStyles = document.createElement('style');
            explosionStyles.id = 'explosion-styles';
            explosionStyles.textContent = `
                @keyframes explode {
                    0% { 
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 1;
                    }
                    100% { 
                        transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(1);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(explosionStyles);
        }
    }

    animateTransformation() {
        const codeSnippets = document.querySelectorAll('.code-snippet');
        
        codeSnippets.forEach((snippet, index) => {
            setTimeout(() => {
                // Animate code flying toward portal
                snippet.style.transition = 'all 1s ease-in-out';
                snippet.style.transform = 'scale(0.5) translateX(300px)';
                snippet.style.opacity = '0.5';
                
                // Transform and return
                setTimeout(() => {
                    snippet.style.transform = 'scale(1) translateX(0)';
                    snippet.style.opacity = '1';
                    snippet.style.background = 'linear-gradient(45deg, #10b981, #4facfe)';
                    snippet.textContent = 'ncp → unified portal';
                }, 500);
            }, index * 200);
        });
    }

    showNCPDemo() {
        // Update tool count to show transformation
        const toolCount = document.querySelector('.tool-count');
        if (toolCount) {
            toolCount.style.transition = 'all 0.5s ease';
            toolCount.innerHTML = '<span style="text-decoration: line-through; opacity: 0.5;">50+ Tools</span> → <span style="color: #10b981;">1 NCP Portal</span>';
        }

        // Update efficiency stats
        const efficiencyStats = document.querySelector('.efficiency-stats');
        if (efficiencyStats) {
            efficiencyStats.innerHTML = '🎉 98% Token Reduction Achieved!';
            efficiencyStats.style.color = '#10b981';
            efficiencyStats.style.animation = 'pulse 1s ease-in-out 3';
        }
    }

    intensifyParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.animationDuration = '1s';
            particle.style.boxShadow = '0 0 15px #4facfe';
        });
    }

    normalizeParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.animationDuration = '3s';
            particle.style.boxShadow = '0 0 6px #4facfe';
        });
    }

    pulseEnergyFlow() {
        const energyFlow = document.querySelector('.energy-flow');
        if (energyFlow) {
            energyFlow.style.animationDuration = '0.5s';
            energyFlow.style.opacity = '1';
        }
    }

    createSparkles() {
        const sparkleContainer = document.querySelector('.portal-hero');
        if (!sparkleContainer) return;

        // Create random sparkles around the portal
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 4 + 's';
                
                sparkleContainer.appendChild(sparkle);
                
                // Remove sparkle after animation
                setTimeout(() => {
                    sparkle.remove();
                }, 4000);
            }, i * 300);
        }

        // Continuously create new sparkles
        setInterval(() => {
            if (sparkleContainer.querySelectorAll('.sparkle').length < 10) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkleContainer.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 4000);
            }
        }, 800);
    }

    animateCodeSnippets() {
        const snippets = document.querySelectorAll('.code-snippet');
        
        // Add realistic code content
        const codeExamples = [
            'const tools = loadMCP();',
            'await shell.execute();',
            'fs.readFile(path);',
            'git.commit();',
            'db.query(sql);',
            'api.request(url);'
        ];

        snippets.forEach((snippet, index) => {
            snippet.textContent = codeExamples[index] || 'code.example()';
            
            // Add random floating movement
            setInterval(() => {
                if (!this.isPortalActive) {
                    const randomX = (Math.random() - 0.5) * 20;
                    const randomY = (Math.random() - 0.5) * 20;
                    snippet.style.transform = `translate(${randomX}px, ${randomY}px)`;
                }
            }, 3000 + Math.random() * 2000);
        });
    }

    startEnergyFlow() {
        // Create dynamic energy pulses
        const energyFlow = document.querySelector('.energy-flow');
        if (!energyFlow) return;

        setInterval(() => {
            // Create energy pulse effect
            const pulse = document.createElement('div');
            pulse.style.cssText = `
                position: absolute;
                top: -2px;
                left: 0;
                width: 10px;
                height: 6px;
                background: radial-gradient(circle, #00f2fe, transparent);
                border-radius: 50%;
                animation: energy-travel 2s linear forwards;
                box-shadow: 0 0 15px #00f2fe;
            `;
            
            energyFlow.appendChild(pulse);
            
            setTimeout(() => pulse.remove(), 2000);
        }, 1000);

        // Add energy travel animation
        if (!document.querySelector('#energy-travel-styles')) {
            const styles = document.createElement('style');
            styles.id = 'energy-travel-styles';
            styles.textContent = `
                @keyframes energy-travel {
                    0% { left: 0; opacity: 0; transform: scale(0); }
                    10% { opacity: 1; transform: scale(1); }
                    90% { opacity: 1; }
                    100% { left: 100%; opacity: 0; transform: scale(0.5); }
                }
            `;
            document.head.appendChild(styles);
        }
    }

    startParticleSystem() {
        // Continuously regenerate particles for dynamic effect
        setInterval(() => {
            const particleContainer = document.querySelector('.portal-particles');
            if (particleContainer && particleContainer.children.length < 25) {
                this.createParticle(particleContainer, Date.now());
            }
        }, 500);
    }

    handleScrollAnimation() {
        const scrollY = window.scrollY;
        const portal = document.querySelector('.portal');
        
        if (portal) {
            // Subtle rotation based on scroll
            const rotation = scrollY * 0.1;
            portal.style.transform = `rotate(${rotation}deg)`;
        }

        // Parallax effect for worlds
        const leftWorld = document.querySelector('.world-left');
        const rightWorld = document.querySelector('.world-right');
        
        if (leftWorld) leftWorld.style.transform = `translateY(${scrollY * 0.1}px)`;
        if (rightWorld) rightWorld.style.transform = `translateY(${scrollY * -0.1}px)`;
    }
}

// Initialize portal magic when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortalMagic();
});

// Add window resize handler for responsive behavior
window.addEventListener('resize', () => {
    // Reinitialize particle positions on resize
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.left = Math.random() * 100 + '%';
    });
});