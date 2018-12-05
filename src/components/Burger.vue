<template>
  <div class="burger text-is-centered">
    <div class="columns is-centered">
      <div class="box column is-5 is-mobile checkMargin has-background-danger">
        <div class="box lettuceBack has-text-black-ter is-size-4">PREPARED</div>
        <div class="column is-centered">
          <div class="box has-background-warning" v-for="burger in burgers" :key="'li'+burger.id" :data-id="burger.id">
            <div class="columns burgers">
              <div class="column has-text-left is-three-fifths is-mobile">
                <p class="is-size-5">{{ burger.burger_name}}</p>
              </div>
              <div class="column is-mobile has-text-right">
                <router-link to="/"><button class="button is-danger is-rounded" :data-id="burger.id" data-devoured="false" @click.prevent="thisID">
                    <span class="icon is-small">
                      <i class="fas fa-utensils"></i>
                    </span>
                    <span>DEVOUR</span>
                  </button></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box column is-5 is-offset-1 is-mobile has-background-danger">
        <div class="box is-centered lettuceBack has-text-black-ter is-size-4">DEVOURED</div>
        <div class="column">
          <div class="box has-background-warning" v-for="eaten in devoured" :key="'devoured-'+eaten.id">
            <div class="columns burgers">
              <div class="column is-mobile">
                <p class="is-size-5">{{ eaten.burger_name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box addBurger column is-centered is-6 is-offset-3 has-background-danger">
      <div class="box lettuceBack"><p class="is-size-4 has-text-black-ter">Create a new burger!</p></div>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" name="newburger" v-model="newBurger" placeholder="e.g Blue Cheese Bacon Burger">
        </p>
        <p class="control">
          <a class="button is-inverted is-rounded is-warning" @click.prevent="addNewBurger">
            Add burger!
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'Burger',
  data: () => {
    return {
      burgers: [],
      devoured: [],
      newBurger: null
    }
  },
  methods: {
    thisID: function (e) {
      let _vue = this;
      console.log(e.currentTarget.getAttribute('data-id'))
      let id = e.currentTarget.getAttribute('data-id');
      let notDevoured = e.currentTarget.getAttribute('data-devoured');
      let apiCall = `/api/burgers/${id}`
      axios.put(apiCall, {
        data: {
          devoured: notDevoured
        }
      }).then(() => {
        this.recallAll()
      })
    },
    addNewBurger: function () {
      let apiCall = `/api/burgers/new`
      console.log(this.newBurger)
      axios.post(apiCall, {
        data: {
          burger_name: this.newBurger
        }
        }).then(() => {
          this.recallAll()
        })
      this.newBurger = null
    },
    recallAll: function () {
      let apiCall = `/api/burgers/all`
      this.burgers = []
      this.devoured = []
      axios.get(apiCall)
        .then(res => {
          res.data.forEach(element => {
            if (element.devoured == 1) {
              this.devoured.push(element)
            } else {
              this.burgers.push(element)
            }
          });
          console.log(this.burgers)
          console.log(this.devoured)
        })
        .catch(err => console.log(err))
    }
  },
  mounted() {
    let apiCall = `/api/burgers/all`
    axios.get(apiCall)
      .then(res => {
        res.data.forEach(element => {
          if (element.devoured == 1) {
            this.devoured.push(element)
          } else {
            this.burgers.push(element)
          }
        });
        console.log(this.burgers)
        console.log(this.devoured)
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>
.burgers div {
  margin: 6px 0px;
  padding: 0px 10px;
}
.burger .checkMargin {
  margin-bottom: 0px;
}
.addBurger {
  margin: 30px 0;
}
.lettuceBack {
  background: #84d644;
}
</style>
