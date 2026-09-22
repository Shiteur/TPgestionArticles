<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Rechercher...'
    }
  },
  methods: {
    surSaisie(event) {
      this.$emit('saisie', event.target.value);
    }
  }
}
</script>

<template>
  <input class="barre-recherche" type="text" :placeholder="placeholder" @input="surSaisie"/>
</template>