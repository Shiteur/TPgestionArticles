<script >
import { market, supprimerArticle } from '../article/articles'
import ListeArticles from '../components/ListeArticles.vue'

export default {
  components: { ListeArticles },
  data() {
    return {
      market
    }
  },
  methods: {
    surSuppression(id) {
      supprimerArticle(id)
    },
    ignorerAjoutPanier() {
      // Pas de panier depuis l'admin : on n'a rien à faire ici.
    }
  }
}
</script>

<template>
  <section>
    <h1>Administration des articles</h1>
    <p class="info">Vous êtes connecté. Vous pouvez supprimer n'importe quel article.</p>

    <ListeArticles
      :articles="market.articles"
      :par-page="5"
      :peut-supprimer="true"
      @supprimer="surSuppression"
      @ajouter-panier="ignorerAjoutPanier"
    />
  </section>
</template>
