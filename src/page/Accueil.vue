<script setup>
import { market } from '../article/articles'
</script>

<template>
  <section class="hero">
    <h1>Bienvenue sur Market EFREI</h1>
    <p>
      Un petit projet dans le cardre académique pour mettre en pratique les concepts vue en cours.
    </p>
    <p>{{ market.articles.length }} articles disponibles actuellement.</p>

    <div class="hero-actions">
      <router-link class="btn" to="/articles">Voir les articles</router-link>
      <router-link class="btn" to="/ajouter">Ajouter un article</router-link>
    </div>
  </section>
</template>
