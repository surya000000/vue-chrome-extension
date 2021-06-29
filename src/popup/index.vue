<template>
  <NewUser />
</template>

<script>
import NewUser from '@/views/user/new';

export default {
  name: 'App',
  components: { NewUser },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
