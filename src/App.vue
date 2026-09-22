<script>
import { market, logout } from './article/articles'

export default {
  name: 'App',
  data() {
    return {
      market
    }
  },
  computed: {
    nbPanier() {
      return this.market.panier.length
    }
  },
  methods: {
    seDeconnecter() {
      logout()
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div id="layout">
    <header class="navbar">
      <router-link to="/" class="brand">Market EFREI</router-link>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/ajouter">Ajouter</router-link>
        <router-link to="/panier">Panier ({{ nbPanier }})</router-link>
        <router-link to="/admin">Admin</router-link>
        <router-link v-if="!store.isLoggedIn" to="/login">Connexion</router-link>
        <button v-else class="btn-link" @click="seDeconnecter">Déconnexion</button>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>
