// Get Input Element
let filterInput = document.getElementById('filterInput');

// Add Event Listener to Input
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //Get Value of Input
    let filterValue = document
        .getElementById('filterInput')
        .value.toUpperCase();

    // Get Names UL
    let ul = document.getElementById('names');

    // Get LIs from UL
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection item LIs
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        // If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
