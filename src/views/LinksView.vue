<template>
    <section>
        <h2 class="secondary--text">Категории кэшбэка и MCC коды</h2>
        <p>Если MCC-код найден в списке, то не важно, какой картой платить</p>
        <p>Можно узнать MCC-код, если заплатить пустой картой Тинькофф. Операция отклонится, но MCC будет показан</p>
        <article>
            <h3>Альфа</h3>
            <a
                href="https://alfabank.ru/help/t/retail/debitcards/alfacard/vsyo-pro-keshbek-rublyami/za-chto-keshbek-ne-nachislyaem/"
                target="_blank"
                >не начислит кэшбэк</a
            >
            <p>
                операции с МСС-кодами: 7995, 9754, 4215, 4812, 4813, 4814, 4816, 7372, 4900, 5968, 7311, 5094, 6211,
                6540, 5960, 6300, 6534, 7511, 7399, 9211, 9311, 9222, 9223, 9399
            </p>
            <LinkButton
                :label="'Альфа-Карта'"
                :link="'https://mcc-codes.ru/card/alfabank-alfakarta'"
                :color="'#f03226'"
            />
        </article>
        <article>
            <h3>Хоум</h3>
            <a href="https://polza.home.bank/Content/docs/Polza_for_debit_v_48.0_10092023.pdf" target="_blank"
                >не начислит кэшбэк</a
            >
            <p>
                операции с МСС-кодами: 4812, 4813, 4814, 4816, 4821, 4829, 4900, 5960, 5968, 6010, 6011, 6012, 6050,
                6051, 6211, 6300, 6399, 6529, 6530, 6531, 6532, 6533, 6534, 6536, 6537, 6538, 6540, 7299, 7311, 7372,
                7399, 7995, 8641, 8999, 9222, 9311, 9399, 9754
            </p>
            <LinkButton :label="'Польза'" :link="'https://mcc-codes.ru/card/home-credit-polza'" :color="'#e2383f'" />
        </article>
        <article>
            <h3>Tinkoff</h3>
            <a
                href="https://www.tinkoff.ru/bank/help/debit-cards/tinkoff-black/earn-with-card/cashback-intro/#q7"
                target="_blank"
                >не начислит кэшбэк</a
            >
            <p>
                операции с МСС-кодами: 4722, 4812, 4813, 4814, 4816, 4829, 4900, 6012, 6050, 6051, 6211, 6529, 6530,
                6531, 6532, 6533, 6534, 6536, 6537, 6538, 6540, 7299, 7311, 7372, 7399, 7995, 8999, 9211, 9222, 9223,
                9311.
            </p>
            <LinkButton :label="'Tinkoff Black'" :link="'https://mcc-codes.ru/card/tinkoff-black'" :color="'#ffde00'" />
        </article>
        <article>
            <h3>Сбер</h3>
            <a href="https://spasibosberbank.ru/upload/uf/1c1/pp_010524.pdf" target="_blank">не начислит кэшбэк</a>
            стр. 45
            <p>
                операции с МСС-кодами: 4214, 4215, 9402, 4813, 4814, 4815, 4899, 4816, 4821, 4829, 6531, 6533, 6534,
                6536, 6537, 6538, 4900, 5046, 5047, 5085, 5262, 5300, 5933, 5960, 6300, 5993, 6010, 6211, 6050, 6051,
                6540, 6012, 6011, 7299, 7276, 9311, 7311, 7372, 7375, 7389, 7399, 7801,7802,7995, 9754, 7800, 9406,
                8398, 8641, 8651, 8661, 8999, 9211, 9222, 9223, 9390, 9399, 3990, 6535, 9991, 9994, 9995, 9996, 9997,
                9998, 9999
            </p>
            <LinkButton
                :label="'Спасибо'"
                :link="'https://mcc-codes.ru/card/spasibo-ot-sberbanka'"
                :color="'#1b9e2a'"
            />
            <LinkButton
                :label="'Полный список категорий и MCC кодов в правилах в таблице 5, стр. 35'"
                :link="'https://spasibosberbank.ru/upload/uf/1c1/pp_010524.pdf'"
                :color="'#1b9e2a'"
            />
        </article>
    </section>
</template>

<script>
import LinkButton from '@/components/Shared/Buttons/LinkButton.vue';

export default {
    components: {
        LinkButton,
    },
};
</script>
