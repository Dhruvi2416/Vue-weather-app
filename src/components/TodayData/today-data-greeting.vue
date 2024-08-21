<template>
  <div class="flex space-x-4">
    <img class="rounded-full h-12 w-12" :src="userImg" />
    <div class="flex flex-col">
      <div class="text-xl">Hi, Dhruvi</div>
      <div>
        {{ todayDate }}
      </div>
    </div>
  </div>
</template>

<script>
import userImg from "../../../public/user-profile-img.png";

export default {
  name: "TodaysGreeting",
  components: {},
  data() {
    return {
      userImg,
      today: new Date(),
    };
  },
  created() {
    this.day = this.today.toLocaleString("default", { weekday: "short" });
    this.date = this.today.getDate();
    this.month = this.today.toLocaleString("default", { month: "short" });
    this.year = this.today.getFullYear();
  },
  computed: {
    todayDate() {
      return `${this.day}, ${this.date} ${this.month}, ${this.year}`;
    },
  },
};
</script>

<style></style>
