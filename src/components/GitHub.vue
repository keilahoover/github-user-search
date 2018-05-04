<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent="queryGitHub(query)">
      <input type="text" placeholder="GitHub Username" v-model="query">
    </form>
    <div class="results" v-if="results">
      <img v-bind:src="results.avatar_url">
      <h2 v-if="results.name">{{ results.name }}</h2>
      <div v-if="results.bio">{{results.bio}}</div>
      <div v-if="results.location">{{results.location}}</div>
      <div v-if="results.followers">Followers: {{results.followers}}</div>
      <div v-if="results.following">Following: {{results.following}}</div>
      <a v-if="results.blog" v-bind:href="results.blog">Go to Website</a>
      {{ results.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitHub',
  data () {
    return {
      msg: 'GitHub Search',
      query: '',
      results: null
    }
  },
  methods: {
    queryGitHub(q) {
      let self = this;
      fetch('http://api.github.com/users/' + q)
        .then((j) => {
          return j.json();
        })
        .then((r) => {
          console.log(r);
          self.results = r;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.results {
  margin: 10px 150px;
}

.results img {
  float: left;
  border-radius: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
