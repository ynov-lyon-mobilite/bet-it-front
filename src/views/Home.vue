<template>
  <div>
    <UserHead></UserHead>
    <MatchList></MatchList>
  </div>
</template>

<script>
// @ is an alias to /src
import MatchList from "@/components/Home/MatchList";
import UserHead from "@/components/UserHead";

export default {
  name: "Home",
  components: {
    UserHead,
    MatchList
  }
};
</script>

<style>



</style>
