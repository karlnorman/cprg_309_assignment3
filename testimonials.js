// Testimonials Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter testimonials by category
    const filterButtons = document.querySelectorAll('.filter-button');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Get filter category
          const filterCategory = this.getAttribute('data-filter');
          
          // Show/hide testimonials based on category
          testimonialCards.forEach(card => {
            if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }
    
    // Testimonial card hover effects
    if (testimonialCards.length > 0) {
      testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-10px)';
          card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
          card.style.boxShadow = '';
        });
      });
    }
    
    // Pagination functionality
    const paginationButtons = document.querySelectorAll('.pagination-button');
    
    if (paginationButtons.length > 0) {
      paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
          if (this.classList.contains('next')) {
            // Next page logic would go here in a real implementation
            return;
          }
          
          // Remove active class from all buttons
          paginationButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // In a real implementation, this would update the testimonials displayed
          // For this demo, we're just showing the click functionality
        });
      });
    }
    
    // Review form button
    const reviewButton = document.querySelector('.review-cta .cta-button');
    
    if (reviewButton) {
      reviewButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // This would be replaced with actual review form functionality
        alert('You would now be redirected to the review submission form in a real implementation.');
      });
    }
  });