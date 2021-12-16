<script>
  import Card from './Card.svelte'
  import Button from './Button.svelte'
  import RatingsSelect from './RatingSelect.svelte'

  let text = ''
  let rating = 10
  let btnDisabled = true
  let min = 10
  let message

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true
    } else {
      message = null
      btnDisabled = false
    }
  }
</script>

<Card>
  <header>
    <h2>How would you rate our service with us?</h2>
  </header>
  <form>
    <RatingsSelect />
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
