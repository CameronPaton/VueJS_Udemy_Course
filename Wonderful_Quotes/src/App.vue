<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
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
import header from "./Components/Header";

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
      if (this.quotes.length >= this.maxQuotes){
        return alert("Please delete quotes first");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: newQuote,
    appHeader: header
  },
}
</script>

<style>

</style>
