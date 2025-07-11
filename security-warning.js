// security-warning.js
document.addEventListener('DOMContentLoaded', function() {
    // Create the warning modal elements
    const warningModal = document.createElement('div');
    warningModal.id = 'security-warning-modal';
    warningModal.style.display = 'none';
    warningModal.style.position = 'fixed';
    warningModal.style.top = '0';
    warningModal.style.left = '0';
    warningModal.style.width = '100%';
    warningModal.style.height = '100%';
    warningModal.style.backgroundColor = 'rgba(0,0,0,0.7)';
    warningModal.style.zIndex = '1000';
    warningModal.style.justifyContent = 'center';
    warningModal.style.alignItems = 'center';
    warningModal.style.flexDirection = 'column';
    warningModal.style.color = 'white';
    warningModal.style.fontFamily = 'Arial, sans-serif';
    warningModal.style.cursor = 'pointer';
    
    const warningContent = document.createElement('div');
    warningContent.style.backgroundColor = 'green';
    warningContent.style.padding = '20px';
    warningContent.style.borderRadius = '5px';
    warningContent.style.maxWidth = '80%';
    warningContent.style.textAlign = 'center';
    
    const warningTitle = document.createElement('h2');
    warningTitle.textContent = 'Security Warning';
    warningTitle.style.marginTop = '0';
    
    const warningMessage = document.createElement('p');
    warningMessage.textContent = ' This action may compromise your security. We detected potential risks associated with this operation. Please contact Ryan Mill';
    
    const warningClose = document.createElement('button');

    
    // Assemble the modal
    warningContent.appendChild(warningTitle);
    warningContent.appendChild(warningMessage);
    warningContent.appendChild(warningClose);
    warningModal.appendChild(warningContent);
    document.body.appendChild(warningModal);
    
    // Show the modal when clicking anywhere
    document.addEventListener('click', function(e) {
        // Don't show if clicking on the modal itself (except the close button)
        if (e.target !== warningClose && warningModal.contains(e.target)) {
            return;
        }
        
        warningModal.style.display = 'flex';
    });
    
    // Close the modal
    warningClose.addEventListener('click', function() {
        warningModal.style.display = 'none';
    });
    
    // Also allow closing by clicking outside the content
    warningModal.addEventListener('click', function(e) {
        if (e.target === warningModal) {
            warningModal.style.display = 'none';
        }
    });
});