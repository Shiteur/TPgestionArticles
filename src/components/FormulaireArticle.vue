<script >
import { reactive } from 'vue'
export default {
  methods: {
    surSoumission() {
      this.$emit('ajouter-article', { ...this.form })
      this.form = reactive({
        titre: '',
        description: '',
        prix: 0,
        categorie: '',
        image: ''
      })
    }
  },
}


</script>

<template>
  <form class="formulaire" @submit.prevent="surSoumission">
    <label>
      Titre *
      <input v-model="form.titre" type="text" required />
    </label>

    <label>
      Description
      <textarea v-model="form.description" rows="3"></textarea>
    </label>

    <label>
      Prix (€) *
      <input v-model="form.prix" type="number" step="0.01" min="0" required />
    </label>

    <label>
      Catégorie
      <input v-model="form.categorie" type="text" placeholder="ex: Électronique" />
    </label>

    <label>
      Emoji / icône
      <input v-model="form.image" type="text" maxlength="2" />
    </label>

    <button type="submit" class="btn btn-primary">Ajouter l'article</button>
  </form>
</template>
