<template>
<div class="d-md-flex flex-md-equal">
        <div style="padding-left:7%; padding-top:3%;" class="col-md-6 mt-3">
          <h1 class="featurette-heading">Here you will find the pet you've <span style="color:peru;">always dreamed about!</span></h1>
          <p class="lead mt-4"><i class="fas fa-paw"></i> Join our family.</p>
          <p style="padding-left:5%" class="lead"><i class="fas fa-paw" style="color: peru;"></i> If you already have an account click on <a routerLink="/auth/login"><span style="color:peru"><b>Login</b></span></a></p>
          <p style="padding-left:10%" class="lead"><i class="fas fa-paw"></i> If you don't have an account already then click on <a routerLink="/auth/register"><span style="color:peru"><b>Register</b></span></a></p>
          <p style="padding-left:15%" class="lead" ><i class="fas fa-paw" style="color: peru;"></i> Don't wait! Go find your petMate!</p>
        </div>
        <div class="col-md-6 mt-5">
          <img class="home-picture" src="../assets/pets.png" />
        </div>
      </div>
</template>

<script>
</script>

<style scoped>
.home-picture{
    top:0;
    left:0;
    transform: none;
    width: 100%;
    position: static;
    margin: 0 auto;
  }
</style>