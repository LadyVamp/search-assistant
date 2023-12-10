<template>
    <div>
        <v-row>
            <v-col xs="12" md="2">
                <v-text-field v-model="length" label="Количество символов" type="number" min="8" max="20">
                </v-text-field>
            </v-col>
            <v-col xs="12" md="2" class="mt-2">
                <BaseButton label="Генерировать" icon="mdi-dice-multiple-outline" @click.native="generatePassword" />
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12" md="2">
                {{ password }}
            </v-col>
            <v-col xs="12" md="2">
                <v-btn
                    icon
                    color="secondary"
                    title="Скопировать"
                    :disabled="!password"
                    @click="copyToClipBoard(password)"
                >
                    <v-icon>mdi-content-copy</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BaseButton from '@/components/Shared/Buttons/BaseButton.vue';

export default {
    name: 'PasswordGenerator',
    components: {
        BaseButton,
    },
    data() {
        return {
            password: '',
            length: 8,
        };
    },

    mounted() {},
    methods: {
        generatePassword() {
            const keyStrings = {
                lowercase: 'abcdefghijklmnopqrstuvwxyz',
                uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                number: '0123456789',
                symbol: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
            };
            let passwordCharSet = '';
            passwordCharSet += keyStrings.lowercase;
            passwordCharSet += keyStrings.uppercase;
            passwordCharSet += keyStrings.symbol;
            passwordCharSet += keyStrings.number;
            this.password = '';
            for (let i = 0; i < this.length; i++) {
                this.password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
            }
        },
        copyToClipBoard(textToCopy) {
            navigator.clipboard.writeText(textToCopy);
        },
    },
};
</script>
