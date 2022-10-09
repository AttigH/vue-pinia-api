<template>
  <div id="footer">
    <div class="footer-info">
      <h3>
        <RouterLink to="/Lobsterware"> Lobsterware__ </RouterLink>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #afc3daab;
  height: 100px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.footer-info h3 {
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 10px;
}
</style>
