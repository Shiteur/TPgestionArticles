<script setup>
import { ref } from 'vue'
import { ajouterArticle } from '../article/articles'
import FormulaireArticle from '../components/FormulaireArticle.vue'

const messageConfirmation = ref('')

function surAjout(nouvelArticle) {
  ajouterArticle(nouvelArticle)
  messageConfirmation.value = `L'article "${nouvelArticle.titre}" a bien été ajouté !`

  setTimeout(() => {
    messageConfirmation.value = ''
  }, 3000)
}
</script>

<template>
  <section>
    <h1>Ajouter un nouvel article</h1>

    <p v-if="messageConfirmation" class="confirmation">
       {{ messageConfirmation }}
    </p>

    <FormulaireArticle @ajouter-article="surAjout" />
  </section>
</template>