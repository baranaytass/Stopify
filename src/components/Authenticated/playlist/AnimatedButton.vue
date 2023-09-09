<template>
  <a href="#" class="cta">
    <font-awesome-icon :icon="icon" style="font-size: 18px;" />
    <span>{{ text }}</span>
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    primaryColor: String,
    secondaryColor: String,
    icon: [Array, String]
  }
};
</script>

<style scoped lang="sass">
a
  text-decoration: none
  color: inherit

.cta
  position: relative
  margin: auto
  padding: 19px 20px
  transition: all .2s ease
  &:before
    content: ""
    position: absolute
    top: 10px
    left: 6px
    display: block
    border-radius: 28px
    background-color: v-bind(secondaryColor)
    width: 36px
    height: 36px
    transition: all 0.3s ease
  span
    position: relative
    font-size: 14px
    line-height: 18px
    font-weight: 900
    letter-spacing: .25em
    text-transform: uppercase
    vertical-align: middle
  svg
    top: 2px
    position: relative
    margin-right: 12px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    stroke: #111
    stroke-width: 2
    transform: translateX(-5px)
    transition: all 0.3s ease
  &:hover
    &:before
      width: 100%
      background-color: v-bind(primaryColor)
    svg
      transform: translateX(5px)
  &:active
    transform: scale(.96)
</style>

<!-- <style scoped lang="sass">
$color: #111
$primary: #FFAB9D

html, body
  height: 100%
  
body
  display: grid
  font-family: Avenir, sans-serif
  color: $color
  
a
  text-decoration: none
  color: inherit

.cta
  position: relative
  margin: auto
  padding: 19px 22px
  transition: all .2s ease
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    border-radius: 28px
    background: rgba($primary,.5)
    width: 56px
    height: 56px
    transition: all .3s ease
  span
    position: relative
    font-size: 16px
    line-height: 18px
    font-weight: 900
    letter-spacing: .25em
    text-transform: uppercase
    vertical-align: middle
  svg
    position: relative
    top: 0
    margin-left: 10px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    stroke: $color
    stroke-width: 2
    transform: translateX(-5px)
    transition: all .3s ease
  &:hover
    &:before
      width: 100%
      background: rgba($primary,1)
    svg
      transform: translateX(0)
  &:active
    transform: scale(.96)
    </style> -->