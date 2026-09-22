<script setup>
import { market, retirerDuPanier } from '../article/articles'
import Panier from '../components/Panier.vue'

function surRetrait(id) {
  retirerDuPanier(id)
}
</script>

<template>
  <section>
    <h1>Mon panier</h1>
    <Panier :articles="market.panier" @retirer-article="surRetrait" />
  </section>
</template>
