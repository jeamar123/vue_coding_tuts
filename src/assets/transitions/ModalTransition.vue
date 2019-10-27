<template>
  <transition name="modal">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  
}
</script>

<style>

.modal-enter-active,
.modal-leave-active {
  /* transition: opacity; */
-webkit-transition: all .2s cubic-bezier(0.780, 0.000, 0.305, 1.000); 
   -moz-transition: all .2s cubic-bezier(0.780, 0.000, 0.305, 1.000); 
     -o-transition: all .2s cubic-bezier(0.780, 0.000, 0.305, 1.000); 
        transition: all .2s cubic-bezier(0.780, 0.000, 0.305, 1.000); /* custom */

-webkit-transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); 
   -moz-transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); 
     -o-transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); 
        transition-timing-function: cubic-bezier(0.780, 0.000, 0.305, 1.000); /* custom */
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

</style>