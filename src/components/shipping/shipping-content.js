import { transhipment } from "../../assets/images";

export const shippingContent = [
  {
    language: "IDR",
    shipping: [
      {
        title: "Overseas Shipping",
        content: [
          {
            subtitle: "Penjelasan",
            description: (
              <>
                <p>Untuk pengiriman overseas kami menggunakan transhipper.</p>
                <p>Bagaimana Cara kerja transhipper :</p>
                <img
                  src={transhipment}
                  alt="transhippment-img"
                  className="rounded-lg"
                />
              </>
            ),
          },
          {
            subtitle: "Garansi",
            description: (
              <>
                <p>
                  Garansi dari toko kami hanya menggunakan DOA, yang mana buyer
                  dapat mengklaim garansi tersebut dengan memberi video
                  unboxing.
                </p>
                <p>
                  Jika ikan masih hidup maka saya sebagai seller tidak akan
                  bertanggungjawab terhadap kejadian-kejadian setelahnya.
                </p>
                <p>Kegagalan atau salah karantina tidak dapat ditoleransi.</p>
              </>
            ),
          },
          {
            subtitle: "Jadwal",
            description: (
              <p>
                Untuk pengiriman ke setiap negara harus mengikuti jadwal
                transhipper yang akan diberikan dan didiskusikan sebelum dan
                setelah deal, yakni adalah 1 bulan sekali atau dua kali untuk
                jadwal pengiriman overseas.
              </p>
            ),
          },
        ],
      },
      {
        title: "Pengiriman Dalam Negeri",
        content: [
          {
            subtitle: "",
            description: (
              <>
                <p>
                  Untuk pengiriman dalam negeri kami menggunakan cargo dan atau
                  bis ( luar pulau ).
                </p>
                <p>
                  Untuk pengiriman seperti jabodetabek kami menggunakan lala
                  move , grab ataupun kereta.
                </p>
                <p>
                  dan untuk pulau jawa (selain jabodetabek) kami menggunakan
                  kereta seperti KiB , KALOG , dan Ki8.
                </p>
              </>
            ),
          },
        ],
      },
      {
        title: "Pengiriman Luar Negri",
        content: [
          {
            subtitle: "",
            description: (
              <>
                <p>
                  Untuk pengiriman internasional (Asia) Kokoh Koki dapat
                  melayani pengiriman ke Thailand ,Malaysia , Singapore ,Kuwait
                  ,dan Phillipines.
                </p>
                <p>
                  Dimana pengiriman ini memiliki costnya masing-masing pada
                  minimum 80 USD – 100 USD , per bag dapat terisi 1-3 ikan ,
                  tergantung size dari ikan.
                </p>
                <p>
                  Untuk cakupan eropa kami dapat mengirim ikan ke German dan
                  Negara sekitarnya dengan bekerjasama transhipper bernama Jan
                  Sassman disesuaikan dengan jadwal shipping ( dengan estimasi
                  harga 150-250 USD , Per bag dapat terisi 1-3 ikan disesuaikan
                  dengan size ikan dan jumlah ikan )
                </p>
                <p>
                  Untuk pengiriman ke USA , kami dapat mengirim ikan dengan
                  transit ke Thailand. Dengan estimasi shipping cost (to
                  THAILAND : 4500 baht per Bag USD , Per bag dapat terisi 1-3
                  ikan ) . From Thailand to USA : di hitung 600 baht per KG.
                </p>
                <p>
                  Shipping cost diatas adalah harga dari Indonesia ( tempat
                  kokoh koki ke transhipper USA “ BELUM KERUMAH BUYER “ ,
                  shipping cost dari transhipper ke rumah buyer akan dikirim
                  menggunakan UPS )
                </p>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    language: "USD",
    shipping: [
      {
        title: "Overseas Shipping",
        content: [
          {
            subtitle: "Overseas Shipping Explanation",
            description: (
              <>
                <p>For our overseas shipping, we utilize a transshipper.</p>
                <p>How the transshipper works :</p>
                <img
                  src={transhipment}
                  alt="transhippment-img"
                  className="rounded-lg"
                />
              </>
            ),
          },
          {
            subtitle: "Guarantee",
            description: (
              <>
                <p>
                  Our store only provides a guarantee for Dead On Arrival (DOA),
                  which the buyer can claim by providing a video of the
                  unboxing.
                </p>
                <p>
                  If the fish is still alive, I, as the seller, will not be
                  responsible for any incidents thereafter.
                </p>
                <p>Failure or incorrect quarantine cannot be tolerated.</p>
              </>
            ),
          },
          {
            subtitle: "Schedule",
            description: (
              <p>
                Shipping to each country must adhere to the transshipper's
                schedule, which will be provided and discussed before and after
                the deal. This schedule typically occurs once or twice a month
                for overseas shipping.
              </p>
            ),
          },
        ],
      },
      {
        title: "Domestic Shipping",
        content: [
          {
            subtitle: "",
            description: (
              <>
                <p>
                  For domestic shipping, we use cargo and/or buses (for
                  inter-island transport).
                </p>
                <p>
                  For shipping within regions like Jabodetabek, we use services
                  such as Lalamove, Grab, or trains.
                </p>
                <p>
                  For Java Island (excluding Jabodetabek), we use trains such as
                  KiB, KALOG, and Ki8.
                </p>
              </>
            ),
          },
        ],
      },
      {
        title: "Worldwide Shipping",
        content: [
          {
            subtitle: "",
            description: (
              <>
                <p>
                  For international shipments (Asia), Kokoh Koki can serve
                  deliveries to Thailand, Malaysia, Singapore, Kuwait, and the
                  Philippines.
                </p>
                <p>
                  These shipments have respective costs ranging from a minimum
                  of 80 USD to 100 USD. Each bag can contain 1-3 fishes,
                  depending on the size of the fish.
                </p>
                <p>
                  For European coverage, we can send fishes to Germany and
                  surrounding countries in cooperation with a transhipper named
                  Jan Sassman, adjusted to shipping schedules (with an estimated
                  price range of 150-250 USD. Each bag can be filled with 1-3
                  fishes, adjusted according to the size and quantity of
                  fishes).
                </p>
                <p>
                  For shipments to the USA, we can send fishes with transit via
                  Thailand. The estimated shipping cost (to Thailand: 4500 baht
                  per Bag USD, each bag can be filled with 1-3 fishes). From
                  Thailand to the USA: calculated at 600 baht per KG.
                </p>
                <p>
                  The above shipping costs are from Indonesia (Kokoh Koki's
                  location to the USA transhipper's location 'NOT TO BUYER'S
                  HOME'. The shipping cost from the transhipper to the buyer's
                  home will be sent using UPS).
                </p>
              </>
            ),
          },
        ],
      },
    ],
  },
];
