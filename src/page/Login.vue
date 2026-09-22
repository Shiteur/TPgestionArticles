<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '../article/articles'

const route = useRoute()
const router = useRouter()

const identifiant = ref('')
const motDePasse = ref('')

function surConnexion() {
  login()
  const destination = route.query.redirect || '/admin'
  router.push(destination)
}
</script>

<template>
  <section class="page-connexion">
    <h1>Connexion</h1>
    <p class="info">
      Prototype uniquement : n'importe quel identifiant/mot de passe vous connecte.
    </p>

    <form class="formulaire" @submit.prevent="surConnexion">
      <label>
        Identifiant
        <input v-model="identifiant" type="text" placeholder="admin" />
      </label>
      <label>
        Mot de passe
        <input v-model="motDePasse" type="password" placeholder="••••••" />
      </label>
      <button type="submit" class="btn">Se connecter</button>
    </form>
  </section>
</template>
