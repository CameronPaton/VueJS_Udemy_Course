<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
        <div class="panel-body quote">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .panel-body{
        font-size: 24px;
        color: #800020;
    }

    .quote {
        cursor: pointer;

    }

    .quote:hover{
        background-color: #ffe2e2;
    }

</style>