// Page navigation function
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Initialize JavaScript demo if it's the JavaScript page
    if (pageId === 'javascript-page') {
        setTimeout(initJSDemo, 0);
    }
}

// Initialize JavaScript demo
function initJSDemo() {
    const addBtn = document.getElementById('addBtn');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    
    function addItem() {
        if (itemInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.className = 'list-item';
            li.innerHTML = `
                ${itemInput.value}
                <button class="remove-btn">Remove</button>
            `;
            itemList.appendChild(li);
            itemInput.value = '';
            updateItemCount();
        }
    }
    
    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            e.target.parentElement.remove();
            updateItemCount();
        }
    });
    
    function updateItemCount() {
        const count = document.querySelectorAll('#itemList li').length;
        document.getElementById('itemCount').textContent = count;
    }
    
    addBtn.addEventListener('click', addItem);
    itemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
}

// Typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.querySelector('.typewriter');
    typewriter.classList.remove('typewriter');
    void typewriter.offsetWidth;
    typewriter.classList.add('typewriter');
});