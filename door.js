(function() {
    console.log("🔥 Slither.io Hack Activé !");

    // Vérifie si le jeu est chargé
    function waitForSnake() {
        if (window.snake) {
            console.log("🐍 Serpent détecté !");
            window.snake.sc = 17777; // Définit ta taille à 5000 (change la valeur si besoin)
        } else {
            console.log("⏳ En attente du serpent...");
            setTimeout(waitForSnake, 1000);
        }
    }

    waitForSnake(); // Démarre la vérification
})();
