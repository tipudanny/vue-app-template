<template>
  <div>
    <div class="wrapper">
      <div class="content-wrapper">
        <ContentHeader/>
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <p>This is Riders Page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/AdminPanel/ContentHeader";
export default {
  name: "Riders",
  components: {ContentHeader},
  mounted() {
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>