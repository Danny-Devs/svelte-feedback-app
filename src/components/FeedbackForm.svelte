<script>
  import {FeedbackStore} from '../stores'
  import { v4 as uuidv4 } from 'uuid'
  import Card from './Card.svelte'
  import Button from './Button.svelte'
  import RatingSelect from './RatingSelect.svelte'

  let text = ''
  let rating = 10
  let btnDisabled = true
  let min = 10
  let message

  const handleSelect = (e) => (rating = e.detail)

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true
    } else {
      message = null
      btnDisabled = false
    }
  }

  const handleSubmit = (e) => {
    if (text.trim().length > min) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      }

      FeedbackStore.update((currentFeedback) => [newFeedback, ...currentFeedback])
      text = ''
    }
  }
</script>

<Card>
  <header>
    <h2>How would you rate our service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Tell us about what keeps you coming back"
      />
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
    text-align: center;
    margin-bottom: 15px;
  }

  .input-group {
    display: flex;
    position: relative;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 16px 12px;
    border-radius: 4px;
    border: 1px solid #333;
  }
</style>
