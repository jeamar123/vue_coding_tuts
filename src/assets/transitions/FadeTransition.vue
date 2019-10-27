<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity; */
-webkit-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
   -moz-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
     -o-transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); 
        transition: all 200ms cubic-bezier(0.785, 0.135, 0.150, 0.860); /* easeInOutCirc */

-webkit-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
   -moz-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
     -o-transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); 
        transition-timing-function: cubic-bezier(0.785, 0.135, 0.150, 0.860); /* easeInOutCirc */
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
