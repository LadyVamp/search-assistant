<template>
    <div class="about">
        <h2 class="secondary--text">About</h2>
        <LinkButton :label="'цвета'" :link="'https://colorscheme.ru/#2P31Tw0fHw0w0'" :icon="'mdi-palette'" />
        <LinkButton :label="'иконки'" :link="'https://materialdesignicons.com/'" :color="'secondary'" />
        <LinkButton :label="'favicon'" :link="'https://icons8.ru/icon/set/link/emoji'" :color="'accent'" />
    </div>
</template>

<script>
import LinkButton from '@/components/Shared/Buttons/LinkButton';

export default {
    components: {
        LinkButton,
    },
};
</script>
