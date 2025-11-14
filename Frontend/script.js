        const searchBox = document.querySelector('.search-box');
        const categoryCards = document.querySelectorAll('.category-card');

        searchBox.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            categoryCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const keywords = card.getAttribute('data-keywords') || '';
                
                if (title.includes(searchTerm) || 
                    description.includes(searchTerm) || 
                    keywords.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Category card click
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.querySelector('h3').textContent;
                alert(`Starting ${category} quiz...`);
            });
        });

        // Modal functions
        function openLogin() {
            document.getElementById('authModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('authModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function switchToSignup() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('signupForm').style.display = 'block';
        }

        function switchToLogin() {
            document.getElementById('signupForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Close modal on outside click
        document.getElementById('authModal').addEventListener('click', (e) => {
            if (e.target.id === 'authModal') {
                closeModal();
            }
        });