<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const ogImageOptions = {
  title: 'My awesome home page.',
}
// a. Use the Composition API
defineOgImage(ogImageOptions)
</script>

<template>
  <div>
    <slot />

  </div>
  <OgImage v-bind="ogImageOptions" />
</template>
<style scoped ></style>