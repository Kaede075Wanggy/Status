# Status
Gabut
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tensura Status Window</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Status Window</h1>
        <form id="statusForm">
            <label for="name">Enter Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Masukkan Nama">
            <button type="submit">Generate Status</button>
        </form>

        <div id="statusWindow" class="status-window hidden">
            <h2 id="characterName">Character: </h2>
            <p><strong>Ras:</strong> <span id="race">-</span></p>
            <p><strong>Gelar (Title):</strong> <span id="title">-</span></p>
            <p><strong>Level:</strong> <span id="level">1</span></p>
            <p><strong>Status Skill:</strong> <span id="statusSkill">-</span></p>
            <p><strong>Skill Ultimate:</strong> <span id="ultimateSkill">-</span></p>
            <p><strong>Skill Unik:</strong> <span id="uniqueSkill">-</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
