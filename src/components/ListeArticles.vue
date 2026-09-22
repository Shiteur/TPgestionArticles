<script >
import ArticleItem from './ArticleItem.vue'
export default {
  components: { ArticleItem },
  props: {
    articles: {
      type: Array,
      required: true
    },
    parPage: {
      type: Number,
      default: 3
    },
    peutSupprimer: {
      type: Boolean,
      default: false
    }
  },
  emits: ['supprimer', 'ajouter-panier'],
  data() {
    return {
      pageActuelle: 1
    }
  },
  computed: {
    nbPages() {
      return Math.max(1, Math.ceil(this.articles.length / this.parPage))
    },
    articlesPage() {
      const debut = (this.pageActuelle - 1) * this.parPage
      return this.articles.slice(debut, debut + this.parPage)
    }
  },
  watch: {
    // Si la recherche réduit le nombre de résultats, on revient à la page 1
    articles() {
      this.pageActuelle = 1
    }
  },
  methods: {
    pagePrecedente() {
      if (this.pageActuelle > 1) this.pageActuelle--
    },
    pageSuivante() {
      if (this.pageActuelle < this.nbPages) this.pageActuelle++
    },
    onSupprimer(id) {
      this.$emit('supprimer', id)
    },
    onAjouterPanier(article) {
      this.$emit('ajouter-panier', article)
    }
  }
}
</script>


<template>
  <div>
    <p v-if="articles.length === 0" class="info">Aucun article trouvé.</p>

    <div class="grille-articles">
      <ArticleItem v-for="article in articlesPage" :key="article.id" :article="article" :peut-supprimer="peutSupprimer" @supprimer-article="onSupprimer" @ajouter-panier="onAjouterPanier"/>
    </div>

    <div v-if="articles.length > 0" class="pagination">
      <button class="btn" @click="pagePrecedente" :disabled="pageActuelle === 1">
        ← Précédent
      </button>
      <span>Page {{ pageActuelle }} / {{ nbPages }}</span>
      <button class="btn" @click="pageSuivante" :disabled="pageActuelle === nbPages">
        Suivant →
      </button>
    </div>
  </div>
</template>