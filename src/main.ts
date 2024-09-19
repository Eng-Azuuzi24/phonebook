
type contact={
    id:number;
    name:string;
    phone:string;

}

const contacts:contact[] = [];


contacts.push({id:1, name:'Azuzi',phone:'4656567'});
contacts.push({id:2, name:'Ai',phone:'46567'});




renderTable();

function add() {
    const nameInput = document.querySelector('#person-name') as HTMLInputElement;
    const name = nameInput.value;

    const phoneInput = document.querySelector('#phone-num') as HTMLInputElement;
    const phone = phoneInput.value;

    if (name.length < 2 || phone.length < 3) {
        alert("Name must be at least 2 characters and phone must be at least 3 digits.");
        return;
    }

    // Get the table and all rows
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tbody tr'); // Assuming phone number is in tbody rows

    // Check if phone number already exists
    for (const row of rows) {
        const phoneCell = row.querySelectorAll('td')[2]; // Assuming phone number is in the 3rd column (index 2)
        if (phoneCell && phoneCell.textContent === phone) {
            alert('This phone number already exists.');
            return;
        }
    }

    // Add the new contact if no duplicate is found
    contacts.push({
        id: contacts.length + 1,
        name: name,
        phone: phone,
    });

    renderTable(); // Re-render the table with the updated contacts
    nameInput.value = '';
    phoneInput.value = '';
}



function renderTable(){

    const tbodyElement=document.querySelector('tbody');
    tbodyElement.remove();

    const newTbodyElement=document.createElement('tbody');
    newTbodyElement.className='text-center';

    for (const contact of contacts) {

        const row=document.createElement('tr');
        
        const idColumn=document.createElement('td');
        idColumn.className='border border-gray-300 py-2';
        idColumn.textContent=contact.id.toString();
        
        const nameColumn=document.createElement('td');
        nameColumn.className='border border-gray-300 py-2';
        nameColumn.textContent=contact.name;
        
        const phoneColumn=document.createElement('td');
        phoneColumn.className='border border-gray-300 py-2';
        phoneColumn.textContent=contact.phone;
        
        row.appendChild(idColumn);
        row.appendChild(nameColumn);
        row.appendChild(phoneColumn);
        
        newTbodyElement.appendChild(row);
        
        }

        const tableElement=document.querySelector('table');
        tableElement.appendChild(newTbodyElement);
}



function search() {
    // Get the search input value
    const searchInput = document.querySelector('#search') as HTMLInputElement;
    const searchElement = searchInput.value.toLowerCase();

    // Get the table rows
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');

    // Loop through each row
    rows.forEach(row => {
        // Get the text content of the cell (assuming the name is in the second cell <td>)
        const nameCell = row.querySelectorAll('td')[1]; // Adjust the index if needed
        if (nameCell) {
            const nameText = nameCell.textContent.toLowerCase();

            // Check if the name starts with the search input
            if (nameText.startsWith(searchElement)) {
                row.style.display = '';  // Show row if it matches
            } else {
                row.style.display = 'none';  // Hide row if it doesn't match
            }
        }
    });
}



