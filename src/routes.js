// Permet de charger le module express
const express = require('express')
// Crée un router pour les routes de l'API
const router = express.Router()

// Route pour vérifier si l'API est fonctionnelle
router.get('/health', (req, res) => {
    res.json({ status: 'ok' })
})

// Route pour retourner l'heure actuelle

router.get('/time', (req, res) => {

    res.json({ time: new Date().toISOString() })

})



// VULNÉRABILITÉ : Route XSS pour le TP DevSecOps

// On affiche un paramètre utilisateur sans aucun filtrage

router.get('/welcome', (req, res) => {

    const name = req.query.name || 'Visiteur'

    res.send(`<h1>Bienvenue, ${name}</h1>`)

})



// Exporte le router pour être utilisé dans l'application

module.exports = router
