<template>
  <div class="dialog" v-if="show === true" @click.stop="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin.js'
  export default {
    name: 'my-dialog',
    mixins: [toggleMixin],
    props: {
      show: {
        type: Boolean,
        required: false
      }
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false);
      }
    }
  }
</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 2;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 15px;
}
</style>