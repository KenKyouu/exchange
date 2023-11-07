<script setup>
</script>
<script>
export default {
  data() {
    return{
      tai: 1,
      tai2: 1,
      pc: 1,
    }
  },
  computed: {
    cm:  {
      get() {
        return Number.parseFloat(Number(this.tai) / 1000 * 303).toFixed(2)
      }
    },
    mm:  {
      get() {
        return Number.parseFloat(Number(this.tai) / 100 * 303).toFixed(2)
      }
    },
    cm2:  {
      get() {
        return Number.parseFloat(Number(this.tai2) / 1000 * 303).toFixed(2)
      }
    },
    mm2:  {
      get() {
        return Number.parseFloat(Number(this.tai2) / 100 * 303).toFixed(2)
      }
    },
    squareM: {
      get() {
        return (this.pc * ((Number.parseFloat(Number(this.tai) / 1000 * 303).toFixed(2)) / 100) * ((Number.parseFloat(Number(this.tai2) / 1000 * 303).toFixed(2)) / 100)).toFixed(2)
      }
    },
    cai: {
      get() {
        return (this.pc * ((Number.parseFloat(Number(this.tai) / 1000 * 303).toFixed(2)) / 100) * ((Number.parseFloat(Number(this.tai2) / 1000 * 303).toFixed(2)) / 100) * 10.89).toFixed(2)
      }
    },
  }
};
</script>

<template>
  <div class="exchange-wrapper">
    <div class="wrap1">
      <div class="wrap">
        <div class="col tai">
          <p><font-awesome-icon icon="pencil" /></p>
          <input type="text" v-model="tai">
        </div>
        <div class="col cm">
          <p>cm</p>
          <input type="text" v-model="cm" disabled>
        </div>
        <div class="col mm">
          <p>mm</p>
          <input type="text" v-model="mm" disabled>
        </div>
      </div>
      <div class="wrap">
        <div class="col tai">
          <p><font-awesome-icon icon="pencil" /></p>
          <input type="text" v-model="tai2">
        </div>
        <div class="col cm">
          <p>cm</p>
          <input type="text" v-model="cm2" disabled>
        </div>
        <div class="col mm">
          <p>mm</p>
          <input type="text" v-model="mm2" disabled>
        </div>
      </div>
    </div>
    <div class="wrap2">
      <div class="wrap">
        <div class="col pc">
          <p>片數</p>
          <input type="text" v-model="pc">
        </div>
        <div class="col squareM">
          <p>平方米</p>
          <input type="text" v-model="squareM" disabled>
        </div>
        <div class="col cai">
          <p>才</p>
          <input type="text" v-model="cai" disabled>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
<style src="../css/Exchange.css"/>
