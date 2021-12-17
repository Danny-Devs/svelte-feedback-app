<script>
  import { FeedbackStore } from '../stores'

  $: count = $FeedbackStore.length
  $: average =
    $FeedbackStore.reduce((a, { rating }) => a + rating, 0) /
    $FeedbackStore.length
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
