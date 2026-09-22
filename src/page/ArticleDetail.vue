<script>
import { getArticleById, ajouterAuPanier } from '../store/articles'

export default {
  computed: {
    article() {
      return getArticleById(this.$route.params.id)
    }
  },
  methods: {
    surAjoutPanier() {
      if (this.article) {
        ajouterAuPanier(this.article)
      }
    },
    retour() {
      this.$router.back()
    }
  }
}
</script>

<template>
  <section>
    <button class="btn" @click="retour">← Retour</button>

    <div v-if="article" class="detail-article">
      <div class="detail-article_image">{{ article.image }}</div>
      <h1>{{ article.titre }}</h1>
      <p class="categorie">{{ article.categorie }}</p>
      <p>{{ article.description }}</p>
      <p class="prix">{{ article.prix.toFixed(2) }} €</p>
      <button class="btn" @click="surAjoutPanier">Ajouter au panier</button>
    </div>

    <p v-else class="info">Article introuvable (id : {{ $route.params.id }}).</p>
  </section>
</template>
