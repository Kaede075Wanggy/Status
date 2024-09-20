document.getElementById('statusForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Ambil nama dari input
    const name = document.getElementById('name').value;
    
    // Jika nama diinput, tampilkan status window
    if (name.trim() !== '') {
        document.getElementById('characterName').innerText = `Character: ${name}`;
        
        // Menghasilkan stats acak
        const level = Math.floor(Math.random() * 100) + 1;
        const hp = Math.floor(Math.random() * 500) + 100;
        const mp = Math.floor(Math.random() * 300) + 50;
        const strength = Math.floor(Math.random() * 100) + 1;
        const agility = Math.floor(Math.random() * 100) + 1;
        const intelligence = Math.floor(Math.random() * 100) + 1;
        
        // Update status window dengan stats acak
        document.getElementById('level').innerText = level;
        document.getElementById('hp').innerText = hp;
        document.getElementById('mp').innerText = mp;
        document.getElementById('strength').innerText = strength;
        document.getElementById('agility').innerText = agility;
        document.getElementById('intelligence').innerText = intelligence;
        
        // Tampilkan status window
        document.getElementById('statusWindow').classList.remove('hidden');
    }
});
