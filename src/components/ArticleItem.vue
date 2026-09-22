
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    },
    peutSupprimer: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    Supprimer() {
      if(confirm(`Voulez-vous vraiment supprimer l'article "${this.article.titre}" ?`)) {
        this.$emit('supprimer-article', this.article.id);
      }
    },
    Addpanier() {
      this.$emit('ajouter-panier', this.article);
    }
  }

}
</script>

<template>
  <div class="article">
    <div class="article_image">{{ article.image }}</div>
    <h3>{{ article.titre }}</h3>
    <p class="categorie">{{ article.categorie }}</p>
    <p class="description">{{ article.description }}</p>
    <p class="prix">{{ article.prix.toFixed(2) }} €</p>

    <div class="article_actions">
      <router-link :to="`/article/${article.id}`" class="btn">
        Détails
      </router-link>
      <button class="btn" @click="Addpanier">
        Ajouter au panier
      </button>
      <button v-if="peutSupprimer" class="btn" @click="Supprimer">
        Supprimer
      </button>
    </div>
  </div>
</template>