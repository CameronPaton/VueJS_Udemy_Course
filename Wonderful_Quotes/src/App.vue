<template>
  <div class="container">
    <app-New-Quote @quoteAdded="newQuote"></app-New-Quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "./Components/QuoteGrid";
import newQuote from "./Components/NewQuote";

export default {
  data: function(){
    return {
      quotes: [
        "First Quote"
      ],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: newQuote
  },
}
</script>

<style>

</style>
