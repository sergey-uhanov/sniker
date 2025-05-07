<script setup="">

</script>

<template>
     <section class="summertime">
       <h1 class="summertime__title">
         At the moment
         <span >SUMMERTIME MOOD</span>
         Fight the heat in a sunny look!
       </h1>
     </section>

</template>

<style lang="scss">
.summertime{
  padding: 83px 0 72px 0;
  position: relative;
  left: -4px;

  &__title{
    max-width: 918px;
    font-family: $font-family;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    margin: 0 auto;

    span{
      display: block;
      font-style: italic;
      font-weight: 900;
      font-size: 80px;
      margin:24px 0 42px 0;
      position: relative;
      left: -8px;
    }
  }
}

</style>