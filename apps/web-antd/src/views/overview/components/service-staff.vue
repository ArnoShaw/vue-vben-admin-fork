<script setup lang="ts"></script>

<template>
  <div class="mt-4 flex">
    <div class="card-box px-4 py-3 transition-all hover:shadow-xl">
      <span>您的业务专员</span>
      <div class="mt-2">
        <p class="text-lg">谢锦华</p>
        <p>15432443243</p>
      </div>
    </div>
    <div class="card-box mx-2 px-4 py-3 transition-all hover:shadow-xl">
      <span>您的客服专员</span>
      <div class="mt-2">
        <p class="text-lg">谢锦华</p>
        <p>15432443243</p>
      </div>
      <div class="mt-3">fjdka@fdsa.fda</div>
    </div>
    <div class="card-box mr-2 px-4 py-3 transition-all hover:shadow-xl">
      <span>您的揽收专员</span>
      <div class="mt-2">
        <p class="text-lg">未分配</p>
      </div>
    </div>
    <div class="card-box px-4 py-3 transition-all hover:shadow-xl">
      <span>您的财务专员</span>
      <div class="mt-2">
        <p class="text-lg">谢锦华</p>
        <p>15432443243</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-box {
  flex: 1;
  color: #fff;
  word-break: break-word;
  background-repeat: no-repeat;
  background-position: right;

  &:first-of-type {
    background-color: #0d57a7;
    background-image: url('../../../assets/img/viewcard1.png');
  }

  &:nth-of-type(2) {
    background-color: #2eb042;
    background-image: url('../../../assets/img/viewcard2.png');
  }

  &:nth-of-type(3) {
    background-color: #424242;
    background-image: url('../../../assets/img/viewcard3.png');
  }

  &:last-of-type {
    background-color: #fd932b;
    background-image: url('../../../assets/img/viewcard4.png');
  }

  & > span {
    padding-bottom: 4px;
    border-bottom: 1px solid #fff;
  }
}
</style>
