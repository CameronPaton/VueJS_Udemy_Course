<template>
  <div class="container">
    <app-New-Quote @quoteAdded="newQuote"></app-New-Quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="alert alert-info">Info: Click on a Quote to delete it</div>
    </div>
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
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
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
