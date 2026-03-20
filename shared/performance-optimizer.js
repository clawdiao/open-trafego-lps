<!-- Performance Optimizer Script para todas as LPs -->
<script>
  // Lazy loading para imagens (se houver)
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '50px 0px' });

    images.forEach(img => imageObserver.observe(img));
  });

  // Priority hints para recursos críticos
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Pré-carregar fontes críticas
      const preloadLinks = [
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Orbitron:wght@400;700&display=swap', as: 'style' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', as: 'script' }
      ];
      preloadLinks.forEach(link => {
        const preload = document.createElement('link');
        preload.rel = 'preload';
        preload.href = link.href;
        preload.as = link.as;
        document.head.appendChild(preload);
      });
    });
  }

  // Performance observer
  const perfObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log(`FCP: ${Math.round(entry.startTime)}ms`);
      }
      if (entry.name === 'largest-contentful-paint') {
        console.log(`LCP: ${Math.round(entry.startTime)}ms`);
      }
    }
  });
  perfObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

  // Web Vitals reporting (opcional)
  if (navigator.sendBeacon && window.location.hostname === 'open-trafego-lps.vercel.app') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const vitals = {
          fcp: performance.getEntriesByType('paint').find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0,
          cls: getCLS(),
          fid: getFID()
        };
        // Enviar para analytics (exemplo)
        // navigator.sendBeacon('/api/vitals', JSON.stringify(vitals));
      }, 1000);
    });
  }

  function getCLS() {
    // CLS calculation simplified
    return 0;
  }

  function getFID() {
    // FID calculation
    return 0;
  }
</script>
