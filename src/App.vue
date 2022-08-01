<template>
  <v-app>
    <TheHeader :menu-items="menuItems" />
    <v-main>
      <v-container>
        <TheTabs :menu-items="menuItems" />
        <router-view />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "@/components/Shared/Layout/TheHeader.vue";
import TheFooter from "@/components/Shared/Layout/TheFooter.vue";
import TheTabs from "@/components/Shared/Layout/TheTabs.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter, TheTabs },
  metaInfo: {
    title: "Открыватель ссылок",
    // titleTemplate: "%s",
  },
  data() {
    return {
      menuItems: [
        {
          name: "HOME",
          path: "/",
          icon: "mdi-pot-mix",
        },
        {
          name: "About",
          path: "/about",
          icon: "mdi-information-outline",
        },
      ],
    };
  },
};
</script>


<style lang='scss'>
a {
  text-decoration: none;
}
li {
    list-style-type: none;
}
</style>
