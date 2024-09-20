# Status
Gabut
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status Window</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Status Window</h1>
        <form id="statusForm">
            <label for="name">Enter Your Name:</label>
            <input type="text" id="name" name="name">
            <button type="submit">Generate Status</button>
        </form>

        <div id="statusWindow" class="status-window hidden">
            <h2 id="characterName">Character: </h2>
            <p><strong>Level:</strong> <span id="level">1</span></p>
            <p><strong>HP:</strong> <span id="hp">100</span></p>
            <p><strong>MP:</strong> <span id="mp">50</span></p>
            <p><strong>Strength:</strong> <span id="strength">10</span></p>
            <p><strong>Agility:</strong> <span id="agility">8</span></p>
            <p><strong>Intelligence:</strong> <span id="intelligence">12</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
