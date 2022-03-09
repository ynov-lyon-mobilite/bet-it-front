<template>
  <div class="pa-10">
    <MatchList></MatchList>
  </div>
</template>

<script>
import MatchList from "@/components/Home/MatchList";

export default {
  name: "Home",
  components: {
    MatchList
  }
};
</script>

<style>
.rounded-60 {
  border-radius: 60px !important;
}
</style>
