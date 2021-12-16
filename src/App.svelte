<script>
	import FeedbackForm from './components/FeedbackForm.svelte'
  import FeedbackList from './components/FeedbackList.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, reprehenderit. Odit ut, veniam error praesentium asperiores beatae quod possimus voluptatem placeat voluptates inventore fuga quisquam.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, reprehenderit. Odit ut, veniam error praesentium asperiores beatae quod possimus voluptatem placeat voluptates inventore fuga quisquam.',
    },
    {
      id: 3,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, reprehenderit. Odit ut, veniam error praesentium asperiores beatae quod possimus voluptatem placeat voluptates inventore fuga quisquam.',
    },
  ]

  $: count = feedback.length
  $: average =
    feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length

  const deleteFeedback = (e) => {
    const itemId = e.detail
    feedback = feedback.filter((item) => item.id !== itemId)
  }
</script>

<main class="container">
	<FeedbackForm />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
