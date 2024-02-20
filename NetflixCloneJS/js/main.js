// Grab all tab items and all tab item content
// Tab item are going into a node list (similar to array)
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
// e --> event parameter
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => {item.classList.remove('tab-border')});
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Need event listener that is dependent on clicking on tabs 
tabItems.forEach(item => {item.addEventListener('click', selectItem)});

