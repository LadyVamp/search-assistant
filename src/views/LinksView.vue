<template>
    <section>
        <h2 class="secondary--text">Категории кэшбэка и MCC коды</h2>
        <p>Если MCC-код найден в списке, то не важно, какой картой платить</p>
        <p>Можно узнать MCC-код, если заплатить пустой картой Т-банка. Операция отклонится, но MCC будет показан</p>
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
            <LinkButton
                :label="'Список категорий и MCC кодов'"
                :link="'https://alfabank.servicecdn.ru/marketing/ac/d9/marketing/MCCD_july.pdf'"
                :color="'#f03226'"
            />
        </article>
        <article>
            <h3>Т-банк</h3>
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
            <LinkButton
                :label="'Список категорий и MCC кодов стр. 6'"
                :link="'https://acdn.tinkoff.ru/static/documents/loyalty-program-black.pdf'"
                :color="'#ffde00'"
            />
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
                :label="'Список категорий и MCC кодов стр. 35'"
                :link="'https://spasibosberbank.ru/upload/uf/1c1/pp_010524.pdf'"
                :color="'#1b9e2a'"
            />
        </article>
        <article>
            <h3>МКБ</h3>
            <a href="https://mkb.ru/file/703c443d-3cc5-45da-8a4a-6d6e3f2970ee" target="_blank">не начислит кэшбэк</a>
            <p>
                операции с МСС-кодами: 6010, 6011, 4829, 6012, 6531, 6540, 9999, 4814, 4821, 9402, 5094, 6211, 6050,
                6051, 5933, 6529, 6530, 7995, 9754, 8999, 7299, 7311, 5960, 6300, 7276, 7321, 7372, 7399, 8651, 9400,
                9211, 9399
            </p>
            <LinkButton
                :label="'Список категорий «МКБ Бонус» III квартал 2024'"
                :link="'https://mkb.ru/file/8529deca-6e63-409c-a581-845c4e34de1b'"
                :color="'#dd0a34'"
            />
        </article>
        <article>
            <h3>Ozon банк</h3>
            <a
                href="https://cdn1.ozone.ru/s3/ob-landing/static/docs/ecom/products/rules/2024.08.19%20-%20%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%BB%D0%BE%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BF%D0%BE%20Ozon%20%D0%9A%D0%B0%D1%80%D1%82%D0%B5.pdf"
                target="_blank"
                >не начислит кэшбэк стр. 11
            </a>
            <p>
                операции с МСС-кодами: 0763, 1799, 2791, 2842, 3069, 3816, 3828, 3830 - 3831, 4119, 4214 - 4215, 4225,
                4784, 4812 - 4816, 4821, 4829, 4899 - 4900, 5044, 5051, 5169, 5199, 5271, 5416 - 5417, 5933, 5935, 5962,
                6010 - 6012, 6022 - 6023, 6025 - 6026, 6028, 6050 - 6051, 6211, 6381, 6399, 6513, 6529 - 6540, 6555,
                6611, 6760, 7012, 7261, 7273, 7276 - 7278, 7280 - 7299, 7311, 7321 - 7322, 7372, 7389, 7392 - 7393,
                7399, 7511, 7800 - 7802, 7995, 8111, 8398, 8641, 8651, 8661, 8675, 8699, 8734, 8911, 8931, 8999, 9211,
                9222 - 9223, 9311 - 9314, 9399 - 9401, 9405 - 9406, 9411, 9700 - 9702, 9751 - 9753, 9950, 9999
            </p>
            <LinkButton
                :label="'Список категорий и MCC кодов стр. 7'"
                :link="'https://cdn1.ozone.ru/s3/ob-landing/static/docs/ecom/products/rules/2024.08.19%20-%20%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D0%BB%D0%BE%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BF%D0%BE%20Ozon%20%D0%9A%D0%B0%D1%80%D1%82%D0%B5.pdf'"
                :color="'#005bff'"
            />
        </article>
        <article>
            <h3>BTБ</h3>
            <a
                href="https://www.vtb.ru/media-files/vtb.ru/sitepages/personal/karty/programma-loyalnosti/pravila_programmy_loyalnosti_multibonus_redakciya_deystvuet_s_01.01.2025.pdf"
                target="_blank"
                >не начислит кэшбэк стр. 11
            </a>
            <p>
                операции с МСС-кодами: 6538, 6050, 6051, 6010, 6011, 6012, 7995, 6211, 6532, 6536, 6537, 6540, 9311,
                4900, 9211, 9222, 6529, 4812, 4813, 4814, 4816, 4829, 6531, 6533, 6534, 8398, 4215, 5933, 6530, 7299,
                7311, 7372, 7399, 8999, 9399, 9754, 7802, 7276, 9390, 9223, 9402, 4815, 4899, 5046, 5047, 5085, 5960,
                7389, 7801, 7800, 9406, 8641, 8651, 8661, 6535
            </p>
            <LinkButton
                :label="'Список категорий и MCC кодов стр. 22'"
                :link="'https://www.vtb.ru/media-files/vtb.ru/sitepages/personal/karty/programma-loyalnosti/pravila_programmy_loyalnosti_multibonus_redakciya_deystvuet_s_01.01.2025.pdf'"
                :color="'#3261ec'"
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

<style scoped>
article {
    margin: 20px 0;
}
</style>
