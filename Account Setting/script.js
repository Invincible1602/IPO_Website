// Toggle edit mode for different sections
function toggleEdit(section) {
    const sectionElement = document.getElementById(`${section}-info`);
    const editBtn = sectionElement.parentElement.querySelector('.edit-btn');
    
    if (sectionElement.classList.contains('editing')) {
        // Save changes and exit edit mode
        saveChanges(section);
        sectionElement.classList.remove('editing');
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
    } else {
        // Enter edit mode
        enterEditMode(section);
        sectionElement.classList.add('editing');
        editBtn.innerHTML = '<i class="fas fa-save"></i> Save';
    }
}

function enterEditMode(section) {
    const sectionElement = document.getElementById(`${section}-info`);
    const infoItems = sectionElement.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        const valueElement = item.querySelector('.info-value');
        const currentValue = valueElement.textContent;
        const label = item.querySelector('label').textContent;
        
        // Create input field based on the type of data
        let inputElement;
        if (label.toLowerCase().includes('email')) {
            inputElement = document.createElement('input');
            inputElement.type = 'email';
        } else if (label.toLowerCase().includes('phone')) {
            inputElement = document.createElement('input');
            inputElement.type = 'tel';
        } else if (label.toLowerCase().includes('date')) {
            inputElement = document.createElement('input');
            inputElement.type = 'date';
            // Convert date format for input
            const dateValue = new Date(currentValue).toISOString().split('T')[0];
            inputElement.value = dateValue;
        } else {
            inputElement = document.createElement('input');
            inputElement.type = 'text';
        }
        
        inputElement.value = currentValue;
        inputElement.className = 'edit-input';
        inputElement.dataset.originalValue = currentValue;
        
        valueElement.style.display = 'none';
        item.appendChild(inputElement);
    });
}

function saveChanges(section) {
    const sectionElement = document.getElementById(`${section}-info`);
    const infoItems = sectionElement.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        const valueElement = item.querySelector('.info-value');
        const inputElement = item.querySelector('.edit-input');
        
        if (inputElement) {
            let newValue = inputElement.value;
            
            // Format date if it's a date input
            if (inputElement.type === 'date') {
                const date = new Date(newValue);
                newValue = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
            
            valueElement.textContent = newValue;
            valueElement.style.display = 'block';
            inputElement.remove();
            
            // Show success message
            showNotification('Changes saved successfully!', 'success');
        }
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '6px',
        color: 'white',
        fontSize: '14px',
        zIndex: '1000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    if (type === 'success') {
        notification.style.backgroundColor = '#28a745';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc3545';
    } else {
        notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for edit inputs
const style = document.createElement('style');
style.textContent = `
    .edit-input {
        background-color: #3a3a3a;
        border: 1px solid #4a4a4a;
        border-radius: 4px;
        padding: 8px 12px;
        color: #fff;
        font-size: 14px;
        width: 100%;
        margin-top: 4px;
    }
    
    .edit-input:focus {
        outline: none;
        border-color: #00bcd4;
    }
    
    .notification {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .info-grid.editing .info-item {
        margin-bottom: 16px;
    }
`;
document.head.appendChild(style);

// Add click handlers for sidebar navigation
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Add search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        // In a real application, this would filter content
        console.log('Searching for:', searchTerm);
    });
    
    // Add deactivate account confirmation
    const deactivateBtn = document.querySelector('.deactivate-btn');
    deactivateBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
            showNotification('Account deactivation process initiated.', 'error');
        }
    });
});