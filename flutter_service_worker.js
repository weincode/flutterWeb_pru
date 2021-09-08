'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
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
"index.html": "071e3b54d503b2cf74111f2a71098d80",
"/": "071e3b54d503b2cf74111f2a71098d80",
"main.dart.js": "9cf645bcd088c578c3341039a5dee771",
"manifest.json": "734c10d46de0593a321d5beee7867118",
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
