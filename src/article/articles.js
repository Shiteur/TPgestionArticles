import { reactive } from 'vue'


// la list de article dispo (une base de donnée quoi)
export const market = reactive({
  articles: [
    {
      id: 1,
      titre: 'Casque audio sans fil',
      description: 'Casque bluetooth avec réduction de bruit active.',
      prix: 89.9,
      categorie: 'Électronique',
      image: '🎧'
    },
    {
      id: 2,
      titre: 'Sac à dos urbain',
      description: 'Sac résistant à l\'eau avec compartiment pour ordinateur portable.',
      prix: 49.5,
      categorie: 'Accessoires',
      image: '🎒'
    },
    {
      id: 3,
      titre: 'Roman "Les Étoiles Perdues"',
      description: 'Un roman de science-fiction primé, 320 pages.',
      prix: 14.9,
      categorie: 'Livres',
      image: '📖'
    },
    {
      id: 4,
      titre: 'Bouteille isotherme',
      description: 'Garde vos boissons chaudes ou froides pendant 12h.',
      prix: 19.9,
      categorie: 'Maison',
      image: '🧴'
    },
    {
      id: 5,
      titre: 'Clavier mécanique',
      description: 'Clavier rétroéclairé avec switches silencieux.',
      prix: 74.0,
      categorie: 'Électronique',
      image: '⌨️'
    }
  ],
  panier: [],
  isLoggedIn: false,
  nextId: 6
})

// authentification 
export function login() {
  market.isLoggedIn = true
}

export function logout() {
  market.isLoggedIn = false
}

// ajout d'un article au panier
export function ajouterAuPanier(article) {
  market.panier.push(article)
}

// retrait d'un article du panier
export function retirerDuPanier(id) {
  const index = market.panier.findIndex(article => article.id === id)
  if (index !== -1) {
    market.panier.splice(index, 1)
  }
}

export function ajouterArticle(article) {
    market.articles.push({
    id: market.nextId++,
    titre: article.titre,
    description: article.description,
    prix: parseFloat(article.prix) || 0,
    categorie: article.categorie || 'Divers',
    image: article.image || '🏷️'
  })
}

export function supprimerArticle(id) {
  market.articles = market.articles.filter(a => a.id !== id)
  market.panier = market.panier.filter(a => a.id !== id)
}

export function getArticleById(id) {
  return market.articles.find(a => a.id === Number(id))
}