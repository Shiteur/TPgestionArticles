<script>
import { market, supprimerArticle, ajouterAuPanier } from '../article/articles'
import BarreRecherche from '../components/BarreRecherche.vue'
import ListeArticles from '../components/ListeArticles.vue'

export default {
  name: 'Articles',
  components: { BarreRecherche, ListeArticles },
  data() {
    return {
      market,
      recherche: '',
      categorieChoisie: ''
    }
  },
  computed: {
    categories() {
      const set = new Set(this.market.articles.map(a => a.categorie))
      return Array.from(set)
    },
    articlesFiltres() {
      return this.market.articles.filter(a => {
        const correspondTexte = a.titre
          .toLowerCase()
          .includes(this.recherche.toLowerCase())
        const correspondCategorie =
          !this.categorieChoisie || a.categorie === this.categorieChoisie
        return correspondTexte && correspondCategorie
      })
    }
  },
  methods: {
    surRecherche(texte) {
      this.recherche = texte
    },
    surSuppression(id) {
      supprimerArticle(id)
    },
    surAjoutPanier(article) {
      ajouterAuPanier(article)
    }
  }
}
</script>

<template>
  <section>
    <h1>Tous les articles</h1>

    <div class="barre-filtres">
      <BarreRecherche placeholder="Rechercher par titre..." @recherche="surRecherche" />

      <select v-model="categorieChoisie" class="select-categorie">
        <option value="">Toutes les catégories</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <ListeArticles
      :articles="articlesFiltres"
      :par-page="3"
      :peut-supprimer="false"
      @supprimer="surSuppression"
      @ajouter-panier="surAjoutPanier"
    />
  </section>
</template>
