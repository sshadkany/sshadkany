'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c82c6434b929c5c693ea1e72bad290eb",
"version.json": "fcba7412bb93056ed6f207f687fff28f",
"index.html": "fa24feb761ac786bbf0c57b0814b003b",
"/": "fa24feb761ac786bbf0c57b0814b003b",
"main.dart.js": "c792c4a794bcb86724ed8d75547a74da",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "7ce3f37c074879a48a20fb9407e93863",
"icons/Icon-192.png": "21acf1f56b3432a954f05fd6a24067d8",
"icons/Icon-maskable-192.png": "21acf1f56b3432a954f05fd6a24067d8",
"icons/Icon-maskable-512.png": "7c685920fe8614f7bebc09b91d70c94f",
"icons/Icon-512.png": "7c685920fe8614f7bebc09b91d70c94f",
"manifest.json": "d8f54c7552efc86d9cdb80139445bee4",
"assets/AssetManifest.json": "9d2f121cde37d85773b7e5c1265bef2f",
"assets/NOTICES": "c268e4363ea22ab00bed4b42a8452dd8",
"assets/FontManifest.json": "419a9691d9c8444e325932cc67962a21",
"assets/AssetManifest.bin.json": "0f76882236ff1062dd61f315edd0a994",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d65e4e237bd596a0b30014da28eaaa89",
"assets/fonts/MaterialIcons-Regular.otf": "b5e2d375426df8133658a69026c1a94e",
"assets/assets/images/not_found_search.svg": "1f5e1fed21daafb30c37277f91a99187",
"assets/assets/images/logo-lock.svg": "33ac84480faf15a662da75ac42a13adb",
"assets/assets/images/pattern-test-1.svg": "54e83a75487834862d9ff0c1d324d3a2",
"assets/assets/images/logo.png": "cb138f072bfe8ac9bc1892547a085cd2",
"assets/assets/images/sample-onboarding-image.png": "2f2e86176609dbc6824256075081ac70",
"assets/assets/images/card-blue.svg": "ae452ec9c3bf36a474668f4f77048052",
"assets/assets/images/card-blue.png": "2c899007c8ffcd8c4b8aea8d00a169a4",
"assets/assets/images/success.svg": "99f8259d73a16548aba449394d76a398",
"assets/assets/images/icon/sign.svg": "42d65cd67fdb1a1d2332d742c7c7ba14",
"assets/assets/images/icon/clock_green.svg": "f8bb586cbe6f136f868c9870c36701e2",
"assets/assets/images/icon/store_menu.svg": "7626cfb6355490c1d32ddb0180f10e24",
"assets/assets/images/icon/loading/failed.svg": "c3a95a812a5f200d7f33be38b04ab3c0",
"assets/assets/images/icon/loading/in-progress.svg": "3308233c0b420a8d7636e059fc258fb2",
"assets/assets/images/icon/loading/success.svg": "a4739ecbacd520a2915529feb6ff443f",
"assets/assets/images/icon/lock.svg": "79262a131b185cfff4b9ce72e6244c55",
"assets/assets/images/icon/arrow_up.svg": "437b0afb9f1619aa717365d457029c6d",
"assets/assets/images/icon/password_icon.svg": "25959d7e5aee4ac488dc9cc8f9eee049",
"assets/assets/images/icon/dashboard.svg": "18b0dcc9dff62c013e4fb9043c891772",
"assets/assets/images/icon/check.svg": "6dd9565dff9d115ba0da7320d76e2d7f",
"assets/assets/images/icon/copy.svg": "b42c7016a93be4e75b56a76696a3126c",
"assets/assets/images/icon/dashboard/chest.svg": "a305202fe358e83869c69a22697c6b7b",
"assets/assets/images/icon/dashboard/rectangle.svg": "9219f0b5e65f830d32e4905a0034cea0",
"assets/assets/images/icon/dashboard/thunder.svg": "5bc9a7a6f6d53dbe3e5d536dddfbd99e",
"assets/assets/images/icon/dashboard/question_mark.svg": "26d575f56341d962b64823a11bd5b3e3",
"assets/assets/images/icon/dashboard/safebox.svg": "be9d5e3a519ca609941c6085c8fd2fa4",
"assets/assets/images/icon/dashboard/leaf.svg": "b5a02b588ad144189fdb608ff0573d83",
"assets/assets/images/icon/dashboard/Movement-icon.svg": "feba41da1ca31305b2f23eee9433186b",
"assets/assets/images/icon/dashboard/diamond_blue.svg": "e8c864692b686cd64b0cdd0ef60abe7b",
"assets/assets/images/icon/dashboard/net.svg": "eef6898da79eae02d39ec6296bf5a0a9",
"assets/assets/images/icon/refresh.svg": "6d77d56d17ea1ed7e3bfeeeb370d877a",
"assets/assets/images/icon/biometric_icon.svg": "6019ec8155e156be7c8c25ca30767ade",
"assets/assets/images/icon/setting.svg": "18ceb2d2bfa1c7197b5176e1e5063eb6",
"assets/assets/images/icon/message.svg": "d5244a9dde181416fe22d245c5b1a7b1",
"assets/assets/images/icon/reward.svg": "6416da3e30659ef8a64b2b15c1ebc571",
"assets/assets/images/icon/lock_green.svg": "3c3d80eb66f10cf063be0f6d6814d556",
"assets/assets/images/icon/profile/triangle.svg": "ce62c2358c4f3683380cdbcba784a88d",
"assets/assets/images/icon/profile/installment.svg": "2168681ad56c646a541a2dddce65b58a",
"assets/assets/images/icon/profile/withdraw.svg": "03250b11a4da4ba6a2d68c5667de4f71",
"assets/assets/images/icon/profile/shaparak.svg": "d7d147db9511bd45094cb82dc70d7047",
"assets/assets/images/icon/profile/chip.svg": "59df2e29f1afdd046118e8bab54ef4fd",
"assets/assets/images/icon/profile/iran-logo.svg": "a2e84a94afbc320de42728c14bfd14c2",
"assets/assets/images/icon/profile/signal.svg": "9a910edbe8f5b35e7788795e61b9a5ce",
"assets/assets/images/icon/profile/serial.svg": "f04afec9da7fb86ee6a9b419b12b595a",
"assets/assets/images/icon/profile/question.svg": "74c4687d9622f875957b0eecbcf633c3",
"assets/assets/images/icon/profile/iran.svg": "56d44a5e951d23e34bb839a6621a4014",
"assets/assets/images/icon/profile/warning.svg": "e2adf96a90569ea23c74e07f4093d618",
"assets/assets/images/icon/profile/wait.svg": "da14d297521fcde5889f0028b922ec21",
"assets/assets/images/icon/profile/back.svg": "e448a9cacb9e17cadf8c6f1b97e5b653",
"assets/assets/images/icon/profile/reward.svg": "366df63e59e485135f06acd90daab3ec",
"assets/assets/images/icon/profile/barcode.svg": "17637e52db4ae5eb63ef07bee1b7f37b",
"assets/assets/images/icon/profile/camera.svg": "5ad04e28394c9dfad29bdddef1bec7e1",
"assets/assets/images/icon/profile/exit.svg": "342f1071eb4cf57d2f4ac85aff3c4c34",
"assets/assets/images/icon/profile/diamond.svg": "ec099da12bf0176d1f05e79e71f7b831",
"assets/assets/images/icon/profile/credit.svg": "bd9424e7b066f749e88364d450f4aed5",
"assets/assets/images/icon/profile/confirmed.svg": "2236ff1bb4db143d1d79d1e71e38c07f",
"assets/assets/images/icon/chest_credit.svg": "a3e6ede8e134e6005c50a14200068305",
"assets/assets/images/icon/notebox/warning.svg": "7b5588bf9d7be3867281a2f6e116e237",
"assets/assets/images/icon/notebox/info.svg": "f209ce20ecc93bc287ccad150c9496cc",
"assets/assets/images/icon/notebox/notification.svg": "cb83c1835fbb2f9000dfba5cb39238f4",
"assets/assets/images/icon/notebox/success.svg": "79994385bdc3dd33e2ab9d6512037153",
"assets/assets/images/icon/notebox/error.svg": "c6ba59be76a2e6c694c6d95f7ab53c73",
"assets/assets/images/icon/performance.svg": "724e33942f014c48e746c15da293bf45",
"assets/assets/images/icon/bank_card.svg": "d844a9b659d87d37765b3f5d4b3f4293",
"assets/assets/images/icon/clock.svg": "ab0355dfaeff6a6095d2b1d288303581",
"assets/assets/images/icon/profile.svg": "be3cd41eb20604034c4782069a91bf7e",
"assets/assets/images/icon/bazaar/search.svg": "aadd2d72b8c59e7615d22d4a83d3266d",
"assets/assets/images/icon/bazaar/target.svg": "1df1f5aed24251adaf305ef41d1402d4",
"assets/assets/images/icon/bazaar/chart.svg": "e90e25ba537368b54fa1001f8cae8d86",
"assets/assets/images/icon/bazaar/discount.svg": "20e567efbe563fffb11d5b61279e787e",
"assets/assets/images/icon/bazaar/link.svg": "f870d51332be91188e565c38076d2275",
"assets/assets/images/icon/bazaar/store.svg": "99e03220853b3b44e8ff656fea3b35d1",
"assets/assets/images/icon/bazaar/category.svg": "0270b2e8776cf9fada4ec102b6ef95e8",
"assets/assets/images/icon/bazaar/news.svg": "a5d8581a53d05b09fe1b89bade01b0f3",
"assets/assets/images/icon/bazaar/loc.svg": "976d3adf068b5dff68bded9efa9e1fbc",
"assets/assets/images/icon/bazaar/smile.svg": "235d5aedcab85fdc816a434a5bb553ad",
"assets/assets/images/icon/bazaar/reward.svg": "c958e838ac81be355d9f7b4013153188",
"assets/assets/images/icon/bazaar/star.svg": "ee66da50ed0f0e55c72ce5f4f67b234e",
"assets/assets/images/icon/bazaar/compass.svg": "34348c52e33581bf2939acf8c42412ac",
"assets/assets/images/icon/bazaar/diamond.svg": "2e21f18d139ea84aa8effad03c348c2d",
"assets/assets/images/icon/bazaar/call.svg": "a3e8dd5c9ded375d70082b8fd74761c8",
"assets/assets/images/icon/bazaar/restore.svg": "4e7ea59e970e9caf51cb9e5906486f2d",
"assets/assets/images/icon/bazaar/zzz.svg": "7a7ad034e955845080945d0f22f19fcc",
"assets/assets/images/icon/bazaar/filter.svg": "b0a041b68ba14af040e2eba1d18fb820",
"assets/assets/images/icon/bazaar/net.svg": "709cd9292c835ec4e8d270a7add250cd",
"assets/assets/images/icon/bazaar/star_fill.svg": "e215c148e7698399f15b909416507f13",
"assets/assets/images/icon/bazaar/star_grey.svg": "715aff0c4053d9e3bb9444b9f413e3ce",
"assets/assets/images/icon/bazaar/history.svg": "197e3bbf4cb864ca1c281f92ae45f9b2",
"assets/assets/images/icon/performance/installment.svg": "15531c9110a39b2cf1eb577b89bfa0a1",
"assets/assets/images/icon/performance/empty_wallet.svg": "bb8e83dfa8636bd1f510509e2237e449",
"assets/assets/images/icon/performance/empty_buy.svg": "33751e144390b8a5a12753f0f0ef54e8",
"assets/assets/images/icon/performance/empty_reward.svg": "f78b012d1876fb84cc38fd67ec5e1de0",
"assets/assets/images/icon/performance/empty_repay.svg": "a75bbd3e3e625d0805759781f3b23ce8",
"assets/assets/images/icon/qusetion_mark.svg": "74c4687d9622f875957b0eecbcf633c3",
"assets/assets/images/icon/err_icon.svg": "b99e832e0f5ede3e0ca3db7667293005",
"assets/assets/images/icon/arrow_forward.svg": "da51450c0d3660de14854b99634a4edd",
"assets/assets/images/icon/banks/Tosee%2520Saderat.svg": "c888b42f9b901bb8d5d97d85ff755913",
"assets/assets/images/icon/banks/Khavar%2520Mianeh.svg": "05b26fe150adc08d464f8fb707ce0da9",
"assets/assets/images/icon/banks/Melli.svg": "740f87690fd34062fe3d27a370fadcb8",
"assets/assets/images/icon/banks/Pasargad.svg": "e8863980c70a0ff0c1e25118a4462c53",
"assets/assets/images/icon/banks/Sanat%2520Madan.svg": "d047645c36af492dc5d50f8334cc7188",
"assets/assets/images/icon/banks/Shahr.svg": "79d5a1c38ecc997241ea6b02566bf3f0",
"assets/assets/images/icon/banks/Keshavarzi.svg": "6c22a36751c9d874aa5b0e5561d33cbf",
"assets/assets/images/icon/banks/Sepah.svg": "02e4e04b16614886626a5873f73a9ca9",
"assets/assets/images/icon/banks/Iran%2520Europe.svg": "987c80adb369922978982a9940e659e1",
"assets/assets/images/icon/banks/Futurebank.svg": "86b72f0b917d2132b9410441823188b6",
"assets/assets/images/icon/banks/Iran%2520Zamin.svg": "70e86454532ae18958f5c2b9625070e4",
"assets/assets/images/icon/banks/Saman.svg": "0437512c73ea5a5082d092a173a1fe3d",
"assets/assets/images/icon/banks/Post.svg": "2d13535c83659b38e93ad6336f16e4c0",
"assets/assets/images/icon/banks/Maskan.svg": "851e6506399c21926f2e1e8e800d69bc",
"assets/assets/images/icon/banks/Sina.svg": "52f8378795ee40b8e630d81e9bf0a604",
"assets/assets/images/icon/banks/Mehr%2520Iran.svg": "84259eb9b77a16814d64cd22b2372235",
"assets/assets/images/icon/banks/Resalat.svg": "b21574765039a49c131a4cd31d571339",
"assets/assets/images/icon/banks/Tosee%2520Taavon.svg": "6f6d63430b3b4279176aa4eb7f7a2b07",
"assets/assets/images/icon/banks/Ayandeh.svg": "ce63aa86383e8841c187ae023d46789d",
"assets/assets/images/icon/banks/Bank%2520Markazi.svg": "c870de6ff561384aaf3d2efce3225f85",
"assets/assets/images/icon/banks/Caspian.svg": "724b71325e0d88e2878b046cbe6b8b26",
"assets/assets/images/icon/banks/Shetab.svg": "f9e701c2e1a8bc66a40fe6416fd60a47",
"assets/assets/images/icon/banks/Noor.svg": "a986b6a4b5a279aa9fcc53b578943717",
"assets/assets/images/icon/banks/Blu%2520Bank.svg": "ce83789287586decee407ea3580bda28",
"assets/assets/images/icon/banks/Eghtesad%2520Novin.svg": "b69f2bcf72ecbd2970c60638f6302389",
"assets/assets/images/icon/banks/Standard%2520Chartered.svg": "866e0a5be7ab2e6347e60ef6970ed624",
"assets/assets/images/icon/banks/Saderat.svg": "cb753b873730c6d1a7d742ead19a22e3",
"assets/assets/images/icon/banks/Refah.svg": "a137f08bfe2e204690661d49540624a5",
"assets/assets/images/icon/banks/Iran%2520Venezuela.svg": "a2a1ad0d7fb787ee44a388c453e85c15",
"assets/assets/images/icon/banks/Melall.svg": "7acadb3604a4f56ccda42eade75c01fa",
"assets/assets/images/icon/banks/Taavon%2520Eslami.svg": "6ceb0a25e4ac504b2a59b2d3acb243e2",
"assets/assets/images/icon/banks/Parsian.svg": "f15577998a4b8aee306a88b2e0c8d131",
"assets/assets/images/icon/banks/Tosee.svg": "7fb80074f660563e4c903ef94dc45d31",
"assets/assets/images/icon/banks/Tejarat.svg": "346a5bc268018a1906c2656da11804e1",
"assets/assets/images/icon/banks/Sarmayeh.svg": "3ab605a5ac0fb9a0e7d726619b3f67b6",
"assets/assets/images/icon/banks/Mellat.svg": "71bfa0d346c4aaf49b2c4182d9150f98",
"assets/assets/images/icon/banks/Karafarin.svg": "87e7ebd0dac42ca27b3aee86f65a8593",
"assets/assets/images/icon/banks/Dey.svg": "3ec3cb344d323a6babe5b1b9423593f1",
"assets/assets/images/icon/banks/Gardeshgari.svg": "3c5bf1ff25ff0116df093d10e5d7ced1",
"assets/assets/images/error.svg": "828cd6d499c0473f592fe2e7b97f8d0b",
"assets/assets/images/logo.svg": "2b680c4d8401b4c1700f60fd24fb6686",
"assets/assets/images/logo-name.png": "367951e3a4cb53685f5306eb37349e49",
"assets/assets/langs/en.json": "636a5a00b84f86bcd11f6408867f49ce",
"assets/assets/langs/fa.json": "d0f4f04620ab87aef5ea072d321a6669",
"assets/assets/fonts/IRANSansXFaNum-Bold.ttf": "aed42c09da7fe0468268b4ee78001b7f",
"assets/assets/fonts/IRANSansXFaNum-Regular.ttf": "7c8c2f00c8d96ec4ab1da628790a1a67",
"assets/assets/fonts/IRANSansX-Bold.ttf": "feff6bfb142d414bb42a5a99a8a29dee",
"assets/assets/fonts/IRANSansMobile(FaNum).ttf": "7053ef9b87586e56bb37ca6c11eae47f",
"assets/assets/fonts/IRANSansX-Regular.ttf": "1a051026d6a45eba5ed3e4ea2fde017a",
"assets/assets/fonts/IRANSansXFaNum-Medium.ttf": "ff2da440d62aee697efabb9c6164c445",
"assets/assets/fonts/IRANSansX-Light.ttf": "11504978e9c775c861736c69ffd337a4",
"assets/assets/fonts/IRANSansX-Medium.ttf": "7719583b97f32041bcbba852d3cdf669",
"assets/assets/fonts/UbuntuSansMono-Regular.ttf": "a7d0e5d3fa88c1023ea8020e2dbdc9da",
"assets/assets/fonts/IRANSansMobile(FaNum)_Bold.ttf": "4bac6b68236f494a59b54c44a1ed529f",
"assets/assets/fonts/IRANSansXFaNum-Light.ttf": "0e79a3c81d1038f31e0384a163f0b599",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
