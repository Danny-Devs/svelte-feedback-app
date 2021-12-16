<script>
  export let count;
  export let average;
</script>

<div class="feedback-stats">
  <span>{count} Reviews</span>
  <span>Average Rating: {average}</span>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>