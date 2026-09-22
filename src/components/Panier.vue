<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.articles.reduce((acc, article) => acc + article.prix, 0);
    }
  },
  methods:{
    retirerArticle(id) {
      this.$emit('retirer-article', id);
    }
  }
}
</script>

<template>
  <div>
    <p v-if="articles.length === 0" class="info">Votre panier est vide. Ajoutez des articles depuis la page
      <router-link to="/articles">Articles</router-link>.
    </p>

    <ul v-else class="liste-panier">
      <li v-for="article in articles" :key="article.id" class="ligne-panier">
        <span>{{ article.image }} {{ article.titre }}</span>
        <span>{{ article.prix.toFixed(2) }} €</span>
        <button class="btn" @click="retirerArticle(article.id)">
          Retirer
        </button>
      </li>
    </ul>

    <p v-if="articles.length > 0" class="total">
      Total : <strong>{{ total }} €</strong>
    </p>
  </div>
</template>
