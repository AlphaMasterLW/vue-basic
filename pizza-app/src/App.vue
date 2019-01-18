
<template>
    <div id="app">
        <div class="container">
            <app-header></app-header>
            <router-view></router-view>
            <br>
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <router-view name="orderingGuide"></router-view>
                </div>
                <div class="col-sm-12 col-md-4">
                    <router-view name="delivery"></router-view>
                </div>
                <div class="col-sm-12 col-md-4">
                    <router-view name="history"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";

export default {
    name: "app",
    components: {
        appHeader: Header
    },
    data() {
        return {};
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
