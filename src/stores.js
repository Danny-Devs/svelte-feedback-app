import { writable } from "svelte/store";

export const FeedbackStore = writable([
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
])