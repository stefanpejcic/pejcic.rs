<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/stefanpejcic"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Linkedin"
        link="https://www.linkedin.com/in/stefan-pejcic"
        icon="ant-design:linkedin-outlined"
      />
      <SocialIcon
        title="Instagram"
        link="https://www.instagram.com/stefanpejcic/"
        icon="ant-design:instagram-outlined"
      />
    </div>
    <ActionButton link="mailto:stefan@pejcic.rs">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  components: { SocialIcon, ActionButton },
};
</script>
