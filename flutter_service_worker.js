'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4e1374c547a2f6bc8642d50fb938e3d9",
".git/config": "bdd4857172094620b2509d7e4cc77044",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed77cd960bdfa94bf20b814c8f6665e2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0effbbf4dd4d832c1a4b9737c34e4d1",
".git/logs/refs/heads/main": "de5646d41768fadd6343bac1fc0fbf3e",
".git/logs/refs/remotes/origin/main": "ff9a7414429ba7795cbd4d47bcc3a626",
".git/objects/00/f06e61f406c3105c418031f413da648bc1609a": "a954bec051dd9041144c46f5ec50c955",
".git/objects/01/0e0b39cc5af22b492bd2c168b2516e6b2d790e": "a88ba1ea726becd0ebc0fa8090c0fcd9",
".git/objects/01/1b7ddd078ab0390836e47b0ccad8a7f73b6650": "1d6825801d9a402728b108d8ea6bdbbb",
".git/objects/02/34816a7faa7e905b82e74c6e3a19a957dd5e49": "5a946509fa907b597d881d0ee47d4f05",
".git/objects/02/8aedf2af1c733c720d3d6c6cde87a1783f97db": "5b24a01cf44757a50c3c327bb8661e59",
".git/objects/04/c941fb8182261e3742527a7da632ff7520faa6": "02c10cd8b640de5170274a1325514047",
".git/objects/05/73833c63114a03e5bf98e042891d6a9d0ea127": "6a6701622e4b9309002042d22324156c",
".git/objects/05/88b8a1dde27962669afb7a6d8b9dec633a71e5": "1acb4751a704956574ad65f44e7d5be9",
".git/objects/06/3dba64f3c484c2102a25068a38fb538616f851": "463bf43f8fac8efcb397aab001cf65e8",
".git/objects/09/8a845616c1bb38c13ba018ac79764951ad52ec": "521f50bb03a46ec14bf3d54ac9d6af61",
".git/objects/0b/57df424fc2b09aee91ce9c07e195acd6d522e2": "4c384a2bf7a5e3a3402a03c408bf9802",
".git/objects/0d/2f65c577ffcd7be254887b3d60d0f96dbb8343": "654b2e9867620f21ee77a2eccb57515b",
".git/objects/0e/b974a945dee0d4183705e66302d96eb6e8a199": "3288ac757ad8e8a80f08c9a31438f5aa",
".git/objects/10/0a9c130c3bc2a816951e76bff4b90f7067a3bc": "a8cb6589d571f40759dbf911aecbaf0b",
".git/objects/10/49cb5d72d92ecccab4582823b5cece50fd2b43": "97272fe8045b2c2a3059fb570e8acb6c",
".git/objects/10/c170e6c4925f3a7a18f6331718201f4afa4837": "55603e28309590ec66c0316c1448dd31",
".git/objects/10/d32aec5930a48b54d1ea8badc0224a9e249bf1": "658d85cac9391bf5476b04c6e3de30cb",
".git/objects/12/ded0b3a72fd88100152dea716fd6eb3d085ceb": "2b231c665557a40f592483b337fae36f",
".git/objects/15/787568b9639d310f69578b547d6c2a282f06bf": "4c4feaf1fa4eae90ab961fbe348f5875",
".git/objects/18/fe3101a536842d48d004977de49b042e531123": "0975126204946bd8f0026ceef54a1003",
".git/objects/19/fb03f21b0dfd29949e3b511ba384de60afb19f": "946ad2033236b497e5002d5d70f7eeac",
".git/objects/1a/4a86eb40df078a9dd91e5e616ccd91bbb30138": "1e11e7fdcc0c80d5282aaa2096bab454",
".git/objects/1c/453fcdf564e8a368cdc291e547eb10f0e26979": "f58d920013d78f54603b2f02ea30a32e",
".git/objects/1c/bc21af89115acfe9cf0ef19510088dc578f445": "86fb3941cc8114f8c4d43798947c7c42",
".git/objects/1c/d9bf6e273b1e84209a36cfd72204e2d0f0e5b9": "79ae2ee3d76f69738400d5622e5450ef",
".git/objects/1d/b655e710ed0bc57b0b97aabb10e370dc23f41d": "a68df9edd08664aa286d81e550995a7e",
".git/objects/1f/3fceb7d7c2321f86b3f323c205f93802efb56f": "6536ed93137d0f2102c8b4bd15c5ead9",
".git/objects/1f/a8f69151469bd619a9050aedeb2369f1a44b56": "a8f66abca31df742f0317a4c9d6c6690",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/a70ee540c948533cc33ca0a8158c44266ef3b3": "7694f088802f7c1bdf9baa4fffcae716",
".git/objects/21/15dff1d8d36d2759f5bbe0a87456fc1dbcb58b": "514418901d90de6a8fa0f00f8c24c929",
".git/objects/22/2b46a5f77dd819577c8c21d342eebef91fbc3c": "a949f1bf3c2a5a450a9568008eabf915",
".git/objects/25/a57d219c1eb996bbffaebeff0a49855b662389": "9da9845ce205f2da726b867512897b12",
".git/objects/26/8dd8bfe1c463adc713ec59c6e4dcd6a38469cd": "42ee919da247aae230eaf465088f4bbc",
".git/objects/28/1f0ac06bdb7334605118b6f286eebc112dacc0": "44d1a480c840ac07d1669f10d0ed1e59",
".git/objects/28/88de7bc06d9bc45dc51a76d49291a118fb2c72": "dcd369e6226c34147aae3202e81d5853",
".git/objects/29/dfde944e1ab80701d0e392c6b66b385f808d8d": "3fba7f854bc6090cbb61335285ddf509",
".git/objects/29/efd7bb9045627adf50907708bb09e7d15609f0": "cc80a3fe6a535222ba86cde04a7b002a",
".git/objects/2a/b85558a9cac57c886944f2698d7d8120452127": "dcbf57f8405c6cfa95f4bd62a8ab88ae",
".git/objects/2b/3f13fd05ec7ea48251eb04b5bb0ed616179bae": "ce2a02ef1bc4048fca36aea4e36faaf2",
".git/objects/2b/cc6316214930bb035bd82c606c13329b317b92": "a06841cf3a9cbfdc14cbee691bd7dca6",
".git/objects/2c/2156a6d957b19759894591230a2e5d1778350e": "287d368642480472d551ba8b4fe1f698",
".git/objects/2c/bf941525dfec208a2e825ffadfeace94aa3183": "f9f9f1a6e9f006682a28052ceba2cdaf",
".git/objects/2e/31d02424ed50b9e05c19b5d82500699a6edbb0": "4ddf0dd50f2135e4290de10e01036f89",
".git/objects/2f/c1d02ddac615b80430a08086891444bce2e2e6": "142d5361d8d05b4d9da03feca17322e4",
".git/objects/31/9f55493b6621f0143af5bf036d6ca059630d74": "28463d84d0f85aaa1066c642e2131549",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/efae0212129c38df705bf30d08325e6cab4f37": "1d7db8a6dbd4da0749604262e458f4a6",
".git/objects/34/222de32dbb8174c5461fee02fa1a58fece774a": "1230210ccd46716be5ec367f145aaaf3",
".git/objects/34/631e7c35855465c1d79530a2548a236a297aad": "5ee67cdca7fe92b804a84e44c6b639c1",
".git/objects/34/903b45b2b3930877e1947e7cbed86bb66e7310": "be3402f774206cfa079e186aa11c8f40",
".git/objects/34/e928e1edd45695c8572cda6d372db34330b565": "b657d45f062773f2a7f86c506eaa0565",
".git/objects/35/5cddcfd9e5dc29b9cf3ad187c5d6741174ef9a": "2ce44ccdb9b88fd3a6c7dbf0149f7186",
".git/objects/35/bffa4f8e3eb90ddfdfc4d74cf2a5f83053dd3c": "6ef09759e443078a3eb79d50af746e57",
".git/objects/36/4e1d3ecc337878e55957041c44d13cf9654c43": "43fe990adc26b868bb4727becce8deb6",
".git/objects/37/4594f5f8a5821bcf7427ad6ad2819cef0d8f6a": "a4676816a6b1a6d36a66b88539a4b5f8",
".git/objects/37/8076a31369298a93b0dd81800328f9e22bc1cf": "7f7250be93e00b4cc598f731aae2bb6a",
".git/objects/37/da0e1f490e157676667950e9c87c6ae8bf65a1": "7d637c40d9e1d4afacd43dfd3e80cc6b",
".git/objects/38/8be13cf6dea206a0f03259a74235820d16bf88": "c9e12436e92d23caa3179f1992e380e9",
".git/objects/38/e9d7cf4a91cf8398c9ecde1b7a3a224a206017": "280bb68cbbdf58258abede7cfdb5155f",
".git/objects/38/efff289ed0a4fcb3fede998251d7aece94b6a9": "7e3f7352b7872fb0bc3cef228207d3e1",
".git/objects/39/ae9730f006419801124b06081516270f9900fd": "b2db1e867ac0a524166fb5e354aefa53",
".git/objects/3a/60c3afee6f7996bf75eeb2e50bd9398e92df1e": "fc8cc96a44c0fef2599da6e8df4520be",
".git/objects/3a/99f7e2301a9253e736ed38984bd6bfc0daccea": "4459ff6dfa1b1bfcac068f8bfa9878c4",
".git/objects/3b/a4ad60111ac2184a2e21f74bc94f02f4214d51": "48a61c29dc8e46af9e2ed74ddd8c3f03",
".git/objects/3c/10fb04c5f9d92ca86b6b265f89551028979ab9": "bcc26e112be09f853b3199234183d0d3",
".git/objects/3c/5a5239dde70da0ec001ef62841e56e15bd3f7e": "b0ffd3abd17a2fe701e759796e3ea345",
".git/objects/3c/aec61d95a4a1ceeeecd4427d245289c9a37287": "5b7bdd6a77738925bf8c0a52b389e194",
".git/objects/3c/dfead62ff8e70726de356cc0590281c78d3ea6": "b092fe0ffbc226d995aa72216c90587d",
".git/objects/3d/de2e547c7a706e7d596f27c74810cf60d43940": "e36e8ba905aed761e96e7a1d5a6edd6b",
".git/objects/3e/30680e690eef1143cce693805fef6afe283228": "794199cf825549e70f31182b42d2e6c0",
".git/objects/45/af459cd91388a75a536deb9a4b01c9ae6a52bc": "d9817d3f585f6b11b7339623b8324486",
".git/objects/46/060a016eeac44f7e712d40442d8ec977ab331c": "67bb752559f403e5db541053924bce38",
".git/objects/48/53cb1cc1f818887717f169547612fe688e3983": "dd15925da3872790c526d76dce32ffce",
".git/objects/48/dc3e6d3e66302071833e11a595cf7769d56125": "3434f25d8b8c824181ba3734014e0e4b",
".git/objects/49/71a5da33509ec45e918cfb05f8aec172f578ab": "4290633be5f61d46ef7fd618b0c8219d",
".git/objects/49/a4ca2b1295c3719f55856f900786874763a470": "b1f6ac028e89c413dd32aae74e8d36d8",
".git/objects/4a/48ed122d77b2d2ab481bf34ae22a9f91bee2cb": "339412d8bb4dd1c1949708d420c62650",
".git/objects/4e/93d397e356b93cb8434fe5f8bf80109f621a17": "98218371b7b9bdfc71708235b57d0b45",
".git/objects/4e/fc56dbeae651a38512897d22a662c1dad928ce": "1981042dbf24608da2195eeaff6acf27",
".git/objects/4f/3c3ebd90035840b48cc0b4d6924c453400ec96": "0cb3174682422f8040aa3ab4443c0d78",
".git/objects/4f/c515affb25f45d10012b446730deeda897d1d0": "7bb57c76f02861707dcb52df105f9a2f",
".git/objects/50/5e9877a9a1019e0b44a8e30ce28a54bbc63b0c": "a99a7b01585e13ce0507c0ad1351c075",
".git/objects/54/4641cd7647069d3ee2ea03c2d7989c0b664b80": "0e99d032914f3d9900e8e893a90ed2bd",
".git/objects/55/0dbf39ba00a2bd64fec4c4786d273f20e5c1c2": "c72d516457f7023bafb6ad0594eb1af1",
".git/objects/56/3b8986b332fbcdf9b1674413a1b2a5e60a8cfc": "c9fae91e1ac38e24ae116da60eddb450",
".git/objects/56/fa99b21c4f5dc36b7d3a43e1e61797307814e2": "5336a9bbd5a54c015dbf4ab6bcb96473",
".git/objects/57/7653a2a12a06a632c99506fcee7e40498b076a": "6ccba93f50ec7031fdf3a784a7781851",
".git/objects/57/b6745388c0ce7b6612b2519b78eb9615a77129": "feeeaf9a768762549f71505a53350625",
".git/objects/57/e7161ff98702596495fd64298512328e24151e": "82c86716324a5b081f6e65c3c8f43708",
".git/objects/57/f9f44e310ee9af958843ceed29c46274e10d77": "92ae3cd73e76d9d4b3f372d4a37518fe",
".git/objects/58/c28302c2cd1d33ab06f01dade2e01ca69065af": "dc3595d8e76448da3ef081e7f5b807f0",
".git/objects/5a/15c211e87323e3d8c99d41d8961eae9e52122a": "81296da1b5981d5373f682ab4dc9da1b",
".git/objects/61/6b861a168b73ca36eac76d4aaf20e8dfd2711c": "74abf9f19ac87511c142405b1406d138",
".git/objects/61/c0ea3d90dfcacf028bbe312c29c1175ef1aa62": "f0bce2d4a08e7f39cfd1077d360fda7d",
".git/objects/61/c88d4c809d40f056ca6fabc2b3957b33f07850": "3871f79fcebc1c46a639aa3ce0ce9402",
".git/objects/66/60f80ff5df770c4bca2c56d7112d081855d8c9": "e88169e783cbdd40a0ac83297bf93d2e",
".git/objects/66/d0d0bca2530871583d0841e990b511f1c8cfb3": "3d3ee03fe3c0389107d5069a8c0291c7",
".git/objects/67/29a177b6ef8bf9e3b77a708efce739b59098d0": "adf52f478d9357e4f419ca8e043a4e8e",
".git/objects/67/5b85ee18f54b5686ac3dd755ca31662c57c243": "a9bc8178bf990c74ea04d198dfcc3ec5",
".git/objects/67/85ba3c72471f2600d489fdd587dfb3bda19c5a": "2baf1b6b19edd413ba18d789c1196a9e",
".git/objects/67/f66d8323fed3d23f45710e6559682d5bcfc04c": "2fbade4bd897b9e9b3953a8d5b134245",
".git/objects/68/1fb66079de158949ff6a9099da10701e64d2bf": "4c971ce269d908e298ad1c28214a7e08",
".git/objects/68/56f12efb5a8b37e2f3a7c5b1594a896db24e77": "617c6e5e88c6d78c865f8dfbcdb564a0",
".git/objects/6a/00fc03fcc6a3a6ec757b948d4ae783a77e0e91": "61014d138940a8fa9c2fc8efb2c08938",
".git/objects/6a/a07b4fb61267f425a0896911f4b6b41c7842dc": "5c5d6fa39435c65f6f304428083387a0",
".git/objects/6d/e19ea06beb2268336d09a24924918e58830dbb": "df01e4e855d19012f88adc1303ae4313",
".git/objects/6f/98bbb9c0979d216021da4ee8901dcb90321a4a": "b633ed448623ce3cfa24f5fb3e2fe313",
".git/objects/70/57cdb30bf2804bc9d720597a2a370e49197b37": "8be5515a4e996e456c1b256a85559c1f",
".git/objects/71/4fd67c9fc9e121b5f277aa9133382eb61d6699": "55e4d21a82e15806b3c78ae4b01804fc",
".git/objects/72/237520550cc9785c3536ca46cb61b83dcdf86e": "7e1f58d9bdc06442aaaf9dce6c17b8cd",
".git/objects/74/1ea5c4db64af9e118440a589fc4d607bb480ca": "4a9b79e3596195ea634f576d1b55db6b",
".git/objects/75/1a98536e14f04dcc0d4aa984dda777fa36103c": "4fc3355040ed9dbcee36d2b90a2d7078",
".git/objects/77/28890bb428d063a0cfb59c2856ba14be825b23": "509498400728a74ef8574efc025ddd6f",
".git/objects/78/3500e47adc0bd08df03544d8037c28fbbdd907": "c82f74764e02a1ba5038bd2f0248e9a7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e0c86423ec912111223f628af6f57d471b74e4": "150d9beedcb6975120761900ee873349",
".git/objects/7a/5176a6fd154159fd2c82b871ed9251931d3f04": "e1229097bd2f926ca72f38285485401b",
".git/objects/7a/6616a13a4e16980b3cde380f0a0e30e5fb13d6": "e71b867bb55b35af5a93b45c43035a5b",
".git/objects/7a/736fa79c69fe3181b6f40b65dc244009147d44": "d29a8133da6c8b398c37b39bec7b90c8",
".git/objects/7a/89b608629c25bf4ac28ab753455b4bb17ec8de": "dccace7b43b5690849adc002a189af99",
".git/objects/7b/335d9a4cba5b749f18c4aa7042f75861dd38c8": "ec608ef9073dae4035b81528a8aad81e",
".git/objects/7b/5d1f278cd020ec440618af2124be6ddfcbeadc": "e6feb1439659326c36cd52459501abdd",
".git/objects/7d/a2f89e2883ea084020ccf078f33fd86a5db8be": "4a74589484b5e62b8df9a75aec249523",
".git/objects/7e/6f0caf4a0006812c49ac688f67f8d426b7afb7": "e589b9c004b1e3aa692892cdad6862a0",
".git/objects/7e/98db62d489cbf4e8920da7e7b1e9d6e4f6682e": "2f358680ba594e2a202d01f84eaea4e5",
".git/objects/7e/ff152c3ee1b6ecdf3a9b16fbda6755a9a71679": "77619d6097c580f73b67264a825ebfac",
".git/objects/7f/3ca544cc86aaa91cfa2b1ebee66d819f14538e": "55a7936ac24375837946051ecfe858c0",
".git/objects/7f/a48cdf0d78c3a3380fceeb8082185e1fd6db76": "4b93e4859e24237a3c62aab4b10af97e",
".git/objects/7f/b4d9b0aea45ed0867dbdecc225b9aeea321459": "07559b9f830dd11c91047e22665b3931",
".git/objects/80/da178396483b0309c9e6acc4c8890024457ff6": "c227d608f5ee348a05a724cf85d711b0",
".git/objects/80/dae9695b7be551e12db959f49587c3a3191393": "f31a1a16c3a2ecb5b073b0605640cdc8",
".git/objects/80/e273613d91c51329cf5c93ffbfe5b0fed8de40": "801865bf8965f1959ad510987c141629",
".git/objects/81/529d8a6397cc80ce0be41b97429b76307ec60a": "78b739df9bbf1eb70a2e5a9095e630af",
".git/objects/82/404efbfe686a58ec77f1ef57f471febe7e6f5a": "8a32305f638094794d7f3b936f3698d9",
".git/objects/84/b7b568d74def8cabc41fbc5e335d11a4201b2a": "78d12bf7a73b104338bd763c36d528ac",
".git/objects/84/d7787a68d0c2ef432060bd60236a8ecb7dd8f5": "ba53977d5875d05161462263e486f7b0",
".git/objects/86/080c0b08f8aac5237b406d5c2337551d2034cd": "2ed6d88fa7a6e032e6d53f4fe30854e9",
".git/objects/86/0daaba4be3b940eafe978b81db7adde78a4c4a": "4eae5071df809accf7cb6dde462a0716",
".git/objects/86/367ef9ce64376268f5d9bbed556e3cb1409ea4": "9413adb565dfb8b712ceb023cce4d47b",
".git/objects/88/c09d1b15885132f590487276f3aefafc1f1dba": "a63eb7c6cc617ba55969f5172828977a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/48c2b9652a5542706c97648f9c455670dd9163": "c2e5c92c2fb85dd49a6c2a04bad80ced",
".git/objects/89/6278e15d90511aa882be0e53f14614c76fa33f": "a7d53fe4c17854ce5606bad3f81b9394",
".git/objects/8a/65eb443d5e70e10daa59f2a9bb1e360f809d62": "89ef73d70beea763b6f39af0b0033d6c",
".git/objects/8a/976d057190e0423c4abd7fe04b0b1621cf3fdf": "bcfee1191eeaa6f092ebfd545fe135b6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cb09f73fc6405ba14523d2257c07be2bc36e95": "25b4c1c45168620e4d10522600f4182b",
".git/objects/8c/2c5665076d434cab1d4181d6c7c2546ec561fe": "81d5c4611a441f78d550dc8b66e933b0",
".git/objects/8c/a3b555d21866e6910eb3524d928830660fc22f": "c5835a2917bed61065e56a98e3a4e9f2",
".git/objects/8c/e5b28f44f3421298fde84d0826d7ba130ac418": "8516e08bb66465dbbe178cf06a09932e",
".git/objects/8d/09adbc6792d66302be2759389932d2e08edbbd": "3829069d7dfb9a7d88ddb7a779d9c583",
".git/objects/8d/4a0e14038237af9410c404469058767e49faa1": "a0363686d617f654365ded63361dded8",
".git/objects/8e/257fa04a6b9a6d3dbcc2f6f27068ef3e0ec8ce": "e740996054dfd076a5af0840b1299f5b",
".git/objects/8e/2cfb133d08e6c76cf72d95a71bd83780ba2a28": "417c80c4e0307cd370dab8fe412f5eb3",
".git/objects/8f/5df5c2cf63ad9cc4cd8a0690005bb6fc1d400b": "778cb4752f6d8647cbe6b25fd2bbe8fc",
".git/objects/90/1803c7031b3d096e97d2fe215a2125d30c9571": "f4955aec7602e0125cf10a5cfcb19e58",
".git/objects/90/f40ae849193196af1ecfc04348bdd1433e1328": "f0e6d6a467aaa0bd75c76f53f740d559",
".git/objects/92/903daed11176f04ce2ef4a40c748b63f36ee4c": "cf9a994d12d5f3430c78e5a1f9aac1f9",
".git/objects/93/c052170937dfa4c6e1e3f98de2056596604669": "18405062aacbb155fb139308549e5198",
".git/objects/93/ead2a284761d19595ef242fd581fcf6d8282e8": "91e0be8fddad4d0c48692bbfada14b03",
".git/objects/96/c0a67f0bc8d3878676572c2123e9eb16b5d219": "49800ecdef579f0fa3bb4971699e0821",
".git/objects/97/963522a761d8192ec7468bd00781f4bef05ddc": "a54257b32dc81680e8ad29101d627f01",
".git/objects/98/b31b3d9dd98f830effbcfd262b6ca8dbcc0ace": "242f3c0965c8daa5b3ca00ecd4668906",
".git/objects/99/a8044c648e29e9cbbd8a8e675d948086d68a61": "02a976a5fc08f3ac616d7d167373498c",
".git/objects/99/ac46b06de63d9d20c7d87b453b060849969f4d": "50dd87d7dad18ddd0f7c2595eb6f2fe1",
".git/objects/99/db86aa0282e425450c86508d42da77a9f4102b": "d888af9259d18b160e9ceba04d0d6955",
".git/objects/9a/d4c01eeb2a5fd195f39d8e296c5610448ebe6d": "b1195c8751658100ec9596ba6a1d981b",
".git/objects/9b/6f4c95206639c2743f50e31c2d9c0155a0849f": "f50b03e08d7ceec6a9b2973e49f35bd9",
".git/objects/9c/a98832d345c4dbd6bd8a83dac112bb70fe38ad": "68d32f9f8869d286b6d4367cc138173e",
".git/objects/9c/e42737c075d3aef0fceec46ff9aca83d9047dd": "d4c93a0894123f3aef100966d2298fd9",
".git/objects/9d/68caa34419f837d096b981383d96c4d27befcf": "fef081375e4688387d92bd1fc514a4aa",
".git/objects/9d/b553878eabe57cb95df8ee44f53185d1023e0c": "36d22e4c1ab91f0c4fcb100fe728c6ba",
".git/objects/9d/d6f106d112a51cd0c5893e842a68e4daa21689": "bb9601b8689bbc2d3fa501f121468b19",
".git/objects/a0/e5245c892c7978eea20758021778acc3d2086a": "90f8cea7ab90ded97a29ecf019bb1bdd",
".git/objects/a0/ff00e0fcbbf656060f98ecf69d3fe68918f269": "89f3f2c99c0b7b5e0ac25001201108bd",
".git/objects/a1/09d4f5bd2987eb1a310f7a8bea48027865a104": "0d3513e075a1985c244b6152b0ceceed",
".git/objects/a1/179583eaf272b146a0d006c22d083c0c63e3b8": "c19be2c6647cb822c3cfa701b1ba1ce8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/4dfc334cf13f6f01bbcd633c118d0355dd1ab4": "f3be75771f57e3dc95bd94333dd35063",
".git/objects/a2/5580041c7f7a64223a81453d4c478a41ad1a6e": "ce61603d7c63b10c90e5b4ab3b4a7b0a",
".git/objects/a3/a14987022dae32d1a3c6560bacae224d4d8145": "7ca7692044c58ac93a4ad18994d67df8",
".git/objects/a3/b5f9b7719d3b2d20b6d54245b063b4194bea6a": "1d61d4109c117dee56dec1775f1a796d",
".git/objects/a5/ac82777ae18fdee334c7586f71df53c70000be": "e0f012b0093733a81e82df9b1addfe62",
".git/objects/a6/3e9858760c0ced9605af7431bae1128feadf77": "099d91bffce6cef75359ff2848ede5f5",
".git/objects/a7/9f102a15d5e75d1c0a7e2755dbf716a85c393b": "e024e5042e9bc525f3b5e68eff3d37d2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/012f2d8c8593e746eedaa95c54cb6a3f1a21c5": "c795b7c16e9d78df749d2ae5f8c60efc",
".git/objects/a9/bd83ac2b44d8c2682149eae2ec63686870e87d": "ca9a51618c007a33deb20da5cf58f4b5",
".git/objects/ab/42fbbce0784cdd85349dcfe829642de71ce2c7": "eb09e1c428f23def0b1c16eb55d9b783",
".git/objects/ab/be1f5e117859358bee2ab14480e03b04923d12": "51c8f2954e13766787f7760dc31e079f",
".git/objects/ab/ebe636ea1f00e3c461eacd40672c748fd95075": "c085226ea29f3556cc5b30d9643f85de",
".git/objects/ac/3719a6bcab15c729fbf5df112abeb17ddac8d3": "c6b46c4d170e14f33eb272e4838635e5",
".git/objects/ad/7f3a4a0c3bea41024dacbf6e6af13164864c38": "dcac2a96579bf902b574ad32c7b5869d",
".git/objects/af/9a2120151fe0712ecbe6264484ff627ec882fa": "f003ea3a43798e605e6283450990aa83",
".git/objects/b0/802849c7a573183b088c4cefd0ace9a9690bf5": "c8726a419e7308f7dbe8aec5b941d797",
".git/objects/b1/20737118a7b155869cd4017a31422995fa937e": "ff382b79549f263e71273be253a18523",
".git/objects/b1/6d5620bd28c64e743479b469184fe0384d0a74": "f55953d6c57381474067a56d176b94f6",
".git/objects/b2/f36cc8403499a0ad14ec10021305092f5dfad7": "8deeca78f7cf2c7dfecdd36d343e1d46",
".git/objects/b3/7b5dbd7387ba5f9570fc391fba16e7f598f7cf": "9a635f3e7b32825c2ea4ff8dc0ffac1d",
".git/objects/b3/f1bb1104100159d89ccb034cdec58c94bad6c2": "0d2e2281bdc15918d0614bac6536b072",
".git/objects/b4/80b2e45678cabf9ad7424d55ff2222b6af4a57": "e45f9199f33f6ab585f406af623c6bcf",
".git/objects/b5/767915ab2187c0d3c2a160ca7b5e8ae23ec389": "52cd579be3f2347502c1bd3fcebf8edf",
".git/objects/b6/11e6e183b6f10fa014a5891f28c5ca2bcb599a": "2bafe53edb75665cf6c27eafafbd5ddd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/9f5a6b0debf1d07ee921d78b577cc77698f0f7": "a893abc6bfab22e71cfab48f6dcf7a4c",
".git/objects/bc/ba7d7427443a0a2217100b337ad79d3ab54b53": "a281d28b6eb0fc0847c8bfaa8356bfdf",
".git/objects/bd/dff05f74f962ba926efd398ac531a0111a9192": "99110f7ed62cd22bc925430b21145f2d",
".git/objects/bd/e2d98d506fa2191587ff758f32f0210cb0f3bb": "4319c9d9ebf05826b4abe270d29e21c4",
".git/objects/be/132dce10d25365113690189b05c14d46ed1ea2": "20846c5283d01bde2d18198764b2af09",
".git/objects/bf/a9e6615f4cd36f387a24bd302562507ba3712f": "105a36a49732214ea7b275397a730b77",
".git/objects/c0/a3bf11bbb475351e36639f73780e111ecc1d21": "a5bb4e0d8ef692881ada61929700dbd8",
".git/objects/c2/344354240b44d3fcc31b943098fb06fcece87c": "5fdf90e45027499a7209287c0900a6d9",
".git/objects/c2/780cf7e81c72180ea1cd0581bfb4fcd0f0780c": "c11172e2dc09f4215bd3644807f9f196",
".git/objects/c4/cf481dbd0e6525f30f82165b0845832a179632": "b9151995bb45213c5ed7598548b8292a",
".git/objects/c7/025f2f27acc8a6053e7ec2e5090d5792323796": "8a391f67af9a0d4975a23f042436e27b",
".git/objects/c8/5db571c6f16c66e29a94abe5666c494df00fd0": "23050dc044002962e7254bba29f40a1a",
".git/objects/c9/d0090c57c3795d8ad365d1ceffefcd78a24baa": "256b9dcdc4fddf23d3bf0a47eec18d86",
".git/objects/ca/cd7aa82ec2d4910cdc7881545e3cf7e25c2a57": "1ec0da796705c5e00ec0db2b92a8d8b7",
".git/objects/cb/e4bf923a4a40f643a5ab7b6dcea41baaac7ede": "70852e6441c00ed5d3b8cb87fa4c5960",
".git/objects/cb/f5479de0048a5143a60897b19cadba0c690492": "e47e8f46c48cde157254856fe3c8ece4",
".git/objects/cd/1958e0b176013642a47ba91b4bd20656a5a4c7": "940706d7823a0f11233cc4210f5e4442",
".git/objects/cf/2bab363f65f731e68e0ed57ce8da5f4cfefaf7": "b261b8de2deebb3abd85ebcb2e76ae65",
".git/objects/cf/4f5afe22b0fcb7a1021998c9cb1d09aa64d1a1": "fbbe45042ab08f7c08006238ace58a06",
".git/objects/cf/acfbb17166f7bc42370428d0d56bd5f18ff0b1": "65fce604b3d90c7a3bcb5885aa7eee61",
".git/objects/d3/3e484a82db729837768d68817063b68439fd25": "29813167efc57018b3f39863441c9fb2",
".git/objects/d7/7b5ae43bb6ddf0e1646bb9b84fbb26d5cf9fb7": "d3dd2080851aa59dd0b79148709d7231",
".git/objects/d8/d9b61674c4b3c6a8d9a0280db5a1ef17008114": "ec8cf65240449f3a453d7e2db48e28c1",
".git/objects/da/4d273a8e3f48f0011528903012acf98b9993cf": "bd9d2af5b8dc4de60867f801b44d5243",
".git/objects/db/c65a57d12ffdd3ebec91f6589d1ab378b68985": "598c7f933dac51871f4d32cf5870824c",
".git/objects/dd/f89504a2a580775885ef9a1b9866515e099f99": "05dac48f9b0cc240df67396ee1f5d490",
".git/objects/de/80260a260f00e7be94883a94ec57bf5b3aa045": "37739f80e914ad4702e00ed764ac9b9c",
".git/objects/df/9373819d1d500d38ebb4425bddc02fd27b1312": "5aaf8adf33918c03a760d713b4f50d63",
".git/objects/e0/2ba01c73cb14e4f2ed6a538a4ea81a57bc16dd": "d4105a39a02fa8ac8f71b8f466715e24",
".git/objects/e0/731729e21f7b062c6edf6599f692288e8e5629": "c1d0fb7c9d91272ad4422ccdd4ed3285",
".git/objects/e0/f842a426d5cbc472af5af20d9f8cdbdbdc7cfd": "093f272d65be0d66f0c3fc928b21b72a",
".git/objects/e1/435daeda6568ad23af214017fc9f05b91c34e8": "51de45c623b935fe4323ec71403ff48b",
".git/objects/e1/c4482107e8fd74a7c481609d32ab5bcb08c578": "2b7fb68e34cb3e2a26a4bd2ef04c0626",
".git/objects/e1/d745a56c70e15481d5bddf712ab6edf0a7a783": "e768e63c95092af0476669fcc703b289",
".git/objects/e2/095dd1fb2f581597ff5e6e4eb40ffc88f6adf1": "2cfd1969d3c90818709a9e112db79a3a",
".git/objects/e2/18a9415b36bb15dc81ca95b72719333b803f7f": "7a62bcb418a65d61586f5738e730afcd",
".git/objects/e3/2723503ee80b8a5eb5e769e180371032bcd8fa": "07a5962a227e9a8b702386e56a8e8a05",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/433cb9a90610cbd904f86c53e30a091d9c2ad0": "b8a8fc63f542230378573f20e5f5590a",
".git/objects/e7/dc1d0678b73e76ba1dc29024b5f4ea982ed3dc": "035bd174a6687bb9657951a7e8c72b1e",
".git/objects/eb/dc8b68ed0999004444bc3e306d272938a3226a": "59dc9a0062a7829f6df396095a7a9312",
".git/objects/ec/405d619553023187e715d165753e6ec9aa8694": "baf19808eda2d2564a0ece1775502997",
".git/objects/ec/dfb738904fec2d7f9c951838631d17d7f44048": "ba082f5c39cf8a32b27f0d650b682a21",
".git/objects/ed/3bf2f4b643c4dc1afae78863ae6f111faa243b": "9a8b511775bbe43f5b069a0bed314a5d",
".git/objects/ed/72e34d5a94ceff0f7623dd6e2afd02764da2c4": "053658495563c6b9bf6e587a924ee576",
".git/objects/ed/cf0d1de8f13f7858155ec8ebbe6014f67c931f": "5ce8185d2d725e95bc286798a3324811",
".git/objects/ed/d34e22acd1fe853387045c43be32734cde93bc": "c059a01c2c76eb779af6be4e93383c25",
".git/objects/ee/98e3f7b5be07f11c26b22fce06b6c04ad17e72": "7f73030dea444228f15c1afdc7efac8f",
".git/objects/f0/075b2f6580bd51193a95dc084d89b2887c236c": "c02716b2aaa3945431e07d552702e474",
".git/objects/f1/325eb4e4c346d57e1e3ec2a7ce3bfc159b1b72": "30ded632531d97c85715f33bc6a80614",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f1/9253eee31e9f9de12701bb7e052cfc5410db38": "70e1a75b6ec2a792193030bc1a867a5c",
".git/objects/f2/21281b19e46945ba4802b15471e1ff8cc14b50": "da450a11b6cc5467c13812fbbeff720e",
".git/objects/f3/781505c37ad075e779e57639b2bd31800f22a4": "3e1a93c08cf43d69ef59d551354637e9",
".git/objects/f5/94a53efe4594810832323c3765e24b4b497530": "c593f01e13194daeb2e68fc092885a99",
".git/objects/f5/be1ec1bb62aed4699c2302a317541b21616ba2": "d16465d98bf41134abe9cb16c29c420d",
".git/objects/f6/9c105c1119506e0ac9894ceff6505c28692205": "84582336fda4a2534f366ce85736d90e",
".git/objects/f7/ade7e3fc44d533204934e79b27f5b968164043": "a753c50e0728bb0f2fd39fd3277d4518",
".git/objects/f8/6a410a995f3c823ff2e178ff83ef06fd6e6517": "230a997cd2f7ddea715760afb6870950",
".git/objects/f8/fea199bdcc01597ca3f5305716f3045b717878": "9e399f3821c5c5b7715566954c9f8fb7",
".git/objects/f9/17529d61af7bb1f0f44a89db2957894cc2b1aa": "e020cc2bd8f39c37eba25be2996a4a50",
".git/objects/f9/cddd568695a35a8faa5ad05f9f68b3598b4b39": "8c682668de93861e082ec2580b41eddc",
".git/objects/fb/3acb5b509002acde794e70442679d01142881a": "ea2bd03cc28e41c17801d3e309867b53",
".git/objects/fb/4b0deb55aacbfe8ae2fba5091c82435b7cab77": "89579b513b0d88b3f9135b2c146a53f1",
".git/objects/fb/d6f07f3a1e88bc820965b995741e7b6480a230": "452884a1be71d35c9b9d82f6de6ce5ab",
".git/objects/fc/e18e0ac2cc8402fe5790aa2cb2b6967c957d95": "9ee01a45abaf55fbe63fcc1c50043112",
".git/objects/fc/f2e17ac4414b241bfa72223f02bff17ca785cf": "0fd89284d1d5b92ae7eb7bf06a49c976",
".git/objects/fd/b36230d462b9563cc04692d965bc1f30ec95e1": "c814edd7a8051a9f80b10cdac10185b9",
".git/objects/fe/6b868e454737756e8c3641117aa8ca9bfeda84": "bf2eb41b005c36a19ac6d39651f19059",
".git/objects/fe/6efdeaffc8e984411ae58773fd69c3a73a7129": "e2bc6ec57101399d8029468fe245c6e4",
".git/objects/ff/0767c7c09530468fbf1700f28bdb2902422804": "0a1342b2ed19a0fcc9ba65a61feb016e",
".git/objects/ff/0cf0bacbee20f21b021ba3b739e42db28ef0f6": "46ffece8b34bf2895c59e346c0429c5c",
".git/objects/ff/66455f4c48d16929753a6cf33b5fcd8f21205b": "39a666f271d1c4fd7abaf22d7a3c5f32",
".git/objects/ff/dbd2e19168f3b3b5e41184ceb78909146cb29c": "3959099b9f165a40db43ffb4698704d7",
".git/objects/ff/fe094621cce6ab1b400df8084d22db3c03f818": "0c532d20ebc9d9cbfc3b49f9254a0266",
".git/refs/heads/main": "1d162ce8b234f201e6f0784e8fb1b7a1",
".git/refs/remotes/origin/main": "1d162ce8b234f201e6f0784e8fb1b7a1",
"assets/AssetManifest.json": "cb9daffa88a72facce96377163178921",
"assets/assets/images/example.jpg": "6b72e11c5da755e17e4e55acc0a164ae",
"assets/assets/images/preaprobado.jpg": "52b68cb43b407e487a521dc6975fc729",
"assets/assets/locale/en/auth.json": "6ecae86ecc4bbccf5daf3404131afc89",
"assets/assets/locale/en/balances.json": "62dfa6eef0d9164f16d5963449d496c6",
"assets/assets/locale/en/bills_and_recharges.json": "38be2bac3a5af8e9ba8c4cd73228c560",
"assets/assets/locale/en/bottom_navigation.json": "017eb6d6bb1018d938e3549ae2d2674f",
"assets/assets/locale/en/change_account_number.json": "94d019a05b36268380cc478706dab9e5",
"assets/assets/locale/en/change_email.json": "3c671b5eb7eebab64c6fcb4c6eb5b643",
"assets/assets/locale/en/civic_recharge.json": "cbe89031c32a9162fb58b3a3acc7459f",
"assets/assets/locale/en/contact_us.json": "e9ec65ecbf707b5864b987de0c164e0d",
"assets/assets/locale/en/credits.json": "8a0b1b7c4da0790dd90cf1b13976648a",
"assets/assets/locale/en/credit_check.json": "4d82098b5487f5dac459c1158d045ca3",
"assets/assets/locale/en/credit_check_payment.json": "dffc3a614009af0bd60e96ca5e52e368",
"assets/assets/locale/en/deposit_account_income_expenses.json": "ec9137f64bbd7dca2014136f1e0454c4",
"assets/assets/locale/en/emergency_contacts.json": "b05a7fcbec0526c8cf9e103011c53e97",
"assets/assets/locale/en/generate_qr.json": "9ec9617913b51b05dc9db879c2a5d5f9",
"assets/assets/locale/en/help.json": "6d7dff6c7abba7a092b8737449cad9ed",
"assets/assets/locale/en/home.json": "e11474cf24dd470401e4abc2af4e46b6",
"assets/assets/locale/en/invoice_payment.json": "cf2fa2b831d62eb03378b40b82a9bc54",
"assets/assets/locale/en/legal_documents.json": "9359e2de80050a5f966c79af820a8956",
"assets/assets/locale/en/menu_move_money.json": "1c94f5adf0b0178737bbdfac0c1fc9fd",
"assets/assets/locale/en/money_withdrawal.json": "86a2f0fa13081c0f1c1fdf6ea58a31b8",
"assets/assets/locale/en/movements.json": "ea8e409e4b10ad9e567a528c2d17104f",
"assets/assets/locale/en/password_change.json": "53189fd865f7b58c346ffae1932d4172",
"assets/assets/locale/en/personal_information.json": "04003d6cd19c9e13233863fdae2f9ca4",
"assets/assets/locale/en/qr_reading.json": "6443b9265ac208538e49ee224cff9b58",
"assets/assets/locale/en/recharge_history.json": "95224eb0b5458d35e09c1737f2678100",
"assets/assets/locale/en/send_gift.json": "f0d0312552d2f638773bbd77c19f6d06",
"assets/assets/locale/en/send_money.json": "cc1a90d76c716372950d241526d47cd5",
"assets/assets/locale/en/session_management.json": "7803a34d1cefe747a592d9e6c430ff04",
"assets/assets/locale/en/splash.json": "4337a36f35f2e6c2efda484710bcc38d",
"assets/assets/locale/en/terms_and_conditions.json": "22dd7da330d0551ba54a31840aa4dd09",
"assets/assets/locale/en/user_settings.json": "02fdcddced36d807226774c828249bbb",
"assets/assets/locale/en/vinculate.json": "f268a9c8b233feccb86fdc99d2ec71bc",
"assets/assets/locale/en/vinculate_normal.json": "2759ee39eceab20341b0f48ab44cb73d",
"assets/assets/locale/en/vinculate_pyme.json": "662c6ac009e4a6daa7a1263451bf1563",
"assets/assets/locale/en/visit_us.json": "f706f9aaad2d478eb61523fff35ee5ee",
"assets/assets/locale/es/auth.json": "12de76b7e7adc29d443932373fcfd5e2",
"assets/assets/locale/es/balances.json": "37593ba5a03c32542ec75d44576877cc",
"assets/assets/locale/es/bills_and_recharges.json": "38be2bac3a5af8e9ba8c4cd73228c560",
"assets/assets/locale/es/bottom_navigation.json": "017eb6d6bb1018d938e3549ae2d2674f",
"assets/assets/locale/es/change_account_number.json": "9ef6a87a04a1fcb0ff2f47ba429fc7e8",
"assets/assets/locale/es/change_email.json": "3c671b5eb7eebab64c6fcb4c6eb5b643",
"assets/assets/locale/es/civic_recharge.json": "48136102f6abe4678a771c204a2c9f8a",
"assets/assets/locale/es/contact_us.json": "e9ec65ecbf707b5864b987de0c164e0d",
"assets/assets/locale/es/credits.json": "e3cf831a64e9d08d7c4dd7c996ad46d2",
"assets/assets/locale/es/credit_check.json": "1c1cd57094c4e54d24fd7b6c2d46a6dd",
"assets/assets/locale/es/credit_check_payment.json": "2b6eb06475971e06c105c00ff00f0b45",
"assets/assets/locale/es/deposit_account_income_expenses.json": "ec9137f64bbd7dca2014136f1e0454c4",
"assets/assets/locale/es/emergency_contacts.json": "b05a7fcbec0526c8cf9e103011c53e97",
"assets/assets/locale/es/generate_qr.json": "9ec9617913b51b05dc9db879c2a5d5f9",
"assets/assets/locale/es/help.json": "6d7dff6c7abba7a092b8737449cad9ed",
"assets/assets/locale/es/home.json": "487aa9f638ab0657d5a6bae42c9a6f48",
"assets/assets/locale/es/invoice_payment.json": "fdd063c3e380a696130507aef70051c3",
"assets/assets/locale/es/legal_documents.json": "b8999b40794c49976d6911a9fd568430",
"assets/assets/locale/es/menu_move_money.json": "1c94f5adf0b0178737bbdfac0c1fc9fd",
"assets/assets/locale/es/money_withdrawal.json": "d6bb20149c1b998dad703853c573c88d",
"assets/assets/locale/es/movements.json": "ea8e409e4b10ad9e567a528c2d17104f",
"assets/assets/locale/es/password_change.json": "53189fd865f7b58c346ffae1932d4172",
"assets/assets/locale/es/personal_information.json": "708d5c3e283c5ebd54fb687ac7adaff0",
"assets/assets/locale/es/qr_reading.json": "ad8acd990686ca435555fd91e6d00619",
"assets/assets/locale/es/recharge_history.json": "95224eb0b5458d35e09c1737f2678100",
"assets/assets/locale/es/send_gift.json": "36a8aaf8af15511c62f8a70b47b1db78",
"assets/assets/locale/es/send_money.json": "b5e284d4d8888c73426a0809ca865fad",
"assets/assets/locale/es/session_management.json": "7803a34d1cefe747a592d9e6c430ff04",
"assets/assets/locale/es/splash.json": "e99fd09c96e51fc10a5024e388c9cc11",
"assets/assets/locale/es/terms_and_conditions.json": "22dd7da330d0551ba54a31840aa4dd09",
"assets/assets/locale/es/user_settings.json": "4d8008a4de3b7bbdc001331505131130",
"assets/assets/locale/es/vinculate.json": "f268a9c8b233feccb86fdc99d2ec71bc",
"assets/assets/locale/es/vinculate_normal.json": "5b313cd9b69418feb9797f70b56d30b1",
"assets/assets/locale/es/vinculate_pyme.json": "3e86d3caf5155364a2c3aef115b9b753",
"assets/assets/locale/es/visit_us.json": "f706f9aaad2d478eb61523fff35ee5ee",
"assets/assets/monitoring/monitoring.json": "cbad6263b39e4a0411835d09ba90e2a4",
"assets/FontManifest.json": "02c4df28473abca8522dc915bf9943ed",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2efd78892ddd92cdcf6d77972869dfb7",
"assets/packages/bc_analytics_management/assets/analytics.json": "3ef77d7baddae85794dd389c524f73a2",
"assets/packages/bds_mobile/assets/accessibility/en/label.json": "3ced9ff090529cc72460f7837c42d6a1",
"assets/packages/bds_mobile/assets/accessibility/es/label.json": "cec67916fa9a235779140ad3493b79f8",
"assets/packages/bds_mobile/assets/accessibility/label.json": "5f97c10b8706d1859f7bfaec441ac230",
"assets/packages/bds_mobile/assets/example.png": "bb8cd173c313824b7a3ec6ff80587461",
"assets/packages/bds_mobile/assets/icons/functional/bancolombia-iconos-funcionales.ttf": "15f1e17078f0cc9c2d6e11a6f697e6e2",
"assets/packages/bds_mobile/assets/icons/ilustration/aceptar_terminos.svg": "16e3ccc087bb3ebf3c019465fdb46aea",
"assets/packages/bds_mobile/assets/icons/ilustration/activacion_billetera_1.svg": "5b7e377f74a434061b66f742a8b3c1c7",
"assets/packages/bds_mobile/assets/icons/ilustration/activacion_billetera_2.svg": "e1ddd87e9a99cb16e2d110736e566623",
"assets/packages/bds_mobile/assets/icons/ilustration/activacion_face_id.svg": "06225e86bfc349d9fbaf2d2d0faa7472",
"assets/packages/bds_mobile/assets/icons/ilustration/activacion_touch_id.svg": "b4ec0e543869c3b870d64bf73b848ee0",
"assets/packages/bds_mobile/assets/icons/ilustration/activacion_touch_id_1.svg": "fbb79e8c25eb07b108cadf78594fb785",
"assets/packages/bds_mobile/assets/icons/ilustration/activacion_touch_id_2.svg": "7c113d1e930cc2965d779328d4acc412",
"assets/packages/bds_mobile/assets/icons/ilustration/ahorro_carro.svg": "fa1fbb3f0ce205ba30d051da4c8c0a89",
"assets/packages/bds_mobile/assets/icons/ilustration/amor.svg": "1b610492e5bed75f26b8d757bfc41175",
"assets/packages/bds_mobile/assets/icons/ilustration/app_proceso.svg": "1a7b8558e1c4f7ab7297289b6a366b39",
"assets/packages/bds_mobile/assets/icons/ilustration/app_proceso_2.svg": "a9d9868efc754c1998423de9c39a58a4",
"assets/packages/bds_mobile/assets/icons/ilustration/billetera.svg": "d8006b237bd1571e42783900176140fe",
"assets/packages/bds_mobile/assets/icons/ilustration/billetera_exitosa.svg": "09ea43fb27314c66a6a55ed94fa5df2f",
"assets/packages/bds_mobile/assets/icons/ilustration/bloqueos.svg": "9825faa85b9afd4dcca022b3f57cc625",
"assets/packages/bds_mobile/assets/icons/ilustration/buscar-empresa.svg": "c6cca7ed5ac12069a6158b43cdc1c6cb",
"assets/packages/bds_mobile/assets/icons/ilustration/clave_dinamica_identificador.svg": "2deb7121f625ca7a1228b586baed31df",
"assets/packages/bds_mobile/assets/icons/ilustration/codigo-QR.svg": "7e7e7e4f40d666c1703e4fae8b8e62f5",
"assets/packages/bds_mobile/assets/icons/ilustration/codigo_qr.svg": "7e7e7e4f40d666c1703e4fae8b8e62f5",
"assets/packages/bds_mobile/assets/icons/ilustration/configura_face_id.svg": "4929d22acb42a24c61648644e487fe5b",
"assets/packages/bds_mobile/assets/icons/ilustration/configura_face_id_1.svg": "2cbbcb8ca3fd4fcd27378303a5dd24db",
"assets/packages/bds_mobile/assets/icons/ilustration/configura_face_id_2.svg": "89052c42e59fee44a789364bda3e25f9",
"assets/packages/bds_mobile/assets/icons/ilustration/configura_touch_id.svg": "07837ba216f5449a20348983ac432ad2",
"assets/packages/bds_mobile/assets/icons/ilustration/confi_biometria_huella.svg": "4504896edd9df6a90bdf46daa6efcef7",
"assets/packages/bds_mobile/assets/icons/ilustration/contrasena-mensaje.svg": "6a6c2f163d7e09100f9407df1b62f39d",
"assets/packages/bds_mobile/assets/icons/ilustration/crecimiento.svg": "a9f44b6471a10f0d4e74eca6a7bad648",
"assets/packages/bds_mobile/assets/icons/ilustration/credito-preaprobado-online.svg": "7cf506c19db2cb0f6dd35be1f6b0bffa",
"assets/packages/bds_mobile/assets/icons/ilustration/cumplea%25C3%25B1os.svg": "aae068d3427b0677423427fb9d014d44",
"assets/packages/bds_mobile/assets/icons/ilustration/enviar_recibir_QR.svg": "cea446fd4a75add5ee9bc4c91eb08fe1",
"assets/packages/bds_mobile/assets/icons/ilustration/face_id_no_encontrada.svg": "95e999d6bfb03d790a3c98af1c30e026",
"assets/packages/bds_mobile/assets/icons/ilustration/familia_1.svg": "a733fb20957b661ff0d8a5e854119b75",
"assets/packages/bds_mobile/assets/icons/ilustration/gestionar_clave_dinamica.svg": "806d5c3c0ba9cff3dc2f616e6d20e4da",
"assets/packages/bds_mobile/assets/icons/ilustration/ilustracion_app_1.svg": "4dd403081a1b1eb440cf97816e8e6cf0",
"assets/packages/bds_mobile/assets/icons/ilustration/ilustracion_app_2.svg": "597e9c4828dc6f7cf2bed08858b75489",
"assets/packages/bds_mobile/assets/icons/ilustration/ilustracion_generica_bc.svg": "7997e087997ff76a6a2ad93f5add2ade",
"assets/packages/bds_mobile/assets/icons/ilustration/inscribir_factura.svg": "cf452c13dd6088723076911dbd40e3dc",
"assets/packages/bds_mobile/assets/icons/ilustration/inscribir_factura_2.svg": "927e4fd8d7f845c3bf1ab2debc409ad7",
"assets/packages/bds_mobile/assets/icons/ilustration/inscribir_factura_3.svg": "0b901e5d05740b7fbc05554368198fba",
"assets/packages/bds_mobile/assets/icons/ilustration/inscribir_productos.svg": "892e6edbb924f8b52724d92054e02020",
"assets/packages/bds_mobile/assets/icons/ilustration/inscripcion_clave_dinamica.svg": "d805f49574f7b9dcf8432db26ca8a8ee",
"assets/packages/bds_mobile/assets/icons/ilustration/inscripcion_clave_dinamica_2.svg": "57410b72dbbca588c79ad64678bc15d4",
"assets/packages/bds_mobile/assets/icons/ilustration/inscripcion_clave_dinamica_3.svg": "7fb0fc7781684669c8b4744db3ba73df",
"assets/packages/bds_mobile/assets/icons/ilustration/invitacion_clave_dinamica_softoken.svg": "8d3563c991dd5f14a9c7757ca82067e1",
"assets/packages/bds_mobile/assets/icons/ilustration/leer_QR.svg": "2d785f3e64e184db468caf04dc47d58e",
"assets/packages/bds_mobile/assets/icons/ilustration/matrimonio.svg": "6682abe885a63baf397f71947f2e2ef7",
"assets/packages/bds_mobile/assets/icons/ilustration/navidad.svg": "e5fcb2e65b4de5359d3da3e2556e5f4a",
"assets/packages/bds_mobile/assets/icons/ilustration/no_eres_cliente.svg": "c1abe9060e0eeb8d9277db8b4b270d54",
"assets/packages/bds_mobile/assets/icons/ilustration/parati.svg": "e81e269864bdd538484dc69010d0e154",
"assets/packages/bds_mobile/assets/icons/ilustration/permiso_billetera.svg": "6d73019542458848f16f75b15ee4de43",
"assets/packages/bds_mobile/assets/icons/ilustration/permiso_camara.svg": "e85c965f4574a8c5c7e31e41033cd2b4",
"assets/packages/bds_mobile/assets/icons/ilustration/personaliza_regalo.svg": "559b1fce1ebeb0eedfd293ede0d87bf4",
"assets/packages/bds_mobile/assets/icons/ilustration/primera%2520comunion.svg": "3876d130afde35aa688141a192fee340",
"assets/packages/bds_mobile/assets/icons/ilustration/proceso_error.svg": "ed80493e234bc19534d73dea4a8053ee",
"assets/packages/bds_mobile/assets/icons/ilustration/proceso_exitoso.svg": "5ba76441a5211a7e062f85503da2e01f",
"assets/packages/bds_mobile/assets/icons/ilustration/puntos_colombia.svg": "99263da4ad46503b5beca5ad409d5019",
"assets/packages/bds_mobile/assets/icons/ilustration/regalo.svg": "4556d9cdbabfb42d1cb323b30e35538a",
"assets/packages/bds_mobile/assets/icons/ilustration/solicitar_cuentas.svg": "eedc35bcb90be4110832a7484f740470",
"assets/packages/bds_mobile/assets/icons/ilustration/solicitar_tarjetas.svg": "fcf67873d9b26db567138b29c18e092e",
"assets/packages/bds_mobile/assets/icons/ilustration/sucursal.svg": "ce68c7eec4a016eee33f829d3e3c8ddc",
"assets/packages/bds_mobile/assets/icons/ilustration/sv_proceso.svg": "520041b6b4456223ca2c334caf5c704d",
"assets/packages/bds_mobile/assets/icons/ilustration/tarjetas_1.svg": "6757c384c61f52150f185c5d55900e99",
"assets/packages/bds_mobile/assets/icons/ilustration/tarjetas_2.svg": "cddd0a76818789a7cf842f2689f5a48f",
"assets/packages/bds_mobile/assets/icons/ilustration/te%2520doy%2520mi%2520mano.svg": "0ed87eb6c3eed529fb5894882230b041",
"assets/packages/bds_mobile/assets/icons/ilustration/ubicacion_movilidad.svg": "147cb3d55171b4eceb5f9546ecae96b1",
"assets/packages/bds_mobile/assets/icons/ilustration/uso_efectivo.svg": "e6c6ced48ff894ebba189cb2bd9e251b",
"assets/packages/bds_mobile/assets/icons/ilustration/withdraw-cash-atm.svg": "375a44e5a5cc353703c4af39009fb7a9",
"assets/packages/bds_mobile/assets/icons/pictogramas/affinity.svg": "d766e7cc4b89440a291c73bc1c495a0d",
"assets/packages/bds_mobile/assets/icons/pictogramas/apartaestudio.svg": "0b788bdccd694c51e478eaa95e79ea8e",
"assets/packages/bds_mobile/assets/icons/pictogramas/apartamento.svg": "98fa3b13a780042872e8dc34de60d172",
"assets/packages/bds_mobile/assets/icons/pictogramas/app-update.svg": "d82b2c7ca6d58b9ed1c4e74a6f282feb",
"assets/packages/bds_mobile/assets/icons/pictogramas/badge.svg": "a8e245826bc8989b62b978a19d5979a7",
"assets/packages/bds_mobile/assets/icons/pictogramas/bloqueos.svg": "9f929eed0869150dc7313aa319b9477b",
"assets/packages/bds_mobile/assets/icons/pictogramas/casa.svg": "957da6a95c13760ebc7b7725f9380cfd",
"assets/packages/bds_mobile/assets/icons/pictogramas/error.svg": "7388f3cd57a5ba13457b32f3429daace",
"assets/packages/bds_mobile/assets/icons/pictogramas/hogar.svg": "697d8a9b3573d8815b642df1614745fc",
"assets/packages/bds_mobile/assets/icons/pictogramas/huella.svg": "208c9cc0e9e1a51f8e542cf797b2f891",
"assets/packages/bds_mobile/assets/icons/pictogramas/ico-hand-five.svg": "7d715378a04f71202d462ae53c8259f9",
"assets/packages/bds_mobile/assets/icons/pictogramas/idea.svg": "cc5629db839ba68b65aeb261e0887034",
"assets/packages/bds_mobile/assets/icons/pictogramas/idioma.svg": "88b859eb95ef2c05bc61a3546890860f",
"assets/packages/bds_mobile/assets/icons/pictogramas/location.svg": "b2a788116302ab751e67abd33768df35",
"assets/packages/bds_mobile/assets/icons/pictogramas/mano_4.svg": "d5ff6de7e6496530daad198a48945098",
"assets/packages/bds_mobile/assets/icons/pictogramas/mano_5.svg": "571e75bde26ac286f100261dac7bbcd5",
"assets/packages/bds_mobile/assets/icons/pictogramas/ok.svg": "e6c5cfa258e26e143badcb6c6d929e14",
"assets/packages/bds_mobile/assets/icons/pictogramas/plant.svg": "430bb6415027ec90b5065403b6f52277",
"assets/packages/bds_mobile/assets/icons/pictogramas/plus.svg": "495a0f8e78a7634b14c0da21cdcbbfad",
"assets/packages/bds_mobile/assets/icons/pictogramas/rocket.svg": "900d52e16b0126e0a67b2ef70267056c",
"assets/packages/bds_mobile/assets/icons/pictogramas/search.svg": "f0fa07af553e53ef94b185a01e0790a7",
"assets/packages/bds_mobile/assets/icons/pictogramas/shield-money.svg": "fd9698fc4a8790b00ac912e4e0724a61",
"assets/packages/bds_mobile/assets/icons/pictogramas/shield-user.svg": "86f846f457fc3a7de0b9c36701d62a9a",
"assets/packages/bds_mobile/assets/icons/pictogramas/stone.svg": "cc27a8d2ec3c2e11334cac827b637562",
"assets/packages/bds_mobile/assets/icons/pictogramas/time.svg": "fa741d9c3b9c6a5575e8d53296cc4a72",
"assets/packages/bds_mobile/assets/icons/pictogramas/usuario.svg": "486e1ba52177780f6b0cf3c56179ac36",
"assets/packages/bds_mobile/assets/icons/trazo/01.json": "49b99c09daa827ef93513aace79047dd",
"assets/packages/bds_mobile/assets/icons/trazo/01.svg": "92270ed5ba6eb4ecced054522ffe0326",
"assets/packages/bds_mobile/assets/icons/trazo/02.json": "f26b21d27f2f930cce31cb0f08ab077c",
"assets/packages/bds_mobile/assets/icons/trazo/02.svg": "ff4f74bfccc794a471ac29fff59fa8dc",
"assets/packages/bds_mobile/assets/icons/trazo/03.json": "62cb5f8e408cda01a82c5811b7f174a4",
"assets/packages/bds_mobile/assets/icons/trazo/03.svg": "ad17f5ef356670741b152f93ed9c1ae8",
"assets/packages/bds_mobile/assets/icons/trazo/04.json": "e33f0dbf455dcf4a3ef4e98ee48e9e21",
"assets/packages/bds_mobile/assets/icons/trazo/04.svg": "dad543073568648557a918b484049f2d",
"assets/packages/bds_mobile/assets/icons/trazo/04_animate.json": "1fa341f3226a4d51a83b5072aa2644d1",
"assets/packages/bds_mobile/assets/icons/trazo/05.json": "788201afdc0766a8406922e0a9a0f50a",
"assets/packages/bds_mobile/assets/icons/trazo/05.svg": "3d40ee484292463911a415a22efbe8d2",
"assets/packages/bds_mobile/assets/icons/trazo/06.json": "f766ac3495aff4e48fe6960dcecdfd39",
"assets/packages/bds_mobile/assets/icons/trazo/06.svg": "2adcc2c10e69215ca57bf7517ad4fe6e",
"assets/packages/bds_mobile/assets/icons/trazo/06_animate.json": "dcc4ab2adf8dbd0481215f63a1f9011d",
"assets/packages/bds_mobile/assets/icons/trazo/07.json": "378fbce21d4c4957c79a46450e56707f",
"assets/packages/bds_mobile/assets/icons/trazo/07.svg": "8f2dcf5fa83c9d937bb047c9491677cc",
"assets/packages/bds_mobile/assets/icons/trazo/08.json": "6f716fcb7501b64781068800148d2a0d",
"assets/packages/bds_mobile/assets/icons/trazo/08.svg": "accf145d80bb206c8082fc7b3d178d90",
"assets/packages/bds_mobile/assets/icons/trazo/09.json": "a6c03d4b63bdc17124066a09084976b9",
"assets/packages/bds_mobile/assets/icons/trazo/09.svg": "c44e604523abcd78e3556847e12ea56b",
"assets/packages/bds_mobile/assets/icons/trazo/10.json": "b7f0b127195dc372fd135a68d08ef74e",
"assets/packages/bds_mobile/assets/icons/trazo/10.svg": "31abe564d00e6be7aae6db17fb37cdc0",
"assets/packages/bds_mobile/assets/icons/trazo/11.json": "5a37a13865872629e149a712b2d7ef43",
"assets/packages/bds_mobile/assets/icons/trazo/11.svg": "e5a8d617c99ee50e36f858c15b581c6b",
"assets/packages/bds_mobile/assets/icons/trazo/trazo_splash.json": "94ac74b03a4b3030e21c13cd7022015e",
"assets/packages/bds_mobile/lib/tokens/fonts/CIB_Font_Serif/CIBFontSans-Bold.ttf": "36c78a66f91882379f8c5a15fec45b19",
"assets/packages/bds_mobile/lib/tokens/fonts/CIB_Font_Serif/CIBFontSans-Light.ttf": "69096387df83ff65381f8ee25006b0aa",
"assets/packages/bds_mobile/lib/tokens/fonts/CIB_Font_Serif/CIBFontSerif-Bold.ttf": "9fa266c98170e43e03f1c942d3c1e39f",
"assets/packages/bds_mobile/lib/tokens/fonts/Open_Sans/OpenSans-Regular.ttf": "d7d5d4588a9f50c99264bc12e4892a7c",
"assets/packages/bds_mobile/lib/tokens/fonts/Open_Sans/OpenSans-SemiBold.ttf": "e1c83f9474e0cc1d84a13c6d1ddf3ca5",
"assets/packages/civic_recharge/assets/images/civica.png": "dbf6fafcd91dd8df239af779e59b2e3f",
"assets/packages/core/assets/locale/en/bottom_navigation.json": "961b6d57f730241376f80c7d408d94db",
"assets/packages/core/assets/locale/en/general.json": "3fce0ad3586bbec9414538babdf9433d",
"assets/packages/core/assets/locale/es/bottom_navigation.json": "961b6d57f730241376f80c7d408d94db",
"assets/packages/core/assets/locale/es/general.json": "3fce0ad3586bbec9414538babdf9433d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/emergency_contacts/assets/locale/en/trusted_contacts.json": "6dd20118699a019c47ad8c956261240f",
"assets/packages/emergency_contacts/assets/locale/es/trusted_contacts.json": "6dd20118699a019c47ad8c956261240f",
"assets/packages/generate_qr/assets/locale/en/generate_qr.json": "01aeb213c350f45d09c822920fb448f4",
"assets/packages/generate_qr/assets/locale/es/generate_qr.json": "01aeb213c350f45d09c822920fb448f4",
"assets/packages/help/assets/locale/en/help.json": "2339d5f6e75ba17a601eb1969b95032f",
"assets/packages/help/assets/locale/es/help.json": "2339d5f6e75ba17a601eb1969b95032f",
"assets/packages/recharge_history/assets/locale/en/recharge_history.json": "9d093fd285f92a53dcdcd8e78303bcb9",
"assets/packages/recharge_history/assets/locale/es/recharge_history.json": "9d093fd285f92a53dcdcd8e78303bcb9",
"assets/packages/strong_authentication/assets/locale/es/dynamic_key_reg.json": "1cee833b2bcd98c3f37c851dd391b63c",
"assets/packages/strong_authentication/assets/locale/es/strong_auth.json": "3fa8a4614abf05fd92c2ec70568c8230",
"assets/packages/vinculate/assets/locale/en/vinculate.json": "da15233e7413280900b317ed7137207c",
"assets/packages/vinculate/assets/locale/es/vinculate.json": "0d182ad53dce5678a009ff9ebf35e270",
"assets/packages/visit_us/assets/images/black.png": "7028ab9791915dc7cfd27b631aff0aa1",
"assets/packages/visit_us/assets/images/yellow.png": "ee76eb0bca77917629c89b470880bc3a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4997129c42e035b27b1d21fa435d4ffa",
"/": "4997129c42e035b27b1d21fa435d4ffa",
"main.dart.js": "9cf645bcd088c578c3341039a5dee771",
"manifest.json": "734c10d46de0593a321d5beee7867118",
"README.md": "f8e513fb1a8da259b2c0e423b8ccf52e",
"version.json": "902b8717f28963634c1a7e777a2d506d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
