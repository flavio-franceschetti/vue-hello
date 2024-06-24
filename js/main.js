const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Hello Vue!!!",
      testImg: "https://picsum.photos/id/237/200/300",
    };
  },
}).mount("#app");
